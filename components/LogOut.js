import React from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';
import { Icon, Button, Text } from 'react-native-elements';
import {NavigationActions} from 'react-navigation'
export default class LogOut extends React.Component{

    LogOut(params) {
        const {nav} = this.props.nav.dispatch;
        nav(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Login'})
            ]
        }));
    }

    render(){
        return(
            <View >
                <TouchableOpacity /*onPress={ this.LogOut.bind(this) }*/>
                    <Icon name="repeat" />
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    LogOut: {
        flex : 1,
        height: 5,
        width: 5
    }
})