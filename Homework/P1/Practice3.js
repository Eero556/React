import React, { useState } from 'react';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import Movie from "./Movie" 



export default function App() {
  
  return (
    <View style={styles.container}>
      <Movie title="Avatar" year="1998"/>
      <Movie title="Frozen" year="2012"/>
      <Movie title="Vikings" year="2012"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center', 
  }
});