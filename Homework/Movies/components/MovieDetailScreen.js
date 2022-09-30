import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MovieDetailScreen(props) {

  const { route } = props;
  const { movie } = route.params;
  const [moviedetail, setmovidetails] = useState([])

  const getData = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/' + movie.id + '?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos');
    setmovidetails(data)
  };

  useEffect(() => {
    getData();
  }, []);


  let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
  let imageurl = IMAGEPATH + movie.backdrop_path;



  

  const itemPressed = (key) => {
    props.navigation.navigate(
      'Trailer', {
      youtubekey: key
    }
    );

  }

  return (
    <ScrollView>
      <Image source={{ uri: imageurl }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.text}>{movie.release_date}</Text>
      <Text style={styles.text}>{movie.overview}</Text>
      <Text>{moviedetail.runtime + " " + "Min"}</Text>
      <Text onPress={_ => itemPressed(moviedetail.videos.results[0].key)} style={styles.video}>Watch Trailer Here!</Text>

    </ScrollView>
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
  },
  video: {
    color: "blue"
  }
});
