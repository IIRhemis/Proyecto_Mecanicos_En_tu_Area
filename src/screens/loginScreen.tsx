import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,Button,Alert, SafeAreaView, TouchableOpacity } from 'react-native';



export const LoginScreen = () => {

  const PlaceholderImage = require('../assets/images/Logo.png');
  const [usuario, onChangeUsuario] = React.useState("");
  const [contraseña, onChangeContraseña] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />

        <SafeAreaView style={styles.containerInput}>

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
        </SafeAreaView>

        <SafeAreaView>
          <TouchableOpacity
          style={styles.btnContainer}
          >
            <Text
            style={styles.btnText}>
              Ingresar
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        
        <SafeAreaView>
          <TouchableOpacity
          style={styles.btnContainer}
          >
            <Text
            style={styles.btnText}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

        {/* <SafeAreaView style={styles.btnContainer} >
        <Button
          color={'#A22C29'}
          title='Ingresar'
          onPress={() => Alert.alert('Btn de Ingresar')}
        />
        </SafeAreaView>
        <SafeAreaView style={styles.btnContainer} >
        <Button
          color={'#A22C29'}
          title='Registrarse'
          onPress={() => Alert.alert('Btn de Registrarse')}
        />
        </SafeAreaView> */}
      </SafeAreaView>
    </SafeAreaView>
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
  btnContainer:{
    marginTop:15,
    paddingVertical:15,
    backgroundColor:'#A22C29',
    alignSelf:'center',
    width:'90%',
    borderRadius:20,
    maxWidth:'100%'
    
  },
  btnText:{
    textAlign:'center',
    color:'#D6D5C9',
    fontSize:30,
  },
  image: {
    // width: 320,
    // height: 440,
  },
  containerInput:{
    paddingTop:50,
    paddingLeft:15,
    // paddingBottom: 450,
  },
  input: {
    width: 270,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#000',
    marginBottom: 10,
    fontSize:25,
    // textAlign:'center',
  },
});