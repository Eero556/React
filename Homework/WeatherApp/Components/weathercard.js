import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-elements';
import useAxios from 'axios-hooks';

const WeatherForecast = (props) => {
    //Use props
    const city = props.city
    return (
        <Card>
            <Card.Title>{city.name}</Card.Title>
        </Card>
    )
}

export default WeatherForecast