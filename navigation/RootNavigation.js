import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/Authentication';
import Register from '../screens/Register';
import LoggedIn from '../screens/LoggedIn';

const RootStackNavigator = StackNavigator(
    {
        Login: {
            screen: Login 
        },

        Register: {
            screen: Register
        },
        LoggedIn: {
            screen: LoggedIn
        },
    },
    {
        navigationOptions: () => ({
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }),
    }
);

export default class RootNavigator extends React.Component{
    render(){
        return (
            <RootStackNavigator />
        )
    }
}