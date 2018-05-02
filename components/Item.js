import React from 'react';
import Colors from '../constants/Colors';
import { CheckBox } from 'react-native-elements';
import { View } from 'react-native';

export default class Item extends React.Component{
    constructor(props){
        super(props)
        this.onChange.bind(this)
        this.state ={
            checked : this.props.checked,
            name : this.props.name
        }
    }
    //onPress->onChange
    onChange(name,checked){
        this.setState({checked: !this.state.checked})
        this.props.onChangeSelection(name,checked)
    }

    render(){
        return (        
            <View key={this.state.name + " view"}>
                <CheckBox 
                    key={this.state.name + " checkbox"}
                    checkedIcon = 'dot-circle-o'
                    uncheckedIcon = 'circle-o'
                    checked = {this.state.checked}
                    checkedColor={Colors.whitworthRed}
                    title={this.state.name}
                    onPress={() => this.onChange(this.state.name,this.state.checked)}
                    />
            </View>
        )
    }
}





