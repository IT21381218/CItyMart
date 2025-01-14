import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const ViewAllPayments = () => {
    const [payment, setPayment] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get('http://localhost:5000/payment/');
                setPayment(response.data);
            } catch (error) {
                console.error('Error fetching payment:', error);
            }
        };

        fetchPayment();
    }, []);

    const paymentDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/payment/delete/${id}`);
            setPayment(payment.filter(item => item.id !== id));
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
                <Text style={styles.header}>List of Payments</Text>
                {payment && payment.map((member, index) => (
                    <View key={index} style={styles.member}>
                        <Text>PaymentId: {member.paymentId}</Text>
                        <Text>Name: {member.name}</Text>
                        <Text>Description: {member.description}</Text>
                        <Text>PaymentType: {member.paymentType}</Text>
                        <Text>Amount: {member.amount}</Text>
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
        member: {
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

    return(
        <div style={styles.container}>
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search Here"
                    className="searchInput"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Link to='/addPayment' style={styles.addButton}>+ Add Payment</Link>
                <PDFDownloadLink document={generatePDF()} fileName="Payment_List.pdf" style={styles.downloadButton}>
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
                </PDFDownloadLink>
            </div>
            <table style={styles.table}>
                <thead style={styles.tableHeader}>
                    <tr>
                        <th scope="col" style={styles.tableCell}>Payment ID</th>
                        <th scope="col" style={styles.tableCell}>Name</th>
                        <th scope="col" style={styles.tableCell}>Description</th>
                        <th scope="col" style={styles.tableCell}>Payment Type</th>
                        <th scope="col" style={styles.tableCell}>Amount</th>
                        <th scope="col" style={{ ...styles.tableCell, ...styles.tableCellCenter }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payment && payment.filter(member => (
                        search === '' || member.name.toLowerCase().includes(search.toLowerCase())
                    )).map(member => (
                        <tr key={member._id}>
                            <td style={styles.tableCell}>{member.paymentId}</td>
                            <td style={styles.tableCell}>{member.name}</td>
                            <td style={styles.tableCell}>{member.description}</td>
                            <td style={styles.tableCell}>{member.paymentType}</td>
                            <td style={styles.tableCell}>{member.amount}</td>
                            <td style={{ ...styles.tableCell, ...styles.actionButtons }}>
                                <Link to={`/updatePayment/${member._id}`} className="btn btn-warning" style={styles.editButton}>Edit</Link>
                                <button className="btn btn-danger" onClick={() => paymentDelete(member._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ViewAllPayments;