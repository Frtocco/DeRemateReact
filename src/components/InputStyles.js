import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,               
    padding: 20,
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  superTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    position: 'absolute',
    top: 60,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 40, 
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    marginBottom: 10,
  },
  styledButton: {
    width:'75%',  
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  displayText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 10,
    marginTop: 10,
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  viewContainer:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

