import * as React from 'react';
import { useState, useEffect, View } from "react";

import { ActivityIndicator, MD2Colors } from 'react-native-paper';


const MyActivityComponent = () => {
  
    const [animate, setAnimate] = useState(true);
  
    useEffect(() => {
        setTimeout(() => {
            setAnimate(false);
        }, 3000);
    })

  
    return (
        <ActivityIndicator animating={animate} 
           size={30} /> //color={MD2Colors.red800}
    )
}

export default MyActivityComponent;
