import Expo, { SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';


// Class that holds a list of items pulled from db. Currently set up for locations. Need to take time to implement generic class for this
class Items extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
        items: null,
      };
      
    }  

  componentDidMount() {
    
  }

  render() {
    const { items } = this.state;
    if (items === null || items.length === 0) {
      return null;
    }

    return (
      
      <View style={{ margin: 5 }}>
        {items.map(({id,userID,lat, long}) => (
          <TouchableOpacity
            key={id}
            style={{
              padding: 5,
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text style={styles.item}>{"UserID:" + userID + ", Lat: " + lat + ", Long: " + long }</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  update() {
  }
}

export default class ViewLocations extends React.Component {
  static navigationOptions = { 
    title : "View Locations",
  }

  _flush(){
  }

  componentDidMount() {
  }
  
  constructor(props){
    super(props)
    
    this.state = {
      items : null,
    };
  }


  render() {
    return (
      <ViewContainer style={styles.container}>
        <View style={styles.flush}>
          <TouchableOpacity style={styles.flushButton} 
            onPress={ this._flush.bind(this) }>
            <Text style={styles.flushText}>FLUSH</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, backgroundColor: 'gray' }}>
          <Items/>
        </View>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
      alignSelf : 'center',
  },
  flush: {
    paddingTop: 10,
    marginLeft:40,
    marginRight:40,
  },
  flushButton: {
      borderWidth: 1 ,
      height: 30,
      backgroundColor: '#999999',
      justifyContent: 'center',
      borderRadius: 40,
      overflow: 'hidden',
      alignItems: 'center',
  },
  flushText: {
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
    },
  item: {
      fontSize : 12,
  }
});
