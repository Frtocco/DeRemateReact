import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../components/InputStyles';
import OrderCard from '../components/OrderCard';
import { FlatList } from 'react-native-gesture-handler';


const orders = [
  { orderId: '1', status: 'Delivered', address: '742 Evergreen Terrace' },
  { orderId: '2', status: 'In Progress', address: 'Springfield Mall' },
  { orderId: '3', status: 'Cancelled', address: 'Krusty Burger' },
];

const Historial = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
    <FlatList
      data={orders}
      keyExtractor={(item) => item.orderId}
      renderItem={({ item }) => <OrderCard order={item} />}
    />
  </View>
  );
};


export default Historial;
