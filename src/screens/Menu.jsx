import React, {useContext} from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from '../components/InputStyles';
import { AuthContext } from '../context/AuthContext';

const Menu = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>

      <Text style={styles.superTitle}>De Remate</Text>

      <Text>Bienvenido devuelta!</Text>

      <TouchableOpacity style={styles.styledButton} onPress={() => {navigation.navigate('OrdenesPendientes')}}>
        <Text style={styles.buttonText}>Órdenes Pendientes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.styledButton} onPress={() => {navigation.navigate('Historial')}}>
        <Text style={styles.buttonText}>Historial de Órdenes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.styledButton} onPress={logout}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Menu;
