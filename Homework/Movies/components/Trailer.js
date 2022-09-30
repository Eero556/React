import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import YoutubePlayer from 'react-native-youtube-iframe'

const Trailer = (props) => {

    const [playing, setPlaying] = useState(true);
    const videoID = props.route.params.youtubekey
    console.log(videoID)
    return (
        <ScrollView>
            <YoutubePlayer playing={playing} videoId={videoID} height={400}/>
        </ScrollView>
    )
}

export default Trailer