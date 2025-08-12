# De Remate App de Pedidos - React Native

Aplicación móvil desarrollada con React Native y Expo que permite a los usuarios registrarse, validar su cuenta vía email, realizar pedidos mediante escaneo de código QR y visualizar la ubicación del pedido a través de Google Maps.

## 📲 Funcionalidades principales

- ✅ Registro y login con persistencia de sesión (JWT)
- ✉️ Validación de cuenta por correo electrónico
- 🔑 Recuperación / cambio de contraseña
- 📷 Escaneo de código QR para realizar pedidos
- 🗺️ Mapa en tiempo real con ubicación del pedido
- 🔔 Notificaciones push (opcional con Expo)

## 🛠️ Tecnologías y librerías utilizadas

- React Native + Expo
- Axios (comunicación con backend)
- React Navigation
- EncryptedStorage (para guardado seguro de token JWT)
- Expo Notifications
- Expo Location + Google Maps
- react-native-qrcode-scanner

## 🔐 Seguridad

- Tokens JWT almacenados de forma segura con `EncryptedStorage`
- Comunicación HTTPS (sugerido en producción)
- Validaciones de formularios y manejo de errores

## ▶️ Cómo ejecutar

npm install
npx expo start

