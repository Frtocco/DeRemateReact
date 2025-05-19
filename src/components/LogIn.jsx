import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from './InputStyles';

const LogIn = () => {
    
    const[logInInput, setLogInInput] = useState("");
    const[passwordInput, setPassword] = useState("");


    return(
        <View style={styles.container}>
            <Text style={styles.superTitle}>
                De Remate
            </Text>
            <Text style={styles.title}>
                Bienvenido!
            </Text> 
            <View style={{width: '100%'}}>   
                <Text style={{marginLeft:'5%', marginTop:5}}>
                    Username
                </Text>
                <View style={styles.viewContainer}>
                    <TextInput
                        style={styles.input}
                        value={logInInput}
                        onChangeText={setLogInInput}
                        placeholder="Escribe tu nombre de usuario..."
                    />
                </View>
            </View> 
            <View style={{width: '100%'}}>   
                <Text style={{marginLeft:'5%', marginTop:5}}>
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
            <Text style={styles.displayText}>
                Forgot your password?
            </Text> 
            <TouchableOpacity style={styles.styledButton}>
                <Text style={styles.buttonText}> Log in </Text>
            </TouchableOpacity>
            <Text style={styles.displayText}>
                Don't have an account? Register here.
            </Text>

        </View>
    )
};
export default LogIn;