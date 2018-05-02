import React from 'react';
import { StyleSheet, Text, View,ListView } from 'react-native';
import CustomizeItem from '../components/CustomizeItem';
import SignatureMenu from '../components/SignatureMenu';
import ViewContainer from '../components/ViewContainer';

export default class Subs extends React.Component{

    constructor(props){
        super(props)
        params = this.props.navigation.state.params;
        
        this.state = {
            user : params.user,
            cart: params.cart
        }
    }

    componentDidMount(){
    }


    render(){
        return(
            <View style={styles.container}>
                <CustomizeItem nav={this.props.navigation} cart={this.state.cart} user={this.state.user}/>
                <SignatureMenu nav={this.props.navigation} cart={this.state.cart} user={this.state.user}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection: 'column',
        
    }
})