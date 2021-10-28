import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  View,
  Text,
  StatusBar
} from 'react-native'
import { useFonts } from 'expo-font'
import MacroNutrients from './MacroNutrients/MacroNutrients'
import { useState } from 'react'

export default function Calculator() {
  /*const [loaded] = useFonts({
    Inter500: require('../../../assets/fonts/Inter-Medium.ttf'),
    Inter400: require('../../../assets/fonts/Inter-Regular.ttf')
  })
  
  if (!loaded) return null
  */

  const [hasSoloAnalisys, setHasSoloAnalisys] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.soloAnalisysArea}>
        <Text style={{ fontSize: 20 }}>Possui análise de solo?</Text>
        <Switch
          style={styles.switch}
          value={hasSoloAnalisys}
          onValueChange={() => setHasSoloAnalisys(!hasSoloAnalisys)}
          trackColor={{ false: '#767577', true: '#FA5F4399' }}
          thumbColor={hasSoloAnalisys ? '#FA5F43' : '#F0754F'}
          ios_backgroundColor="#FA5F43"
        />
      </View>
      <MacroNutrients />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  soloAnalisysArea: {
    paddingHorizontal: 25,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
  }
})
