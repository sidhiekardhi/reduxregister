import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { IconBack, RegisterIcon } from '../../assets'
import { Button, Input } from '../../component'
import { setForm } from '../../redux'
import { colors } from '../../utils'

const Register = () => {
    const globalState = useSelector((state) => state.RegisterReducer)
    const dispatch = useDispatch()
    // const [form, setForm] = useState({
    //     fullname: '',
    //     email: '',
    //     password: ''
    // })

    useEffect(() => {
         console.log(globalState);
    }, [])

    const sendData = () => {
        console.log("data + " + JSON.stringify(globalState.form));
    }

    const onInputChange = (value, inputType) => {
        // setForm({
        //     ...form,
        //     [input]: value,
        // })
        dispatch(setForm(inputType, value))
    }
    return (

        <View style={styles.wrapper.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            {/* <IconBack width={20} height={20} style={{marginTop: 4}}/> */}
            <RegisterIcon width={108} height={115} style={styles.ilustration} />
            <View style={styles.ilustration}/>
            <Text style={styles.text.desc}>Mohon mengisi beberapa data {globalState.alamat} </Text>
            <View style={styles.space(64)}/>
            <Input placeholder="Masukkan Nama" value={globalState.form.fullname} onChangeText={(value) => onInputChange(value, 'fullname')}/>
            <View style={styles.space(33)}/>
            <Input placeholder="Masukkan Email" value={globalState.form.email} onChangeText={(value) => onInputChange(value, 'email')}/>
            <View style={styles.space(33)}/>
            <Input placeholder="Masukkan Password" value={globalState.form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true}/>
            <View style={styles.space(33)}/>
            <Button title="Daftar" onPress={() => sendData()}/>
            </ScrollView>
        </View>

    )
}

const styles= {
    wrapper : {
        page : {
            padding : 20
        },
    },
    ilustration: {
        backgroundColor: colors.default,
        marginTop: 8
    },
    text : {
        desc : {
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.default,
            marginTop: 16,
            maxWidth: 200
        }
    },
    space : (value) => {
        return {
            height: value
        }
    }
}

export default Register
