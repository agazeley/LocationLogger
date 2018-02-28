import React from 'react'
import PropTypes from 'prop-types'
import ViewContainer from '../components/ViewContainer.js'
import StatusbarBackground from '../components/StatusbarBackground.js'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Authentication extends React.Component {
    static navigationOptions = {
        header: null,
      };
    
    static propTypes = {
        route: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
        navigator: PropTypes.object.isRequired,
    };
    
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        
    }
   
    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />
                <View style={styles.logoReg}>
                    <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                </View>
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
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity style={styles.registerButton}>
                            <Text style={styles.registerText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </ViewContainer>
                
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