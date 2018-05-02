import React from 'react';
import Expo, { SQLite } from 'expo';
import ViewContainer from '../components/ViewContainer.js';
import StatusbarBackground from '../components/StatusbarBackground.js';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';


//replaced by the Database import
//const db = SQLite.openDatabase('loc_db.db');

export default class Register extends React.Component{
    static navigationOptions = {
        //title: 'Register',
    }
    
    componentDidMount(){
    }
    
    async _submit(){
        
        try{
            const { navigate } = this.props.navigation

            new_user = {
                'username' : this.state.Username,
                'password' : this.state.Password,
                'Fname' : this.state.Fname,
                'Lname' : this.state.Lname
            }
            
            let response = await fetch('http:/10.7.50.19:5000/reg', {
                method : 'POST',
                body : JSON.stringify(new_user),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
            
            let resp = await response.json()

            if(resp['register'] == 1){
                console.log("successfully registered")
                navigate('Login',{})
            }
            else{
                alert("Failed to register: " + resp['msg'])
            }
        }
        catch(e){
            console.log('Error in _submit: ' + e.message)
        }

    }

    constructor(props){
        super(props)
        this.state = {
            Fname: '',
            Lname: '',
            Email : '',
            Username: '',
            Password: '',
            ConfirmPassword: '',
        }
    }
    
    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />
                <ViewContainer>
                    <View style={styles.textInputView}>
                    <TextInput style={styles.textInput}
                        onChangeText={(text)=> this.setState({Username:text})}
                        value={this.state.Username}
                        placeholder="USERNAME"
                        placeholderTextColor='white'
                        autoCorrect={false}
                        returnKeyType='next'
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput}
                            onChangeText={(text) => this.setState({Password: text})}
                            value={this.state.Password}
                            placeholder="PASSWORD"
                            //color="white"
                            placeholderTextColor="white"
                            secureTextEntry={false}
                            autoCorrect={false}
                            returnKeyType="next"
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput}
                            onChangeText={(text) => this.setState({ConfirmPassword: text})}
                            value={this.state.ConfirmPassword}
                            placeholder="CONFIRM PASSWORD"
                            //color="white"
                            placeholderTextColor="white"
                            secureTextEntry={false}
                            autoCorrect={false}
                            returnKeyType="go"
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                                onChangeText={(text) => this.setState({Fname: text})}
                                value={this.state.firstName}
                                placeholder="FIRST NAME"
                                //color="white"
                                placeholderTextColor="white"
                                autoCorrect={false}
                                returnKeyType="next"                        
                            />
                    </View>
                    <View style={styles.textInputView}>
                    <TextInput style = {styles.textInput} 
                            onChangeText={(text) => this.setState({Lname: text})}
                            value={this.state.lastName}
                            placeholder="LAST NAME"
                            //color="white"
                            placeholderTextColor="white"
                            autoCorrect={false}
                            returnKeyType="next"                        
                        />
                    </View>
                    <View style={styles.textInputView}>
                    <TextInput style = {styles.textInput} 
                            onChangeText={(text) => this.setState({Email: text})}
                            value={this.state.email}
                            placeholder="EMAIL"
                            //color="white"
                            placeholderTextColor="white"
                            autoCorrect={false}
                            returnKeyType="next"                        
                        />
                    </View>
                    <View style={styles.submit}>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitText} onPress={ this._submit.bind(this) }>
                            SUBMIT</Text>
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
        paddingLeft: 20,
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