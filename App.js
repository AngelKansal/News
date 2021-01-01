import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import JokeScreen from './Screens/JokeScreen';
import Horoscope from './Screens/Horoscope'; 
import Weather from './Screens/Weather'; 
import TopNews from './Screens/TopNews';
import { createAppContainer, createSwitchNavigator } from 'react-navigation' ;
import constants from 'expo-constants' ;

export default class App extends React.Component{
 
  render(){
    return(
      <View>
      <AppContainer/>  
      </View>
    );
  }
}

var AppNavigator= createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen:JokeScreen,
  Horoscope:Horoscope,
  Weather:Weather,
  TopNews:TopNews
})

const AppContainer= createAppContainer(AppNavigator)