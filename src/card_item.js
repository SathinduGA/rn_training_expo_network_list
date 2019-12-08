import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          this.props.onClick();
        }}>
        <View style={styles.cardContainer}>
          <Text> {this.props.id}</Text>
          <Text> {this.props.name} </Text>
          <Text> {this.props.email} </Text>
          <Text> {this.props.website} </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    cardContainer: {
      padding:30
    }
  });
