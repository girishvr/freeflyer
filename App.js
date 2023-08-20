import * as React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FlyerScreen} from './Screens/Flyers.js';
import { styles } from "./utils/Styles";
import { useState } from 'react';
import {alertType, FreeAlerts} from './utils/Alerts'; 

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
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

  console.log('Home Screen Called');

  const [number, onChangeNumber] = React.useState('');

  // Location operation

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState("");
  const geolocationAPI = navigator.geolocation;  

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      console.log('Geolocation API is not available in your browser!')
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
        console.log('Latitude and Longitude');
        console.log({lat, long});

      }, (error) => {
        console.log('Something went wrong getting your position!')
        setError('Something went wrong getting your position!')
      })
    }
  }

  if (!lat) {
    getUserCoordinates();
  }

  return (

    <View style={styles.container}>
      <Text style={styles.pageTitle}> Welcome to Free Flyers App </Text>
      <Text style={styles.paragraph}> Please enter you phone number: </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        maxLength={10}
        placeholder="Phone Number"
        inputMode="numeric"
        keyboardType='phone-pad'
      />

      <Pressable style={styles.button} onPress={() => { loginCheck(number)}}>
        <Text style={styles.text}>Get Flyers</Text>
      </Pressable>

      <View>
        <Text style={styles.messageBodyText}><p>Your coordinates are: {lat} {long}</p> </Text>
      </View>      
      
    </View>

    
  );
};

// To fix the recursive call to on press without pressing the button
// onPress={() => this.props.navigation.navigate('Home')}


const loginUser = (number) => {
  console.log("Check and log in user");
  // FreeAlerts(alertType.InvalidInput);
  //navigation.navigate('Flyer');
  // FreeAlerts(alertType.Success);
 }


const loginCheck = (number) => {
  
  console.log(number);
  
  let num = number.replace(".", '');
    if(isNaN(num)){
     // Its not a number
    FreeAlerts(alertType.InvalidInput);
  }else{
    loginUser(num);
  }      

} 



// const FlyersScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };