import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MapComponent } from "../components/MapComponent";

export const MapScreen = () =>{
    return (
        <View style= {styles.container}>
            <MapComponent/>

        </View >
        
        
        
    )
    
}


const styles = StyleSheet.create({
    container: {
        felx: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
});