import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';

export default class Profile extends React.Component{

    constructor(props){
        super(props)

        params = this.props.navigation.state.params;

        this.state = {
            user : params,
        }
    }

    render() {
        return(
            <ViewContainer>
                <View style={styles.textView}>
                    <Text style={styles.text}>{"Welcome to your profile!"}</Text>
                    <Text style={styles.text}>{this.state.user.fName + " " + this.state.user.lName}</Text>
                    <Text style={styles.text}>{"\n\n"}</Text>
                    <Text style={styles.text}>{"Lower"}</Text>

                </View>
            </ViewContainer>
        );
    }

}

const styles = StyleSheet.create({
    textView : {
        height: 300,
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
        color: 'white',
        fontSize: 12
    },
})