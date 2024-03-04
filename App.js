import * as React from 'react';


import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './Screens/HomeScreen.js';

const Stack = createNativeStackNavigator();


export default function App(){

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Free Flyers App"
            component={HomeScreen}
            options={{headerShown: true, headerTitleAlign: "center",}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>  
  );
};
