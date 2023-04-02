
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import bap from '../../assets/Livros/Batalha_Apoc.jpg';
import login from '../login';
import tesla from '../../assets/User/tesla.jpg';
import {styles} from './styles';
import Home from '../Inicio/index';
export default function BatalhaApocalipse({ navigation }) {
  const [iconText, setIcon] = useState('add-circle-outline')
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritar, setFavoritar] = useState('#CCC');
  const [dispo, setDispo] = useState('Disponivel');
  const [devo, setDevo] = useState('Emprestar');
  const [modal, setModal] = useState('Livro Agendado Para Retirada!');
  const [line, setLine] = useState(1)
  return (

    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=> navigation.navigate(Home)}><Image source={logo} style={styles.logo}/></TouchableOpacity> 
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
          <TouchableOpacity onPress={() => navigation.navigate(login)}>
            <Image source={tesla} style={styles.imgPerfil} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={styles.ContainerBody}>
          <Text style={styles.titulo}>A Batalha do Apocalipse - Eduardo Spohr  <Ionicons name='heart'
            style={{ color: favoritar }}
            onPress={() => {
              if (setFavoritar) {
                if (favoritar == "red") {
                  setFavoritar('#CCC')
                }
                else {
                  setFavoritar('red')
                }
              }
            }} size={25}></Ionicons>
          </Text>
          <Image source={bap} style={styles.livro}></Image>
          <View style={styles.placeholderView}>
            <Text style={styles.situacao}>{dispo}</Text>
          </View>
          <View style={styles.stars}>
            <Ionicons name='star' color={'#E6DE00'} size={25} />
            <Ionicons name='star' color={'#E6DE00'} size={25} />
            <Ionicons name='star' color={'#E6DE00'} size={25} />
            <Ionicons name='star' color={'#E6DE00'} size={25} />
            <Ionicons name='star-half-sharp' color={'#E6DE00'} size={25} />
          </View>
          <View style={styles.viewinfo}>
            <Text style={styles.info}>
              Número de páginas{'\n'}<MaterialCommunityIcons name="book-open-page-variant-outline" size={18} color="#FFF" />
              {'\n'}588 páginas
            </Text>
            <Text style={styles.info}>
              Idioma{'\n'}
              <Fontisto name="world-o" size={18} color="#FFF" />
              {'\n'}Português
            </Text>
            <Text style={styles.info}>
              Editora{'\n'}
              <MaterialCommunityIcons name="factory" size={18} color="#FFF" />
              {'\n'}Verus
            </Text>
            <Text style={styles.info}>
              Data da publicação{'\n'}
              <AntDesign name="calendar" size={18} color="#FFF" />
              {'\n'}28 junho 2010
            </Text>
            <Text style={styles.info}>
              Dimensões{'\n'}
              <MaterialCommunityIcons name="move-resize" size={18} color="#FFF" />
              {'\n'}23 x 15.4 x 3.8 cm
            </Text>
            <Text style={styles.info}>
              ISBN-10{'\n'}
              <AntDesign name="barcode" size={18} color="#FFF" />
              {'\n'}9788576860761
            </Text>
          </View>
          <View style={styles.containerAutor}>
            <Text style={styles.Autor}>
              Eduardo Spohr
            </Text>
            <Text style={styles.sobreAutor} numberOfLines={line} onPress={() => {
              if (setLine) {
                if (line == 1) {
                  setLine(null)
                }
                else {
                  setLine(1)
                }
              }
            }}>
              Eduardo Spohr nasceu em 1976, no Rio de Janeiro. Filho de um piloto de aviões e uma comissária de bordo, teve a oportunidade de viajar pelo mundo, conhecendo culturas e povos diferentes. A paixão pela literatura e o fascínio pelo estudo da história o levaram a cursar comunicação social. Começou a trabalhar em agências de publicidade, mas acabou, gradualmente, migrando para o jornalismo. Formou-se pela PUC-Rio em 2001 e se especializou em mídias digitais. Trabalhou como repórter no Cadê Notícias, StarMedia e iG, como analista de conteúdo do iBest e depois como editor do portal Click 21. Participante regular do NerdCast, o podcast do site Jovem Nerd, é consultor de roteiro e ministra o curso “Estrutura literária: a jornada do herói no cinema e na literatura”, nas Faculdade Hélio Alonso (Facha), do Rio de Janeiro.
            </Text>
          </View>
          <Text style={styles.Sinopse}>Tudo começou há muitos e muitos anos,  há tantos anos quanto o número de estrelas no céu, o Paraíso Celeste foi palco de um terrível levante. Um grupo de anjos guerreiros, amantes da justiça e da liberdade, desafiou a tirania dos poderosos arcanjos, levantando armas contra seus opressores. Expulsos, os renegados foram forçados ao exílio, e condenados a vagar pelo mundo dos homens até o dia do Juízo Final.
            {'\n'}
            Mas eis que chega o momento do Apocalipse, o tempo do ajuste de contas, o dia do despertar do Altíssimo. Único sobrevivente do expurgo, o líder dos renegados é convidado por Lúcifer, o Arcanjo Negro, a se juntar às suas legiões na batalha do Armagedon, o embate final entre o Céu e o Inferno, a guerra que decidirá não só o destino do mundo, mas o futuro do universo.
            {'\n'}
            Das ruínas da Babilônia ao esplendor do Império Romano; das vastas planícies da China aos gelados castelos da Inglaterra medieval. A Batalha do Apocalipse não é apenas uma viagem pela história humana, mas é também uma jornada de conhecimento, um épico empolgante, cheio de lutas heroicas, magia, romance e suspense.
            {'\n'}
            A batalha do apocalipse colocará o estreante Eduardo Spohr ao lado dos mais criativos ficcionistas da nossa literatura.
          </Text>

          <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed'); setModalVisible(!modalVisible); }}>
            <View style={styles.modalView}>
              <Text style={{ color: '#FFF', fontSize: 15, }}>{modal}{'\n'}</Text>
              <Pressable style={styles.botao} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: '#FFF', fontSize: 15, margin: 2 }}>Fechar</Text>
              </Pressable>
            </View>
          </Modal>
          <TouchableOpacity style={styles.botao} onPress={() => {
            if (setDispo) {
              if (dispo == 'Disponivel') {
                setDispo('Emprestado')
                setDevo('Devolver')
                setModalVisible(true)
                setModal('Livro Agendado Para Retirada!')
                setIcon('return-down-forward')
              }
              else {
                setDispo('Disponivel')
                setDevo('Emprestar')
                setModalVisible(true)
                setModal('Digite o Codigo seguinte na Tela: 1001001')
                setIcon('add-circle-outline')
              }
            }
          }}>
            <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>{devo}
              <Ionicons name={iconText} color={'#FFF'} size={17}></Ionicons>
            </Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
        <Text style={styles.comentariostilte}>Comentarios:{'\n'}</Text>

        <View style={styles.viewComentarios}>
          <Image source={tesla} style={styles.imgPerfil} />
          <TouchableOpacity onPress={() => navigation.navigate(login)}>
            <Text style={{ left: 38, bottom: 32, color: '#000', fontSize: 22 }}>Nikola Tesla</Text>
          </TouchableOpacity>
          <Ionicons name='star' size={18} color='#E6DE00' style={{ bottom: 30, left: 38 }}>
            <Ionicons name='star' size={18} color='#E6DE00'>
              <Ionicons name='star' size={18} color='#E6DE00'>
                <Ionicons name='star' size={18} color='#E6DE00'>
                  <Ionicons name='star' size={18} color='#E6DE00'>
                  </Ionicons>
                </Ionicons>
              </Ionicons>
            </Ionicons>
          </Ionicons>
          <Text style={{ fontSize: 15, bottom: 50, left: 130, color: '#000' }}> Recomendo</Text>
          <Text style={styles.comentarios}>
            Um dos melhores livros de ficção que já li, quem curte esse gênero vai gostar muito.
            Também recomendo a trilogia Filhos do Éden, do mesmo autor, a estória se passa no mesmo universo do livro A batalha do Apocalipse.
          </Text>
        </View>
        <View style={styles.footer}>
          <Text> </Text>
        </View>
      </ScrollView>
    </View>
  );
}

