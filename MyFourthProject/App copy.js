
import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default function WordConvertor() {
  
  const [text, setText]=useState('');
  return (
    <View style={{padding: 60}}>
      <TextInput
      style={{height: 40}}
      placeholder="Input your text here!"
      onChangeText={text => setText(text)}
      defaultvalue={text}
      />
      <Text style={{padding: 10, fontsize: 42}}>
        {text.split(' ').map((word) => word && '*').join(' ')}
        </Text>

      </View>
  );
}


