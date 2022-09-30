import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe'

const Trailer = (props) => {
    const [playing, setPlaying] = useState(true);

    const videoID = props.route.params.youtubekey
    console.log(videoID)
   


    return (
        <View>
            <YoutubePlayer playing={playing} videoId={videoID} height={300}/>
        </View>
    )
}

export default Trailer