import * as React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Header from './components/header';
import Footer from './components/footer';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator, createAppContainer } from "react-navigation";

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style = {{flex:1}}>
        <Header content="An unexpected journey"/>
        <View style = {{flex:1, backgroundColor:'#C4C4C4'}}>
          <Text>body</Text>
        </View>
        <View style = {{flexDirection:'row',backgroundColor: 'red', height: 55}}>
          <View style = {{ backgroundColor: 'white', height:55, width:'25%',justifyContent: 'center',alignItems: 'center',borderRightWidth:1}}><FontAwesome name="user" size={35} /></View> 
          <View style = {{ backgroundColor: 'white', height:55, width:'50%',justifyContent: 'center',alignItems: 'center', borderRightWidth:1}}><FontAwesome name="plane" size={35} /></View> 
          <View style = {{ backgroundColor: 'white', height:55, width:'25%',justifyContent: 'center',alignItems: 'center',}}><FontAwesome name="search" size={35} /></View>         
        </View>
      </View>  
      

    );
  }
}

