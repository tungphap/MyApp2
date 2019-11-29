import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import LoginScreen from './src/screens/LoginScreen';
import ProductScreen from './src/screens/ProductScreen'
import SettingScreen from './src/screens/SettingScreen'
import CartScreen from './src/screens/CartScreen'
import detailProduct from './src/screens/detailProduc'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const LoginStack = createStackNavigator({
      Login: { screen: LoginScreen, navigationOptions: { header: null } }
    });

    const ProductStack = createStackNavigator({
      Product: { screen: ProductScreen, navigationOptions: {  } }
    });

    const CartStack = createStackNavigator({
      Cart: { screen: CartScreen}
    });

    const SettingStack = createStackNavigator({
      Setting: { screen: SettingScreen }
    });

    const detailStack = createStackNavigator({
      Detail: { screen: detailProduct }
    });

    const TabContainer = createBottomTabNavigator({
      Home: {screen: ProductStack},
      Cart: {screen: CartStack},
      Setting: {screen: SettingStack}
    });

    const AppRouter1 = createAppContainer(
      createSwitchNavigator({
        LoginSrc: { screen: LoginStack },
        AppSrc: { screen: TabContainer }
      })
    );

    return (
      <AppRouter1 />
    );
  }
}