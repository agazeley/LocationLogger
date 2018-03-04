import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/Authentication';
import Register from '../screens/Register';
import Profile from '../screens/Profile';
import ViewUsers from '../screens/ViewUsers';

const RootStackNavigator = StackNavigator(
    {
        Login: {
            screen: Login 
        },
        Register: {
            screen: Register
        },
        Profile: {
            screen: Profile
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