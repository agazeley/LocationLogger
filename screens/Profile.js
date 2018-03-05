import React from 'react';
import Expo, { SQLite } from 'expo';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import Geoloc from '../components/Geoloc';
import Database from '../components/Database';

export default class Profile extends React.Component{

    constructor(props){
        super(props)

        params = this.props.navigation.state.params;

        this.state = {
            user: params,
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            lat: 1,
            long: 0,
           }
    }

    componentDidMount(){
        Database.transaction(
            tx => {
                //tx.executeSql('drop table locations;');
                tx.executeSql(
                    'create table if not exists locations (userID int , lat real not null, long real not null);'
                );
            },
            null
        );
    }

    setCoords = (lat, long) => {
        this.setState({
            lat: lat,
            long: long
        });

    }


    logLocation = (id,lat,long) => {
        console.log("User id: " + id + ", Logging Lat: " + lat + ", Long: " + long)
        Database.transaction(
            tx => {
              tx.executeSql('insert into locations (userID, lat, long) values (?, ?, ?);', [id,lat, long]);
            }
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <ViewContainer>
                <View style={styles.textView}>
                    <Text style={styles.text}>{"Welcome to your profile!"}</Text>
                    <Text style={styles.text}>{this.state.user.fName + " " + this.state.user.lName}</Text>
                    <Text style={styles.text}>{"\n\n"}</Text>
                </View>
                <Geoloc setCoords={this.setCoords}></Geoloc>
                <View style={styles.register}>
                    <TouchableOpacity style={styles.registerButton} 
                        onPress={ () =>
                            // View arguement is page to navigate to, second are parameters for that navigation
                            this.logLocation(this.state.user.id,this.state.lat,this.state.long)
                        }>
                        <Text style={styles.registerText}>LOG LOCATION</Text>
                    </TouchableOpacity>
                    </View>
                <View style={styles.register}>
                    <TouchableOpacity style={styles.registerButton} 
                        onPress={ () =>
                            // View arguement is page to navigate to, second are parameters for that navigation
                            navigate('ViewLocations',{ id: this.state.user.id})
                        }>
                        <Text style={styles.registerText}>VIEW LOCATIONS</Text>
                    </TouchableOpacity>
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