import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, View, Text, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import MacroNutrients from './src/pages/MacroNutrients/MacroNutrients';

export default function App() {
  const [loaded] = useFonts({
    Inter500: require('./assets/fonts/Inter-Medium.ttf'),
    Inter400: require('./assets/fonts/Inter-Regular.ttf'),
  });

  const [hasSoloAnalisys, setHasSoloAnalisys] = useState(true);

  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.soloAnalisysArea}>
        <Text>Possui análise de solo?</Text>
        <Switch
          style={styles.switch}
          value={hasSoloAnalisys}
          onValueChange={() => setHasSoloAnalisys(!hasSoloAnalisys)}
          trackColor={{ false: "#767577", true: "#FA5F4399" }}
          thumbColor={hasSoloAnalisys ? "#FA5F43" : "#F0754F"}
          ios_backgroundColor="#FA5F43"
        />
      </View>
      <MacroNutrients />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  soloAnalisysArea: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
  }
});
