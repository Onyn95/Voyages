import React from 'react';
import { View, Text, Button } from 'react-native';

class AddTrip extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add new trip!</Text>
      </View>
    );
  }
}

export default AddTrip;