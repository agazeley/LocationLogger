import React from 'react';
import Colors from '../constants/Colors';
import SignatureSubs from '../constants/SignatureSubs';
import { StyleSheet, Text, View,ListView } from 'react-native';
import { Card, Button, colors } from 'react-native-elements';
import ViewContainer from '../components/ViewContainer';

export default class CustomizeItem extends React.Component{
    constructor(props){
        super(props)

    }

    order_btn(ingredients,title){
        const { navigate } = this.props.nav
        navigate('Customize',{ingredients:ingredients, title: title, user: this.props.user})
    }

    render(){
        return(
            <View style={styles.CustomBox}>
                {SignatureSubs.map(({name, priceHalf, calHalf, priceFull,calFull, ingredients}) => (
                    <View key={name} style={styles.SandwichSummaryView}>
                        <View style={styles.SandwichTextView}>
                            <Text style={styles.SandwichSummaryText}>{name}</Text>
                            <Text>{priceHalf + " " + calHalf + " / " + priceFull + " " + calFull}</Text>
                            <Text>{ingredients.join(', ')}</Text>
                        </View>
                        <View style={styles.SandwichButtonView}>
                            <Button
                                icon={{name : 'code'}}
                                backgroundColor={Colors.whitworthRed}
                                title="Order"
                                buttonStyle={styles.SandwichButton}
                                onPress={ this.order_btn.bind(this,ingredients,name) }
                            ></Button>
                        </View>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SandwichSummaryView: {
        flex : .18,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding : 5,
        borderColor : Colors.whitworthBlack,
        borderWidth: 1,
        height: 300,
        paddingLeft: 20,
    },
    SandwichSummaryText: {
        fontSize: 18,
    },
    SandwichTextView: {
        width: 250
    },
    SandwichButtonView:{
        padding: 0
    },
    SandwichButton:{
        height: 40,
        width: 100,
    },
    CustomBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'white'
    }
})