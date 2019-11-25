import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import imgItem from '../images/logoReact.png';

export default function itemProduct(props) {
    const {product, onPress} = props;
    return (
        <View style={styles.container}>
            <View style={styles.imgArea}>
                <Image source={imgItem} style={styles.imgStyle} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>React</Text>
                <Text>Price: 300$</Text>
                <TouchableOpacity 
                    style={styles.btn}
                    >
                    <Text style={styles.titleBtn}>Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Width_Device = Dimensions.get('window').width;
const Height_Device = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        width: '45%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    imgArea: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgStyle: {
        height: 100,
        width: 100,
    },
    content: {
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: 'orange',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleBtn: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})
