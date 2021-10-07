import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const OutputCard = ({ recomendation }) => {
    const {
        formula,
        qtaHa,
        qtdPl
    } = recomendation

    return (
        <View>
            <Text>{formula}</Text>
        </View>
    )
}

export default OutputCard;

