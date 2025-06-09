import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Puntuacion = ({ cantidad }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Tu Puntuación</Text>
      <Text style={styles.number}>{cantidad} ⭐️</Text>
    </View>
  );
};

export default Puntuacion;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 25,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160, 
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
});
