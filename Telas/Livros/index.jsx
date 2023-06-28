
import React, { useState, useEffect } from 'react';
import {
   Text, 
   View, 
   TouchableOpacity, 
   SafeAreaView, 
   TextInput, 
   ScrollView, 
   Image, 
   FlatList,
   RefreshControl} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import login from '../login';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Livro({ route }) {
  const navigation = useNavigation();
  const [idl, setIdl] = useState(route.params?.id);
  const [iconText, setIcon] = useState('add-circle-outline')
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritar, setFavoritar] = useState('#CCC');
  const [dispo, setDispo] = useState('Disponivel');
  const [devo, setDevo] = useState('Emprestar');
  const [modal, setModal] = useState('Livro Agendado Para Retirada!');
  const [line, setLine] = useState(1)
  const [imgUSer, setImgUser] = useState("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png");
  const [idLivro, setIdLivro] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [dimensao, setDimensao] = useState("");
  const [editora, setEditora] = useState("");
  const [paginas, setPaginas] = useState("");
  const [publicacao, setPublicacao] = useState("");
  const [idioma, setIdioma] = useState("");
  const [isbn10, setIsbn10] = useState("");
  const [sobreAutor, setSobreAutor] = useState('');
  const [imgLivro, setImgLivro] = useState("");
  const [Fav, setFav] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [quantidade, setQuantidade] = useState('');
  const [data_retirada, setData_retirada] = useState('');
  const [status, setStatus] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      loadAgendamento();
      loadComentarios();
      loadFav();
      loadImg();
      setRefreshing(false);
    }, 500);
  }, []);


  async function loadData() {
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/livros/listar_id.php?idl=${idl}`);
      setTitulo(res.data.dados.titulo_livro);
      setIsbn10(res.data.dados.isbn_10);
      setDimensao(res.data.dados.dimensao_livro);
      setAutor(res.data.dados.autor_livro);
      setSinopse(res.data.dados.sinopse_livro);
      setSobreAutor(res.data.dados.sobre_autor)
      setEditora(res.data.dados.editora_livro);
      setPaginas(res.data.dados.numero_paginas);
      setPublicacao(res.data.dados.data_publicacao);
      setIdioma(res.data.dados.idioma_livro);
      setImgLivro(res.data.dados.imagem_livro);
      setQuantidade(res.data.dados.quantidade_livro);
    } catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  useEffect(() => {
    loadData().then(() => setLoading(false))
  }, [])
  
  async function loadAgendamento(){
    const user = await AsyncStorage.getItem('@user_usuario');
    try{
      setLoading(true);
      const res = await api.get(`apiTCC/usuarios/agendamentoLivro.php?idu=${user}&idl=${idl}`);
      setStatus(res.data.dados.status_agendamento);
      setData_retirada(res.data.dados.data_prevista_retirada)
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  useEffect(() => {
    loadAgendamento().then(() => setLoading(false))
  }, [])

  async function loadFav() {
    const user = await AsyncStorage.getItem('@user_usuario');
    setUser(user);
    try {
      setLoading(true);
      const res = await api.post(`apiTCC/usuarios/interesse_id.php?idu=${user}&idl=${idl}`);
      setFav(res.data.dados);
      console.log(Fav);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  useEffect(() => {
    loadFav()
  }, [])

  async function updateFav() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/updateFav.php?idu=${user}&idl=${idl}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  async function deleteFav() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/deleteFav.php?idu=${user}&idl=${idl}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  async function agendamento() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/agendamento.php?idu=${user}&idl=${idl}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  async function cancelarAgendamento() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/cancelarAgendamento.php?idu=${user}&idl=${idl}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  async function insertComent() {
    const user = await AsyncStorage.getItem('@user_usuario');

    try {
      setLoading(true);
      const obj = {
        idl: idl,
        idu: user,
        coment: comentario
      }
      await api.post(`apiTCC/livros/insertComent.php`, obj);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  async function loadComentarios() {
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/livros/comentarios.php?idl=${idl}`);
      [
        setComentarios([...res.data.dados])
      ]
    }
    catch (error) {
      console.log('Error ao carregar os Dados' + error);
    }
  }
  useEffect(() => {
    loadComentarios()
  }, [])


  async function loadImg() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      const resp = await api.get(`apiTCC/usuarios/listarUser_id.php?idu=${user}`);
      setImgUser(resp.data.dados.imagem_usuario);
    }
    catch (error) {
      console.log('Error ao carregar os Dados' + error);
    }
  }
  useEffect(() => {
    loadImg().then(() => setLoading(false))
  }, [])

  const renderComent = function ({ item }) {
    return (
      <View style={styles.Comentarios}>
        <View style={{flexDirection:'row'}}>
        <Image source={{ uri: item.imagem_usuario }} style={styles.imgPerfil} />
        <TouchableOpacity onPress={() => navigation.navigate(login)}>
          <Text style={{ olor: '#000', fontSize: 22 }}>{item.nome_usuario}{' '}{item.sobrenome_usuario}</Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
        <Ionicons name='star' size={18} color='#E6DE00'/>
        <Ionicons name='star' size={18} color='#E6DE00'/>
        <Ionicons name='star' size={18} color='#E6DE00'/>
        <Ionicons name='star' size={18} color='#E6DE00'/>
        <Ionicons name='star' size={18} color='#E6DE00'/>
        <Text style={{ fontSize: 15, color: '#000' }}> Recomendo</Text>
        </View>
        <View style={{backgroundColor:'#e0e0e0'}}>
        <Text style={styles.comentarios}>{item.comentario_user}</Text>
        </View>
      </View>
    )

  }

  return (

    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
      <SafeAreaView>
        <View style={styles.containerSearch}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}><Image source={logo} style={styles.logo} /></TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
          <TouchableOpacity onPress={() => navigation.navigate(login)}>
            <Image source={{ uri: imgUSer }} style={styles.imgPerfil} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={styles.ContainerBody}>
          <Text style={styles.titulo}>{titulo} - {autor}{' '}
            {user == null ?
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Ionicons name='heart' color={'#ccc'} size={25} />
              </TouchableOpacity>
              :
              Fav > 0 ?
                <TouchableOpacity onPress={() => {
                  deleteFav();
                  setTimeout(() => { loadFav() }, 500)
                }}>
                  <Ionicons name='heart' color={'red'} size={25} />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => {
                  updateFav();
                  setTimeout(() => { loadFav() }, 500)
                }}>
                  <Ionicons name='heart' color={'#ccc'} size={25} />
                </TouchableOpacity>
            }
          </Text>
          <Image source={{ uri: imgLivro }} style={styles.livro}></Image>
          <View style={styles.placeholderView}>
            {
              quantidade > 0 ?
                <Text style={styles.situacao}>Disponível</Text>
                :
                <Text style={styles.situacao}>indisponível</Text>
            }
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
              {'\n'}{paginas}{' '}páginas
            </Text>
            <Text style={styles.info}>
              Idioma{'\n'}
              <Fontisto name="world-o" size={18} color="#FFF" />
              {'\n'}{idioma}
            </Text>
            <Text style={styles.info}>
              Editora{'\n'}
              <MaterialCommunityIcons name="factory" size={18} color="#FFF" />
              {'\n'}{editora}
            </Text>
            <Text style={styles.info}>
              Data da publicação{'\n'}
              <AntDesign name="calendar" size={18} color="#FFF" />
              {'\n'}{publicacao}
            </Text>
            <Text style={styles.info}>
              Dimensões{'\n'}
              <MaterialCommunityIcons name="move-resize" size={18} color="#FFF" />
              {'\n'}{dimensao}
            </Text>
            <Text style={styles.info}>
              ISBN-10{'\n'}
              <AntDesign name="barcode" size={18} color="#FFF" />
              {'\n'}{isbn10}
            </Text>
          </View>
          <View style={styles.containerAutor}>
            <Text style={styles.Autor}>
              {autor}
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
              {sobreAutor}
            </Text>
          </View>
          <Text style={styles.Sinopse}>{sinopse}
          </Text>
          {
            user == null &&
            quantidade > 0?
            <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate('Login')}>
              <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>Emprestar{' '}
              <Ionicons name={iconText} color={'#FFF'} size={17}></Ionicons>
            </Text>
            </TouchableOpacity>
            :
            user == null && quantidade == 0 || user == null && quantidade == null?
            <Text>Indisponivel</Text>
            :
            status == 'Em Progresso' || status == 'Agendado'?
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.botao} onPress={()=>{cancelarAgendamento();
            setTimeout(()=>{loadAgendamento()}, 200)} }>
              <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>cancelar Agendamento{' '}
              <Ionicons name='close-circle-outline' color={'#FFF'} size={17}></Ionicons>
            </Text>
            </TouchableOpacity>
            <Text>Livro Disponivel para Retirada dia: {data_retirada}</Text> 
            </View>           
            :
            quantidade == 0 || quantidade == null?
            <Text>Indisponivel</Text>
            :
            <TouchableOpacity style={styles.botao} onPress={()=>{
              agendamento();
              setTimeout(()=>{loadAgendamento()}, 200)} }>
                <View style={{alignItems:'center'}}>
                <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>Emprestar{' '}
              <Ionicons name='add-circle-outline' color={'#FFF'} size={17}></Ionicons>
            </Text>
                </View>
              </TouchableOpacity>
              
            
            

          }
          <Text></Text>
        </View>
        <Text style={styles.comentariostilte}>Comentarios:{'\n'}</Text>
        <View style={styles.viewComentarios}>
          <FlatList
            data={comentarios}
            keyExtractor={(item) => String(item.id_usuario)}
            renderItem={renderComent}
            scrollEnabled={false}
          />
        </View>
        <View style={{alignContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor: '#e0e0e0' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Deixe seu comentario</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={{ uri: imgUSer }} style={{ margin: 5, width: 25, height: 25, borderRadius: 50 }} />
            <TextInput
            editable
            multiline
            numberOfLines={5}
              onChangeText={(text) => setComentario(text)}
              value={comentario}
              style={{ backgroundColor: '#fff', width: '75%', borderTopLeftRadius:20, borderBottomRightRadius:20, margin:8, fontSize:18, paddingStart:15}} />
          </View>
          <View style={{ margin: 10 }}>
            <TouchableOpacity onPress={() => { insertComent(), setComentario('');
          setTimeout(()=>{loadComentarios()}, 200) }} style={styles.botao}>
              <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>Enviar comentario</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text> </Text>
        </View>
      </ScrollView>
    </View>
  );
}

