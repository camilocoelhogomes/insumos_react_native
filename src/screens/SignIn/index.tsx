import React, { useState } from 'react'
import { View, Text, TextInput, Image, StatusBar } from 'react-native'

import { styles } from './styles'
import { ButtonIcon } from '../../components/LoginButtonIcon'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
//import {IllustrationImg} from '../../assets/illustration.png'
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

      <Image
        source={require('../../assets/illustration.png')}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e melhore sua {`\n`}
          produtividade
        </Text>
        <Text style={styles.subtitle}>
          Calcule os insumos necessários e {`\n`}
          encontre os melhores preços.
        </Text>
        <ButtonIcon
          title="Entrar com Google"
          method={true}
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}
