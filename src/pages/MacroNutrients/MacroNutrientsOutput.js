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

    return (
        <View>
            <Text>
                N max: {output[0].max}, N min: {output[0].min}
                P max: {output[1].max}, P min: {output[1].min}
                K max: {output[2].max}, K min: {output[2].min}
            </Text>
        </View>
    )
}


export default MacroNutrientsOutputs;