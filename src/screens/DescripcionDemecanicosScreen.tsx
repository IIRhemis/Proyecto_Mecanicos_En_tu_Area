import React from 'react'
import { StyleSheet,Text,View,Image,Button,Alert } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';



export const DescripcionDemecanicosScreen = () => {
  
  return (
    
    <View style={styles.fondo}>
      <View style={styles.boton_container}>
        <Button
          color={'#C43331'}
          title='------------'
          onPress={()=>Alert.alert('deberia volver')}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.caja_texto}>
          <Text>
            probando
          </Text>
        </View>

        <View style={styles.boton}>
          <Button
            color={'#A22C29'}
            title='ver en mapa'
            onPress={()=>Alert.alert('deberia ir a mapa')}
            />
        </View>

        <View style={styles.caja_texto}>
          <Text>
            probando
          </Text>
        </View>

        <View style={styles.caja_texto}>
          <Text>
            probando
          </Text>
        </View>

        <View style={styles.caja_texto}>
          <Text>
            probando
          </Text>
        </View>

        <View style={styles.caja_texto}>
          <Text>
            probando
          </Text>
        </View>

        <View style={styles.caja_texto}>
          <Text>
            probando
          </Text>
        </View>


      </View>
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
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  caja_texto: {
    padding: 10,
    width: 270,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#0A100D',
    backgroundColor: '#B9BAA3',
    color: '#0A100D',
    textAlign: 'center',
    marginTop: 10,

  },
  boton:{
    marginVertical:10,
    width: 150,
    borderRadius: 10,
  },
  boton_container:{
    width: 60,
    borderRadius: 10,
    paddingTop: 150,
    paddingLeft: 10,
    marginLeft:50,

  },

});

