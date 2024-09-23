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
//npm install expo-image-picker
// npm  install expo-permissions
// npm  install expo-image-picker

// Talvez precise mais tarde
//  const CombineList = lista.map((item, index)=>({item1:item, item2: interesse[index]}));

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import Livro from './Telas/Livros';
import User from './Telas/User/index';
import EditPerfil from './Telas/Opcoes/EditarPerfil';
import Cadastro from './Telas/cadUser';
import login from './Telas/login/index';
import HomeTabs from './Telas/routes/tabScreen';
import Historico from './Telas/Opcoes/historico';
import Agendamentos from './Telas/Opcoes/Agendamentos';
import EditarPerfil from './Telas/Opcoes/EditarPerfil';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
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
          name="Livro"
          component={Livro}
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
          <Stack.Screen
          name='Historico'
          component={Historico}
          options={
            {
              headerTransparent: true,
              title: '', headerTintColor: '#000',
              headerPressOpacity: 2, headerShown: false
            }
          } />
          <Stack.Screen
          name='Agendamentos'
          component={Agendamentos}
          options={
            {
              headerTransparent: true,
              title: '', headerTintColor: '#000',
              headerPressOpacity: 2, headerShown: false
            }
          } />
           <Stack.Screen
          name='EditarPerfil'
          component={EditarPerfil}
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