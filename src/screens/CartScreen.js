import React from 'react';
import {
    View, Text, Image,
    TouchableOpacity, StyleSheet, Dimensions,
    ActivityIndicator, AsyncStorage, FlatList, ToastAndroid
} from 'react-native';
import global from '../global'
import ItemCart from '../components/itemCart'

const { width, height } = Dimensions.get('window')
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
            this.setState({ user: user })
            // console.log(user.username)
            const data = await fetch(global.url + 'cart?username=' + this.state.user.username);
            const dataJson = await data.json();
            this.setState({ cart: dataJson })
            this.setState({ animating: false })

        } catch (error) {
            console.error(error)
        }
    }

    deleteItem() {
        ToastAndroid.show(cartId, ToastAndroid.SHORT)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.cart}
                    renderItem={({ item }) => (
                        <ItemCart cartItem={item} onPress={this.deleteItem}/>
                    )}
                    refreshing={this.state.animating}
                    onRefresh={this.componentDidMount.bind(this)}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    }
})