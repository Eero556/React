import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { FAB } from "react-native-paper"
import Dialog from "react-native-dialog"
import { Input } from "react-native-elements"
import axios from "axios"
export default function App() {

  
  const [modalVisible, setModalVisible] = useState(false);
  const [cityName, setCityName] = useState("");
  const [cityDesc, setCityDesc] = useState("");
  const [cities, setCities] = useState([]);

  //modal open/close
  const openDialog = () => {
    setModalVisible(true);
  }

  const cancelCity = () => {
    setModalVisible(false)
  }

  //axios call

  const addCitymarker = async (search) => {
    const { data } = await axios(`https://nominatim.openstreetmap.org/search?city=$${search}&format=json&limit=1`);
    setCities([...cities, { id: data[0].place_id, name: cityName, desc: cityDesc, lat: Number(data[0].lat), lon: Number(data[0].lon) }]);
    setModalVisible(false);
  }
  console.log(cities)



  return (
    <SafeAreaView style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 60.889,
        longitude: 25.604,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05
      }}>
      {cities.map((city) => (
            <Marker title={city.name} description={city.desc} key={city.id}  coordinate={{latitude: city.lat, longitude: city.lon}}/>
          ))}

      </MapView>
      <FAB icon="plus" style={styles.fab} onPress={openDialog} />
      

      <Dialog.Container visible={modalVisible}>
        <Dialog.Title>Add a new city</Dialog.Title>
        <View>
          <Input
            onChangeText={(text) => setCityName(text)}
            placeholder='Type cityname here'
            keyboardType='text'
          />
          <Dialog.Title>Description</Dialog.Title>
          <Input
            onChangeText={(text) => setCityDesc(text)}
            placeholder='Type desc here'
            keyboardType='text'
          />
        </View>
        <Dialog.Button label="Cancel" onPress={cancelCity} />
        <Dialog.Button label="Add" onPress={()=> addCitymarker(cityName)} />
      </Dialog.Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fab: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16
  }
});
