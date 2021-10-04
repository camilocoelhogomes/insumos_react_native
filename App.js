import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MacroNutrients from './src/pages/MacroNutrients/MacroNutrients';

export default function App() {
  return (
    <View style={styles.container}>
      <MacroNutrients />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});
