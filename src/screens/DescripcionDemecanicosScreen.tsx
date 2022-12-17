import React from 'react'
import { StyleSheet,Text,View,Image,Button,Alert, Touchable, TouchableOpacity,SafeAreaView, ScrollView, StatusBar } from "react-native";
import { DescripcionDemecanicosComponent } from '../components/DescripcionDemecanicosComponent';

const image_menu = require('../assets/Atras-negro.png');

const DescripcionDemecanicosScreen = () => {
  
  return (
    
    <View style={styles.fondo}>


      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View>



            <DescripcionDemecanicosComponent/>



            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
    
  )
}

export default DescripcionDemecanicosScreen

const styles = StyleSheet.create({

  fondo: {
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6D5C9',
  },

  safeArea:{
    flex: 1,
    paddingTop: StatusBar.currentHeight ,
  },

  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  caja_texto: {
    padding: 10,
    width: 350,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#0A100D',
    backgroundColor: '#B9BAA3',
    color: '#0A100D',
    textAlign: 'center',
    marginTop: 10,
  },

  texto:{
    color:'#D6D5C9',
    textAlign: 'center',
  },

  boton:{
    marginVertical:10,
    borderRadius: 10,
    backgroundColor: '#A22C29',
    padding: 10,
    width: 350,
    height: 50,
  },

  boton_menu:{
    borderRadius: 10,
    padding: 10,
    marginTop: 125,
    marginLeft: 75,
    width: 60,
    height: 60,
    borderWidth: 1,
    color: '#0A100D'
  },

  boton_imagen:{
    width:37,
    height:37,
  },
  fixToText: {
        display: 'flex',
        fontSize:20,
        color:'#fff',
    },
});




