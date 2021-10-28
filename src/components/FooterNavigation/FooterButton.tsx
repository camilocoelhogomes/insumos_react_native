import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { theme } from '../../global/styles/theme'
import HomeSvg from '../../assets/home.svg'
import CalculatorSvg from '../../assets/calculator.svg'
import CartSvg from '../../assets/cart.svg'
import UserSvg from '../../assets/user.svg'

import { Text } from 'react-native'

const imageSources = [
  {
    id: 'home',
    icon: <HomeSvg fill={theme.colors.primary} />
  },
  {
    id: 'calculator',
    icon: <CalculatorSvg fill={theme.colors.primary} />
  },
  {
    id: 'cart',
    icon: <CartSvg fill={theme.colors.primary} />
  },
  {
    id: 'user',
    icon: <UserSvg fill={theme.colors.primary} />
  }
]

type ButtonProps = RectButtonProps & {
  title: string
  id: string
}

export function FooterButton({ title, id, ...rest }: ButtonProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.icon}>
        {
          imageSources.find(item => {
            return item.id === id
          })?.icon
        }
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 14,
    paddingVertical: 4,
    borderWidth: 0
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0
  }
})
