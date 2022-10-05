import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Card, Button } from 'react-native-elements';
import useAxios from 'axios-hooks';
import { create } from 'react-test-renderer';
const WeatherForecast = (params) => {
    //Use props
    const city = params.city

    const API_KEY = 'c59ff511240b68cb67f79ce98f9a17f7';
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const ICON_URL = 'http://openweathermap.org/img/wn/';


    const [{ data, loading, error }, refetch] = useAxios(
        URL + city.name + '&appid=' + API_KEY + '&units=metric'
    )

    if (loading) return (
        <Card>
            <Card.Title>Loading....</Card.Title>
        </Card>
    )
    if (error) return (
        <Card>
            <Card.Title>Error loading weather forecast!</Card.Title>
        </Card>
    )
    const refreshForecast = () => {
        refetch();
    }


    const deleteCity = () => {
        params.deleteCity(city.id);
    }


    return (
        <Card>
            <View style={styles.container}>
                <Card.Title>{city.name} : {new Date().toLocaleDateString()}</Card.Title>
                <Text>Main: {data.weather[0].main}</Text>
                <Text>Temp: {data.main.temp} °C</Text>
                <Text>Feels: {data.main.feels_like} °C</Text>
                <Text>Temp: {data.main.temp} °C</Text>
                <Text>Min-Max: {data.main.temp_min} - {data.main.temp_max}</Text>
                <Image style={styles.img} source={{ uri: ICON_URL + data.weather[0].icon + '.png' }}
                />
                <View style={styles.buttonContainer}>
                    <Button onPress={refreshForecast} title={"Refresh"}></Button>
                    <Button onPress={deleteCity} title={"Delete"}></Button>
                </View>

            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    img: {
        width: 60,
        height: 60,

    },
    container: {
        flex: 1,
        alignItems: "center",

    },
    buttonContainer:{
        width: 550,
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default WeatherForecast