import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'

import { theme } from '../../global/styles/theme'

type LinnedInputProps = {
  type: string
}

export function LinnedInput({ type }: LinnedInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{type}</Text>
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.text500
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 56,
    borderColor: theme.colors.lightSubtitle,
    backgroundColor: theme.colors.backgroundContrast,
    paddingHorizontal: 10,
    marginHorizontal: 0
  }
})
