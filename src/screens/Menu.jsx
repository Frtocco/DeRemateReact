import React, {useContext, useState, useCallback} from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from '../components/InputStyles';
import { AuthContext } from '../context/AuthContext';
import OrderStatistics from '../components/OrderStatistics';
import { useAxios } from '../hooks/UseAxios';

const Menu = ({ navigation }) => {
  const { logout, username } = useContext(AuthContext);
  const [viajesCompletados, setViajesCompletados] = useState(0)
  const axios = useAxios();

  useFocusEffect(
      useCallback(() => {
        const fetchOrders = async () => {
          try {
            const response = await axios.get('/orders/history?status=Completed');
            setViajesCompletados(response.data.length);
          } catch (error) {
            console.error('Error fetching orders:', error);
          } 
        };
        fetchOrders();
      }, []) 
    );


  return (
    <View style={styles.container}>

      <Text style={styles.superTitle}>De Remate</Text>

      <Text>Bienvenido, {username}!</Text>

      <OrderStatistics cantidad={viajesCompletados}/>

      <TouchableOpacity style={styles.styledButton} onPress={logout}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Menu;
