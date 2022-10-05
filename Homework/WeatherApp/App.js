
import React from 'react';
import { useState } from 'react';
import type { Node } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Dialog from "react-native-dialog";
import { Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import WeatherForecast from './Components/weathercard';


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
  
  return (
    <SafeAreaView>
      <Header
        centerComponent={{ text: 'Weather App', style: { color: '#fff' } }}
        rightComponent={{ icon: 'add', color: '#fff', onPress: openDialog }}
      />
      {cities.map((city) => (
        <WeatherForecast key={city.id} city={city}/>
      ))}
      <Dialog.Container visible={modalVisible}>
        <Dialog.Title>Add a new city</Dialog.Title>
        <View>
          <Input
            onChangeText={(text) => setCityName(text)}
            placeholder='Type cityname here'
          />
        </View>
        <Dialog.Button label="Cancel" onPress={cancelCity} />
        <Dialog.Button label="Add" onPress={addCity} />
      </Dialog.Container>
    </SafeAreaView>
  );
};

export default App;