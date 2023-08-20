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

  pageTitle:{
    fontWeight:'400',
    textAlign:'center',
    fontSize:20,
    padding:20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },

  button: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    
    padding: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 4,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7979',
    borderColor: '#ff7979',


  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
  },

  paragraph:{
    fontWeight:'400',
    textAlign:'center',
    fontSize:18,
    padding:14,
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
    backgroundColor: '#c7ecee',
    height: SCREEN_HEIGHT - 60,
    width: SCREEN_WIDTH - 80, // *Redundant - since we are using slidePerView = 1 *//
    // padding: 50,
    // position:'absolute',
    resizeMode: "cover",
    borderRadius: 15,
    // alignItems: 'center',
    // justifyContent: 'center',  
    // minimumVelocity: 0.1

  },

  //* flex view on which all the eliments are placed and background color is applied
  innerView:{
    // backgroundColor: '#f0f',
    // alignItems: 'center',
    // justifyContent: 'center', 
    display: "flex",
    height: "100%",
    borderRadius: 15,

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

  
});


export{ styles }
