import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={styles.banner}>
    <Text style={styles.bannerText}>ToDo example with React Native</Text>
  </View>
  )
}


const styles = StyleSheet.create({
    banner: {
      backgroundColor: 'cadetblue',
      justifyContent: 'center',
      marginBottom: 20
    },
    bannerText: {
      color: 'white',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20
    }
  });
export default Banner