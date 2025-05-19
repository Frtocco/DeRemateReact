import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from '../components/InputStyles';

const LogIn = ({navigation}) => {
    
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
                <Text style={{marginLeft:'5%', margin:3}}>
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
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>    
                <Text style={styles.displayText}>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.styledButton} >
                <Text style={styles.buttonText}>  Log in </Text>
            </TouchableOpacity>
            <TouchableOpacity >  
                <Text style={styles.displayText} onPress={() => navigation.navigate('Register')}>
                    Don't have an account? Register here.
                </Text>
            </TouchableOpacity>     

        </View>
    )
};
export default LogIn;