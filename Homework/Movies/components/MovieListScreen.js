import React from 'react';
import Movielist from "./Movielist";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailScreen from './MovieDetailScreen';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const MovieListScreen: () => Node = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Movielist  navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    );
}


export default MovieListScreen