import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../utils'

const Input = ({placeholder, ...rest}) => {
    return (
        <View>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.default} {...rest}/>
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: colors.default,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 18,
        fontSize: 14,
        color: colors.default
    }
})

export default Input
