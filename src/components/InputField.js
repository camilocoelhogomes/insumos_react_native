import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const InputField = ({ macroNutrient, macroNutrientsValues, setMacroNutrientsValues }) => {
    const {
        value,
        unit,
        label,
        item,
        step
    } = macroNutrient

    const changeHandler = (value, item) => {
        const NewMacroNutrientsValues = macroNutrientsValues.map(macroNutrient => {
            if (macroNutrient.item === item) {
                return { ...macroNutrient, value: Number(value).toFixed(0) }
            }
            return { ...macroNutrient }
        })
        setMacroNutrientsValues(NewMacroNutrientsValues);
    }

    const buttonChange = (value, step, item, operation) => {
        const NewMacroNutrientsValues = macroNutrientsValues.map(macroNutrient => {
            if (macroNutrient.item === item) {
                if (operation === '+') {
                    return { ...macroNutrient, value: Math.round((Number(value) + step) * 100) / 100 }
                }
                if (operation === '-') {
                    return { ...macroNutrient, value: Math.round((Number(value) - step) * 100) / 100 }
                }
            }
            return { ...macroNutrient }
        })
        setMacroNutrientsValues(NewMacroNutrientsValues);
    }

    return (
        <View style={localStyle.main}>
            <View style={localStyle.inputArea}>
                <Text style={localStyle.inputLabel}>{label}</Text>
                <View style={localStyle.inputPlaceHolder}>
                    <TextInput
                        style={localStyle.input}
                        onChangeText={(value) => changeHandler(value, item)}
                        keyboardType='numeric'
                        value={value.toString()}
                    />
                    <Text style={localStyle.unit}>{' ' + unit}</Text>
                </View>
            </View>
            <View style={localStyle.buttomArea}>
                <TouchableHighlight underlayColor="#F0754FEA" style={localStyle.buttomMinus} onPress={() => buttonChange(value, step, item, '-')}>
                    <View >
                        <FontAwesome name="minus" size={24} color="white" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#FA5F43EA" style={localStyle.buttomPlus} onPress={() => buttonChange(value, step, item, '+')}>
                    <View >
                        <FontAwesome name="plus" size={24} color="white" />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default InputField

const localStyle = StyleSheet.create({
    main: {
        justifyContent: 'space-between',
        alignSelf: "stretch",
        height: 81,
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
    },

    inputArea: {
        justifyContent: 'space-between',
    },

    inputLabel: {
        fontFamily: 'Inter500',
        fontSize: 15,
    },
    inputPlaceHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#A3A3A3',
        width: 180,
        height: 40,
        justifyContent: 'flex-end',
    },
    input: {
        height: 40,
        textAlign: 'right',
        fontSize: 16,
        width: '50%',
        fontFamily: 'Inter400'
    },
    unit: {
        fontSize: 16,
        fontFamily: 'Inter400'
    },
    buttomArea: {
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    buttomPlus: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#FA5F43",
        borderRadius: 40,
        width: 40,
        height: 40,
    },

    buttomMinus: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#F0754F",
        borderRadius: 40,
        width: 40,
        height: 40,
    }

})