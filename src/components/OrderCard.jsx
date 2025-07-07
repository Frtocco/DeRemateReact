import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConfirmDeliveryButton from './ConfirmDeliveryButton';
import OpenInMapsButton from './OpenInMapsButton'


const OrderCard = ({ order }) => (
  <View style={styles.card}>
    <Text style={styles.title}>Orden #{order.orderId}</Text>
    <Text style={styles.status}>Estado: {order.status}</Text>
    <Text style={styles.address}>Direccion: {order.addressDesc}</Text>
    {order.status === 'In Progress' && (
      <View style={styles.buttonGroup}>
        <ConfirmDeliveryButton order={order} />
        <OpenInMapsButton order={order} />
      </View>
    )}
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
    buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 10,
  },
  confirmButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  mapsButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OrderCard;