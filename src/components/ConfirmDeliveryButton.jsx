import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useAxios } from '../hooks/UseAxios';

const ConfirmDeliveryButton = ({ order }) => {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [codigo, setCodigo] = useState('');
  const axios = useAxios();

  const handleConfirmar = async () => {

    if(order.confirmationCode == codigo){
        try {
          await axios.put(`/orders/${order.orderId}`, { status: 'Completed' }); 
        } catch (error) {
          console.error('Error actualizando orden:', error);
        } 
    }



    // Lógica para validar el código
    console.log(`Código ingresado para la orden ${order.orderId}:`, codigo);

    // Si todo está OK, podrías hacer un PUT a /orders/{id}/confirm o algo similar
    setMostrarInput(false);
    setCodigo('');
  };

  return (
    <View style={styles.wrapper}>
      {!mostrarInput ? (
        <TouchableOpacity style={styles.button} onPress={() => setMostrarInput(true)}>
          <Text style={styles.buttonText}>Confirmar Entrega</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Ingresar código"
            value={codigo}
            onChangeText={setCodigo}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
            <Text style={styles.buttonText}>Validar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  confirmButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ConfirmDeliveryButton;
