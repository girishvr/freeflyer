import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

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
      <Animated.View
          style={[
            { transform: [{translateX: pan.x}, {translateY: pan.y}]},
          ]}
          {...panResponder.panHandlers}
        >
        <View style={styles.cardView} />
        </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

function renderCards(pan, panResponder){

  return Foods.map((item, i) => {
    
  });
}


{/*<Image style={styles.image} source={item.uri} />*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView:{
    backgroundColor: '#444',
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH - 40,
    // padding: 10,
    // position:'absolute',
    // resizeMode: "cover",
    borderRadius: 10
    // alignItems: 'center',
    // justifyContent: 'center',    
  }
});


const Foods = [
  { id: "1", uri: require('./assets/img0.png') },
  { id: "2", uri: require('./assets/img1.jpeg') },
  { id: "3", uri: require('./assets/img2.png') },
  { id: "4", uri: require('./assets/img3.jpeg') },
  { id: "5", uri: require('./assets/img4.jpeg') },
]






