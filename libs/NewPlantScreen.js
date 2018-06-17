import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export class NewPlantScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a new plant'
  };
  constructor(props) {
    super(props);
    this.state = { plantName: '' };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>This is a new plant screen</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={plantName => this.setState({ plantName })}
          value={this.state.plantName}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
