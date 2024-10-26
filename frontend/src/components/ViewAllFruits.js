import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const ViewAllFruits = () => {
  const [fruits, setFruits] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get('http://localhost:5000/product/');
        const data = response.data.filter(product => product.category_type === 'fruits');
        setFruits(data);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    };

    fetchFruits();
  }, []);

  const fruitDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/delete/${id}`);
      setFruits(fruits.filter(item => item.id !== id));
      alert('Successfully deleted');
      window.location.reload();
    } catch (error) {
      alert('Error deleting data', error);
      console.log(error);
    }
  };

  // PDF generation function
  const generatePDF = () => (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.header}>List of Fruits</Text>
        {fruits && fruits.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>Name: {item.product_name}</Text>
            <Text>Available Quantity: {item.available_quantity} Kg</Text>
            <Text>Unit Price: Rs. {item.unit_price} per Kg</Text>
          </View>
        ))}
      </Page>
    </Document>
  );

  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      textDecoration: 'underline',
    },
    item: {
      marginBottom: 10,
      padding: 20,
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: 10,
      background: '#fff',
    },
    searchContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    addButton: {
      padding: '12px 24px',
      borderRadius: '5px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transitionDuration: '0.4s',
      textDecoration: 'none',
    },
    downloadButton: {
      padding: '12px 24px',
      borderRadius: '5px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      transitionDuration: '0.4s',
      textDecoration: 'none',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f2f2f2',
    },
    tableCell: {
      border: '1px solid #ddd',
      padding: '12px',
      textAlign: 'left',
    },
    tableCellCenter: {
      textAlign: 'center',
    },
    actionButtons: {
      textAlign: 'center',
      width: '180px', // Adjust the width here
    },
    editButton: {
      marginRight: '5px',
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search Here"
          className="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to='/addProduct' style={styles.addButton}>+ Add New Fruit</Link>
        <PDFDownloadLink document={generatePDF()} fileName="fruits.pdf" style={styles.downloadButton}>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
      <table style={styles.table}>
        <thead style={styles.tableHeader}>
          <tr>
            <th scope="col" style={styles.tableCell}>Product Number</th>
            <th scope="col" style={styles.tableCell}>Fruit Name</th>
            <th scope="col" style={styles.tableCell}>Available Quantity (Kg)</th>
            <th scope="col" style={styles.tableCell}>Unit Price (Rs. per Kg)</th>
            <th scope="col" style={{ ...styles.tableCell, ...styles.tableCellCenter }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruits && fruits.filter((item) => (
            search === '' || item.product_name.toLowerCase().includes(search.toLowerCase())
          )).map((item) => (
            <tr key={item._id}>
              <td style={styles.tableCell}>{item.product_id}</td>
              <td style={styles.tableCell}>{item.product_name}</td>
              <td style={{ ...styles.tableCell, ...styles.tableCellCenter }}>{item.available_quantity}</td>
              <td style={{ ...styles.tableCell, ...styles.tableCellCenter }}>{item.unit_price}</td>
              <td style={{ ...styles.tableCell, ...styles.actionButtons }}>
                <Link to={`/updateProduct/${item._id}`} className="btn btn-warning" style={styles.editButton}>Edit</Link>
                <button className="btn btn-danger" onClick={() => fruitDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllFruits;
