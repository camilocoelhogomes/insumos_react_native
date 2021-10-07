import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const OutputCard = ({ recomendation }) => {
    const {
        formula,
        qtdHa,
        qtdPl
    } = recomendation

    return (
        <View style={localStyle.main}>
            <View style={localStyle.outputLine}>
                <Text style={localStyle.label}>Formula:</Text>
                <Text style={localStyle.result}>{formula}</Text>
            </View>
            <View style={localStyle.outputLineBig}>
                <Text style={localStyle.label}>Quantidade por Hectare:</Text>
                <Text style={localStyle.resultBig}>{`De ${Math.round(qtdHa.min)} kg até ${Math.round(qtdHa.max)} kg`}</Text>
            </View>
            <View style={localStyle.outputLineBig}>
                <Text style={localStyle.label}>Quantidade por planta</Text>
                <Text style={localStyle.resultBig}>{`De ${Math.round(qtdPl.min)} g até ${Math.round(qtdPl.max)} g`}</Text>
            </View>
        </View>
    )
}

export default OutputCard;

const localStyle = StyleSheet.create({
    main: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.14,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 16,
        padding: 20,
    },
    outputLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    outputLineBig: {
        justifyContent: 'space-between',
    },
    label: {
        fontFamily: 'Inter700',
        color: '#F0754F',
        fontSize: 16,
        lineHeight: 24
    },
    result: {
        fontFamily: 'Inter700',
        fontSize: 16,
        color: '#30313C',
        lineHeight: 24,
    },
    resultBig: {
        fontFamily: 'Inter700',
        fontSize: 16,
        color: '#30313C',
        lineHeight: 24,
        textAlign: 'right'
    }
})

