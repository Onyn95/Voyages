import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';


const MenuTask = ({isVisible, onDisapearCallBack}) => (
  <View>
    <Modal 
      isVisible={isVisible}
      animationIn= {'zoomInDown'}
      animationOut={'zoomOutUp'}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
    >
    
    <View>
      <Text>What? </Text>
    </View>
    <View>
      <Button title="Supprimer"
      onPress={()=>onDisapearCallBack() }
      />
      <Button title="Modifier"
      onPress={()=>onDisapearCallBack() }
      />
    </View>
    </Modal>
  </View>

);

export default MenuTask;