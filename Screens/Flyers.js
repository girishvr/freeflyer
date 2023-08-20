import { StatusBar } from 'expo-status-bar';

import {Flyer, LoveNote} from './../utils/Data';
import { styles } from "./../utils/Styles";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import { Text, View, Dimensions, Image, Animated } from 'react-native';
import React, {useRef} from 'react';



const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width


export const FlyerTypes = Object.freeze({
    Private: 'private',
    Public: 'public',
  });


export const FlyerScreen = (props) =>{

  //TODO: temporary 
  console.log(props.route.params.isPrivate);
  var myFlyers = Flyer;
  switch(props.route.params.isPrivate){
    case 'private':
      myFlyers = LoveNote;
      break;
    case 'public':
      myFlyers = Flyer;
      break;
  }
  
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

        {myFlyers.map((item) => (

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
      <StatusBar style="false" />
    </View>
  );
}

