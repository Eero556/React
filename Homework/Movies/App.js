import React from 'react';
import Movielist from './components/Movielist';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieListScreen from './components/MovieListScreen';
import MovieDetailScreen from './components/MovieDetailScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MoviesList"
          component={MovieListScreen}
          options={{ title: 'MovieList' }}
        />
        <Stack.Screen 
        name="MovieDetails" 
        component={MovieDetailScreen} 
        options={{ title: 'MovieDetails' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;