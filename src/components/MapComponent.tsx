import React from 'react';
import * as Location from 'expo-location'
import MapView,  {Marker, Polyline} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import credentials from '../../credentials';

export const MapComponent = () =>{
    const  [Origin, SetOrigin] = React.useState({
      latitud: -33.450648, 
      longitud: -70.674320
    })
    const  [Destination, SetDestination] = React.useState({
      latitud: -33.427747, 
      longitud: -70.658539
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
            
            // onDragEnd = {(direction) => SetOrigin(direction.nativeEvent.coordinate)}
          />
          <Marker 
            coordinate={{latitude: Destination.latitud, longitude: Destination.longitud}}
          />
          {/* <Polyline
            coordinates = {[{latitude: Origin.latitud,longitude: Origin.longitud},{latitude: Destination.latitud, longitude: Destination.longitud}]}

          /> */}

          <MapViewDirections
            origin={{latitude: Origin.latitud,longitude: Origin.longitud}}
            destination={{latitude: Destination.latitud, longitude: Destination.longitud}}
            apikey={credentials.GOOGLE_MAP_KEY}
            strokeColor = "black"
            strokeWidth={6}
          />

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