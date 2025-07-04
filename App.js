import React, { useEffect, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import NotificationService from './src/utils/NotificationService';

function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <NotificationService />
        <AppNavigator isAuthenticated={isAuthenticated} />
      </NavigationContainer>
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </GestureHandlerRootView>
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
