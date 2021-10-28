import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

import { MainHeader } from '../../components/MainHeader/MainHeader'
import { FooterButton } from '../../components/FooterNavigation/FooterButton'

import { theme } from '../../global/styles/theme'

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>()

  function handleSimulator() {
    navigation.navigate('Simulator')
  }
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.main}>
        <Text style={styles.title}>Home Page</Text>
      </View>
      <View style={styles.footer}>
        <FooterButton title="Home" id="home" />
        <FooterButton
          title="Simulador"
          id="calculator"
          onPress={handleSimulator}
        />
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
  header: {
    width: '100%',
    height: 60,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    borderWidth: 0,
    marginBottom: 42
  },
  logo: {
    width: 120,
    height: 50,
    borderWidth: 1
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
    fontSize: 60,
    alignSelf: 'center'
  }
})
