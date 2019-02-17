import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

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
let sphereKnn = require("sphere-knn"),
    lookup = sphereKnn([[35.787743, -78.644257],
    [35.052666, -78.878357],
    [35.227085, -80.843124]])

// find user location
let usrLat = 35
let usrLong = -79
// TODO: assign usrLat and usrLong with actual location

let points
points = lookup(usrLat, usrLong, 1)
closestLat = points[0];
closestLat = closestLat[0];

// set first two latitudes - won't need WSOC since that's the else case
let wralLat = 35.787743
let abcLat = 35.052666

let message
let city
let channelName
export default class DetermineLocation extends Component {
  log_function = () => {
    console.log(points)
  }
  render() {
    if (closestLat === wralLat) {
      //this.props = {WRAL: true};
      city = "Raleigh"
      channelName = "WRAL"
      message = "Channel 5"
    }
    else if (closestLat === abcLat) {
      //this.props = {ABC11: true};
      city = "Fayetteville"
      channelName = "ABC"
      message = "Channel 11"
    }
    else {
      //this.props = {WSOC: true};
      city = "Charlotte"
      channelName = "WSOC"
      message = "Channel 9"
    }
  return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, flex: 1, backgroundColor: 'white'}}/>
      <Text style={styles.header}>We have detected that</Text>
      <Text style={styles.header}>you are from</Text>
      <Text style={styles.header}>{city}.</Text>
      <Text style={styles.header}>Watch</Text>
      <Text style={styles.header}>{channelName} on</Text>
      <Text style={[styles.header, styles.underline]}>{message}</Text>
      <Text style={styles.header}>at <Text style={[styles.header,
        styles.underline]}>6 PM</Text></Text>
      <Text style={styles.header}>for local news!</Text>
      <View style={{flex: 1, flex: 1, backgroundColor: 'white'}}/>
      </View>
  );
  }
}
