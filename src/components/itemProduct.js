import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import imgItem from '../images/logoReact.png';



export default function itemProduct(props) {
    const {product, onPress} = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri:product.image}} style={styles.imgStyle} />
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>{product.price}$</Text>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={onPress}
                    >
                    <Text style={styles.titleBtn}>Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: width * 0.45,
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'orange'
    },
    header: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imgStyle: {
        height: height * 0.2,
        width: width * 0.44,
    },
    body: {
        backgroundColor: '#ffd'
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
    },
    price: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    }
})
