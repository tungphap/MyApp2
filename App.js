import React from 'react';

import { createAppContainer } from 'react-navigation';

import AppContainer from './src/Navigation'

const LoginHomea = createAppContainer(AppContainer.LoginHomeStack);

export default class App extends React.Component {
  render(){
    return(
      <LoginHomea/>
    );
  }
}