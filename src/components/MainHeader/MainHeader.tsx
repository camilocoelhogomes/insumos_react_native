import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import LogoHorizontalSvg from '../../../assets/img/logoHorizontal.svg'

import { Profile } from './Profile'

import { theme } from '../../global/styles/theme'
import { StatusBar } from 'expo-status-bar'

export function MainHeader() {
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="transparent" />
      <LogoHorizontalSvg width={120} height={120} />
      <Profile />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 10,
    borderWidth: 0,
    marginBottom: 10
  }
})
