
import React from 'react';
import { useState, useEffect } from 'react';
import type { Node } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Dialog from "react-native-dialog";
import { Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import WeatherForecast from './WeatherForecast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const App: () => Node = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);

  

  
  const openDialog = () => {
    setModalVisible(true);
  }

  const cancelCity = () => {
    setModalVisible(false)
  }
  const addCity = () => {
    setCities([...cities, { id: Math.random(), name: cityName }]);
    setModalVisible(false);
  }

  const deleteCity = (deleteCity) => {
    let filteredArray = cities.filter((city) => city.id !== deleteCity);
    setCities(filteredArray);
    console.log(deleteCity)
  }

  //Local storage

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@cities', JSON.stringify(cities));
    } catch (e) {
      // saving error
      console.log("Cities saving error!");
    }
  }


  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@cities')
      if (value !== null) {
        setCities(JSON.parse(value));
      }
    } catch (e) {
      console.log("Cities loading error!");
    }
  }

  // load cities when app starts
  useEffect(() => {
    getData();
  }, []);

  // save cities if cities state changes
  useEffect(() => {
    storeData();
  }, [cities]);



  return (
    <SafeAreaView>
      <Header
        centerComponent={{ text: 'Weather App', style: { color: '#fff' } }}
        rightComponent={{ icon: 'add', color: '#fff', onPress: openDialog }}
      />
        <ScrollView>
          {cities.map((city) => (
            <WeatherForecast key={city.id} city={city} deleteCity={deleteCity} />
          ))}
        </ScrollView>
      


      <Dialog.Container visible={modalVisible}>
        <Dialog.Title>Add a new city</Dialog.Title>
        <View>
          <Input
            onChangeText={(text) => setCityName(text)}
            placeholder='Type cityname here'
            keyboardType='text'
          />
        </View>
        <Dialog.Button label="Cancel" onPress={cancelCity} />
        <Dialog.Button label="Add" onPress={addCity} />
      </Dialog.Container>
    </SafeAreaView>
  );
};

export default App;