import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import SettingScreen from './screens/SettingScreen';
import DetailScreen from './screens/detailProduc';
import ProductScreen from './screens/ProductScreen';


import { createBottomTabNavigator } from 'react-navigation-tabs'

const CartStack = createStackNavigator({ CartScreen });
const SettingStack = createStackNavigator({ SettingScreen });
const HomeStack = createStackNavigator({ HomeScreen });
const ProductStack = createStackNavigator({ ProductScreen })
const DetailStack = createStackNavigator({ DetailScreen })


const LoginHome = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Homes: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailScreen
    }
})

const BottomTab = createBottomTabNavigator({
    Home: {screen: ProductStack},
    Cart: { screen: CartStack },
    Setting: { screen: SettingStack },
})

module.exports.LoginHomeStack = LoginHome;
module.exports.MainBottomTab = BottomTab;