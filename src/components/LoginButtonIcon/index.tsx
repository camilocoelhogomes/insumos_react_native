import React from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { styles } from './styles'

import DiscordImg from '../../assets/discord.png'
import GoogleImg from '../../assets/google.png'

type ButtonProps = TouchableOpacityProps & {
  title: string
  method: boolean
}

export function ButtonIcon({ title, method, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={method ? GoogleImg : DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
