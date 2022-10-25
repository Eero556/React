import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight, TextInput, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovielistItem from './MovielistItem';
import icon from "react-native-vector-icons/FontAwesome"
import Icon from 'react-native-vector-icons/FontAwesome';

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

    // go to moviedetails
    const itemPressed = (index) => {
        props.navigation.navigate(
            'MovieDetails',
            { movie: movies[index] });
    }

    let movieItems = movies.map((movie, index) => {
        return (
            <View key={index}>
                <TouchableHighlight onPress={_ => itemPressed(index)}>
                    <MovielistItem movie={movie} />
                </TouchableHighlight>
            </View>


        )
    });
    // Search moviess

    const searchMovie = async () => {

        try {
            if (search.length <= 0) {
                getData()
            }
            let wantedMovies = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=79f98bb449c9a0eb366576882d49539b&query=${search}`)
            setMovies(wantedMovies.data.results)

        } catch (e) {
            console.log(e)
        }

    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={quary => { setSearch(quary) }}></TextInput>
                <Icon style={styles.icon} onPress={searchMovie} name='search' size={30} />
            </View>
            {movieItems}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center"
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,
        width: 350
    },
    icon: {
        marginTop: 10,
        paddingLeft: 5
    }
});

export default Movielist