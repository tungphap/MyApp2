import React from 'react';
import {
    View, AsyncStorage,
    Text, Image, TouchableOpacity,
    StyleSheet, FlatList, ActivityIndicator
} from 'react-native';
import ItemP from '../components/itemProduct'
import global from '../global'


export default class ProductScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            animating: false
        }
    }

    async componentDidMount() {
        try {
            this.setState({ animating: true })
            const data = await fetch(global.url + 'product');
            const dataJson = await data.json();
            this.setState({ products: dataJson })
            this.setState({ animating: false })

        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ActivityIndicator style={{position:'absolute'}} animating={this.state.animating} size="large" color="green" />
                {this.state.products.length ?
                    (
                        <FlatList
                            data={this.state.products}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <ItemP product={item} onPress={() => {
                                    navigation.navigate('Detail', {
                                        title: item.name,
                                        info: item
                                    })
                                }} />
                            )}
                            keyExtractor={item => item.id} />
                    )
                    :
                    (<Text>Không có dữ liệu nào</Text>)}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})