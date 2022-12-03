import React from 'react'
import { StyleSheet, Text,View } from 'react-native'

export const login = () => {
  return (
    <View style={styles.container}>
        Este es el login
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
