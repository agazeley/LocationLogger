import React from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, Text, View,ListView } from 'react-native';
import { Card, Button, colors } from 'react-native-elements';
import ViewContainer from '../components/ViewContainer';

export default class CustomizeItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ingredients: []
        }
        
    }

    render(){
        const {navigate} = this.props.nav;
        return(
                <View style={styles.SubsContainer}>
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>NEW CUSTOM ORDER</Text>
                    </View>
                    <View style={styles.summaryView}>
                        <Text style={styles.SubMenuItemText}>Customize a sandwich of your own!</Text>
                    </View>   
                    <View style={styles.BtnView}>
                        <Button
                            icon={{name: 'code'}}
                            backgroundColor={Colors.whitworthRed}
                            title="Customize"
                            buttonStyle={styles.SubMenuItemBtn}
                            onPress={navigate('Customize',{ingredients:this.state.ingredients,  user: this.props.user})}
                        ></Button>
                    </View>
                </View>   
        )
    }
}

const styles = StyleSheet.create({
    SubsContainer: {
        flex: .2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 500,
        height: 100,
        backgroundColor : '#FFFFFF',
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        paddingLeft: 20,
        paddingBottom: 10,
        borderColor: '#000000',
        borderWidth: 2,

    },
    headerText: {
        fontSize: 20,
        borderColor: Colors.whitworthBlack,
        alignContent: 'center',
        height: 180,
        width: 180,
        paddingTop: 20,
    },
    SubMenuItemText: {
        fontSize: 14,
        width: 80,
        height: 120,
        borderColor: Colors.whitworthBlack,
    },
    SubMenuItemBtn:{
        height:120,
        width: 120,
        flex: 1,
    },
    BtnView: {
        paddingTop: 30,
    },
    summaryView : {
        marginLeft: 20, 
        flex: .3,
        paddingTop: 25,
    },
    headerView: {
        flex : .4, 
        paddingTop: 5,
    },
    CustomBox: {
        
    }
})