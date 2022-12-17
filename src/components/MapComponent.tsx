import React from 'react';
import * as Location from 'expo-location'
import MapView,  {Marker, Polyline} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import credentials from '../../credentials';
import { mecanicos } from './DescripcionDemecanicosComponent';

interface mecanicos{
  latitud: number, 
  longitud: number
}

export const MapComponent = () =>{
  
  
    const  [Origin, SetOrigin] = React.useState({
      latitud: -33.450648, 
      longitud: -70.674320
    })
    

    async function getLocationPermission(){
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted'){
        alert('permiso denegado')
        return
      }
      let location = await Location.getCurrentPositionAsync({});
      const current ={
        latitud: location.coords.latitude,
        longitud: location.coords.longitude
      }
      SetOrigin(current);
    }
    
    const  [Destination, SetDestination] = React.useState({
      latitud: Origin.latitud, 
      longitud: Origin.longitud
    })

    function getDestination(lat: number ,lon: number){
      const current ={
        latitud: lat,
        longitud: lon
      }
      // console.log(current)
      SetDestination(current)
    }

    async function getLocation(){
      let location = await Location.getCurrentPositionAsync({});
      const current ={
        latitud: location.coords.latitude,
        longitud: location.coords.longitude
      }
      SetOrigin(current);
    }

    React.useEffect(()=>{
      getLocationPermission();
    }, [])

    return (
        <View style={styles.container}>
          <MapView style={styles.map} 
          initialRegion={{
            latitude: Origin.latitud,
            longitude: Origin.longitud,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }}
          showsMyLocationButton= {true}
          zoomControlEnabled = {true}
          >
         
      
          <Marker  
            coordinate={{latitude: Origin.latitud,longitude: Origin.longitud}}
            
          />
          <Marker  
            coordinate={{latitude: -33.462925726716676,longitude: -70.60320452453522}}
            // onMagicTap = {()=>getDestination(-33.462925726716676,-70.60320452453522)}
            onPress= {()=>getDestination(-33.462925726716676,-70.60320452453522)}
          />
          <Marker  
            coordinate={{latitude: -33.46356120668047,longitude: -70.59226111258074}}
            onPress= {()=>getDestination(-33.462925726716676,-70.60320452453522)}
            
          />
          <Marker  
            coordinate={{latitude: -33.457161442651135,longitude: -70.61267808662751}}
            onPress= {()=>getDestination(-33.462925726716676,-70.60320452453522)}
            
          />
          <Marker  
            coordinate={{latitude: -33.57190635744632,longitude: -70.59226111258074}}
            onPress= {()=>getDestination(-33.462925726716676,-70.60320452453522)}
            
          />
          <Marker  
            coordinate={{latitude: -33.42038286788774,longitude: -70.67582163068988}}
            onPress= {()=>getDestination(-33.462925726716676,-70.60320452453522)}
            
          />
          <Marker  
            coordinate={{latitude: -33.565452024323264,longitude: -70.68353591664416}}
            onPress= {()=>getDestination(-33.462925726716676,-70.60320452453522)}
            
          /> 

          {/* <MapViewDirections
            origin={{latitude: Origin.latitud,longitude: Origin.longitud}}
            destination={{latitude: Destination.latitud, longitude: Destination.longitud}}
            apikey={credentials.GOOGLE_MAP_KEY}
            strokeColor = "black"
            strokeWidth={6}
          /> */}
          </MapView>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%'
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });