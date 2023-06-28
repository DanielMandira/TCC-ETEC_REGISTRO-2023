//npm install @react-navigation/native
//npm install @react-navigation/native-stack
//npm install react-native-snap-carousel
//npm install @react-navigation/drawer
//npm install @react-navigation/bottom-tabs
//npm install @react-navigation/stack
//npm install react-native-select-dropdown
//npm install @react-native-async-storage/async-storage
//npx expo install @react-native-async-storage/async-storage@1.17.11
//npm install axios
//deprecated-react-native-prop-types
//npm install --save react-native-flash-message
//npm i react-native-redash

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons';
import config from '../Opcoes/index';
import pesquisa from '../Pesquisa/index';
import Home from '../Inicio/index'
const Tab = createBottomTabNavigator();
export default function HomeTabs({navigation}) {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: true, tabBarStyle: {
        backgroundColor: '#e0e0e0',
        borderTopWidth: 0,
        width: '100%',
        justifyContent: 'space-around'
      }
    }} sceneContainerStyle={{ backgroundColor: '#292929' }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          headerTransparent: true, title: 'Home', headerShown: false, tabBarIcon: ({ navigation }) => (
            <Icon name="home" size={30} color="#783560" />
          ), tabBarLabel: 'Inicio', tabBarHideOnKeyboard: true, unmountOnBlur: true, tabBarActiveTintColor: '#783560',
          tabBarInactiveTintColor: '#000', tabBarActiveBackgroundColor: '#ccc'
        }} />

      <Tab.Screen name="pesquisa" component={pesquisa}
        options={{
          headerTransparent: true, title: 'pesquisa', headerShown: false, tabBarIcon: ({ navigation }) => (
            <Feather name="search" size={30} color="#783560" />
          ), tabBarLabel: 'Pesquisar', tabBarHideOnKeyboard: true, tabBarActiveTintColor: '#783560',
          tabBarInactiveTintColor: '#000', tabBarActiveBackgroundColor: '#ccc'
        }} />

      <Tab.Screen name="config" component={config}
        options={{
          headerTransparent: true, title: 'config', headerShown: false, tabBarIcon: ({ navigation }) => (
            <Feather name="settings" size={30} color="#783560" />
          ), tabBarLabel: 'Opções', tabBarHideOnKeyboard: true, tabBarActiveTintColor: '#783560',
          tabBarInactiveTintColor: '#000', tabBarActiveBackgroundColor: '#ccc'
        }} />
    </Tab.Navigator >

  );
}
