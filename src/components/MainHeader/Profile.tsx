import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { Avatar } from './Avatar'

export function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>Lucas</Text>
      <Avatar urlImage="https://github.com/lucasmavila.png" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0,
    justifyContent: 'flex-end'
  },
  username: {
    fontSize: 20,
    paddingHorizontal: 5
  }
})
