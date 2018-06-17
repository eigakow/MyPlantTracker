import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Button } from 'react-native';
import { backendLogin, retrievePlants } from './modifyData';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    if (backendLogin()) {
      console.warn('Login OK');
      this.props.navigation.navigate('HomeScreen');
    } else {
      console.warn('Login NotOK');
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="Login" onPress={() => this.login()} />
        <Button title="Fetch Plants" onPress={() => retrievePlants()} />
      </View>
    );
  }
}
