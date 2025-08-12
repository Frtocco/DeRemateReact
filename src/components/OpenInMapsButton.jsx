import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const OpenInMapsButton = ({ order }) => {
  const handlePress = () => {
    const address = encodeURIComponent(order.address);
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Ver en Maps</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 4,
    alignSelf: 'flex-start'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OpenInMapsButton;
