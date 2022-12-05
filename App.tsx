import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DescripcionDemecanicosScreen } from './src/screens/DescripcionDemecanicosScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <DescripcionDemecanicosScreen/>
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
