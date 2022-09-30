import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';



const MovielistItem = (props) => {

    let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
    let imageurl = IMAGEPATH + props.poster_path;
    // id from array
    const id = props.movie.id

    const [movie, setMovie] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos');
            setMovie(data);

        };
        getData();
    }, []);

    // get genre
    var genres = "";
    if (movie !== undefined && movie.genres !== undefined) {
        for (var i = 0; i < movie.genres.length; i++) {
            genres += movie.genres[i].name + " ";
        }
    }

    const videoPressed = (key) => {
        console.log(key)
       
    }

    const itemPressed = (index) => {
        props.navigation.navigate(
            'Trailer',
            { movie: movies[index] });
    }



    
    return (
        <View style={styles.movieItem}>
            <View style={styles.movieItemImage}>
                <Image source={{ uri: imageurl }} style={{ width: 99, height: 146 }} />
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={styles.movieItemTitle}>{props.movie.title}</Text>
                <Text style={styles.movieItemText}>{props.movie.release_date}</Text>
                <Text numberOfLines={6} ellipsizeMode="tail" style={styles.movieItemText}>{props.movie.overview}</Text>
                <Text>{genres}</Text>
                <Text onPress={_ => videoPressed(index)}>Juu</Text>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    movieItem: {
        margin: 5,
        flex: 1,
        flexDirection: 'row'
    },
    movieItemImage: {
        marginRight: 5
    },
    movieItemTitle: {
        fontWeight: 'bold',
    },
    movieItemText: {
        flexWrap: 'wrap'
    }
});
export default MovielistItem