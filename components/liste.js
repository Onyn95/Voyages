import React from 'react';
import { List, ListItem } from 'react-native-elements';

//  <List containerStyle={{marginBottom: 20}}>
//           {
//               test.map((n) => (
//               <ListItem
//                 roundAvatar
//                 avatar={{uri:n.trip_url}}
//                 key={n.name}
//                 title={n.name}
//                 onPress={() => this.MenuTripVisubility()}
//               />
//             ))
//           }
//         </List>

export const Liste = ({tripList}) => (
  console.log(tripList),
   <List containerStyle={{marginBottom: 20}}>
          {
              tripList.map((n) => (
              <ListItem
                roundAvatar
                avatar={{uri:n.trip_url}}
                key={n.name}
                title={n.name}
                onPress={() => this.MenuTripVisubility()}
              />
            ))
          }
        </List>
);
export default Liste;