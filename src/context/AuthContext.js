import { createContext, useState, useEffect } from 'react';
import { getToken, saveToken, removeToken } from '../utils/tokenStorage';
import * as SecureStore from 'expo-secure-store';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [puntuacion, setPuntuacion] = useState(null);

  useEffect(() => {
    const init = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
    };
    init();
  }, []);

  const login = async (data) => {
    await saveToken(data.authResult.token);    
    setIsAuthenticated(true);
    setUsername(data.username);
    setEmail(data.email);
    setPuntuacion(data.stars)
  };

  const logout = async () => {
    await removeToken();
    setIsAuthenticated(false);
    setUsername(null);
    setEmail(null);
    setPuntuacion(null)
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, email, login, logout, puntuacion }}>
      {children}
    </AuthContext.Provider>
  );
};
