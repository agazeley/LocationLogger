import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class Geoloc extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
        location: 0,
        latitude: 0,
        longitude: 0,
        errorMessage: null,
      };
  }

  componentWillMount() {
      this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ 
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      location: location,
     });
     this.setCoords();
  };

  setCoords = () => {
    this.props.setCoords(this.state.latitude, this.state.longitude);
  }

  render() {
    //console.log('coords: ' + this.state.latitude +', '+ this.state.longitude);
    return (
      <View style={styles.container}>
        <Text style={styles.coords}>Latitude: {this.state.latitude}</Text>
        <Text style={styles.coords}>Longitude: {this.state.longitude}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  coords: {
    backgroundColor: 'black',
    color: 'white',
    margin: 0,
    fontSize: 12,
    textAlign: 'center',
  },
});