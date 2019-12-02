import React from 'react';
import { 
    View, Text, Dimensions, 
    FlatList, StyleSheet, ToastAndroid,
    Image, Button, TouchableOpacity,
    RefreshControl } from 'react-native'
import logo from '../images/logoReact.png'

const { width, height } = Dimensions.get('window');
export default function (props) {
    const { cartItem, onPress } = props;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: cartItem.product.image }} style={styles.image}></Image>
            </View>
            <View style={styles.body}>
                <Text>{cartItem.product.name}</Text>
                <Text>{cartItem.product.price}$</Text>
                <TouchableOpacity style={styles.btn}
                    onPress={onPress}>
                    <Text style={{color: '#fff', fontWeight:'bold', fontSize: 15}}>Pay Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color: '#fff', fontWeight:'bold', fontSize: 15}}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: '#ffd',
        width: width
    },
    header: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    body: {
        flex: 2,
        justifyContent: "center"
    },
    image: {
        width: 180,
        height: 180
    },
    btn: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        marginTop: 3
    }
})