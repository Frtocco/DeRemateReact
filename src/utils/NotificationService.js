import * as Notifications from 'expo-notifications';
import { useAxios } from '../hooks/UseAxios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OrdenWatcher() {
  
  const navigation = useNavigation();
  const [pendientes, setPendientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();
  const notificationInterval = useRef(null);
  const pendientesRef = useRef([]);
  const isFirstLoad = useRef(true);


  const configureNotifications = async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    await Notifications.requestPermissionsAsync();
  };

  const sendNotification = async (title, body) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data: {screen: 'OrdenesPendientes'}
    },
    trigger: null,
  });
};

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/orders/pendings');
      const nuevas = response.data;
      setPendientes(nuevas);

      if (isFirstLoad.current) {
        pendientesRef.current = nuevas;
        isFirstLoad.current = false;
        return;
      }

      const anteriores = pendientesRef.current;

      if (anteriores.length < nuevas.length) {
        await sendNotification(
          '¡Nuevas órdenes disponibles!',
          'Hay nuevas órdenes pendientes para usted.'
        );
        console.log('Se envió una notificación por nuevas órdenes');
      }

      nuevas.forEach(nueva => {
        const anterior = anteriores.find(a => a.orderId === nueva.orderId);
        if (anterior) {
          if (anterior.status !== nueva.status) {
            sendNotification(
              `Orden #${nueva.orderId} actualizada`,
              `La orden cambio de estado: ${anterior.status} → ${nueva.status}`
            );
            console.log(`Orden ${nueva.orderId} cambio de estado`);
          }if (anterior.address !== nueva.address){
            sendNotification(
              `Orden #${nueva.orderId} actualizada`,
              `La orden cambio de direccion: ${anterior.address} → ${nueva.address}`
            );
          }
        }
      });

      pendientesRef.current = nuevas;
    } catch (error) {
      console.error('Error al obtener órdenes:', error);
    } finally {
      setLoading(false);
    }
  };

  const startPeriodicNotifications = (intervalMinutes = 1) => {
    if (notificationInterval.current) {
      clearInterval(notificationInterval.current);
    }
    const intervalMs = intervalMinutes * 60 * 1000;

    notificationInterval.current = setInterval(() => {
      fetchOrders();
    }, intervalMs);
  };

  const stopPeriodicNotifications = () => {
    if (notificationInterval.current) {
      clearInterval(notificationInterval.current);
      notificationInterval.current = null;
    }
  };

  useEffect(() => {
    configureNotifications();
    setPendientes(fetchOrders());
    startPeriodicNotifications(1);

    return () => {
      stopPeriodicNotifications();
    };
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const screen = response.notification.request.content.data?.screen;
      if (screen) {
        navigation.navigate(screen);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
  Notifications.getLastNotificationResponseAsync().then(response => {
    if (response) {
      const screen = response.notification.request.content.data?.screen;
      if (screen) {
        navigation.navigate(screen);
       }
      }
    });
  }, []);

  return null;
}
