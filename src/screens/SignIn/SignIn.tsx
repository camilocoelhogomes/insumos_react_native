import React, { useState } from 'react'
import { View, Text, TextInput, Image, StatusBar } from 'react-native'
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

import { ButtonIcon } from '../../components/LoginButtonIcon/LoginButtonIcon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import LogoVerticalSvg from '../../../assets/img/logoVertical.svg'
import { LinnedInput } from '../../components/LinnedInput/LinnedInput'
import { LinearButton } from '../../components/LinearButton/LinearButton'

export function SignIn() {
  //const [text, setText] = useState('')
  async function handleSignIn() {
    const navigation = useNavigation<NativeStackNavigationProp<any, any>>()
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <LogoVerticalSvg width={100} height={100} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e melhore sua {`\n`}
          produtividade.
        </Text>
        <Text style={styles.subtitle}>
          Calcule os insumos necessários e {`\n`}
          encontre os melhores preços.
        </Text>
        <ButtonIcon methodId="google" onPress={handleSignIn} />
        <ButtonIcon methodId="facebook" onPress={handleSignIn} />
        <ButtonIcon methodId="apple" onPress={handleSignIn} />

        <View style={styles.separator}>
          <View style={styles.separatorLine} />
          <Text>OU</Text>
          <View style={styles.separatorLine} />
        </View>

        <LinnedInput type="Email" />
        <LinnedInput type="Senha" />

        <View style={styles.registerLoginButtons}>
          <LinearButton label="LOGIN" />
          <LinearButton label="REGISTRAR" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: 200,
    height: 200
  },
  content: {
    marginTop: -40,
    padding: 50
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16
  },
  subtitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 64
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  separatorLine: {
    width: 150,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: theme.colors.subtitle
  },
  registerLoginButtons: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
