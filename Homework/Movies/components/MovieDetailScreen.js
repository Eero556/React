import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function MovieDetailScreen(props) {

  const { route } = props;
  const { movie } = route.params;

  

  let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
  let imageurl = IMAGEPATH + movie.backdrop_path;



  const itemPressed = () => {
    props.navigation.navigate(
        'Trailer',{
        movie : { movie: movie }
        }
        );
}

  return (
    <View>
      <Image source={{ uri: imageurl }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}>{movie.release_date}</Text>
      <Text style={styles.text}>{movie.overview}</Text>
      <Text onPress={_ => itemPressed()} style={styles.text}>{movie.id}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    aspectRatio: 670 / 250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  text: {
    fontSize: 12,
    flexWrap: 'wrap'
  }
});
