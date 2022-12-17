
import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  ContainerExample  from './src/screens/ScreenPrincipal';
import InicioScreen from './src/screens/InicioScreen';

const Stack = createNativeStackNavigator();

import { DescripcionDemecanicosScreen } from './src/screens/DescripcionDemecanicosScreen';




export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContainerExample} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    <MapScreen/>
    
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
