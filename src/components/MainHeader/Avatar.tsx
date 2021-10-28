import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image } from 'react-native'
import { theme } from '../../global/styles/theme'

type AvatarProps = {
  urlImage: string
}

export function Avatar({ urlImage }: AvatarProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.primary, theme.colors.secondary100]}
    >
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  )
}

import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 21
  }
})
