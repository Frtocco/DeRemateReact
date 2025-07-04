import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

// Implementación para WEB
const webStorage = {
  setItemAsync: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  getItemAsync: (key) => {
    const value = localStorage.getItem(key);
    return Promise.resolve(value);
  },
  deleteItemAsync: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

// Asigna la variable storage al almacenamiento dependiendo de la plataforma
const storage = isWeb ? webStorage : SecureStore;

export const saveToken = async (token) => {
  try {
    await storage.setItemAsync('jwt', token);
  } catch (error) {
    console.log('Error saving token:', error);
    if (isWeb) {
      localStorage.setItem('jwt', token);
    }
  }
};

export const getToken = async () => {
  try {
    return await storage.getItemAsync('jwt');
  } catch (error) {
    console.error('Error getting token:', error);
    if (isWeb) {
      return localStorage.getItem('jwt');
    }
    return null;
  }
};

export const removeToken = async () => {
  try {
    await storage.deleteItemAsync('jwt');
  } catch (error) {
    console.error('Error removing token:', error);
    if (isWeb) {
      localStorage.removeItem('jwt');
    }
  }

};

export const deleteItems = async () => {
  try {
    await storage.deleteItemAsync('username');
    await storage.deleteItemAsync('email');
    await storage.deleteItemAsync('puntuacion');
  } catch (error) {
    console.error('Error removing token:', error);
    if (isWeb) {
      await storage.deleteItemAsync('username');
      await storage.deleteItemAsync('email');
      await storage.deleteItemAsync('puntuacion');
    }
  }
};