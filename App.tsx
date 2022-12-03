import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MapScreen } from './src/screens/MapScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>K pazaaaaaaa ijos del piko</Text>
    //   <StatusBar style="auto" />
    // </View>
    <MapScreen/>
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
