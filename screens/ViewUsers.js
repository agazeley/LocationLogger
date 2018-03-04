import Expo, { SQLite } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
const db = SQLite.openDatabase('loc_db.db');

// Class that holds a list of items pulled from db. Currently set up for users. Need to take time to implement generic class for this
class Items extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
        items: null,
      };
      
      db.transaction(
        tx => {
          tx.executeSql('select * from users', [], (_, { rows: { _array } }) => 
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
          tx.executeSql('select * from users', [], (_, { rows: { _array } }) => 
          this.setState({ items: _array })
          );
        },
        null,
        this.update
      );
  }

  render() {
    const { items } = this.state;
    if (items === null || items.length === 0) {
      return null;
    }

    return (
      
      <View style={{ margin: 5 }}>
        {items.map(({ id, fName, lName,email,password }) => (
          <TouchableOpacity
            key={id}
            onPress={() => this.props.onPressItem && this.props.onPressItem(id)}
            style={{
              padding: 5,
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text>{"Name: " + fName + ", " + lName + " Email: " + email + " Password: " + password }</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  update() {
    db.transaction(tx => {
      tx.executeSql(`select * from users;`,
        (_, { rows: { _array } }) => 
        this.setState({ items: _array })
      );
    });
  }
}

export default class ViewUsers extends React.Component {
  static navigationOptions = { 
    title : "View Users",
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists users (id integer primary key not null autoincrement, fName text, lName text, password text, email text);'
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
          'drop table if exists users;'
        );
        tx.executeSql(
          'create table if not exists users (id integer primary key not null autoincrement, fName text, lName text, password text, email text);'
        );
        tx.executeSql(`select * from users;`,
        (_, { rows: { _array } }) => 
          this.setState({ items: _array })
        );
      },
      null,
      this.update
    );
    console.log(this.state.items);
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
    paddingTop: Expo.Constants.statusBarHeight,
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
});
