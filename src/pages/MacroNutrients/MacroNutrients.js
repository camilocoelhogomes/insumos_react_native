import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { macroNutrientsInputs } from '../../DataBase/coffeeInputs';
import InputField from '../../components/InputField';
import MacroNutrientsOutputs from './MacroNutrientsOutput';
const MacroNutrients = () => {
    const [macroNutrientsValues, setMacroNutrientsValues] = useState([...macroNutrientsInputs]);

    return (
        <View style={localStyle.main}>
            <Text style={localStyle.title}>Informações de Plantio</Text>
            {
                macroNutrientsValues.map((macroNutrient, key) =>
                    <InputField
                        key={key}
                        macroNutrient={macroNutrient}
                        macroNutrientsValues={macroNutrientsValues}
                        setMacroNutrientsValues={setMacroNutrientsValues}
                    />
                )
            }
            <MacroNutrientsOutputs />
        </View>
    )
}

export default MacroNutrients;

const localStyle = StyleSheet.create({
    main: {
        padding: 20,
    },
    title: {
        alignItems: "center",
    }
})