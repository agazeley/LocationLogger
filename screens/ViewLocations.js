import Expo, { SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
const db = SQLite.openDatabase('loc_db.db');

// Class that holds a list of items pulled from db. Currently set up for locations. Need to take time to implement generic class for this
class Items extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
        items: null,
      };
      
      db.transaction(
        tx => {
          tx.executeSql('select * from locations', [], (_, { rows: { _array } }) => 
          this.setState({ items: _array })
          );
        },
        null,
        this.update
      );
    }
  

  componentDidMount() {
    db.transaction(
        tx => {
          tx.executeSql('select * from locations', [], (_, { rows: { _array } }) => 
          this.setState({ items: _array })
          );
        },
        null,
        this.update
      );
      console.log(this.state.items);
  }

  render() {
    const { items } = this.state;
    if (items === null || items.length === 0) {
      return null;
    }

    return (
      
      <View style={{ margin: 5 }}>
        {items.map(({userID,lat, long}) => (
          <TouchableOpacity
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
    db.transaction(tx => {
      tx.executeSql(`select * from locations;`,
        (_, { rows: { _array } }) => 
        this.setState({ items: _array })
      );
      
    });
  }
}

export default class ViewLocations extends React.Component {
  static navigationOptions = { 
    title : "View Locations",
  }

  componentDidMount() {
    db.transaction(tx => {
        tx.executeSql(
          'create table if not exists locations (id integer primary key not null autoincrement, userID int, lat real, long real);'
        );
    });
}
  constructor(props){
    super(props)
    
    this.state = {
      items : null,
    };
  }

  _flush(){
    console.log("FLUSHING DB");

    db.transaction(
      tx => {
        tx.executeSql(
          'drop table if exists locations;'
        );
        tx.executeSql(
            'create table if not exists locations (id integer primary key not null autoincrement, userID int, lat real, long real);'
        );
      },
      null,
      this.update
    );
  }

  render() {
    return (
      <ViewContainer style={styles.container}>
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