import React from 'react'
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  StyleSheet
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type LinearButtonProps = TouchableOpacityProps & {
  label: string
}

export function LinearButton({ label, ...rest }: LinearButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={['#FA5F43', '#D63E3E']}
          style={styles.gradient}
          start={[0, 1]}
          end={[1, 0]}
        >
          <Text style={styles.text}>{label}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button: {
    width: '70%',
    height: 45
  },
  text: {
    color: 'white',
    fontSize: 16
  }
})
