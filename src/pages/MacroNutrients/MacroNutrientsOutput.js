import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { coffeeMacroCalculation } from '../../DataBase/coffeeMacroCalculation';
const MacroNutrientsOutputs = ({ macroNutrientsValues }) => {
    const [
        productivity,
        distanceLines,
        distancePlants,
        temperature,
        phosphor,
        potassium
    ] = macroNutrientsValues

    const [output, setOutput] = useState(coffeeMacroCalculation({
        productivity: productivity.value,
        distanceLines: distanceLines.value,
        distancePlants: distancePlants.value,
        temperature: temperature.value,
        phosphor: phosphor.value,
        potassium: potassium.value,
    }));

    useEffect(() => {
        setOutput(coffeeMacroCalculation({
            productivity: productivity.value,
            distanceLines: distanceLines.value,
            distancePlants: distancePlants.value,
            temperature: temperature.value,
            phosphor: phosphor.value,
            potassium: potassium.value,
        }))
    }, [macroNutrientsValues])

    console.log(output)
    return (
        <View>

        </View>
    )
}


export default MacroNutrientsOutputs;