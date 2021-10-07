import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, View, Text, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import MacroNutrients from './src/pages/MacroNutrients/MacroNutrients';

export default function App() {
  const [loaded] = useFonts({
    Inter100: require('./assets/fonts/Inter-Thin.ttf'),
    Inter200: require('./assets/fonts/Inter-ExtraLight.ttf'),
    Inter300: require('./assets/fonts/Inter-Light.ttf'),
    Inter400: require('./assets/fonts/Inter-Regular.ttf'),
    Inter500: require('./assets/fonts/Inter-Medium.ttf'),
    Inter600: require('./assets/fonts/Inter-SemiBold.ttf'),
    Inter700: require('./assets/fonts/Inter-Bold.ttf'),
    Inter800: require('./assets/fonts/Inter-ExtraBold.ttf'),
    Inter900: require('./assets/fonts/Inter-Black.ttf'),
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
