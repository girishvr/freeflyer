import * as React from 'react';
import { Button } from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FlyerScreen} from './Screens/Flyers.js';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
        name="Flyer" 
        component={FlyerScreen} 
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Flyer')
      }
    />
  );
};
// const FlyersScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };