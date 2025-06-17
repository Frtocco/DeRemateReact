import React, { useCallback,useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PendingOrderCard from '../components/PendingOrderCard';
import { useAxios } from '../hooks/UseAxios';
import { FlatList } from 'react-native-gesture-handler';

const OrdenesPendientes = ({ navigation }) => {
  const [pendientes, setPendientes] = useState([])
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useFocusEffect(
    useCallback(() => {
      const fetchOrders = async () => {
        try {
          const response = await axios.get('/orders/pendings');
          setPendientes(response.data);
        } catch (error) {
          console.error('Error fetching orders:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchOrders();
    }, []) 
  );

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
        data={pendientes}
        keyExtractor={(item, index) => item.orderId ? item.orderId.toString() : index.toString()}
        renderItem={({ item }) => <PendingOrderCard order={item}/>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
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