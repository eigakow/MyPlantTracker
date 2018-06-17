import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';

import { LoginScreen } from './libs/LoginScreen';
import { HomeScreen } from './libs/HomeScreen';
import { NewPlantScreen } from './libs/NewPlantScreen';
import { PlantDetailsScreen } from './libs/PlantDetailsScreen';

const RootStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'My Plants'
      }
    },
    NewPlant: { screen: NewPlantScreen },
    PlantDetails: { screen: PlantDetailsScreen }
  },
  {
    initialRouteName: 'Login'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
