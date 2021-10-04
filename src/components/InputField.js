import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";
import { FontAwesome } from '@expo/vector-icons';

const InputField = ({ macroNutrient }) => {
    const {
        value,
        unit,
        label,
        item
    } = macroNutrient



    return (
        <View style={localStyle.main}>
            <View style={localStyle.inputArea}>
                <Text style={localStyle.inputLabel}>{label}</Text>
                <MaskedTextInput
                    style={localStyle.input}
                    type='currency'
                    options={{
                        suffix: ' ' + unit,
                        decimalSeparator: ',',
                        groupSeparator: '.',
                    }}
                    onChangeText={(value, rawValue) => console.log([value, rawValue])}
                    placeholder={unit}
                    keyboardType='numeric'
                />
            </View>
            <View style={localStyle.buttomArea}>
                <TouchableHighlight underlayColor="#F0754FEA" style={localStyle.buttomMinus} onPress={() => ''}>
                    <View >
                        <FontAwesome name="minus" size={24} color="white" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#FA5F43EA" style={localStyle.buttomPlus} onPress={() => ''}>
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

    input: {
        height: 40,
        keyboardType: 'numeric',
        textAlign: 'right',
        fontSize: 16,
        width: 180,
        borderBottomWidth: 1,
        borderBottomColor: '#A3A3A3',
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