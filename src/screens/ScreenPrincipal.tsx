//import { StatusBar } from "expo-status-bar";
//import CSS from 'csstype';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const handleClick = () => {
    // Cambiamos la vista de la aplicación utilizando el componente StackNavigator
    
}

const ContainerExample = ({ navigation }) =>(
    <SafeAreaView style={styles.container}>
        <View >
                <Image
                    style={{ width: 360, height: 200, margin:15, }}
                    source={require("./assets/mecanico1.png")}
                />
        </View>
        <View >
                <TouchableOpacity 
                    style={styles.btnContainer}
                    onPress={() => navigation.navigate('')} 
                >
                    <Text style={styles.fixToText}>
                        Ver Mecanicos
                    </Text>
                </TouchableOpacity>

                <Separator></Separator>

                <TouchableOpacity 
                    style={styles.btnContainer}
                    onPress={() => navigation.navigate('Inicio')}  
                >
                    <Text style={styles.fixToText}>
                        ¿Estás solo? 
                    </Text>
                    <Text style={styles.fixToText}>
                    Encuentra Mecánicos en tu área!
                    </Text>
                </TouchableOpacity>
            
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
        width: 360, height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A22C29',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#D6D5C9',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    fixToText: {
        display: 'flex',
        fontSize:20,
        color:'#fff',
    },
});
