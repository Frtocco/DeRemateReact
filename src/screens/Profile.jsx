import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { styles } from '../components/InputStyles';

const Profile = ({navigation}) => {
    return(
        <View style={styles.viewContainer}>
            <Image
                source={require('../components/placeholder.jpg')}
                style={localStyles.profileImage}
            />
            <Text>
                Username
            </Text>
        </View>
    );
};

const localStyles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    resizeMode: 'cover',
  }
})

export default Profile;