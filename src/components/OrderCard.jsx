import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderCard = ({ order }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Order #{order.orderId}</Text>
    <Text style={styles.status}>Status: {order.status}</Text>
    <Text style={styles.address}>Address: {order.address}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    marginBottom: 4,
  },
  address: {
    fontSize: 16,
    color: '#555',
  },
});

export default OrderCard;