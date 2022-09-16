import { View, Text, Button, ScrollView, StyleSheet, TextInput, Keyboard } from 'react-native'
import React, { useState } from 'react';
const ToDoList = () => {
    const [itemText, setItemText] = useState("");
    const [items, setItems] = useState([]);
    const removeItem = (id) => {
        // filter/remove item with id
        const newItems = items.filter(item => item.id !== id);
        // set new items
        setItems(newItems);
      }
    
    const addToDoItem = () => {
        if (itemText !== '') {
            // add item to items, Math.random() is used to generate "unique" ID...
            setItems([...items, {id: Math.random(), text: itemText}])
            // modify newItem text to ""
            setItemText('rr')
          }
          Keyboard.dismiss();
        }
  return (
    <View>
      <View style={styles.addToDo}>
        <TextInput style={styles.addToDoTextInput} onChangeText={(text) => setItemText(text)}  placeholder="Todo"/>
        <Button title="Add" style={styles.addTodoButton} onPress={addToDoItem} />
      </View>
      <ScrollView style={styles.list}>
        {items.map((item, index) => (
            <View key={index} style={styles.listItem}>
            <Text style={styles.listItemText}> {item.text}</Text>
            <Text 
              style={styles.listItemDelete} 
              onPress={() => removeItem(item.id)}>X</Text>
          </View> 
        ))}
      </ScrollView>   
    </View>
  )
  
  
}
const styles = StyleSheet.create({
    addToDo: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      addToDoTextInput : {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        padding: 5,
        margin: 2,
        flex: 1,
      },
      list: {
        color: 'black',
        margin: 2,
      },listItem: {
        flex: 1, 
        flexDirection: 'row',
        margin: 5
      },
      listItemText: {
      },
      listItemDelete: {
        marginStart: 10,
        color: 'red',
        fontWeight: 'bold'
      }
  })



export default ToDoList