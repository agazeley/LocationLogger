import React from 'react';
import Colors from '../constants/Colors';
import { StyleSheet, View } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';
import ViewContainer from '../components/ViewContainer';
import Options from '../constants/Options';
import Item from '../components/Item';


export default class SelectionArea extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items : Options[this.props.type],
            checkedItems : [],
            category : this.props.type
        }
        this.handleSelectionChange.bind(this);

        
        this.props.ingredients.forEach(element => {
            if(Object.keys(this.state.items).includes(element)){
                this.state.checkedItems.push(element)
            }
        });
        //So that selectedItems is updated with ingredients
        this.props.onSelectionChange(this.state.category,this.state.checkedItems)
    }

    componentDidMount(){
       
    }
    
    //onChange->handleSelectionChange
    handleSelectionChange(name,checked){
        if(this.state.checkedItems.includes(name)){
            //Remove item
            index = this.state.checkedItems.indexOf(name)
            this.state.checkedItems.splice(index,1)
        }
        else{
            //add item
            this.state.checkedItems.push(name)
        }
        
        this.props.onSelectionChange(this.state.category,this.state.checkedItems)
    }

    render(){
        return(
            <ViewContainer>
                <Text h3>{this.props.type}</Text>
                {Object.keys(this.state.items).map((k) => (
                    <Item key={"ITEM" + k} name={k} 
                        onChangeSelection={(item,checked) => this.handleSelectionChange(item,checked)} 
                        checked={this.state.checkedItems.includes(k)}
                        />
                ))}
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    
})