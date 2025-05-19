import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InputDemo from './src/components/InputDemo';
import LogIn from './src/components/LogIn';

export default function App() {
  return (
    <View style={styles.container}>
      <LogIn/>
      <StatusBar style="auto" />
    </View>
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
