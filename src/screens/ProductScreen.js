import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ItemP from '../components/itemProduct'


export default class ProductScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        return (
            <View>
                <ItemP/>
            </View>
        )
    }
}