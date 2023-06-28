import { Text, View, Modal, TouchableOpacity, SafeAreaView, FlatList, TextInput, Alert, ScrollView, Image, Pressable, Details, Search, SectionList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
export default function Pesquisa() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [avcSrc, setAvcSRC] = useState(false);
  const [listaPesquisa, setListaPesquisa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca]= useState('');
  const [title, setTitle] = useState('Todos');
  
  async function loadBusca() {
    try {
      setLoading(true);
      const response = await api.get(`apiTCC/livros/listarBusca.php?busca=${busca}`);
      [
        setListaPesquisa([...response.data.dados])
      ]
    } catch (error) {
      console.log('Error ao carregar os Dados'+error);
    }
  }

  async function loadPesquisa() {
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/livros/listar_pesquisa.php`);
      [
        setListaPesquisa([...res.data.dados])
      ]
    } catch (error) {
      console.log('Error ao carregar os Dados'+error);
    }
  }
  useEffect(() => {
    loadPesquisa().then(() => setLoading(false))
  },
  [])
  const RenderItem = function({item}){
    return(
      <View style={styles.livroResult}>
        <TouchableOpacity onPress={()=>navigation.navigate("Livro", {id: item.id_livro})}>
      <Image source={{uri:item.imagem_livro}} style={styles.livro} />
      <Text style={styles.titulo}>{item.titulo_livro} - {item.autor_livro}</Text>
        </TouchableOpacity>
    </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
      <SafeAreaView>
        <View style={styles.containerSearch}>
          <Image
            source={logo}
            style={styles.logo} />

          <Text style={styles.textlogo}>Bibiotec{'\n'}   BIT</Text>

          <TextInput
            type='search'
            style={styles.pesquisa}
            placeholder='Pesquisa'
            onChangeText={(busca) => setBusca(busca)}
            onTextInput={() => {loadBusca(); setTitle(busca)}}
          />
        </View>
      </SafeAreaView>

      <ScrollView>
        <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert('Modal has been closed'); setModalVisible(!modalVisible); }}>
          <ScrollView>
            <View style={styles.modalView}>
              <Text style={styles.subtitulo}>
                Filtrado Por:{'\n'}
              </Text>
              <Text style={styles.subtitulo}>
                Categoria
              </Text>
              <TouchableOpacity>
                <Text style={styles.categoria}>
                  <FontAwesome5 name="square" size={18} color="#ccc" onPress={() => {
                    if (setAvcSRC) {
                      if (avcSrc == true) {
                        setAvcSRC(false)
                      }
                    }
                  }} />  Romance
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoria}>
                  <FontAwesome5 name="square" size={18} color="#ccc" />  Suspense
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoria}>
                  <FontAwesome5 name="square" size={18} color="#ccc" />  Ficção
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.categoria}>
                  <FontAwesome5 name="square" size={18} color="#ccc" />  Autoajuda
                </Text>
              </TouchableOpacity>

              <Text style={styles.subtitulo}>
                Autor
              </Text>
              <Text style={styles.categoria} ellipsizeMode='tail'>
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Bertrand Brasil Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  SEXTANTE{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Record Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Galera{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Verus Editora Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Principis{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Jangada{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  OBJETIVA{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Rocco Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Aleph Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#ccc" />  Editora Planeta Minotauro{'\n'}
              </Text>
              <Pressable style={styles.botao} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{ color: '#FFF', fontSize: 15, margin: 2 }}>Fechar</Text>
              </Pressable>
            </View>
          </ScrollView>
        </Modal>
        <View style={styles.ContainerBody}>
          <TouchableOpacity style={styles.botao} onPress={() => {
            if (setModalVisible) {
              if (modalVisible == false) {
                setModalVisible(true);
              }
              else {
                setModalVisible(false);
              }
            }
          }}>
            <Text style={{ color: '#FFF', fontSize: 18.5, margin: 2 }}>Filtro
              <AntDesign name="filter" color={'#FFF'} size={17} />
            </Text>
          </TouchableOpacity>
          <View style={styles.containerCategoria} >
            {}
            <Text style={styles.subTResult}>{title}</Text>
            <View style={styles.containerResult}>
               <FlatList
                data={listaPesquisa}
                keyExtractor={(item) => String(item.id_livro)}
                renderItem={RenderItem}
                numColumns={3}
                scrollEnabled={false}
               />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

