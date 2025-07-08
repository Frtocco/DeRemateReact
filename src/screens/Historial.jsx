import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import OrderCard from '../components/OrderCard';  
import { FlatList } from 'react-native-gesture-handler';
import { useAxios } from '../hooks/UseAxios';

const Historial = ({ navigation }) => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/orders/history');
      setLista(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [axios]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Órdenes</Text>
      <FlatList
        data={lista}
        keyExtractor={(item, index) => item.orderId ? item.orderId.toString() : index.toString()}
        renderItem={({ item }) => <OrderCard order={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
      <Button title="Actualizar" onPress={fetchOrders} style={styles.button}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fa',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    alignSelf: 'center',
    color: '#333',
  },
  separator: {
    height: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  button: {
    margin: 10,
    paddingBottom: 30
  }
});

export default Historial;