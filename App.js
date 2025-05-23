import React from 'react'; // Asegúrate de importar React
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider, AuthContext } from './src/context/AuthContext'; // <-- AGREGA ESTA LÍNEA


function AppContent() {
  const { isAuthenticated } = React.useContext(AuthContext);

  if (isAuthenticated === null) {
    return null; // O un spinner de carga
  }

  return (
    <NavigationContainer>
      <AppNavigator isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
