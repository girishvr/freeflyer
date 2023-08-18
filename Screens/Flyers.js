import { StatusBar } from 'expo-status-bar';

import {Flyer} from './../utils/Data';
import { styles } from "./../utils/Styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import { Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import React, {useRef} from 'react';


import { useState } from 'react';




const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


export const FlyerScreen = ({navigation}) =>{
// export default function Flyer() {


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

  getUserCoordinates();
  console.log('Latitude and Longitude');
  console.log({lat, long});

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
               

               <View>
                <Text style={styles.messageBodyText}><p>Your coordinates are: {lat} {long}</p> </Text>
              </View>
              

            </View>


          </SwiperSlide>
        ))}    
      

      </Swiper>
      <StatusBar style="false" />
    </View>
  );
}

