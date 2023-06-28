import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
  Image,
  Pressable,
  RefreshControl,
  FlatList
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import Carousel from 'react-native-snap-carousel';
import login from '../login/index';
import { styles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api'
import { useNavigation } from '@react-navigation/native';



export default function Home() {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      loadAgendamento();
      loadInteresse();
      setRefreshing(false);
    }, 500);
  }, []);

  const [iconText, setIcon] = useState('add-circle-outline')
  const [imgUSer, setImgUser] = useState("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png");
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState([]);
  const [listaAgendamento, setListaAgendamento] = useState([]);
  const [listaCarousel, setListaCarousel] = useState([]);
  const [user, setUser] = useState(null);
  const [interesse, setInteresse] = useState([]);
  const CombineList = [...lista, ...interesse];


  async function loadAgendamento() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/usuarios/listar_agendamento.php?idu=${user}`);
      [
        setListaAgendamento([...res.data.dados])
      ]
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  useEffect(() => {
    loadAgendamento()
  }, [])

  async function agendamento() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/agendamento.php?idu=${user}&idl=${selectedId}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  async function cancelarAgendamento() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/cancelarAgendamento.php?idu=${user}&idl=${selectedId}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  async function updateFav() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/updateFav.php?idu=${user}&idl=${selectedId}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  async function deleteFav() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      await api.post(`apiTCC/usuarios/deleteFav.php?idu=${user}&idl=${selectedId}`);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  async function loadImg() {
    const user = await AsyncStorage.getItem('@user_usuario');
    setUser(user);
    try {
      setLoading(true);
      const resp = await api.get(`apiTCC/usuarios/listarUser_id.php?idu=${user}`);
      setImgUser(resp.data.dados.imagem_usuario);
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }
  useEffect(() => {
    loadImg().then(() => setLoading(false))
  }, [])

  async function loadCarousel() {
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/livros/carousel.php`);
      [
        setListaCarousel([...res.data.dados])
      ]
    }
    catch (error) {
      console.log('Error ao carregar os Dados ' + error)
    }
  }
  useEffect(() => {
    loadCarousel().then(() => setLoading(false))
  }, [])

  async function loadData() {
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/livros/listarHome.php`);
      [
        setLista([...res.data.dados])
      ]
    } catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  async function loadInteresse() {
    try {
      setLoading(true);
      const int = await api.get(`apiTCC/livros/interesse.php?idu=${user}`)

      setInteresse([...int.data.dados])

    } catch (error) {
      console.log('Error ao carregar os Dados ' + error);
    }
  }

  useEffect(() => {
    loadInteresse()
  }, [])


  function MyCarousel() {
    function renderItem({ item }) {
      return (
        <View >
          <TouchableOpacity
            onPress={() => navigation.navigate("Livro", { id: item.id_livro })}
          >
            <Image style={{ height: 300, width: 200, alignSelf: 'center' }} source={{ uri: item.imagem_livro }} />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <Carousel
        layout={'tinder'}
        layoutCardOffset={90}
        data={listaCarousel}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={350}
        margin={5}
        loop={true}
        showsHorizontalScrollIndicator={true}
      />
    );
  }

  const RenderLivros = function ({ item }) {
    return (
      <View style={styles.ContainerList}>

        <Text style={styles.titulo}>{item.titulo_livro} {item.id_interesse} - {item.autor_livro}{' '}
          {
            user == null ?
              <TouchableOpacity onPressIn={() => navigation.navigate(login)}>
                <Ionicons name='heart'
                  style={{ color: '#CCC' }}
                  size={25} />
              </TouchableOpacity>
              :
              item.id_livro == interesse[0] ||
                item.id_livro == interesse[1] ||
                item.id_livro == interesse[2] ||
                item.id_livro == interesse[3] ||
                item.id_livro == interesse[4] ||
                item.id_livro == interesse[5] ||
                item.id_livro == interesse[6] ||
                item.id_livro == interesse[7] ||
                item.id_livro == interesse[8] ?
                <TouchableOpacity onPressIn={() => setSelectedId(item.id_livro)}
                  onPressOut={() => {
                    deleteFav();
                    setTimeout(() => { loadInteresse() }, 500)
                  }}>
                  <Ionicons name='heart'
                    style={{ color: 'red' }}
                    size={25} />
                </TouchableOpacity>
                : <TouchableOpacity onPressIn={() => setSelectedId(item.id_livro)}
                  onPressOut={() => {
                    updateFav();
                    setTimeout(() => { loadInteresse() }, 500)
                  }}>
                  <Ionicons name='heart'
                    style={{ color: '#CCC' }}
                    size={25} />
                </TouchableOpacity>
          }
        </Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Livro", { id: item.id_livro })
        }}><Image source={{ uri: item.imagem_livro }} style={styles.livro}></Image></TouchableOpacity>
        <View style={styles.placeholderView}>
          {
            item.quantidade_livro > 0 ?
              <Text style={styles.situacao}>Disponível</Text>
              :
              <Text style={styles.situacao}>Não Disponivel</Text>}
        </View>
        <View style={styles.stars}>
          <Ionicons name='star' color={'#E6DE00'} size={25} />
          <Ionicons name='star' color={'#E6DE00'} size={25} />
          <Ionicons name='star' color={'#E6DE00'} size={25} />
          <Ionicons name='star' color={'#E6DE00'} size={25} />
          <Ionicons name='star-half-sharp' color={'#E6DE00'} size={25} />
        </View>
        <Text
          numberOfLines={3}
          style={styles.Sinopse}
          ellipsizeMode='tail'
        >
          {item.sinopse_livro}
        </Text>
        {
          user == null ?
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>Emprestar{' '}
                <Ionicons name={iconText} color={'#FFF'} size={17}></Ionicons>
              </Text>
            </TouchableOpacity>
            :
            item.quantidade_livro >= 0 && listaAgendamento[0] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[2] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[3] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[4] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[5] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[6] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[7] == item.id_livro ||
              item.quantidade_livro >= 0 && listaAgendamento[8] == item.id_livro ?
              <TouchableOpacity style={styles.botao} onPressIn={() => setSelectedId(item.id_livro)} onPressOut={() => {
                cancelarAgendamento();
                setTimeout(() => { loadAgendamento() }, 200)
              }}>
                <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>Cancelar Agendamento {' '}
                  <Ionicons name='close-circle-outline' color={'#FFF'} size={17}></Ionicons>
                </Text>
              </TouchableOpacity>
              :
              item.quantidade_livro == null ?
                <Text>Não Disponível</Text>
                :
                <TouchableOpacity style={styles.botao} onPressIn={() => setSelectedId(item.id_livro)} onPressOut={() => {
                  agendamento();
                  setTimeout(() => { loadAgendamento() }, 200)
                }}>
                  <Text style={{ color: '#FFF', fontSize: 18, margin: 2 }}>Agendar{' '}
                    <Ionicons name='add-circle-outline' color={'#FFF'} size={17}></Ionicons>
                  </Text>
                </TouchableOpacity>


        }
        <View style={styles.footer}>
          <Text>{'\n'}</Text>
        </View>
      </View>
    )
  }
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
      <SafeAreaView>
        <View style={styles.containerSearch}>
          <Image source={logo} style={styles.logo}></Image>
          <Text style={styles.textlogo}>Bibiotec{'\n'}   BIT</Text>
          <TouchableOpacity onPress={() => navigation.navigate(login)}>
            <Image source={{ uri: imgUSer }} style={styles.imgPerfil} />
          </TouchableOpacity>
        </View>
      </SafeAreaView >
      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={styles.Carousel}>
          <Text style={{ color: '#000', fontSize: 22 }}>Melhores Avaliados</Text>
          <MyCarousel />
        </View>
        <View style={styles.ContainerBody}>
          <FlatList
            data={lista}
            keyExtractor={item => item.id_livro}
            renderItem={RenderLivros}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

