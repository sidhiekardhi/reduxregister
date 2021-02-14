import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../utils'


const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.wrapper.component}>
        <Text style={styles.wrapper.text}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = {
    wrapper : {
        component : {backgroundColor: colors.default, borderRadius: 25, paddingVertical: 13},
        text: {fontSize: 12, fontWeight: 'bold', color: 'white', textTransform: 'uppercase', textAlign: 'center'}
    }
}

export default Button
