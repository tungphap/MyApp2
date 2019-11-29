import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default class SettingScreen extends React.Component {
    static navigationOptions = {
        title: 'Setting'
    }
    render(){
        return(
            <View>
                <Text>Setting Screen</Text>
            </View>
        )
    }
}