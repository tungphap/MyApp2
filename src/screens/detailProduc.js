import React from 'react';
import {
    View, Text, Image, ToastAndroid,
    TouchableOpacity, ScrollView,
    StyleSheet, Dimensions, AsyncStorage
} from 'react-native';
import global from '../global'
import nextId from 'react-id-generator';
const { width, height } = Dimensions.get('window');
export default class detailProduct extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'false')
        };
    }
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            info: '',
        }
    }
    


    async addCart() {
        try {
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            fetch(global.url + 'cart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: nextId(),
                    username: user.username,
                    productID: prodId
                }),
            });
            ToastAndroid.show('Add to cart success', ToastAndroid.SHORT)
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const info = this.props.navigation.getParam('info', 'false')
        return (
            <View style={styles.container}>
                <ScrollView style={{ height: height }}>
                    <View style={styles.header}>
                        <Image source={{ uri: info.image }} style={styles.image} />
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.name}>{info.name}</Text>
                        <Text style={styles.price}>Price: {info.price}$</Text>
                        <Text style={{ margin: 5 }}>{info.detail}</Text>

                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.addCart}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add To Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'orange',
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 1,
    },
    footer: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: height * 0.5
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'orange',
        color: '#fff'
    },
    price: {
        color: '#e10c00',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    },
    btn: {
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: 'center',
        height: 35,
        width: width * 0.45,
        margin: 5
    }
})