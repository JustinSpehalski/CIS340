import React from 'react';
import {Text, Image, View } from 'react-native';

export default function MyDog() {
  
  let pic = {uri: 'https://raw.githubusercontent.com/AdunabiRamadan/CIS340/master/images/dog2.png' }
  return (
    <View >
      <Image> source={pic}
        style={{width: 200, height: 200}}
        </Image>"
    
      <Text> Hello, this is my dog </Text>
    </View>
  );
}

