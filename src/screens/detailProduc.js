import React from 'react';
import {
    View, Text, Image, SafeAreaView,
    TouchableOpacity, ScrollView,
    StyleSheet, Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class detailProduct extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'false')
        };
    }
    render() {
        const info = this.props.navigation.getParam('info', 'false')
        return (
            <View style={styles.container}>
                <ScrollView style = {{height: height}}>
                <View style={styles.header}>
                    <Image source={{ uri: info.image }} style={styles.image} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.name}>{info.name}</Text>
                    <Text style={styles.price}>Price: {info.price}$</Text>
                    <Text style={{margin:5}}>{info.detail}</Text>

                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: '#fff',fontWeight:'bold'}}>Add To Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color: '#fff',fontWeight:'bold'}}>Pay Now</Text>
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
    footer:{
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'center',
    },
    image: {
        width: width,
        height: height*0.5
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