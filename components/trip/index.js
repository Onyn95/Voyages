import React from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements'
import  AddButton  from '../add-button';
import AddTripPrompt from '../add-trip-prompt';
import Liste from '../liste';
import MenuTask from '../../components/menu-task';
import firebase from 'firebase';






 const tripList = [
  {
    name: 'Japan',
    trip_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAh1BMVEX///+8AC27ACm7ACe4AA+5ABi4ABW6ACO4ABK7ACi6AB66ACC3AAC5ABq4ABO3AAv25Of03uLiqbH99ffCLEfoucHblJ7qwMfz2t7PZHX67vHai5fjrLTvztS/FjnHQ1nWgI3ENk/uydDScH/KUWW+DjXVfInjqrLBJELJS1/MW2zms7vSc4LBZin/AAAEUklEQVR4nO3dCXaiQBAG4ADNIouAYiAqEJckEzP3P9/AOE5MwCdLL6/I/52Aqtd0Vy80Dw8AAAAAAAAAAAAAAAAAAAAAAAAAUFvG2X6fpul+n8VL1Q+j3DLfPh+LMGTO3LKsucPCsDg+b/Mfm5l8U9rM9Axdu6YbnsnscpOrfjz50ifTcQ3tFsN1zKdU9UPKlL0Gc/tmPi7sefCaqX5USdL30LubkDMvfP8JjSVN2O1XpuUlYsnUs5InbNYjI7UZS6bc30Ynv29G/mbFP0WqH12UR/N+x9rONh9VP7wQUWINzEjNSibYVLZhn661yQi3qkPg7RCOykgt/K06CK6Wu2B0SjQt2E1oHhRrQzvXr2xtMp1KFgwZgdvM3IkU+5ml34+2I92aRFLigF9KqqQEseqAxotcnimpkuKR71OWL+PKkibjhfros+Mz4lyzd6qDGufAoy75LjioDmuMxfjqtU24UB3YcLEjJCWa5tAdfBLe/euFkagObaiNKSglmmZuVAc3TCymMzkLab49Jf9h+JNdqg5viJXIZlI1FIrL+S98a/rv9EJ1gP0txqy+dmHRK1LEtpKarjrEvraim0nVUKgtWv+S0E5+qQ6ynz0TnpKqwt+rDrOXk8ja5MJ+Uh1mH+u5hJRo2nytOtAeFuJmOtdMSsNxKWpC/JXxrjrQ7ta+lJRomk/n5fmQ8+pUL8+H6lA7O8gYdWo2nZVZW3zBdqbbqkPtKpJRsJ0xKhtgK/FznQtrpTrYjh5daTlxqZxze5LVxRIq7xNex03umxHZ1FhqsoadauDRaGyoS5oAnhGZBmbyhuJqMKZxbmkvape4DZF1JYnlSVWg0NjmkTYDrBGZBS5EnMO5mRMay0pScxIgJ1Rzgv6kSe64Q2NivJdax9KoT3LUsQ2R1DqWxkIb5sUtEok5IbJ+gnW2FliPbcK6fRP2d1rMpHWydM75Yb+4SVqHQqY7qao2scfKP/lEKrbaUdI5paPqQHt4k3SejdKp4bWknNDY8PpHSnlPprA/S2WUbYzG3s5/OG/f9Cbhu4w31UH2JfycH53zff/hO68Wglcg9RfVAQ6wEjv0MDpTnStCP0QwSH5f/JDhO/Qm3FfQAvdaNIm7/4TMMmwT7slpgfuUWuDerSbcz9aC+z1+LuH+9YLzfY8u0WLtq8zkeC+oSeNc0l2xzatPMexJtJJaVHC6Z7iYQF9ysSx5TH3MkvyI88Urh3vLX1UHwdtHr1+HNBmMxonpXqLdqP8g7CbUlVx5tAb/L8Oicm6tt+joDylVdP84zUZylhZO36zoTkFsD7S3j8Lp9Z8mp5hg39qwKkOvW2PRvbAkuWUxQPbsOR3+++bYzxOZ3XSTHgLHvX2vwcx1gsPUu5EW+WbnMtP7ttmu257J3N1P/I/kWf2/0VNi+iFzLMtyWOibyekn/2/00zrO//6XNo9JHVADAAAAAAAAAAAAAAAAAAAAAAAAEOkP3d5LMFcZIQkAAAAASUVORK5CYII=',
  },
  {
    name: 'USA',
    trip_url: 'data:image/png;base64,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',
  },

]
class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({tripList: [],tripLists:'', isMenuTripVisible: false, isAddPromptVisible:false})
  }

 MenuTripVisubility = () => {
   this.setState({isMenuTripVisible: !this.state.isMenuTripVisible})
 }  
hideAddPrompt = () => {
Alert.alert("test");
} 
onAddTripPrompt = value => {
  firebase.database().ref('Trip/').push({
    name:value
  });
  
   firebase.database().ref('Trip/').once('value').then(function(data) {
       // console.log(Object.keys(data.val()))
        var nom = data.val();
        var keys = Object.keys(nom)
        //console.log(keys);
        
        for(var i=0; i<keys.length;i++) {
          var k = keys[i]
          var name= nom[k].name;
    
        }
     // this.setState({tripList: [...this.state.tripList,name]});
      var test = [name] ;
      
      this.setState({tripList:'lol'});
      console.log(tripList);
    });
    
    this.setState({isAddPromptVisible:false})
    
    
    // this.setState({tripList: [...this.state.tripList,name], isAddPromptVisible: false});
 //this.setState({tripList: [...this.state.tripList,name], isAddPromptVisible: false});
}

 displayAddPrompt = () => {
   this.setState({isAddPromptVisible: !this.state.isAddPromptVisible})
   
 }

 
 
  render() {
    
    return (
      <View style={{flex: 1}}> 
      <ScrollView>     
       <Liste tripList={this.state.tripList}/>
      </ScrollView>
      <MenuTask isVisible={this.state.isMenuTripVisible} onDisapearCallBack={this.MenuTripVisubility}/>
      <AddTripPrompt isVisible={this.state.isAddPromptVisible} title= {"Add A trip"} onCancelCallBack={this.hideAddPrompt} onSubmitCallBack={this.onAddTripPrompt} />
      <AddButton onPressCallBack={this.displayAddPrompt}/>
      </View>
    );
  }
}

export default Trip;



