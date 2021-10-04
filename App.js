import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import MacroNutrients from './src/pages/MacroNutrients/MacroNutrients';

export default function App() {
  const [loaded] = useFonts({
    Inter500: require('./assets/fonts/Inter-Medium.ttf'),
    Inter400: require('./assets/fonts/Inter-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <MacroNutrients />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
