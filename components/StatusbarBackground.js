import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StatusbarBackground extends React.Component{
    render(){
        return(
            <View style={styles.statusbarBackground}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusbarBackground: {
        height: 20,
    }
})