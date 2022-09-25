import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovielistItem from './MovielistItem';

const Movielist = (props) => {
    const [movies, setMovies] = useState([]);



    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos');
            setMovies(data.data.results);
        };
        getData();
    }, []);


    if (movies.length === 0) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <Text>Loading, please wait...</Text>
            </View>
        )
    }

    const itemPressed = (index) => {
        //alert(index);
        props.navigation.navigate(
            'MovieDetails',
            { movie: movies[index] });
    }


    let movieItems = movies.map((movie, index) => {
        return (
            <TouchableHighlight onPress={_ => itemPressed(index)}>
                <MovielistItem movie={movie} key={index} />
            </TouchableHighlight>

        )
    });

    return (
        <ScrollView>
            {movieItems}
        </ScrollView>
    )
}

export default Movielist