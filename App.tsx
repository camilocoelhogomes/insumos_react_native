import React from 'react'
import { Routes } from './src/routes'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Routes />
}
