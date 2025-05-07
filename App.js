import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InputDemo from './src/components/InputDemo';

export default function App() {
  return (
    <View style={styles.container}>
      <InputDemo />
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
