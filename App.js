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
//npm install --save react-native-flash-message
//npm i react-native-redash
//npm install deprecated-react-native-prop-types

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import BatalhaApocalipse from './Telas/Livros';
import User from './Telas/User/index';
import EditPerfil from './Telas/Opcoes/EditarPerfil';
import Cadastro from './Telas/cadUser';
import login from './Telas/login/index';
import HomeTabs from './Telas/routes/tabScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeTabs'
          component={HomeTabs}
          options={
            {
              headerTransparent: true,
              title: '',
              headerShown: false
            }
          } />

        <Stack.Screen
          name="BatalhaApocalipse"
          component={BatalhaApocalipse}
          options={
            {
              headerTransparent: true,
              title: '',
              headerTintColor: '#000',
              headerPressOpacity: 2,
              headerShown: false
            }
          } />

        <Stack.Screen
          name='EditPerfil'
          component={EditPerfil}
          options={
            {
              headerTransparent: true,
              title: '',
              headerTintColor: '#000',
              headerShown: false
            }
          } />

        <Stack.Screen
          name='User'
          component={User}
          options={
            {
              headerTransparent: true,
              title: '', headerTintColor: '#000',
              headerPressOpacity: 2, headerShown: false
            }
          } />

        <Stack.Screen
          name='Login'
          component={login}
          options={
            {
              headerTransparent: true,
              title: '', headerTintColor: '#000',
              headerPressOpacity: 2, headerShown: false
            }
          } />

        <Stack.Screen
          name='Cadastro'
          component={Cadastro}
          options={
            {
              headerTransparent: true,
              title: '', headerTintColor: '#000',
              headerPressOpacity: 2, headerShown: false
            }
          } />
          
      </Stack.Navigator>
    </NavigationContainer>
  );
}