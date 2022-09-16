import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './Banner';
import ToDoList from './ToDoList';
export default function App() {
  return (
    <View style={styles.container}>
      <Banner/>
      <ToDoList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
    margin: 5
  },
});
