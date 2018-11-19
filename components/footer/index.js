import React from "react";
import { Text, View, Button } from "react-native";
import { style } from "./style";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


const Footer = () => (
  <View style = {{flexDirection:'row',backgroundColor: 'red', height: 55}}>
          <View style = {{ backgroundColor: 'white', height:55, width:'25%',justifyContent: 'center',alignItems: 'center',borderRightWidth:1}}><FontAwesome name="user" size={35} /><Button title="test"  onPress={() => this.props.navigation.navigate('Test')}/></View> 
          <View style = {{ backgroundColor: 'white', height:55, width:'50%',justifyContent: 'center',alignItems: 'center', borderRightWidth:1}}><FontAwesome name="plane" size={35} /></View> 
          <View style = {{ backgroundColor: 'white', height:55, width:'25%',justifyContent: 'center',alignItems: 'center',}}><FontAwesome name="search" size={35} /></View>         
        </View>
);

export default Footer;