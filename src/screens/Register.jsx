import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from '../components/InputStyles';
import { AuthContext } from '../context/AuthContext';
import { useAxios } from '../hooks/UseAxios';
import { Alert } from 'react-native';

const Register = ({navigation}) => {
    
    const[usernameInput, setUsernameInput] = useState("");
    const[emailInput, setEmailInput] = useState("");
    const[passwordInput, setPassword] = useState("");

    const { login } = useContext(AuthContext);
    const axios = useAxios();

    const handleRegister = async () => {
        try {
        const response = await axios.post('/users', {
          username: usernameInput,
          password: passwordInput,
          email: emailInput
        });
        
        Alert.alert(
          "Verificación enviada",
          "Te enviamos un correo para que verifiques tu cuenta.",
              [
                {
                  text: "OK",
                  onPress: () => navigation.replace('LogIn')
                }
              ]
            );
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Hubo un problema al registrar el usuario.");
      }
    };
    return(
        <View style={styles.container}>
            <Text style={styles.superTitle}>
                De Remate
            </Text>
            <Text style={styles.title}>
                Registrese
            </Text> 
            <View style={{width: '100%'}}>   
                <Text style={{marginLeft:'5%', margin:3}}>
                    Username
                </Text>
                <View style={styles.viewContainer}>
                    <TextInput
                        style={styles.input}
                        value={usernameInput}
                        onChangeText={setUsernameInput}
                        placeholder="Escribe tu nombre de usuario..."
                    />
                </View>
            </View>
            <View style={{width: '100%'}}>   
                <Text style={{marginLeft:'5%', margin:3}}>
                    Email
                </Text>
                <View style={styles.viewContainer}>
                    <TextInput
                        style={styles.input}
                        value={emailInput}
                        onChangeText={setEmailInput}
                        placeholder="Escribe tu email..."
                    />
                </View>
            </View>  
            <View style={{width: '100%'}}>   
                <Text style={{marginLeft:'5%', margin:3}}>
                    Password
                </Text>    
                <View style={styles.viewContainer}>    
                    <TextInput
                      style={styles.input}
                      value={passwordInput}
                      onChangeText={setPassword}
                      placeholder="Escribe tu contraseña..."
                      secureTextEntry={true}
                    />
                </View>
            </View>
            <Text style={styles.displayText} onPress={() => navigation.replace('LogIn')}>
                Back to Log in
            </Text> 
            <TouchableOpacity style={styles.styledButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>  Register </Text>
            </TouchableOpacity>
        </View>
    )
};
export default Register;