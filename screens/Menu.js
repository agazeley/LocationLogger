import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import ViewContainer from '../components/ViewContainer';
import SubMenuItem from '../components/SubMenuItem';
import JabaMenuItem from '../components/JambaMenuItem';
import GrillMenuItem from '../components/GrillMenuItem';

export default class Menu extends React.Component{

    constructor(props){
        super(props)

        params = this.props.navigation.state.params;

        this.state = {
            Id : params.user.Id,
            Fname : params.user.Fname,
            Lname : params.user.Lname,
            Username : params.user.Username,
            cart : []    
        }

        if(params.cart != undefined){
                this.state.cart = params.cart
        }
        console.log("Cart Status")
        console.log(this.state.cart)
    }

    componentDidMount(){
    }

    render() {
        return(
                <ViewContainer>
                    <View style={styles.textView}>
                        <Text style={styles.text}>{"Welcome to The Grill App!"}</Text>
                    </View>
                    <SubMenuItem backgroundColor={Colors.whitworthBlack} 
                                 nav={this.props.navigation}
                                 cart ={this.state.cart}
                                 user = {this.props.navigation.state.params.user} 
                                 />
                    <GrillMenuItem backgroundColor={Colors.whitworthRed} nav={this.props.navigation}/>
                    <JabaMenuItem backgroundColor={Colors.whitworthBlack} nav={this.props.navigation}/>
                </ViewContainer>
        );
    }

}

const styles = StyleSheet.create({
    textView : {
        height: 25,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 5,
        backgroundColor: Colors.whitworthRed,
        alignItems: 'stretch',
        borderRadius: 10,
    },
    text : {
        marginTop: 7.5,
        textAlign: 'center',
        paddingLeft: 20,
        color: 'white',
        fontSize: 12
    }
    
})