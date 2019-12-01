import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, AsyncStorage } from 'react-native';
import global from '../global'

export default class CartScreen extends React.Component {
    static navigationOptions = {
        title: 'Cart'
    }
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            user: null,
            animating: false
        }
    }

    async componentDidMount() {
        try {
            this.setState({ animating: true })
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            this.setState({user:user})
            // console.log(user.username)
            const data = await fetch(global.url + 'cart?username='+this.state.user.username);
            const dataJson = await data.json();
            this.setState({ cart: dataJson })
            this.setState({ animating: false })
            console.log(this.state.cart)

        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <View>
                <Text>Cart Screen</Text>
            </View>
        )
    }
}