import * as React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';


import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FlyerScreen, FlyerTypes} from './Screens/Flyers.js';
import { styles } from "./utils/Styles";
import { useState } from 'react';
import {alertType, FreeAlerts} from './utils/Alerts'; 


// import H from "@here/maps-api-for-javascript";
const HERE_API_KEY = "jTyIvP7FORzSbxrTjR11jNdScr8fDS8HXLOkObeqRvo"
const HERE_APP_ID = "TiGEKf1vgpGbsGfZ3sIQ"


const Stack = createNativeStackNavigator();


export default function App(){
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Free Flyers App"
            component={HomeScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen 
          name="Flyers" 
          component={FlyerScreen} 
          options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>  
  );
};


const HomeScreen = ({navigation}) => {

  console.log('Home Screen Called');

  const [number, onChangeNumber] = React.useState('');

  const [location, onLocationUpdate] = React.useState('');


  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [error, setError] = useState("");


// var successHandler = function(position) { 
//   alert(position.coords.latitude); 
//   alert(position.coords.longitude); 
// }; 

// var errorHandler = function (errorObj) { 
//   alert(errorObj.code + ": " + errorObj.message); 

//   alert("something wrong take this lat " + 26.0546106 ); 
//   alert("something wrong take this lng " +-98.3939791); 

// }; 
// function getLocation(){
//     navigator.geolocation.getCurrentPosition( 
//     successHandler, errorHandler, 
//     {enableHighAccuracy: true, maximumAge: 10000});
// }
  // getLocation()


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
  }else{
    if (location == ''){
      // Latitude  21.146633
      // Longitude 79.088860
      getLocationFromGeoCordinates(lat,long)
      
    }
  }


  //------ Maps API Geocoding


function getLocationFromGeoCordinates(latitude, longitude){

    const url = 'https://revgeocode.search.hereapi.com/v1/revgeocode?apikey='+ HERE_API_KEY + '&at='+ latitude +','+longitude+'&lang=en-US'
    
    fetch(url)
        .then((response) => response.json())
        .then((json) => {

            const items = json['items']
            const firstObject = items[0];
            const add = firstObject['address']
            const city = add['city']
            
            if (city != ''){
              onLocationUpdate(city);
            }


        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
}

function setLoading(status){
    console.log('setLoading');
    console.log(status);
}

//-----Maps API Geocoding





  // To fix the recursive call to on press without pressing the button
  // onPress={() => this.props.navigation.navigate('Home')}
  // {() => navigate('loginCheck', { number: number })}
  // {() => { loginCheck(number)}}

  const loginUser = (number) => {
    //use navigation hook shown as below
    // const navigation = useNavigation();

    console.log("Check and log in user");    
    FreeAlerts(alertType.Success);

    //TODO: remove after testing
    if (number == '7887680353' || number == '8104055652'){
      navigation.navigate('Flyers', {isPrivate: FlyerTypes.Private});
    }else{
      navigation.navigate('Flyers', {isPrivate: FlyerTypes.Public});
    }
    
   }


  const loginCheck = (number) => {
    
    let num = number.replace(".", '');

    if(isNaN(num)){
       // It's not a number
      FreeAlerts(alertType.InvalidInput);
    }else{
      if (checkPhone(num)){
        loginUser(num);
      }else{
        FreeAlerts(alertType.InvalidInput);
      }
    }      

  } 


  // validate phone number length between 10-14
  // 12345-12340 and 1234512345 both work as expected

  const checkPhone = phoneNumber => {
    if (!/(^\d{10,14}$)|(^\d{5}-\d{4}$)/.test(phoneNumber)) {
      return false;
    }
    return true
  };



  return (
    <SafeAreaView style={styles.safeArea}>
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

      <Pressable style={styles.button} onPress={() => {loginCheck(number)}}>
        <Text style={styles.text}>Get Flyers</Text>
      </Pressable>

      <View>        
        <Text style={styles.pageTitle}>Your coordinates are: {"\n"} {lat}  {long}</Text>
        <Text style={styles.pageTitle}>Your location: {location}</Text>
      </View>
      
    </View>
    </SafeAreaView>

  );



}; //End of App


// const FlyersScreen = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };