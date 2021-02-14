import { combineReducers } from "redux"

const initialState={
    name:"sidhiek ardhiansah"
}

const initialStateRegister= {
    form : {
        fullname: '',
        email: '',
        password: ''
    },
    alamat:"solo baru",
    propinsi: "jawa tengah"
}
const initialStateLogin= {
    form:{
        email:'',
        password: ''
    },
    username:"solo baru",
    kelas: "10"
}

const RegisterReducer = (state= initialStateRegister, action) => {
    if (action.type === "SET_TITLE") {
        return {
            ...state,
            alamat: 'register here'
        }
    }
    if (action.type === "SET_FORM") {
        return{
            ...state,
            form : {
                ...state.form,
                [action.inputType] : action.inputValue
            }
        }
    }
    return state
}
const LoginReducer = (state= initialStateLogin, action) => {
    if (action.type === "SET_LOGIN") {
        return{
            ...state,
            form : {
                ...state.form,
                [action.inputType] : action.inputValue
            }
        }
    }
    return state
}


const reducer = combineReducers({
    RegisterReducer, LoginReducer
})

export default reducer;