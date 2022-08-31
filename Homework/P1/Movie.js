import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Movie(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text>{props.year}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: 'center',
      padding: "12px",
      border: "1px solid black",
      height: "100px",
      width: "200px",
      margin: "5px" 
    },
    title: {
      backgroundColor: "red",
      fontSize: 50
    },
  });