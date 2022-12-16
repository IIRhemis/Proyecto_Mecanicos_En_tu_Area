//import { StatusBar } from "expo-status-bar";
//import CSS from 'csstype';
import React from 'react';
import { StyleSheet, Text, View, Image, Button,SafeAreaView} from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const handleClick = () => {
    // Add code to handle the click event here
};

const ContainerExample = () =>(
    <SafeAreaView style={styles.container}>
        <View >
                <Image
                    style={{ width: 360, height: 200, margin:15, }}
                    source={require("./assets/mecanico1.png")}
                />
        </View>
        <View >
                <Button 
                    title="Ver Mecanicos"
                    color={'#A22C29'} 
                    onPress={handleClick} 
                />
                <Separator></Separator>
                <Button 
                    color={'#A22C29'} 
                    onPress={handleClick}  
                    title="¿Estás solo? Encuentra Mecánicos en tu área!"
                />  
            
        </View>
    </SafeAreaView>
);

export default ContainerExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D6D5C9',
    },
    btnContainer:{
        padding:20,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#D6D5C9',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    fixToText: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: 15,
    },
});
