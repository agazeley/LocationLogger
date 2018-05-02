import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/Authentication';
import Register from '../screens/Register';
import Profile from '../screens/Profile';
import LogOut from '../components/LogOut';
import Menu from '../screens/Menu';
import ViewLocations from '../screens/ViewLocations';
import Customize from '../screens/Customize';
import Subs from '../screens/Subs';
import TabNavigation from '../navigation/TabNavigation';
import {View, Text} from 'react-native';

const RootStackNavigator = StackNavigator(
    {
        Login: {
            screen: Login 
        },
        Register: {
            screen: Register
        },
        Menu : {
            screen : TabNavigation,
            navigationOptions: ({navigation}) => ({
                headerLeft: <LogOut nav={navigation}/>
            })
        },
        Subs : {
            screen : Subs,
            navigationOptions : ({navigation}) => ({
                title : 'SUBS',
            })
        },
        Customize : {
            screen : Customize,
            navigationOptions : ({navigation}) => ({
                title: 'Add Item'
            })
        }
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