import { StatusBar } from "expo-status-bar";
import CSS from 'csstype';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

function ContainerExample(){
    const handleClick = () => {
        // Add code to handle the click event here
    };
    
    return (
        <View>
            <Image
                style={{ width: 350, height: 200, marginBottom: 15 }}
                source={require("./assets/mecanico1.png")}
            />
            <Button style={styles.button} onClick={handleClick} title="Ver Mecanicos"></Button>
            <Button onClick={handleClick} title="Hacer Consulta"></Button>
            <Button onClick={handleClick} title="¿Estás solo? Encuentra Mecánicos en tu área!"></Button>
        </View>
    );
}

export default ContainerExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
        fontSize: 24,
        padding: 10,
    },
});
