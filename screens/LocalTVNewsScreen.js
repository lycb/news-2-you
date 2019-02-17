import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
// make better styling for this - figure out if can print variable
  header: {
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 50,
    textAlign: 'center',
  },

  underline: {
    textDecorationLine: 'underline',
  },
});

/* list of a couple TV locations
WRAL 2619 Western Boulevard, Raleigh, N.C. 27606
channel 5
lat: long:
6 pm
ABC 11 Fayetteville 201 Hay Street Suite 101B Fayetteville, NC 28301
lat: long:
6 pm
WSOC channel 9
lat: long:
6 pm */
var sphereKnn = require("sphere-knn"),
    lookup = sphereKnn([ 'WRAL', {lat: 35.787743, long: -78.644257},
    'ABC11', {lat: 35.052666, long: -78.878357},
    'WSOC', {lat: 35.227085, long: -80.843124}])

var points = lookup(35, -75, 1)

// for scaling would mb want to make some sort of hashmap that contains locations
// connected to what location it maps to
// then use math to already compute what's local and then
// have them change and look up values

export default class TVNews extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Watch</Text>
        <Text style={[styles.header, styles.underline]}>Channel 5</Text>
        <Text style={styles.header}>at <Text style={[styles.header,
          styles.underline]}>6 PM today</Text></Text>
        <Text style={styles.header}>for local news</Text>
      </View>
    );
  }
}
