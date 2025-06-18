import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAxios } from '../hooks/UseAxios';

const OrderConfirmation = ({ order, onCancel }) => {
  const [ordenTomada, setOrdenTomada] = useState(false);
  const [loading, setLoading] = useState(false);
  const axios = useAxios();

  const handleTomarOrden = async (orderId) => {
    setLoading(true);
    try {
      await axios.put(`/orders/${orderId}`, { status: 'In Progress' });
      setOrdenTomada(true);
      setTimeout(() => {
        onCancel();
      }, 1000);
    } catch (error) {
      console.error('Error actualizando orden:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orden #{order.orderId}</Text>
      <Text style={styles.text}>Dirección: {order.address}</Text>
      <Text style={styles.text}>Estado: {ordenTomada ? 'En Proceso' : 'Pendiente'}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={ordenTomada ? styles.confirmedButton : styles.confirmButton}
          onPress={()=>handleTomarOrden(order.orderId)}
          disabled={loading}
        >
          <Text style={ordenTomada ? styles.confirmedButtonText : styles.confirmButtonText}>
            {ordenTomada ? 'Tomada✅' : 'Tomar orden'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={onCancel}
          disabled={loading}
        >
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
  confirmButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  confirmedButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  confirmedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    flex: 1,
    alignItems: 'center',
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