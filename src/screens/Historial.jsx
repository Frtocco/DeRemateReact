import React, { useEffect,useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../components/InputStyles';
import OrderCard from '../components/OrderCard';
import { FlatList } from 'react-native-gesture-handler';
import {useAxios} from '../hooks/UseAxios';
import { ActivityIndicator } from 'react-native';




const orders = [
  { orderId: '1', status: 'Delivered', address: '742 Evergreen Terrace' },
  { orderId: '2', status: 'In Progress', address: 'Springfield Mall' },
  { orderId: '3', status: 'Cancelled', address: 'Krusty Burger' },
  { orderId: '1', status: 'Delivered', address: '742 Evergreen Terrace' },
  { orderId: '2', status: 'In Progress', address: 'Springfield Mall' },
  { orderId: '3', status: 'Cancelled', address: 'Krusty Burger' },
  { orderId: '1', status: 'Delivered', address: '742 Evergreen Terrace' },
  { orderId: '2', status: 'In Progress', address: 'Springfield Mall' },
];

const Historial = ({ navigation }) => {

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
      const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:1234/orders/history?riderId=c7501d98-ef08-47ec-8e59-c4e9ae110eda'); // Cambia la URL por la de tu API real
        setLista(response.data); // Asegúrate que response.data sea un array de órdenes
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={lista}
        keyExtractor={(item, index) => item.orderId ? item.orderId.toString() : index.toString()}
        renderItem={({ item }) => <OrderCard order={item} />}
      />
    </View>
  );
};


export default Historial;
