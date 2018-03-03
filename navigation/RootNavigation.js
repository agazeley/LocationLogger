import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/Authentication';
import Register from '../screens/Register';
import LoggedIn from '../screens/LoggedIn';
import ViewUsers from '../screens/ViewUsers';

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
        ViewUsers: {
            screen : ViewUsers
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