import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//temp data source, remember to fecth events for this plant ONLY!!!
import { events } from '../data';

export class PlantDetailsScreen extends React.Component {
  //  const title = navigation.getParam(plant.name, "My plant")
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    //const { name } = navigation.getParam('name', 'Your plant');
    const { params } = navigation.state;
    //console.warn('Params:  ', params);
    return {
      title: params ? params.name : 'Your plant'
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    const plant = {
      name: this.props.navigation.getParam('name', 'Your plant'),
      plantType: this.props.navigation.getParam('plantType', 'Unknown'),
      _id: this.props.navigation.getParam('_id', 'Unknown')
    };
    //console.warn('props in detail: ', this.props);
    //console.warn('plant in detail: ', plant);
    //navigationOptions = { title: plant.name };
    const eventItems = events.map(function(x, id) {
      return (
        <EventListItem
          key={id}
          eventType={x.eventType}
          eventDate={x.eventDate}
          _id={x._id}
        />
      );
    }, this);
    return (
      <View>
        <Text>Plant Type: {plant.plantType}</Text>
        <ScrollView style={styles.container}>{eventItems}</ScrollView>
      </View>
    );
  }
}
class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.eventContainer}>
        <Text style={styles.eventTypeText}>{this.props.eventType}</Text>
        <Text style={styles.eventDateText}>{this.props.eventDate}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 90,
    marginBottom: 20
  },
  eventContainer: {
    marginBottom: 30,
    width: 300,
    marginLeft: 15,
    backgroundColor: 'white'
  },
  eventTypeText: {
    paddingTop: 10,
    paddingLeft: 15,
    fontSize: 25,
    color: 'black'
  },
  eventDateText: {
    paddingBottom: 10,
    paddingLeft: 15,
    fontSize: 15,
    color: 'grey'
  }
});
