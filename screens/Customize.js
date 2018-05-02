import React from 'react';
import Colors from '../constants/Colors';
import SignatureSubs from '../constants/SignatureSubs';
import Options from '../constants/Options';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button, colors } from 'react-native-elements';
import { NavigationOptions, NavigationActions } from 'react-navigation';
import ViewContainer from '../components/ViewContainer';
import SelectionArea from '../components/SelectionArea';


export default class Customize extends React.Component{
    constructor(props){
        super(props)
        
        if(this.props.navigation.state.params.cart != undefined){
            this.state = {
                cart : this.props.navigation.state.params.cart,
                ingredients : this.props.navigation.state.params.ingredients,
                selectedItems : {
                    Meats : [],
                    Breads : [],
                    Sauces : [],
                    Toppings : [],
                    Cheese : []
                }
            }
        }
        else{
            this.state = {
                cart : [],
                ingredients : this.props.navigation.state.params.ingredients,
                selectedItems : {
                    Meats : [],
                    Breads : [],
                    Sauces : [],
                    Toppings : [],
                    Cheese : []
                }
            }
        }
        
        
        this.addItem.bind(this)
        this.handleSelectedItemsChange.bind(this)
        
    }

    componentDidMount(){
    }

    addItem(){
        const {navigate} = this.props.navigation
        const {items} = this.state.selectedItems
        console.log('CUSTOMIZE_addItem')
        
        this.state.cart.push(this.state.selectedItems)
        navigate('Menu',{cart : this.state.cart, user : this.props.navigation.state.params.user})        
       
    }

    //handleSelectionChange->handleSelectedItemsChange
    handleSelectedItemsChange(type,selectedItems){
        switch(type){
            case 'Breads':
                this.state.selectedItems.Breads = selectedItems
                break
            case 'Meats':
                this.state.selectedItems.Meats = selectedItems
                break
            case 'Cheese':
                this.state.selectedItems.Cheese = selectedItems
                break
            case 'Sauces':
                this.state.selectedItems.Sauces = selectedItems
                break
            case 'Toppings':
                this.state.selectedItems.Toppings = selectedItems
                break
            default:
                console.log('Default Case Type:' + type + ' selectedItems:' + selectedItems)
                break        
        }
    }

    render(){
        
        return(
            <ScrollView>
                {Object.keys(Options).map( (k) => (
                <SelectionArea key={k} type={k} 
                               ingredients={this.state.ingredients} 
                               onSelectionChange={(type,selectedItems) => this.handleSelectedItemsChange(type,selectedItems)}/> 
                ))}
                <Button 
                    title="Add to cart" 
                    style={{height:20, width: 200, alignSelf: 'center'}} 
                    onPress={() => this.addItem()}
                />
                <View style={{height: 100}}></View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    
})