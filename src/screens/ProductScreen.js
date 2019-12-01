import React from 'react';
import { View, AsyncStorage , Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import ItemP from '../components/itemProduct'


export default class ProductScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount(){
        try {
            const data = await fetch('http://e0133c52.ngrok.io/product');
            const dataJson = await data.json();
            this.setState({ products: dataJson })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.products}
                    renderItem={({item}) => (
                        <ItemP product={item}/>
                    )}
                    keyExtractor={item => item.id}
                    />
            </View>
        )
    }
}