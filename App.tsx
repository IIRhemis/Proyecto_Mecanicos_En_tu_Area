import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DescripcionDemecanicosScreen } from './src/screens/DescripcionDemecanicosScreen';
import { MapScreen } from './src/screens/MapScreen';


import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  ContainerExample  from './src/screens/ScreenPrincipal';
import InicioScreen from './src/screens/InicioScreen';
import DescripcionDemecanicosScreen from './src/screens/DescripcionDemecanicosScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContainerExample} />
        <Stack.Screen name="Details" component={DescripcionDemecanicosScreen} />
        <Stack.Screen name="Maps" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
    
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
