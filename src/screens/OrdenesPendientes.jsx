import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useAxios } from '../hooks/UseAxios';

const OrdenesPendientes = ({navigation}) =>{
    const [pendientes, setPendientes] = useState([])
    const [loading, setLoading] = useState(true);
    const axios = useAxios();

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await axios.get('/orders/pendings');
            console.log(response.data);
            setPendientes(response.data);
          } catch (error) {
            console.error('Error fetching orders:', error);
          } finally {
            setLoading(false);
          }
        };
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
          <Text>Hola</Text>
        </View>
      );

}

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
});

export default OrdenesPendientes;