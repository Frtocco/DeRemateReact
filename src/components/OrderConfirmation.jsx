import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAxios } from '../hooks/UseAxios';

const OrderConfirmation = ({ order, onCancel }) => {
  const [ordenTomada, setOrdenTomada] = useState(false);
  const axios = useAxios();

  const handleTomarOrden = async (orderId) => {
    try {
      await axios.put(`/orders/${orderId}`, { status: 'In Progress' });
      setOrdenTomada(true);
      setTimeout(() => {
      onCancel();
    }, 1000);
    } catch (error) {
      console.error('Error actualizando orden:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orden #{order.orderId}</Text>
      <Text style={styles.text}>Dirección: {order.address}</Text>
      <Text style={styles.text}>Estado: {ordenTomada ? 'En Proceso' : 'Pendiente'}</Text>
      <View style={styles.buttonRow}>
        {ordenTomada ? (
        <Text style={styles.takenText}>Orden tomada ✅</Text>
      ) : (
        <TouchableOpacity style={styles.styledButton} onPress={() => handleTomarOrden(order.orderId)}>
          <Text style={styles.buttonText}>Tomar Viaje</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    minHeight: 120,
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginRight: 10, 
},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  styledButton: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  takenText: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: '#28a745',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  cancelButton: {
    marginTop: 20,
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OrderConfirmation;