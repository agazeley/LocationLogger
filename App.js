import React from 'react';
import {StyleSheet} from 'react-native'
import RootNavigator from './navigation/RootNavigation';


export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <RootNavigator />
    );
  }
}