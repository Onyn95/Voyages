import React from "react";
import { Text, View, Button } from "react-native";
import Header from './components/header';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // 6.2.2
import Trip from './components/trip';

import { createBottomTabNavigator,TabBarBottom, createAppContainer } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Header content="An unexpected journey"/>
        <View style={{flex:1}}>
          <Text>body</Text>
           <Button title="test"  onPress={() => this.props.navigation.navigate('Test')}/>
        </View>
      
      </View>
    );
  }
}

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: Home },
    Trip: { screen: Trip },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName == 'Home') {
          iconName = "home";
        } else if (routeName == 'Trip') {
           iconName = "plane";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <FontAwesome name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
));