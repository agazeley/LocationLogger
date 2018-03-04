import React from 'react';
import Expo, { SQLite } from 'expo';
import ViewContainer from '../components/ViewContainer.js';
import StatusbarBackground from '../components/StatusbarBackground.js';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

const db = SQLite.openDatabase('loc_db.db');

export default class Register extends React.Component{
    static navigationOptions = {
        //title: 'Register',
    }

    componentDidMount(){
        db.transaction(
            tx => {
                tx.executeSql(
                    'create table if not exists users (id integer primary key not null autoincrement, fName text, lName text, password text, email text);'
                  );
                tx.executeSql('select * from users', [], (_, { rows: { _array } }) => 
                this.setState({ users: _array })
                );
            },
            null,
            this.update
        );
    }

    _add(fName,lName,email,password){
        console.log(fName + lName + email)
        db.transaction(
            tx => {
              tx.executeSql('insert into users (fName, lName, password, email) values (?, ?, ?, ?)', [fName,lName,password,email]);
              tx.executeSql('select * from users', [], (_, { rows: { _array } }) => this.setState({ users: _array })
              );
            },
            null,
            this.update
          );
          console.log(this.state.users)
    }

    _submit(){
            // console.log(this.state.firstName + this.state.lastName + this.state.email + this.state.password);
        if(this.state.password == this.state.confirmPassword){
            if(this.state.firstName != "" && this.state.lastName != "" && this.state.email != "" && this.state.password != ""){
                try{
                    this._add(this.state.firstName,this.state.lastName,this.state.email,this.state.password);
                }
                catch(e){
                    alert(e);
                }
            }
            else{
                alert("Please fill out the whole form")
            }
        }
        else{
            alert("Passwords do not match. Please try again");
            this.state.password = "";
            this.state.confirmpassword = "";
        }
    }

    update = () => {
        this.todo && this.todo.update();
        this.done && this.done.update();
    }

    
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            users: null,
        }
    }
    
    render(){
        return (
            <ViewContainer>
                <StatusbarBackground />
                <ViewContainer>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput} 
                                onChangeText={(text) => this.setState({firstName: text})}
                                value={this.state.firstName}
                                placeholder="FIRST NAME"
                                color="white"
                                placeholderTextColor="white"
                                autoCorrect={false}
                                returnKeyType="next"                        
                            />
                    </View>
                    <View style={styles.textInputView}>
                    <TextInput style = {styles.textInput} 
                            onChangeText={(text) => this.setState({lastName: text})}
                            value={this.state.lastName}
                            placeholder="LAST NAME"
                            color="white"
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
                            returnKeyType="next"
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <TextInput style = {styles.textInput}
                            onChangeText={(text) => this.setState({confirmPassword: text})}
                            value={this.state.confirmPassword}
                            placeholder="CONFIRM PASSWORD"
                            color="white"
                            placeholderTextColor="white"
                            secureTextEntry={true}
                            autoCorrect={false}
                            returnKeyType="go"
                        />
                    </View>
                    <View style={styles.submit}>
                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitText} onPress={ this._submit.bind(this) }>
                            SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </ViewContainer>
                <View style={styles.joinReg}>
                    <Image source={require('../assets/images/join.jpg')} style={styles.join}/>
                </View>
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