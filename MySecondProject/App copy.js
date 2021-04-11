import React from 'react';
import { Text } from 'react-native';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  function getFullName(fName, mName, lName){
    return fName + " " + mName + " " + lName;
  }

  const pet = "Dog";
  return (
      <Text>
        {"\n\n\n\n\n\n"}
        Hello I am a student in CIS340! {"\n"}
        My full name is {getFullName("Justin", "Richard", "Spehalski")} {"\n"}
        I have a {pet}!
      </Text>
      
  );
}