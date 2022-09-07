
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const [result, setResult] = useState('0');

  // button pressed - calculate
  const buttonPressed = (calc) => {

    if (calc === '+') setResult(parseInt(number1) + parseInt(number2) + "");
    else if (calc === '-') setResult(parseInt(number1) - parseInt(number2) + "");
    else if (calc === '/') setResult(parseInt(number1) / parseInt(number2) + "");
    else if (calc === '*') setResult(parseInt(number1) * parseInt(number2) + "");
    Keyboard.dismiss();
  }



  return (
    <View style={styles.container}>
      <Text style={styles.calculator}>Basic Calculator</Text>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 1:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput onChangeText={text => setNumber1(text)} placeholder="0" style={{ textAlign: 'right' }} ></TextInput>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Number 2:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput onChangeText={text => setNumber2(text)} placeholder="0" style={{ textAlign: 'right' }} ></TextInput>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <Button color={"red"} onPress={() => buttonPressed( "+")} title="  +  " />
        <Button color={"red"} onPress={() => buttonPressed( "-")} title="  -  " />
        <Button color={"red"} onPress={() => buttonPressed( "*")} title="  *  " />
        <Button color={"red"} onPress={() => buttonPressed( "/")} title="  /  " />
      </View>
      <View style={styles.row}>
        <View style={styles.text}>
          <Text>Result:</Text>
        </View>
        <View style={styles.textInput}>
          <TextInput value={result} placeholder="0" style={{ textAlign: 'right' }} editable={false}></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculator: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  textInput: {
    justifyContent: 'center',
    padding: 5,
    borderBottomWidth: 1.0,
    width: 100,
    marginLeft: 5,
  },
  text: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    padding: 5,
    width: 100,
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
    
    
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-around',
    width: 220
  }
});
