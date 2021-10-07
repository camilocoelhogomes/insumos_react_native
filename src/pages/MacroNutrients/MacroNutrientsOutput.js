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

    const [output, setOutput] = useState(coffeeMacroCalculation({ productivity: productivity.value }));

    useEffect(() => {
        setOutput(coffeeMacroCalculation({ productivity: productivity.value }))
    }, [macroNutrientsValues])

    return (
        <View>
            <Text>
                N: {output[0]} P:{output[1]} K: {output[2]}
            </Text>
        </View>
    )
}


export default MacroNutrientsOutputs;