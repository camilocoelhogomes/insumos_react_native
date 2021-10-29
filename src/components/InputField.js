import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../global/styles/theme'

const InputField = ({
  macroNutrient,
  macroNutrientsValues,
  setMacroNutrientsValues
}) => {
  const { value, unit, label, item, step } = macroNutrient

  const changeHandler = (value, item) => {
    const NewMacroNutrientsValues = macroNutrientsValues.map(macroNutrient => {
      if (macroNutrient.item === item) {
        return { ...macroNutrient, value: Number(value) }
      }
      return { ...macroNutrient }
    })
    setMacroNutrientsValues(NewMacroNutrientsValues)
  }

  const buttonChange = (value, step, item, operation) => {
    const NewMacroNutrientsValues = macroNutrientsValues.map(macroNutrient => {
      if (macroNutrient.item === item) {
        if (operation === '+') {
          return { ...macroNutrient, value: Number(value + step) }
        }
        if (operation === '-') {
          return { ...macroNutrient, value: Number(value - step) }
        }
      }
      return { ...macroNutrient }
    })
    setMacroNutrientsValues(NewMacroNutrientsValues)
  }

  return (
    <View style={localStyle.main}>
      <View style={localStyle.inputArea}>
        <Text style={localStyle.inputLabel}>{label}</Text>
        <View style={localStyle.inputUnit}>
          <TextInput
            style={localStyle.input}
            onChangeText={value => changeHandler(value, item)}
            keyboardType="numeric"
            value={value.toString()}
          />
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 15,
              borderWidth: 0,
              textAlign: 'left',
              color: theme.colors.subtitle
            }}
          >
            {unit}
          </Text>
        </View>
      </View>

      <View style={localStyle.buttomArea}>
        <TouchableHighlight
          underlayColor="#F0754FEA"
          style={localStyle.buttomMinus}
          onPress={() => buttonChange(value, step, item, '-')}
        >
          <View>
            <FontAwesomeIcon icon={faMinus} color="white" />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="#FA5F43EA"
          style={localStyle.buttomPlus}
          onPress={() => buttonChange(value, step, item, '+')}
        >
          <View>
            <FontAwesomeIcon icon={faPlus} color="white" />
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
    alignSelf: 'stretch',
    height: 81,
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
    marginBottom: 10
  },

  inputArea: {
    justifyContent: 'space-between'
  },

  inputLabel: {
    fontFamily: theme.fonts.text500,
    fontSize: 16,
    color: theme.colors.title
  },
  inputUnit: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },

  input: {
    height: 40,
    textAlign: 'left',
    fontSize: 20,
    width: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#A3A3A3',
    fontFamily: theme.fonts.text500
  },

  buttomArea: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },

  buttomPlus: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5F43',
    borderRadius: 40,
    width: 40,
    height: 40
  },

  buttomMinus: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0754F',
    borderRadius: 40,
    width: 40,
    height: 40
  }
})
