import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, AsyncStorage, Dimensions } from 'react-native';
import Profile from '../images/profile.png'
import Key from '../images/key.png'
import Logout from '../images/logout.png'

const { width, height } = Dimensions.get('window')
export default class SettingScreen extends React.Component {
    static navigationOptions = {
        title: 'Setting'
    }
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            test: 'phaan'
        }
    }
    async componentDidMount() {
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        this.setState({ user: user })
    }

    async logout(){
        try {
            AsyncStorage.removeItem('user')
            this.props.navigation.navigate('LoginSrc')
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.content1}>
                        <Image source={{ uri: this.state.user.image }} style={styles.image} />
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.name}>{this.state.user.fullname}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btn}>
                    <Image source={Profile} style={{height:40, width: 40}}/>
                    <Text style={styles.textbtn}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}>
                    <Image source={Key} style={{height:40, width: 40}} />
                    <Text style={styles.textbtn}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.logout.bind(this)}>
                    <Image source={Logout} style={{height:40, width: 40}}/>
                    <Text style={styles.textbtn}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    header: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: width - 20,
        marginBottom: 20
    },
    image: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: 100
    },
    content1: {
        flex: 1
    },
    content2: {
        flex: 2
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    btn: {
        height: 50,
        width: width - 20,
        marginBottom: 10,
        flexDirection: 'row'
    },
    textbtn: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10
    }
})