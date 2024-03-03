// Styles.js
// App wide style set here


import {StyleSheet, Dimensions} from 'react-native';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({

  safeArea:{ 
    flex: 1, 
    // justifyContent: 'space-between', 
    // alignItems: 'center' 
  },

  container: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerOptions: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    // justifyContent: 'center',
  },


  containerSnackbar: {
    flex: 1,
    justifyContent: 'space-between',
    //     alignItems: 'center',
    // justifyContent: 'center',
    width:300,
    height:50,

  },

  snackbar: {
    backgroundColor:'rgb(187, 134, 252)',        
    elevation : 2,
  },

  snackbarButton: {
    color: 'black',
    fontSize:10,

  },

  pageTitle:{
    fontWeight:'400',
    textAlign:'center',
    fontSize:20,
    padding:20,
  },

  input: {
    height: 40,
    margin: 12,
    type : 'flat',
    // borderWidth: 0.5,
    padding: 5,
  },

  button: {
    // height: 40,
    margin: 12,    
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 4,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff7979',
    uppercase: false,

  },

  callButton: {
    // height: 40,
    // width: 80,
    margin: 12,    
    paddingHorizontal: 32,
    
    elevation: 24,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff7979',
    uppercase: false,

  },

  optionButton: {
    height: 60,
    width: 200,
    elevation: 24,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    uppercase: true,

  },

  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
    fontFamily : 'Arial', //'Helvetica', 'Arial', 'sans-serif';
    uppercase: false,
  },

  paragraph:{
    fontWeight:'400',
    textAlign:'center',
    fontSize:18,
    padding:10,
  },

  //* Swiper
  cardContainer:{
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH -20 ,    
    padding: 10,
    backgroundColor: 'ivory', //'#ff7979', //'#eb4d4b',

  },

  //* SwiperSlide
  cardView:{
    // backgroundColor: '#c7ecee',
    height: ((SCREEN_WIDTH - 80) * 1.8) ,//SCREEN_HEIGHT - 60,
    width: SCREEN_WIDTH - 80, // *Redundant - since we are using slidePerView = 1 *//
    resizeMode: "cover",
    borderRadius: 10,
    justifyContent: 'space-between', //'center',  
    // minimumVelocity: 0.1

  },

  //* flex view on which all the eliments are placed and background color is applied
  innerView:{
    display: "flex",
    height: "100%",
    borderRadius: 10,

  },

  footer: {
    alignItems: 'bottom',
    // backgroundColor : "green",
    // justifyContent:'flex-end',
  },

  messageTitleText:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginBottom:10,
    marginTop:30,
    color: "black",
    fontFamily: 'monospace', //'Academy Engraved LET',
  },

  messageBodyText:{
    textAlign:'center',
    fontSize:25,
    marginBottom:20,
    marginTop:20,
    padding: 30,
    color: "black",
    fontFamily: 'monospace', //'Academy Engraved LET',
  },

  picker:{
    height: 36, 
    width: 180, 
    padding : 5,
    // textAlign:'center',
    backgroundColor: 'ivory', //'#ff7979', //
    borderWidth : 1,
    borderRadius: 5,
  },
  
});


export{ styles }
