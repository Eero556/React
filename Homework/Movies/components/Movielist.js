import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight, TextInput, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovielistItem from './MovielistItem';


const Movielist = (props) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("")
    let [url, seturl] = useState("https://api.themoviedb.org/3/movie/popular?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos")

    const getData = async () => {
        const data = await axios.get(url);
        setMovies(data.data.results);
    };
    useEffect(() => {
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
        props.navigation.navigate(
            'MovieDetails',
            { movie: movies[index] });
    }

    let movieItems = movies.map((movie, index) => {
        return (
            <View>
                <TouchableHighlight onPress={_ => itemPressed(index)}>
                    <MovielistItem movie={movie} key={index} />
                </TouchableHighlight>
            </View>


        )
    });
    // Search movies

    const searchMovie = async () => {
        try {
            let wantedMovies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79f98bb449c9a0eb366576882d49539b&query=${search}`)
            setMovies(wantedMovies.data.results)

        } catch (e) {
            getData()
        }

    }



    return (
        <ScrollView>
            
            <View style={styles.container}>
                <Button title='search' onPress={searchMovie} />
                <TextInput onChangeText={quary => { setSearch(quary) }} />
            </View>
            
            {movieItems}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      padding: 2,
    },
    item: {
      backgroundColor: "#f5f520",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
  });

export default Movielist