import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import CardItem from './card_item';

export default class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultList: []
    };
  }

  componentDidMount(){
    this.fetchData();
  }
  
  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then()
      .catch(err => {
        console.log(err);
      })
      .then(res => res.json())
      .then(parsed => {
        console.log(parsed);
        this.setState({ resultList: parsed });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onItemClick = (item) => {
    console.log('Clicked Item:');
    console.log(item);
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black'
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.conteiner}>
        <FlatList
            data={this.state.resultList}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
            renderItem={({ item }) => (
              <CardItem
                id={item.id}
                name={item.name}
                email={item.email}
                website={item.website}
                onClick={() => this.onItemClick(item)}
              />
            )}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginTop:30
  },
  list: {
    width: '100%',
    height: '100%',
  }
});
