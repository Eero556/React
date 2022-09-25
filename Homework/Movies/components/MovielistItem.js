import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import axios from 'axios';




const MovielistItem = (props) => {
    let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
    let imageurl = IMAGEPATH + props.poster_path;


    
    return (
        <View style={styles.movieItem}>
            <View style={styles.movieItemImage}>
                <Image source={{ uri: imageurl }} style={{ width: 99, height: 146 }} />
            </View>
            <View style={{ marginRight: 50 }}>
                <Text style={styles.movieItemTitle}>{props.movie.title}</Text>
                <Text style={styles.movieItemText}>{props.movie.release_date}</Text>
                <Text numberOfLines={6} ellipsizeMode="tail" style={styles.movieItemText}>{props.movie.overview}</Text>
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