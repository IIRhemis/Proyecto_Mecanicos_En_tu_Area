import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/loginScreen';


export default function App() {
  return (
    <View style={styles.containerlogin}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerlogin: {
    flex: 1,
    backgroundColor: '#D6D5C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
