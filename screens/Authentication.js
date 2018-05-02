import React from 'react';
import ViewContainer from '../components/ViewContainer.js';
import StatusbarBackground from '../components/StatusbarBackground.js';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';

const host = {
    'home' : '172.30.7.209',
    'school' : '10.7.50.19'
}

export default class Authentication extends React.Component {
      
    // Sends login info to DBService, Either confirms login or sends bad login response
    async _login(){
        try{
            const { navigate } = this.props.navigation;
            
            console.log("login press")
            var u = this.state.username
            var p = this.state.password
            user = {
              'username' : u,
              'password' : p
            }
      
            let response = await fetch('http://10.7.50.19:5000/login', {
              method : 'POST',
              body : JSON.stringify(user),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
      
            let resp = await response.json()
            
            if(resp['login'] == 1){
                this.setState({
                    'logged_in' : resp['login'],
                    'user' : JSON.parse(resp['user'])
                })
            }
            else{
                this.setState({
                    'logged_in' : resp['login']
                })
            }
            
            if(this.state.logged_in == 1){
                console.log("logged in")
                navigate('Menu',{ user: this.state.user})
            }
            else{
                alert('Failed to login')
            }
            //Need to figure out what happens next after Login
            //Does it navigate automatically to next menu?
            //Does it display a message saying success happened?
          }
          catch(e){
            console.log(e)
          }
          
    }

    constructor(props){
        super(props)
        const user = {
            username : 'Test',
            password : 'test',
            Fname : 'first',
            Lname : 'last',
        }

        this.state = {
            username: '',
            password: '',
            dev: false,
            logged_in: 1,
            user : user
        }

    }

    debug_login() {
        const { navigate } = this.props.navigation;
        console.log(this.state)
            
        if(this.state.logged_in == 1){
            console.log("logged in")
            navigate('Menu',{ user: this.state.user})
        }
        else{
            alert('Failed to login')
        }
    }

    componentDidMount() {
        this.debug_login()    
    }

    render(){
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.logoReg}>
                        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                            onChangeText={(text) => this.setState({username: text})}
                            value={this.state.email}
                            placeholder="USERNAME"
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
                            returnKeyType="go"
                        />
                    </View>
                    <View style={styles.login}>
                        <TouchableOpacity style={styles.loginButton} 
                            onPress={ this._login.bind(this) }>
                            <Text style={styles.loginText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton} 
                            onPress={ () =>
                                navigate('Register',{ name: 'Register'})
                                }>
                            <Text style={styles.registerText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ViewContainer>                
        );
    }
}

const styles = StyleSheet.create({
    logo:{
        height: 200,
        width: 320,
        alignSelf: 'center'
    },
    logoReg: {
        alignItems: 'center',
        marginTop: 90,
        marginBottom: 100,
    },
    textInputView : {
        height: 30,
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: '#999999',
        borderRadius: 10,
        alignItems: 'stretch',
        borderWidth : 1
    },
    textInput : {
        marginTop: 7.5,
        textAlign: 'left',
        paddingLeft: 20,
        color: 'white',
        fontSize: 12
    },
    hairLine: {
        height: 1,
        backgroundColor: 'white',
        marginLeft: 40,
        marginRight: 40
    },
    login: {
        paddingTop: 10,
        marginLeft:40,
        marginRight:40,
    },
    loginButton: {
        borderWidth: 1 ,
        height: 30,
        backgroundColor: '#999999',
        justifyContent: 'center',
        borderRadius: 40,
        overflow: 'hidden',
        alignItems: 'center',
        
    },
    loginText: {
        color: 'white'
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
        color: 'white'
    }
})