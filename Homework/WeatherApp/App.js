
import React from 'react';
import { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Dialog from "react-native-dialog";
import { Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import WeatherForecast from './WeatherForecast';


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
    let filteredArray = cities.filter(city => city.id !== deleteCity.id);
    setCities(filteredArray);
  }

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