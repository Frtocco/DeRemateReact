import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useAxios } from '../hooks/UseAxios';

const PendingOrderCard = ({ order }) => {

  const [ordenTomada, setOrdenTomada] = useState(false);
  const axios = useAxios();


  const handleTomarOrden = async (orderId) => {
    try {
      await axios.put(`/orders/${orderId}`, {status:'In Progress'});
      setOrdenTomada(true)
    } catch (error) {
      console.error('Error actualizando orden:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orden #{order.orderId}</Text>
      <Text style={styles.text}>Dirección: {order.address}</Text>
      <Text style={styles.text}>Estado: {ordenTomada ? 'En Proceso' : 'Pendiente'}</Text>

      {ordenTomada ? (
        <Text style={styles.takenText}>Orden tomada ✅</Text>
      ) : (
        <TouchableOpacity style={styles.styledButton} onPress={() => handleTomarOrden(order.orderId)}>
          <Text style={styles.buttonText}>Tomar Viaje</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
  styledButton: {
    position: 'absolute',
    bottom: 10,
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
  bottom: 10,
  right: 10,
  backgroundColor: '#28a745', // verde éxito
  color: 'white',
  fontWeight: 'bold',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 8,
},

});

export default PendingOrderCard;