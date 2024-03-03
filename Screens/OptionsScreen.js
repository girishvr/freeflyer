//OptionsScreen

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./../utils/Styles";

import { PaperProvider, Button} from 'react-native-paper';
import {alertType, FreeAlerts} from './../utils/Alerts'; 



export const OptionsScreen = ({navigation}) =>{

  
  return (
    // 
    <View style={styles.containerOptions}>
      
      
              <View style={{ alignItems: 'center', height:'20%'}}>
                <Text style={styles.messageBodyText}>Pick your option:</Text>
              </View>

              <View style={{ alignItems: 'center', height:'20%'}}>
                <Button style={styles.optionButton} mode="outlined" onPress={()=>{navigation.navigate('Flyers', {navigation});}}>
                  Flyers in my area
                </Button>
              </View>
                          
              <View style={{ alignItems: 'center', height:'20%'}}>
                <Button style={styles.optionButton} mode="outlined" onPress={()=>{  FreeAlerts(alertType.NewFlyer);}}>
                  Add Flyers
                </Button>
              </View>
                   
            

         
      <StatusBar style="light" />
    </View>
  );
}

