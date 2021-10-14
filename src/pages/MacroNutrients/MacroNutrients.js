import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { macroNutrientsInputs } from '../../DataBase/coffeeInputs';
import InputField from '../../components/InputField';
import MacroNutrientsOutputs from './MacroNutrientsOutput';

const MacroNutrients = ({ hasSoloAnalisys }) => {
    const [macroNutrientsValues, setMacroNutrientsValues] = useState([...macroNutrientsInputs]);

    useEffect(
        () => setMacroNutrientsValues(
            () => {
                const aux = [...macroNutrientsValues]
                aux[4].value = 8;
                aux[5].value = 80;
                return aux;
            })
        , [hasSoloAnalisys]
    )


    return (
        <View style={localStyle.main}>
            <Text style={localStyle.title}>Informações de Plantio</Text>
            {
                macroNutrientsValues.map((macroNutrient, key) =>
                    !hasSoloAnalisys && (macroNutrient.item === 'phosphor' || macroNutrient.item === 'potassium') ?
                        '' :
                        <InputField
                            key={key}
                            macroNutrient={macroNutrient}
                            macroNutrientsValues={macroNutrientsValues}
                            hasSoloAnalisys={hasSoloAnalisys}
                            setMacroNutrientsValues={setMacroNutrientsValues}
                        />
                )
            }
            <MacroNutrientsOutputs macroNutrientsValues={macroNutrientsValues} />
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