import { StatusBar } from 'expo-status-bar';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import React, {useRef} from 'react';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default function App() {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;
  
  return (
    // 
    <View style={styles.container}>
      
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
        momentum="true"
        speed={400}
        style={styles.cardContainer}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {Flyer.map((item) => (

          <SwiperSlide key={item.id} style={styles.cardView} >
           
            <View style={{backgroundColor: item.color, display: "flex",height: "100%", borderRadius: 15}}> 

              <View>
                <Text style={styles.messageTitleText}>{item.title}</Text>
              </View>
              <View>
                <Text style={styles.messageBodyText}>{item.bulletin}</Text>
              </View>

            </View>


          </SwiperSlide>
        ))}    
      

      </Swiper>
      <StatusBar style="auto" />
    </View>
  );
}


{/*<Image style={styles.image} source={item.uri} />*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //* Swiper
  cardContainer:{
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH -20 ,    
    backgroundColor: 'silver',
    padding: 10,

  },

  //* SwiperSlide
  cardView:{
    backgroundColor: '#fff',
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
    marginBottom:20,
    marginTop:20,
  },

  messageBodyText:{
    textAlign:'center',
    fontSize:18,
    marginBottom:20,
    marginTop:20,
  },

  
});


const Flyer = [
  { id: "1", uri: require('./assets/img0.png'), color:"#FD3A73", title:"Hi", bulletin:"How are you rdoing?" },
  { id: "2", uri: require('./assets/img1.jpeg'), color:"#424242", title:"Hello", bulletin:"How is it going on?" },
  { id: "3", uri: require('./assets/img2.png'), color:"#FD3A73", title:"Hey", bulletin:"You look awesome!" },
  { id: "4", uri: require('./assets/img3.jpeg'), color:"green", title:"Hola", bulletin:"What is up?" },
  { id: "5", uri: require('./assets/img4.jpeg'), color:"#424242", title:"Yello", bulletin:"What good in the woods?" },
]






