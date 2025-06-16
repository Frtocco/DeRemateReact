import { useAxios } from '../hooks/UseAxios';



//aplicar endpoints para asignar el numero de pedido en el qr

export const useQRCodeService = () => { 
  const axiosInstance = useAxios();
  
  const processQRCode = async (qrData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return "Se lee correctamente el qr para el pedido:".qrData
    } catch (error) {
      console.error('Error processing QR code:', error);
      throw error;
    }
  };

  return {
    processQRCode
  };
};