
import * as React from 'react';

import { StyleSheet,
	 	View,
		Text,
		Dimensions } from 'react-native';

import { PaperProvider, Button, Snackbar , Card} from 'react-native-paper';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


import { styles } from "../utils/Styles";


const MyCard = ({card_data}) => {

	console.log(card_data.title);

	return(

		<View style={styles.container}> 
			<MyComponent item={card_data}/>		        
		</View>
	);		
}


/*

<View >
				<Text style={styles.messageTitleText}>Hello</Text>
			</View>

			<View style={{ alignItems: 'center', height:'60%'}}>
				<Text style={styles.messageBodyText}>How are You?</Text>
			</View>
			          
			<View style={{ alignItems: 'center', height:'20%'}}>
				<Button style={styles.callButton} icon="phone" mode="outlined" onPress={()=>{Linking.openURL('tel:'+ "7887680353");}}>
				  Call
				</Button>
			</View>


*/


export default MyCard;


const MyComponent = ({item}) => {
	
	console.log(item);
	
	return(
		 <Card style={cardStyle.cardArea}>
			
			<Card.Content>
				<Text variant="titleLarge">{item.title}</Text>
				<Text variant="bodyMedium">Card content</Text>
			</Card.Content>

			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
			
			<Card.Actions>
			  <Button>Cancel</Button>
			  <Button>Ok</Button>
			</Card.Actions>
			
		</Card>

		);
 
}


const cardStyle = StyleSheet.create({
	 cardArea:{ 
	 	backgroundColor:"white",
	 	padding: 20, 
	 	justifyContent: 'space-between', 
	 	display: "flex", 
	 	height: "90%", 
	 	width: "85%", 
	 	borderRadius: 10,
	 },

});
