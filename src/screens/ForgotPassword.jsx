import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../components/InputStyles';
import { useAxios } from '../hooks/UseAxios';

const ForgotPassword = ({ navigation }) => {
  const [emailInput, setEmailInput] = useState("");
  const axios = useAxios();

  const handlePasswordChange = async () => {
    try {
      const response = await axios.post('/users/forgot-password', {
        email: emailInput
      });

      Alert.alert(
        "Correo enviado",
        "Te enviamos un enlace para restablecer tu contraseña.",
        [{ text: "OK", onPress: () => navigation.navigate('LogIn') }]
      );

    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al enviar el correo.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.superTitle}>
        De Remate
      </Text>
      <Text style={styles.title}>
        Restaure su contraseña
      </Text>
      <View style={{ width: '100%' }}>
        <Text style={{ marginLeft: '5%', margin: 10 }}>
          Email
        </Text>
        <View style={styles.viewContainer}>
          <TextInput
            style={styles.input}
            value={emailInput}
            onChangeText={setEmailInput}
            placeholder="Escribe tu email"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.styledButton} onPress={handlePasswordChange}>
        <Text style={styles.buttonText}>Send Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
        <Text style={styles.displayText}>
          Back to Log in
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
