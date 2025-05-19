import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from '../components/InputStyles';

const ForgotPassword = ({navigation}) => {
    
    const[emailInput, setEmailInput] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.superTitle}>
                De Remate
            </Text>
            <Text style={styles.title}>
                Restaure su contraseña
            </Text> 
            <View style={{width: '100%'}}>   
                <Text style={{marginLeft:'5%', margin:10}}>
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
            <TouchableOpacity style={styles.styledButton}>
                <Text style={styles.buttonText}>  Send Email </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')} >  
                <Text style={styles.displayText}>
                    Back to Log in
                </Text>
            </TouchableOpacity>     
        </View>
    )
};
export default ForgotPassword;