import React from 'react';
import {
    View, Text,
    StyleSheet,
    ImageBackground,
    Image, Alert, ToastAndroid,
    Dimensions, TextInput, TouchableOpacity, ActivityIndicator
} from 'react-native';
import loginBg from '../images/loginTheme.jpg'
import logo from '../images/logoReact.png'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            users: null,
            user: null,
            animating: false
        }
    }

    async onSubmit() {
        try {
            this.setState({animating: true})
            const data = await fetch('http://188f53b6.ngrok.io/users');
            const dataJson = await data.json();
            this.setState({ users: dataJson })
            console.log(this.state.users)
        } catch (err) {
            console.log(err)
        }
        const User = this.state.username;
        const Pass = this.state.password;

        const user = this.state.users.filter(function (item) {
            if (item.username == User) {
                return item;
            }
        });
        if(user[0]){
            this.setState({animating: false})
        }

        console.log(user[0].fullname)
    }

    render() {
        return (
            <ImageBackground source={loginBg} style={styles.ImgBg}>
                <View style={styles.header}>
                    <Image source={logo} style={{ width: 150, height: 150 }} />
                    <Text style={styles.textHead}>Login</Text>
                    <ActivityIndicator animating={this.state.animating} size="large" color="red" />
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.inputForm}
                        placeholder='Username'
                        allowFontScaling={false}
                        onChangeText={(username) => this.setState({ username })}>
                    </TextInput>
                    <TextInput
                        style={styles.inputForm}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password })}></TextInput>

                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this.onSubmit.bind(this)}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const Width_Device = Dimensions.get('window').width;
const Height_Device = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ImgBg: {
        width: Width_Device,
        height: Height_Device,
        flex: 1,
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textHead: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    body: {
        flex: 2,
        alignItems: 'center'
    },
    inputForm: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: Width_Device - 50,
        opacity: 0.8,
        margin: 3
    },
    btnLogin: {
        backgroundColor: '#dc3545',
        width: Width_Device - 50,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3

    },
})