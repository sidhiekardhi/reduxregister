import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../utils'
import ActionButton from './ActionButton'
import {  WelcomeAuthLogo} from "../../assets";



const WelcomeAuth = ({navigation}) => {
    const handleGoTo= (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.wrapper.page}>
        <Image source={WelcomeAuthLogo} style={styles.wrapper.ilustration}/>
            <Text style={styles.text.Welcome}>Selamat datang di OJOL</Text>
            <ActionButton desc="Silahkan Masuk, jika memiliki akun" title="Masuk" onPress={()=> handleGoTo('Login')}/>
            <ActionButton desc="Silahkan daftar jika belum memiliki akun" title="Daftar" onPress={() => handleGoTo('Register')}/>
        </View>
    )
}

const styles= {
    wrapper : {
        page : {alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: 'white'},
        ilustration : {width: 219, height: 117, marginBottom: 10} 
    },
    text : {
        Welcome : {fontSize: 18, fontWeight: 'bold', color: colors.default, marginBottom: 76}
    }
}

export default WelcomeAuth
