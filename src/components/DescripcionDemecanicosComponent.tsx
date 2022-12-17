import React from 'react'
import { StyleSheet,Text,View,Image,Button,Alert, Touchable, TouchableOpacity,SafeAreaView, ScrollView, StatusBar } from "react-native";


interface IMecanicos{
  nombre: string;
  direccion: string;
  descripcion: string;
  celular: string;
  longitud ?: number;
  latitud ?: number;
}

export const DescripcionDemecanicosComponent = () => {
  return (
    
    <View style={styles.container}>
    <View style={styles.caja_texto}>
      <Text> {/*TEXTO DE NOMBRE*/}
        mecanico 1
      </Text>

      <Text> {/*TEXTO DE DESCRIPCION*/}
        mecanicos a domicilio
      </Text>

      <Text> {/*TEXTO DE DIRECCION*/}
        calle 123
      </Text>

      <Text> {/*TEXTO DE CONTACTO*/}
        123456789
      </Text>
    </View>
    <TouchableOpacity
      style={styles.boton}>
      <Text style={styles.texto}>
        Ver mecanico
      </Text>
    </TouchableOpacity>
    </View>



  )
}



const styles = StyleSheet.create({

  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  caja_texto: {
    padding: 10,
    width: 350,
    height: 180,
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

});