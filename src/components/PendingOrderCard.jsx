import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PendingOrderCard = ({ order }) => {

  const tomarOrden = async (orderId) => {
    try {
      const response = await axios.get(`/orders/${orderId}`);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orden #{order.orderId}</Text>
      <Text style={styles.text}>Dirección: {order.address}</Text>
      <Text style={styles.text}>Estado: {order.status}</Text>

      <TouchableOpacity style={styles.styledButton} onPress={() => tomarOrden(order.orderId)}>
        <Text style={styles.buttonText}>Comenzar Viaje</Text>
      </TouchableOpacity>
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
});

export default PendingOrderCard;
