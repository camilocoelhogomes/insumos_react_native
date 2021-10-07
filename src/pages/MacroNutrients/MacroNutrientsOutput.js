import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { coffeeMacroCalculation } from '../../DataBase/coffeeMacroCalculation';
import OutputCard from './OutputCard';
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
        <View style={localStyle.main}>
            <Text style={localStyle.title}>Liberação Controlada</Text>
            {
                output.fertilizantesControlLiberationRecomendation.map(
                    (recomendation, key) => <OutputCard key={key} recomendation={recomendation} />
                )
            }
        </View>
    )
}


export default MacroNutrientsOutputs;

const localStyle = StyleSheet.create({
    main: {
        marginTop: 16,
    },
    title: {
        fontFamily: 'Inter600',
        fontSize: 20,
        textAlign: 'center'
    }
})