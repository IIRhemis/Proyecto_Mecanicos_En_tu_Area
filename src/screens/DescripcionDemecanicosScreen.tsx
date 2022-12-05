import React from 'react'
import { StyleSheet,Text,View,Image,Button,Alert } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';



export const DescripcionDemecanicosScreen = () => {
  
  return (
    
    <View style={styles.container}>


      <View style={styles.container_caja_texto_up}>
        <Text>
          probando
        </Text>
      </View>

      <View style={styles.container_caja_texto_center}>
        <Text>
          probando
        </Text>
      </View>

      <View style={styles.container_caja_texto_center}>
        <Text>
          probando
        </Text>
      </View>

      <View style={styles.container_caja_texto_center}>
        <Text>
          probando
        </Text>
      </View>

      <View style={styles.container_caja_texto_center}>
        <Text>
          probando
        </Text>
      </View>

      <View style={styles.container_caja_texto_down}>
        <Text>
          probando
        </Text>
      </View>


    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#D6D5C9',

    width: 500,
    height: 1000,
  },
  container_caja_texto_up: {
    position: 'relative',
    width: 350,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#0A100D',
    backgroundColor: '#B9BAA3',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 10,
    color: '#0A100D',
  },
  container_caja_texto_center: {
    position: 'relative',
    width: 350,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#0A100D',
    backgroundColor: '#B9BAA3',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    color: '#0A100D',
  },
  container_caja_texto_down: {
    position: 'relative',
    width: 350,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#0A100D',
    backgroundColor: '#B9BAA3',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 'auto',
    color: '#0A100D',
  },
  
});

