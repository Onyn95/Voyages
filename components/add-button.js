import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button'

const AddButton = ({onPressCallBack}) => (
 
    <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="New trip"
            onPress={() => onPressCallBack()}>
            <Icon name="android-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
  
);

const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
export default AddButton;