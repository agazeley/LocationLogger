import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class LoggedIn extends React.Component{
    
    static navigationOptions = {
        title: 'LoggedIn',
        headerLeft: null,
    };

    render(){
        return(
            <Text>You are logged in!</Text>
        )
    }

}