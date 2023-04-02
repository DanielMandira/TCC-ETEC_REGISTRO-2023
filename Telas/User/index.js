import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import tesla from '../../assets/User/tesla.jpg';
import neuro from '../../assets/Livros/neuromancer.jpg';
import mindest from '../../assets/Livros/mindset.jpg';
import ruina from '../../assets/Livros/Ruina_ascensao.jpg';
import coracao from '../../assets/Livros/Eu_meu_coracao.jpg';
import starWars from '../../assets/Livros/Star_Wars.png';
import bap from '../../assets/Livros/Batalha_Apoc.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import croacia from '../../assets/User/croacia.jpg'
import BatalhaApocalipse from '../Livros';
import editPerf from '../Opcoes/EditarPerfil';
import { styles } from './style';
import Home from '../Inicio/index'
import Login from '../login';
import HomeTabs from '../routes/tabScreen';

export default function User({ navigation }) {

  async function logout() {
    Alert.alert('Sair', `Você tem certeza que quer sair?`, [{
      text: 'Não',
      style: 'cancel',
    },
    {
      text: 'Sim',
      onPress: async () => {
        try {
          await AsyncStorage.clear();
          navigation.navigate('Login');
        }
        catch (error) {
          Alert.alert('Não foi possivel sair, tente novamente!')
        }
      }
    }
    ])
  }
  return (

    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
      <SafeAreaView>
        <View style={styles.containerSearch}>
          <TouchableOpacity onPress={() => navigation.navigate(HomeTabs)}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
          <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.textSair}>
              Sair {' '}
              <Ionicons name='exit-outline' color={'#783560'} size={15} />
            </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>

      <ScrollView>
        <View style={styles.ContainerBody}>
          <View style={styles.Perfil}>
            <View style={styles.containerIMG}>
              <Image source={tesla} style={styles.imgPerfil} />
              <View style={styles.containerNamePerf}>
                <Text style={styles.namePerfil}>Nikola Tesla{' '}
                  <TouchableOpacity onPress={() => navigation.navigate(editPerf)}>
                    <Ionicons name='pencil' size={18.5} style={{ color: '#000', }} />
                  </TouchableOpacity>
                </Text>
                <View style={styles.containerBio}>
                  <Text style={styles.textBio}>Inventor{'\n'}10/07/1856{' '}
                    <MaterialCommunityIcons name="zodiac-cancer" size={15} color='#3C8EE5' />{'\n'}Croácia{' '}
                    <Image source={croacia} style={{ width: 19, height: 15, color: '#FFF', }}>
                    </Image>
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.ContainerFav}>
            <Text style={styles.titulo}>Livros Favoritos</Text>
            <View style={styles.Containerlivros}>
              <Image style={styles.livros} source={neuro}></Image>
              <Image style={styles.livros} source={mindest}></Image>
              <Image style={styles.livros} source={coracao}></Image>
            </View>
            <View style={styles.Containerlivros}>
              <Image style={styles.livros} source={ruina}></Image>
              <Image style={styles.livros} source={starWars}></Image>
              <TouchableOpacity onPress={() => navigation.navigate(BatalhaApocalipse)}>
                <Image style={styles.livros} source={bap}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

