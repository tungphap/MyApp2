import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default class CartScreen extends React.Component {
    static navigationOptions = {
        title: 'Cart'
    }
    render(){
        return(
            <View>
                <Text>Cart Screen</Text>
            </View>
        )
    }
}