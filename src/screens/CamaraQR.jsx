import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ActivityIndicator } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQRCodeService } from '../utils/qrCodeService';
import { useAxios } from '../hooks/UseAxios';
import OrderConfirmation from '../components/orderConfirmation';

const QRScanner = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orden, setOrden] = useState(null);
  const [disponible,setDisponible] =useState();
  const [mensajeError, setMensajeError] = useState('');
  const insets = useSafeAreaInsets();
  const { processQRCode } = useQRCodeService();
  const axios = useAxios();

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    (async () => {
      requestPermission();
    })();
  }, []);

  const obtenerOrden = async orderId => {
    const response = await axios.get(`orders/byId/${orderId}`);
    const orden = response.data;

    if (!orden) {
      setMensajeError('Error: QR asignado a orden inexistente');
      setDisponible(false);
      return 'orden vacia';
    }

    if (orden.status === 'Pending') {
      setDisponible(true);
      setMensajeError('');
      return orden;
    } else {
      setDisponible(false);
      setMensajeError('La orden no está disponible');
      return orden;
    }
  };

  const handleBarCodeScanned = async ({ data }) => {
    if (scanned) return;
    setScanned(true);
    setLoading(true);
    try {
      const qrData = await processQRCode(data);
      const ordenObtenida = await obtenerOrden(qrData);
      setOrden(ordenObtenida);
    } catch (error) {
      Alert.alert('Error', `Error al obener los datos del codigo qr: ${error.message}`, [
        { text: 'Aceptar', onPress: () => setScanned(false) },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>Solicitando permiso de cámara...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No hay acceso a la cámara</Text>
      </View>
    );
  }

  // Si está cargando, muestra el loader
  if (loading) {
    return (
      <View style={styles.overlay}>
        <ActivityIndicator size="large" />
        <Text style={styles.text}>Buscando orden...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {orden && (
        disponible === false ? (
          Alert.alert(
            'Orden no disponible',
            mensajeError,
            [
              {
                text: 'Aceptar',
                onPress: () => {
                  setOrden(null);
                  setScanned(false);
                },
              },
            ],
            { cancelable: false }
          ) && null
        ) : (
          <View style={styles.overlay}>
            <OrderConfirmation
              order={orden}
              onCancel={() => {
                setOrden(null);
                setScanned(false);
              }}
            />
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  text: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 10,
  },
});

export default QRScanner;
