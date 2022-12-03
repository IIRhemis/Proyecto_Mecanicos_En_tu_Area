import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,Button,Alert } from 'react-native';

const Imagen = require('../image/Mecanico.jpg');

export const LoginScreen = () => {

  const PlaceholderImage = require('../assets/images/Logo.png');
  const [usuario, onChangeUsuario] = React.useState("");
  const [contraseña, onChangeContraseña] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />

        <View style={styles.containerInput}>

          <TextInput
            style={styles.input}
            onChangeText={onChangeUsuario}
            placeholder="Usuario"
            value={usuario}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContraseña}
            placeholder="Contraseña"
            value={contraseña}
          />
        </View>
        <View style={styles.btnContainer} >
        <Button
          color={'#A22C29'}
          title='Ingresar'
          onPress={() => Alert.alert('Btn de Ingresar')}
          />
        </View>
        <View style={styles.btnContainer} >
        <Button
          color={'#A22C29'}
          title='Registrarse'
          onPress={() => Alert.alert('Btn de Registrarse')}
          />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D6D5C9',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 210
  },
  containerInput:{
    paddingTop:50,
    paddingLeft:50,
    // paddingBottom: 450,
  },
  btnContainer:{
    padding:20,
  },
  image: {
    // width: 320,
    // height: 440,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});