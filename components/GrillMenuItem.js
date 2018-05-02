import React from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, View,ListView } from 'react-native';
import { Card, Button, colors } from 'react-native-elements';

export default class SubMenuItem extends React.Component{
    componentDidMount(){
    }

    render(){
        return(
            <View style={styles.SubMenuItemContainer}>
                <View>
                    <Text style={styles.headerText}>GRILL</Text>
                </View>
                <View style={{marginLeft: 20, flex: .5}}>
                    <Text style={styles.SubMenuItemText}>Pick a tasty item off our grills menu. Make sure to add fries with</Text>
                </View>   
                <View style={{marginLeft:20, flex: .25,}}>
                    <Button
                        icon={{name: 'code'}}
                        backgroundColor={Colors.whitworthRed}
                        title="BUY"
                        buttonStyle={styles.SubMenuItemBtn}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SubMenuItemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 500,
        height: 200,
        backgroundColor : '#FFFFFF',
        borderTopColor: '#000000',
        borderTopWidth: 4,
        borderBottomColor: '#000000',
        borderBottomWidth: 4,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 20,
        borderColor: Colors.whitworthBlack,
        alignContent: 'center',
        height: 180,
    },
    SubMenuItemText: {
        fontSize: 20,
        width: 120,
        height: 120,
        borderColor: Colors.whitworthBlack,
    },
    SubMenuItemBtn:{
        height:120,
        width: 80,
        flex: 1,
    }
})