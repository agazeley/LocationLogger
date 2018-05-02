import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, TabView, tabBarIcon } from 'react-navigation';
import { Icon,Button } from 'react-native-elements';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Menu from '../screens/Menu';
import Colors from '../constants/Colors';

const TabNavigation = TabNavigator({
    Profile: { 
        screen: Profile,
        navigationOptions: {
            title: "Profile",
            tabBarIcon: ({ focused }) => (
                focused ?
                <Icon name="home" />:
                <Icon name="home" />
              ),
        } 
    },
    Menu: { 
        screen: Menu,
        navigationOptions: {
            title: "Menu",
            tabBarIcon: ({ focused }) => (
                focused ?
                <Icon name="menu" />:
                <Icon name="menu" />
              ),
        } 
    },
    Cart: { 
        screen: Cart,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                focused ?
                <Icon name="shopping-cart" />:
                <Icon name="shopping-cart" />
              ),
        } 
    },
  }, {
    order: ['Menu', 'Cart', 'Profile'],
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        showIcon: true,
        showLabel:true,
        activeBackgroundColor: Colors.whitworthRed,
        inactiveBackgroundColor: "#FFFFFF",
        activeTintColor:"#FFFFFF",
        inactiveTintColor: Colors.whitworthBlack
    }
  });


  export default TabNavigation;