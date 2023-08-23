import * as React from 'react';
import { useState, useEffect, View } from "react";

import { ActivityIndicator, MD2Colors } from 'react-native-paper';


const MyActivityComponent = () => {
  
    const [animate, setAnimate] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setAnimate(false);
        }, 4000);
    })

  
    return (
        <ActivityIndicator animating={animate} 
          color="#26de8177" size={40} /> //color={MD2Colors.red800}
    )
}

export default MyActivityComponent;
