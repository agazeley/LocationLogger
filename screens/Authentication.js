import React from 'react';
import Expo, { SQLite } from 'expo';
import ViewContainer from '../components/ViewContainer.js';
import StatusbarBackground from '../components/StatusbarBackground.js';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const db = SQLite.openDatabase('loc_db.db');

export default class Authentication extends React.Component {
    static navigationOptions = {
        //title: 'Login',
      };
      
      // takes returned rows and checks for authentication conditions
      _checkAuthenticated(_array){
        const { navigate } = this.props.navigation;
        
        console.log(_array.length);
        
        if(_array.length == '1'){
            this.setState({authenticated : true});
        }

        if(this.state.authenticated || this.state.dev){
            console.log(this.state.authenticated);
            navigate('LoggedIn',{ name: 'LoggedIn' });
        }
        else{
            alert('Username or password are incorrect');
        }
      }
      // Only queries the DB and runs authentication check
      _login(){
        const { navigate } = this.props.navigation;        
        db.transaction(
            tx => {
                tx.executeSql('select * from users where email = ? and password = ?', [this.state.email, this.state.password], (_, { rows: { _array } }) => 
                this._checkAuthenticated(_array)
                );
              },
            null,
            this.update
        );   
    }

    componentDidMount() {
        db.transaction(tx => {
          tx.executeSql(
            'create table if not exists users (id integer primary key not null autoincrement, fName text, lName text, password text, email text);'
          );
          tx.executeSql('select * from users', [], (_, { rows: { _array } }) => 
          this.setState({ users: _array })
              );
        });

    }

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            users: null,
            authenticated: false,
            dev: false,
        }
    }
   
    render(){
        const { navigate } = this.props.navigation;
        return (
            <ViewContainer>
                <StatusbarBackground />
                <ViewContainer>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email}
                            placeholder="EMAIL"
                            color="white"
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
                            color="white"
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
                </ViewContainer>
                <View style={styles.logoReg}>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                </View>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        height: 200,
        width:200,
        alignSelf: 'center'
    },
    logoReg: {
        alignItems: 'center',
        marginTop: 160,
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