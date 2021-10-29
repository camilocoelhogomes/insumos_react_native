import React from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

import GoogleSvg from '../../assets/googleIcon.svg'
import FacebookSvg from '../../assets/facebookIcon.svg'
import AppleSvg from '../../assets/appleIcon.svg'

const methods = [
  {
    id: 'google',
    icon: <GoogleSvg height={25} width={25} />,
    title: 'Entrar com Google'
  },
  {
    id: 'facebook',
    icon: <FacebookSvg height={25} width={25} />,
    title: 'Entrar com Facebook'
  },
  {
    id: 'apple',
    icon: <AppleSvg height={25} width={25} />,
    title: 'Entrar com Apple'
  }
]

type ButtonProps = TouchableOpacityProps & {
  methodId: string
}

export function ButtonIcon({ methodId, ...rest }: ButtonProps) {
  const method = methods.find(method => {
    return method.id === methodId
  })
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>{method?.icon}</View>
      <Text style={styles.title}>{method?.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.backgroundContrast,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: theme.colors.lightSubtitle
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    textAlign: 'center'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.lightSubtitle
  },
  icon: {
    width: 24,
    height: 18
  }
})
