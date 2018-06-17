import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  TouchableHighlight,
  View,
  Text,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { loadPlants, loadEvents } from './libs/redux';

//temp data source
import { fetchPlants } from './backendApi';
import { plants } from '../data';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const plants = fetchPlants();
  }

  seePlantDetails = (rawData = {}) => {
    //console.warn('triggered with ', rawData);
    this.props.navigation.navigate('PlantDetails', rawData);
  };

  render() {
    const { navigate } = this.props.navigation;
    const items = plants.map(function(x, id) {
      return (
        <PlantListItem
          key={id}
          name={x.name}
          plantType={x.plantType}
          _id={x._id}
          seeDetails={data => {
            this.seePlantDetails(data);
          }}
        />
      );
    }, this);
    return (
      <View style={styles.container}>
        {items}

        <Button
          title="Add a new plant2"
          onPress={() => this.props.navigation.navigate('NewPlant', {})}
        />
      </View>
    );
  }
}

class PlantListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  seeDetails = () => {
    //console.warn('triggeing item se edetails with ', this.props);
    this.props.seeDetails(this.props);
  };
  render() {
    return (
      <View style={styles.plantContainer}>
        <TouchableHighlight onPress={this.seeDetails} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.plantNameText}>{this.props.name}</Text>
            <Text style={styles.plantTypeText}>{this.props.plantType}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center'
  },
  plantContainer: {},
  button: {
    marginBottom: 30,
    width: 300,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  plantNameText: {
    paddingTop: 10,
    paddingLeft: 15,
    fontSize: 25,
    color: 'black'
  },
  plantTypeText: {
    paddingBottom: 10,
    paddingLeft: 15,
    fontSize: 15,
    color: 'grey'
  }
});
