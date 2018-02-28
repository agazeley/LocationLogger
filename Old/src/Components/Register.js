import React from 'react'
import ViewContainer from './ViewContainer.js'
import StatusbarBackground from './StatusbarBackground.js'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    
    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />
                <View style={styles.joinReg}>
                    <Image source={require('./Resources/join.jpg')} style={styles.join}/>
                </View>
                <ViewContainer>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                                    onChangeText={(text) => this.setState({firstName: text})}
                                    value={this.state.email}
                                    placeholder="FIRST NAME"
                                    placeholderTextColor="white"
                                    autoCorrect={false}
                                    returnKeyType="next"                        
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                                    onChangeText={(text) => this.setState({lastName: text})}
                                    value={this.state.email}
                                    placeholder="LAST NAME"
                                    placeholderTextColor="white"
                                    autoCorrect={false}
                                    returnKeyType="next"                        
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                                    onChangeText={(text) => this.setState({email: text})}
                                    value={this.state.email}
                                    placeholder="EMAIL"
                                    placeholderTextColor="white"
                                    autoCorrect={false}
                                    returnKeyType="next"                        
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput}
                                onChangeText={(text) => this.setState({password: text})}
                                value={this.state.password}
                                placeholder="PASSWORD"
                                placeholderTextColor="white"
                                secureTextEntry={true}
                                autoCorrect={false}
                                returnKeyType="next"
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput}
                                onChangeText={(text) => this.setState({confirmpassword: text})}
                                value={this.state.password}
                                placeholder="CONFIRM PASSWORD"
                                placeholderTextColor="white"
                                secureTextEntry={true}
                                autoCorrect={false}
                                returnKeyType="go"
                        />
                    </View>
                    <View style={styles.submit}>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </ViewContainer>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    textInputView : {
        height: 30,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#999999',
        borderRadius: 10,
        alignItems: 'stretch',
    },
    textInput : {
        marginTop: 7.5,
        textAlign: 'left',
        paddingLeft: 0,
        color: 'white',
        fontSize: 12
    },
    join:{
        height: 150,
        width: 300,
        alignSelf: 'center'
    },
    joinReg: {
        alignItems: 'center',
        marginTop: 160,
        marginBottom: 100,
    },
    textInput : {
        height: 30,
        marginLeft:10,
        padding: 20,
        fontSize: 12
    },
    submit: {
        paddingTop: 10,
        marginLeft:40,
        marginRight:40,
        alignItems: 'center',
    },
    submitButton: {
        borderWidth: 1 ,
        height: 30,
        width: 100,
        backgroundColor: '#999999',
        justifyContent: 'center',
        borderRadius: 40,
        overflow: 'hidden',
        alignItems: 'center'
    },
    submitText: {
        color: 'white'
    },
})