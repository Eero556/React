import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Trailer = (props) => {
    const { route } = props;
    const { movie } = route.params;

    console.log(movie)


    let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
    let imageurl = IMAGEPATH + props.poster_path;
    // id from array

    return (
        <View>
            <Text onPress={_ => videofunc}>Trailer</Text>
        </View>
    )
}

export default Trailer