import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import { SearchBar } from 'react-native-search-bar';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

//let searchTerm; 
export default class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      search: ''
    }
  }
  //searchTerm = 'bitcoin'
  updateSearch() {
    return fetch('https://newsapi.org/v2/everything?' +
      `q=${search}`+   
      // 'sources=bbc-news&' +
      '&apiKey=4dc8923eb74846f983cb4aafb59cb80a')
    .then(( response ) => response.json())
    .then(( responseJson ) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.articles,
        search: search
      })
    })
    .catch ((error) => {
      console.log(error)
      
    });
  }

  render() {
    //const { search } = this.state;

    <SearchBar
        placeholder='Search..'
        onChangeText={this.updateSearch}
        value={this.search}
      />
    if (this.state.isLoading) {

      return (

        <View style={styles.container}>
          <ActivityIndicator />
        </View>

        )
    } else {

      

      let articles = this.state.dataSource.map((val, key) => {
        return <View key={key} style={styles.item}>
            <Text>{val.title}</Text>
          </View>
      });

      return (
        <View style={styles.container}>
            {articles}
        </View>

      ); 
    }
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      flex: 1,
      alignSelf: 'stretch',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee'
    },
  });