import React from 'react';
import Image from 'react-bootstrap/Image';
import { StyleSheet, Text, View } from 'react-native';

export function ContainerExample () {
    return (
        <View style={styles.container}>
            <Text>1 of 1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
