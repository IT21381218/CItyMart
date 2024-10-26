import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const ViewAllVegetables = () => {
  const [vegetables, setVegetables] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchVegetables = async () => {
      try {
        const response = await axios.get('http://localhost:5000/product/');
        const data = response.data.filter(product => product.category_type === 'vegetables');
        setVegetables(data);
      } catch (error) {
        console.error('Error fetching vegetables:', error);
      }
    };

    fetchVegetables();
  }, []);

  const vegetableDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/delete/${id}`);
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
        <Text style={styles.header}>List of Vegetables</Text>
        {vegetables && vegetables.map((vegetable, index) => (
          <View key={index} style={styles.vegetable}>
            <Text>Name: {vegetable.product_name}</Text>
            <Text>Available Quantity: {vegetable.availabe_quantity} Kg</Text>
            <Text>Unit Price: Rs. {vegetable.unit_price} per Kg</Text>
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
    vegetable: {
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
    searchInput: {
      padding: '10px',
      borderRadius: '5px',
      marginRight: '10px',
      flex: '1',
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
        <Link to='/addProduct' style={styles.addButton}>+ Add New Vegetable</Link>
        <PDFDownloadLink document={generatePDF()} fileName="vegetables.pdf" style={styles.downloadButton}>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
      <table style={styles.table}>
        <thead style={styles.tableHeader}>
          <tr>
            <th scope="col" style={styles.tableCell}>Product Number</th>
            <th scope="col" style={styles.tableCell}>Vegetable Name</th>
            <th scope="col" style={styles.tableCell}>Available Quantity (Kg)</th>
            <th scope="col" style={styles.tableCell}>Unit Price (Rs. per Kg)</th>
            <th scope="col" style={{ ...styles.tableCell, ...styles.tableCellCenter }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vegetables && vegetables.filter((product) => (
            search === '' || product.product_name.toLowerCase().includes(search.toLowerCase())
          )).map((product) => (
            <tr key={product._id}>
              <td style={styles.tableCell}>{product.product_id}</td>
              <td style={styles.tableCell}>{product.product_name}</td>
              <td style={{ ...styles.tableCell, ...styles.tableCellCenter }}>{product.availabe_quantity}</td>
              <td style={{ ...styles.tableCell, ...styles.tableCellCenter }}>{product.unit_price}</td>
              <td style={{ ...styles.tableCell, ...styles.actionButtons }}>
                <Link to={`/updateProduct/${product._id}`} className="btn btn-warning" style={styles.editButton}>Edit</Link>
                <button className="btn btn-danger" onClick={() => vegetableDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAllVegetables;
