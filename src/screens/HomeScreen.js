import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemP from '../components/itemProduct'
import { createAppContainer } from 'react-navigation';

import AppContainer from '../Navigation'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const BottomTab = createAppContainer(AppContainer.MainBottomTab);
        return(
            <BottomTab/>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        margin: 5
    }
})