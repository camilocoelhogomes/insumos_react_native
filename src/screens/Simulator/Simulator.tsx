import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { FooterButton } from '../../components/FooterNavigation/FooterButton'
import Calculator from './Calculator'
import { MainHeader } from '../../components/MainHeader/MainHeader'

import { theme } from '../../global/styles/theme'

export function Simulator() {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>()

  function handleHome() {
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <MainHeader />
      <Calculator />
      <View style={styles.footer}>
        <FooterButton title="Home" id="home" onPress={handleHome} />
        <FooterButton title="Simulador" id="calculator" />
        <FooterButton title="Carrinho" id="cart" />
        <FooterButton title="Conta" id="user" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  footer: {
    width: '100%',
    height: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.backgroundContrast
  },
  main: {},
  title: {
    fontSize: 20,
    alignSelf: 'center'
  }
})
