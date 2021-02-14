import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight,TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import index from './src/router';
import Router from './src/router';
import { store } from './src/redux';





export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
      <Router/>
      </NavigationContainer>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle : {
    fontSize: 20,
    fontWeight: 'bold'
  }
});


