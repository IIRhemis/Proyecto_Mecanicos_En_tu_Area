import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ContainerExample } from './src/screens/ScreenPrincipal';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>1 of 1</Text>
      <ContainerExample/>
      <StatusBar style="auto"/>
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
