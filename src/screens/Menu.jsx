import React from 'react';
import { View, TextInput, Text, TouchableOpacity} from 'react-native';
import { styles } from '../components/InputStyles';

const Menu = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.superTitle}>
                De Remate
            </Text>
            <Text>
                Bienvenido devuelta!
            </Text>
        </View>
    )
}

export default Menu;