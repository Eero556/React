
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useState } from 'react';
import { NativeModules, Button } from 'react-native';
const {CalendarModule} = NativeModules;

console.log(CalendarModule)
const App: () => Node = () => {

  const [variable,setvariable] = useState("")
  
  const onPress = () => {
    CalendarModule.createCalendarEvent("Bailausta","Paikassa",(eventId,err) =>{
      if(err){
        console.log(err)
      }
      setvariable("Made new event with id: "+ " " + eventId)
      console.log("created new Event with id:" + " "  + eventId)
    })
  };
  return (
    <SafeAreaView>
      <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
    <Text>{variable}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
