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

export const mecanicos : IMecanicos[] = [
  // {
  //   latitud: -33.46356120668047,
  //   longitud:  -70.59226111258074
  // },
  // {
  //   latitud: -33.462925726716676,
  //   longitud:  -70.60320452453522
  // },
  // {
  //   latitud: -33.457161442651135,
  //   longitud:  -70.61267808662751
  // },
  // {
  //   latitud: -33.57190635744632,
  //   longitud:  -70.59226111258074
  // },
  // {
  //   latitud: -33.42038286788774,
  //   longitud:  -70.67582163068988
  // },
  // {
  //   latitud: -33.565452024323264,
  //   longitud:  -70.68353591664416
  // },

]

export const DescripcionDemecanicosComponent = () => {
  return (
    
    <View style={styles.container}>
      <View style={styles.caja_texto}>
        <Text style={styles.fuente}> {/*TEXTO DE NOMBRE*/}
          Mecanico 1
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DESCRIPCION*/}
          Mecanicos a domicilio
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DIRECCION*/}
        Brown Sur 777-983, Ñuñoa, Región Metropolitana
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE CONTACTO*/}
          +123456789
        </Text>
      </View>
      <View style={styles.caja_texto}>
        <Text style={styles.fuente}> {/*TEXTO DE NOMBRE*/}
          Mecanico 2
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DESCRIPCION*/}
          Mecanicos a domicilio
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DIRECCION*/}
        Av. Grecia 2734, 7750476 Ñuñoa, Región Metropolitana
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE CONTACTO*/}
          +123456789
        </Text>
      </View>
      <View style={styles.caja_texto}>
        <Text style={styles.fuente}> {/*TEXTO DE NOMBRE*/}
          Mecanico 3
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DESCRIPCION*/}
          Mecanicos a domicilio
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DIRECCION*/}
        Alcalde Eduardo Castillo Velasco 1818, Ñuñoa, Región Metropolitana
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE CONTACTO*/}
          +123456789
        </Text>
      </View>
      <View style={styles.caja_texto}>
        <Text style={styles.fuente}> {/*TEXTO DE NOMBRE*/}
          Mecanico 4
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DESCRIPCION*/}
          Mecanicos a domicilio
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DIRECCION*/}
        Puente Alto, Región Metropolitana
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE CONTACTO*/}
          +123456789
        </Text>
      </View>
      <View style={styles.caja_texto}>
        <Text style={styles.fuente}> {/*TEXTO DE NOMBRE*/}
          Mecanico 5
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DESCRIPCION*/}
          Mecanicos a domicilio
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DIRECCION*/}
        Av. Pdte. Eduardo Frei Montalva 839, 8390704 Santiago, Independencia, Región Metropolitana
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE CONTACTO*/}
          +123456789
        </Text>
      </View>
      <View style={styles.caja_texto}>
        <Text style={styles.fuente}> {/*TEXTO DE NOMBRE*/}
          Mecanico 6
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DESCRIPCION*/}
          Mecanicos a domicilio
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE DIRECCION*/}
        Gran Av. José Miguel Carrera 12036, 8010236 Santiago, El Bosque, Región Metropolitana
        </Text>
  
        <Text style={styles.fuente}> {/*TEXTO DE CONTACTO*/}
          +123456789
        </Text>
      </View>
    {/* <TouchableOpacity
      style={styles.boton}>
      <Text style={styles.texto}>
        Ver mecanico
      </Text>
    </TouchableOpacity> */}
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
    height: 230,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#0A100D',
    backgroundColor: '#B9BAA3',
    color: '#0A100D',
    textAlign: 'center',
    marginTop: 10,
  },

  texto:{
    display: 'flex',
    textAlign: 'center',
    fontSize:20,
    color:'#fff',
  },

  fuente:{
    display: 'flex',
    textAlign: 'center',
    fontSize:20,
    color:'#000',
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