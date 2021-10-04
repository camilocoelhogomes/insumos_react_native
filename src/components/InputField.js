import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableHighlight } from 'react-native';



const InputField = ({ macroNutrient }) => {
    const {
        value,
        unit,
        label,
        item
    } = macroNutrient



    return (
        <View style={localStyle.main}>
            <Text style={localStyle.inputLabel}>{label}</Text>
            <TextInput
                placeholder={unit}
                keyboardType='numeric'
            />
            <View>
                <TouchableHighlight >
                    <View >
                        <Text>Mais</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight >
                    <View >
                        <Text>Menos</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default InputField

const localStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: "stretch"
    },
    inputLabel: {
        fontFamily: 'Inter500',
        fontSize: 15,
    }
})