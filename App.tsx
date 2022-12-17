import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DescripcionDemecanicosScreen } from './src/screens/DescripcionDemecanicosScreen';
import { MapScreen } from './src/screens/MapScreen';

export default function App() {
  return (

    <MapScreen/>
    // <View style={styles.container}>
    //   <Text>Hola React!</Text>
    //   <StatusBar style="auto" />
    // </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6D5C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
