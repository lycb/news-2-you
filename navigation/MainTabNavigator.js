import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import PreferencesScreen from '../screens/PreferencesScreen';
import LocalTVNewsScreen from '../screens/LocalTVNewsScreen';
//import SearchScreen from '../screens/SearchScreen';

const PreferencesStack = createStackNavigator({
  Preferences: PreferencesScreen,
})

PreferencesStack.navigationOptions = {
  tabBarLabel: 'Preferences',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-checkbox-outline' : 'md-checkbox-outline'}
    />
  ),
}

const LocalTVNewsStack = createStackNavigator({
  LocalTVNews: LocalTVNewsScreen,
});

LocalTVNewsStack.navigationOptions = {
  tabBarLabel: 'Local TV News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

export default createBottomTabNavigator({
  PreferencesStack,
  SearchStack,
  LocalTVNewsStack,
});


