import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
  const [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Text> Counter: {count}</Text>
      <Button color={"black"} onPress={() => { setcount(count + 1) }} title="Click Me" />
      <Button color={"black"} onPress={() => { setcount(count - 1) }} title="Click Me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'green'
  }
});
