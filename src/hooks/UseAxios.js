import { useContext, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { getToken } from '../utils/tokenStorage';

export const useAxios = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const axiosInstance = useRef(axios.create({baseURL: 'http://localhost:1234' }));
  //pedro 172.24.192.1

  // http://10.0.2.2:1234 si la app esta corriendo local desde emulador android
  
  useEffect(() => {
    const instance = axiosInstance.current;

    instance.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    instance.interceptors.response.use(
      (res) => res,
      async (err) => {
        if (err.response?.status === 401) {
          await logout();              // Actualiza estado global
          navigation.reset({           // Borra historial y navega al login
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
        return Promise.reject(err);
      }
    );
  }, []);

  return axiosInstance.current;
};