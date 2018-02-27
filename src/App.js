import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Authentication from './Authentication.js'
import Register from './Register.js'

class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Authentication,
          title: 'Login',
          passProps: {index: 1}
        }}
        style={{flex: 1}}
      />
    );
  }
}


export default class SimpleApp extends React.Component{
  render(){
    return (
      <App/>
    )
  }
}

