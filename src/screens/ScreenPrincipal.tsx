import { StatusBar } from "expo-status-bar";
import CSS from 'csstype';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

function ContainerExample(){
    const handleClick = () => {
        // Add code to handle the click event here
    };
    
    return (
        <View style={styles.container}>
                <Image
                    style={{ width: 350, height: 200, marginBottom: 15 }}
                    source={require("./assets/mecanico1.png")}
                />
                <View style={styles.btnContainer}>
                <Button color={'#A22C29'} onClick={handleClick} title="Ver Mecanicos"></Button>
                <Button color={'#A22C29'} onClick={handleClick} title="Hacer Consulta"></Button>
                <Button color={'#A22C29'} onClick={handleClick} title="¿Estás solo? Encuentra Mecánicos en tu área!"></Button>
                </View>    
            </View>
    );
}

export default ContainerExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6D5C9',
    },
    imageContainer: {
        flex: 1,
    paddingTop: 210,
    },
    btnContainer:{
        padding:20,
    },
});
