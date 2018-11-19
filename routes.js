import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Home from './Home';
import Footer from './components/footer';


const Root = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Footer: {
      screen: Footer
    }
    
  },
  {
    initialRouteName: 'Home',
  }
);

export default Root;