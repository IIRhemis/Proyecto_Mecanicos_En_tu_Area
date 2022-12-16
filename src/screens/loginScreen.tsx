import React from 'react'
import { StyleSheet, Text, View, Image, TextInput,Button,Alert, SafeAreaView, TouchableOpacity } from 'react-native';



export const LoginScreen = (props : any) => {

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
            keyboardType='email-address'
            onChangeText={onChangeUsuario}
            placeholder="Usuario"
            value={usuario}
          />
          <TextInput
            style={styles.input}
            keyboardType='default'
            secureTextEntry
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
        <SafeAreaView>
          <TouchableOpacity
          style={styles.btnContainer2}
          >
            <Text
            style={styles.btnText2}>
              Registrarse con Google
            </Text>
          </TouchableOpacity>
        </SafeAreaView>

      </SafeAreaView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  
  imageContainer: {
    flex: 1,
    paddingTop: 210
  },
  image: {
    // width: 320,
    // height: 440,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D6D5C9',
  },
  btnContainer:{
    marginTop:15,
    paddingVertical:15,
    backgroundColor:'#A22C29',
    alignSelf:'center',
    width:'90%',
    borderRadius:20,
  },
  btnContainer2:{
    backgroundColor: '#D6D5C9',
    borderColor: '#D6D5C9',
    color:'#A22C29',
    width: 280,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 60,
    marginTop:15,
    alignSelf:'center',
    // textDecorationLine: 'underline',
    // paddingVertical:15,
    // width:'90%',
    // borderRadius:20,
  },
  btnText:{
    textAlign:'center',
    color:'#D6D5C9',
    fontSize:20,
  },
  btnText2:{
    textAlign:'center',
    color:'#A22C29',
    fontSize:20,
  },
  containerInput:{
    alignItems:'center',
    paddingTop: 80,
    paddingBottom:20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#D6D5C9',
    borderBottomColor:'#000',
    marginBottom: 10,
    fontSize:20,
    // textAlign:'center',
  },
});