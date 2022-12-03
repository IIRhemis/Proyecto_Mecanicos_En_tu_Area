import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { InicioScreen } from './src/components/screens/InicioScreen';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>K pazaaaaaaa ijos del piko</Text>
      <StatusBar style="auto" /> */}
      <InicioScreen/>
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
