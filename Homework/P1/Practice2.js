
import React, { useState } from 'react';
import { Text, View, Button, ScrollView } from 'react-native';


export default function App() {
  const [lukuja, setlukuja] = useState([])

  const addNumber = () => {
    setlukuja([...lukuja, Math.random()]);
  }

  return (
    <View>
      <Button title='press me' onPress={addNumber} />
      <ScrollView>
        {
          lukuja.map((item, index) =>
            <Text key={index}>{item}</Text>)
        }
      </ScrollView>
    </View>
  );
}

