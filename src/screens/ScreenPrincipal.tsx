import React from 'react';
import Image from 'react-bootstrap/Image';
import { StyleSheet, Text, View } from 'react-native';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function ContainerExample () {
    return (
        <View style={styles.container}>
            <Container>
                <Row>
                    <Col>
            <Text>1 of 1</Text>
                    </Col>
                </Row>
            </Container>
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
