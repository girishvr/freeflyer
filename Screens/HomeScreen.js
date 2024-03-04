// HomeScreen.js
import * as React from 'react';

import { View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider, Button, Snackbar } from 'react-native-paper';

import MyCard from '../utils/Card.js';


import { styles } from "../utils/Styles";


export const HomeScreen = ({navigation}) => {

	return (
	    <PaperProvider theme={{ version: 2 }}>
		    <SafeAreaView style={styles.safeArea}>			    

			   	<MyCard card_data={{'title':"Ha Ha Ha"}} />

		    </SafeAreaView>
	    </PaperProvider>
  );

}	