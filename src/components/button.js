import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

export default class Button extends React.Component {
    render(){
        return (
            <TouchableOpacity style={styles.btn}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    }
})