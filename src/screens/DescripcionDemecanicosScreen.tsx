import React from 'react'
import { StyleSheet,Text,View,Image,Button,Alert, Touchable, TouchableOpacity,SafeAreaView, ScrollView, StatusBar } from "react-native";



const image_menu = require('../assets/Atras-negro.png');







export const DescripcionDemecanicosScreen = () => {
  
  return (
    
    <View style={styles.fondo}>

      <TouchableOpacity style={styles.boton_menu}>
        <Image
        source={image_menu}
        style={styles.boton_imagen}/>
      </TouchableOpacity>

      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View>



            <View style={styles.container}>
              <View style={styles.caja_texto}>
                <Text>
                  probando
                </Text>
              </View>
              <TouchableOpacity
                style={styles.boton}>
                <Text style={styles.texto}>
                  Ver mecanico



                  
                </Text>
              </TouchableOpacity>
            </View>



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

const styles = StyleSheet.create({

  fondo: {
    position: 'absolute',
    backgroundColor: '#D6D5C9',
    width: 500,
    height: 1000,
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
});




