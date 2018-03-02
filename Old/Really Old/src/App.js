import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native'
import Authentication from './Components/Authentication.js'
import Register from './Components/Register.js'
import Colors from './State/Colors.js'
import MainPage from './Components/MainPage.js'


import AppReducer from './Reducers/AppReducer'
import AppWithNavigationState from './Components/AppNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  store = createStore(AppReducer);
  
  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

