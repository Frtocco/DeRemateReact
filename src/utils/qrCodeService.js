
export const useQRCodeService = () => { 

  const processQRCode = async (qrData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return(qrData)
    } catch (error) {
      console.error('Error processing QR code:', error);
      throw error;
    }
  };

  return {
    processQRCode
  };
};