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
6 pm
ABC 11 Fayetteville 201 Hay Street Suite 101B Fayetteville, NC 28301
6 pm
WSOC channel 9
6 pm */
let sphereKnn = require("sphere-knn"),
    lookup = sphereKnn([[35.787743, -78.644257],
    [35.052666, -78.878357],
    [35.227085, -80.843124]])

// find user location
let usrLat
let usrLong
let closestLat
// TODO: assign usrLat and usrLong with actual location

let points
/*points = lookup(usrLat, usrLong, 1)
closestLat = points[0];
closestLat = closestLat[0];*/

// set first two latitudes - won't need WSOC since that's the else case
let wralLat = 35.787743
let abcLat = 35.052666

let message
let city
let channelName
let textpart1
let textpart2
let textpart3
let textpart4
let textpart5
let textpart6
let time

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    points = lookup(this.state.latitude, this.state.longitude, 1)
    closestLat = points[0];
    closestLat = closestLat[0];
  }
  render() {
    if (this.state.latitude) {
    if (closestLat === wralLat) {
      //this.props = {WRAL: true};
      city = "Raleigh."
      channelName = "WRAL"
      message = "Channel 5"
    }
    else if (closestLat === abcLat) {
      //this.props = {ABC11: true};
      city = "Fayetteville."
      channelName = "ABC"
      message = "Channel 11"
    }
    else {
      //this.props = {WSOC: true};
      city = "Charlotte."
      channelName = "WSOC"
      message = "Channel 9"
    }
    textpart1 = "We have detected that"
    textpart2 = "you are in"
    textpart3 = "Watch"
    textpart4 = "on"
    textpart5 = "at"
    time = "6 PM"
    textpart6 = "for local news!"
  }
  else {
    textpart1 = "Calculating location ..."
  }
  return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, flex: 1, backgroundColor: 'white'}}/>
      <Text style={styles.header}>{textpart1}</Text>
      <Text style={styles.header}>{textpart2}</Text>
      <Text style={styles.header}>{city}</Text>
      <Text style={styles.header}>{textpart3}</Text>
      <Text style={styles.header}>{channelName} {textpart4}</Text>
      <Text style={[styles.header, styles.underline]}>{message}</Text>
      <Text style={styles.header}>{textpart5} <Text style={[styles.header,
        styles.underline]}>{time}</Text></Text>
      <Text style={styles.header}>{textpart6}</Text>
      <View style={{flex: 1, flex: 1, backgroundColor: 'white'}}/>
      </View>
  );
  }
  /*render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }*/
}

export default GeolocationExample;

/*export default class DetermineLocation extends Component {
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
*/
