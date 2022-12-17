import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  ContainerExample  from './ScreenPrincipal';
import InicioScreen from './InicioScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <Button
      title="Ir a la página de detalles"
      onPress={() => navigation.navigate('Details')}
    />
  );
}

function DetailsScreen() {
  return <Button title="Volver a la página de inicio" />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContainerExample} />
        <Stack.Screen name="Inicio" component={InicioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
