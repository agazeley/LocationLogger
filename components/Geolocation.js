import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Geolocation extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
            currentLat: 'unknown',
            currentLong: 'unknown',
            initLat: 'unknown',
            initLong: 'unknown',
        }
    }
    
    watchID = (null: ? number);
    
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
                this.setState({initLat: position.coords.latitude, initLong : position.coords.longitude})
                
            },
            (error) => alert(error.message),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            var lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
            this.setState({})
            console.log(position.coords);
        });
                
      }
    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.watchID);
    }
    
    render(){
        return(
            <View>
                <Text>Current position:</Text>
                <Text>{"Lat: " + this.state.initLat + ",  Long:" + this.state.initLong}</Text>
            </View>
        )
    }
}