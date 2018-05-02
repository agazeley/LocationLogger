import React from 'react';
import Expo, { SQLite } from 'expo';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';



export default class Profile extends React.Component{

    constructor(props){
        super(props)

        params = this.props.navigation.state.params;

        this.state = {
            Id : params.user.Id,
            Fname : params.user.Fname,
            Lname : params.user.Lname,
            Username : params.user.Username
           }
    }

    componentDidMount(){
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <ViewContainer>
                <View style={styles.textView}>
                    <Text style={styles.text}>{"Welcome to your profile!"}</Text>
                    <Text style={styles.text}>{ this.state.Fname + " " + this.state.Lname}</Text>
                    <Text style={styles.text}>{"\n\n"}</Text>
                </View>
            </ViewContainer>
        );
    }

}

const styles = StyleSheet.create({
    textView : {
        height: 100,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#999999',
        borderRadius: 10,
        alignItems: 'stretch',
    },
    text : {
        marginTop: 7.5,
        textAlign: 'center',
        paddingLeft: 20,
        color: 'black',
        fontSize: 12
    },
    register: {
        paddingTop: 10,
        marginLeft:40,
        marginRight:40
        },
    registerButton: {
        borderWidth: 1,
        height: 30,
        borderRadius: 40,
        backgroundColor: '#999999',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center'
        },
    registerText: {
        color: 'black'
        }
    
})