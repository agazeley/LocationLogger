import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import Colors from '../constants/Colors';
import { Button } from 'react-native-elements';

export default class  Cart extends React.Component {
  static navigationOptions = { 
    title : "Your Cart"
  }

  componentDidMount() {
    this.setState({user: this.props.navigation.state.params.user})
    console.log(this.state.user)
  }

  constructor(props){
    super(props)
    this.edit_btn.bind(this)

    if(this.props.navigation.state.params.cart != undefined){
      this.state = {
        cart : this.props.navigation.state.params.cart,
        };
      console.log("Cart Menu")
      console.log(this.state.cart)
    }
    else{
      this.state = {
        cart : []
      }

      console.log("Nothing in the cart")
    }
  }

  edit_btn(){
    console.log('Edit Order')
  }

  submit_order(){
    console.log('Submit Order')
    if(this.state.cart.length == 0){
      alert('Nothing in the cart')
    }

    //Possibly have it navigate to the menu and use the user info from there to submit the order
  }


  render() {
    return (
      <ScrollView style={styles.container}>
      <ViewContainer>
          <View style={styles.flush}>
            <TouchableOpacity style={styles.flushButton} >
              <Text style={styles.flushText}>Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cartview}>
            {this.state.cart.map(data => (
              <View style={styles.cartitemview}>
                <Text style={styles.carttext} key={data + "_bread"}>{'Breads: ' + data.Breads}</Text>
                <Text style={styles.carttext} key={data + "_meats"}>{'Meats: ' + data.Meats}</Text>
                <Text style={styles.carttext} key={data + "_cheeses"}>{'Cheeses: ' + data.Cheese}</Text>
                <Text style={styles.carttext} key={data + "_toppings"}>{'Toppings: ' + data.Toppings}</Text>
                <Text style={styles.carttext} key={data + "_sauces"}>{'Sauces: ' + data.Sauces}</Text>
                <Button 
                  title='EDIT'
                  onPress={() => this.edit_btn()}
                  style={styles.edit_btn}
                  backgroundColor= {Colors.whitworthBlack}
                  color= {Colors.whitworthWhite}
                />
              </View>
            ))}
          </View>
          <Button 
            style={styles.submit_btn}
            title='SUBMIT ORDER'
            onPress={() => this.submit_order()}
            backgroundColor= {Colors.whitworthBlack}
            color= {Colors.whitworthWhite}
          />

        </ViewContainer>
      </ScrollView>
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
      backgroundColor: Colors.whitworthRed,
      justifyContent: 'center',
      borderRadius: 40,
      overflow: 'hidden',
      alignItems: 'center',
  },
  flushText: {
      color: 'white'
  },
  cartview: {
    flex: 1,
  },
  cartitemview: {
    backgroundColor: Colors.whitworthRed,
    margin: 5,
  },
  carttext: {
    color: Colors.whitworthWhite,
    margin: 5,
  },
  submit_btn: {
    borderRadius: 10,
    
  },
  edit_btn: {
    borderRadius: 10,
  }
});
