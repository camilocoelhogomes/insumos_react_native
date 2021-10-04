import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { MaskedTextInput } from "react-native-mask-text";

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
    }
})