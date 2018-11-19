import * as React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Firebase from './components/Firebase';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Root from './routes'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const AppContainer = createAppContainer(Root);

export default class App extends React.Component {
  componentWillMount() {
    Firebase.init();
  }
  render() {
    return (
       <AppContainer />
    );
  }
}

