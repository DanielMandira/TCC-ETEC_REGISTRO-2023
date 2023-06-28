import React, { useState, useEffect } from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  Alert, 
  ScrollView, 
  Image, 
  FlatList, 
  RefreshControl} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import { styles } from './style';
import HomeTabs from '../routes/tabScreen';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function User() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [imgUSer, setImgUser] = useState("https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png");
  const [bio, setBio] = useState("");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flexWrap, setFlexWrap] = useState('wrap');
  const [imgEmp, setImgEmp] = useState('https://media.tenor.com/28DFFVtvNqYAAAAC/loading.gif')
  const [idLivEmp, setIdLivEmp] = useState('');
  const [dataEmp, setDataEmp] = useState('');
  const [statusEmp, setStatusEmp] = useState('');
  const [lista, setLista] = useState([]);
  const [listaEmp, setListaEmp] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      loadData();
      loadEmp();
      loadFav();
      setRefreshing(false);
    }, 500);
  }, []);


  function abrirLivroEmp() {
    navigation.navigate("Livro", { id: idLivEmp })
  }
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

  async function loadData() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/usuarios/listarUser_id.php?idu=${user}`);
      setNome(res.data.dados.nome_usuario);
      console.log(nome)
      setSobrenome(res.data.dados.sobrenome_usuario);
      setImgUser(res.data.dados.imagem_usuario);
      setBio(res.data.dados.bio_usuario);
      setEdit(false);
    } catch (error) {
      console.log('Error ao carregar os Dados');
    }
  }

  useEffect(() => {
    loadData().then(() => setLoading(false))
  }, [])

  async function loadFav() {
    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/usuarios/livrosFavoritos.php?idu=${user}`);
      [
        setLista([...res.data.dados])
      ]
    } catch (error) {
      console.log('Error ao carregar os Dados' + error);
    }
  }

  useEffect(() => {
    loadFav().then(() => setLoading(false))
  }, [])

  async function loadEmp() {

    const user = await AsyncStorage.getItem('@user_usuario');
    try {
      setLoading(true);
      const res = await api.get(`apiTCC/usuarios/emprestimosUsuario.php?idu=${user}`);
      [
        setListaEmp([...res.data.dados])
      ]
    } catch (error) {
      console.log('Error ao carregar os Dados');
    }
  }

  useEffect(() => {
    loadEmp().then(() => setLoading(false))
  }, [])

  const RenderEmp = function ({ item }) {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Livros', { id: item.id_livro })}>
          <Image source={{ uri: item.imagem_livro }} style={styles.livros}></Image>
          <Text style={styles.textEmp}> Data de Emprestimo {'\n'}{item.data_emprestimo_livro}{'\n'}{item.status_emprestimo}</Text>
          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Historico')}>
            <Text style={styles.textBotao}>Devolver</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    )
  }
  const RenderFav = function ({ item }) {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Livro", { id: item.id_livro })}>
          <Image style={styles.livros} source={{ uri: item.imagem_livro }}></Image>
        </TouchableOpacity>
      </View>
    )
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

      <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View style={styles.ContainerBody}>
          <View style={styles.Perfil}>
            <View style={styles.containerIMG}>
              <Image source={{ uri: imgUSer }} style={styles.imgPerfil} />
              <View style={styles.containerNamePerf}>
                <View style={styles.namePerfil}>
                  <Text style={styles.namePerfil}>{nome}{' '}{sobrenome}{' '}
                  </Text>
                  <TouchableOpacity onPress={() => navigation.navigate("EditarPerfil",)}>
                    <Ionicons name='pencil' size={18.5} style={{ color: '#000', }} />
                  </TouchableOpacity>
                </View>
                <View style={styles.containerBio}>
                  <Text style={styles.textBio}>{bio}{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.ContainerFav}>
            <Text style={styles.titulo}>Livros Favoritos</Text>
            <View style={styles.Containerlivros}>
              <FlatList
                data={lista}
                keyExtractor={(item) => String(item.id_livro)}
                renderItem={RenderFav}
                numColumns={3}
                scrollEnabled={false}
              />
            </View>
          </View>

          <View style={styles.ContainerEmprestimos}>
            <View>
              <Text style={styles.titulo}>Livros Emprestados</Text>
              <View style={styles.ContainerLivrosEmp}>
                <FlatList
                  data={listaEmp}
                  keyExtractor={(item) => String(item.id_livro)}
                  renderItem={RenderEmp}
                  horizontal={true}
                  scrollEnabled={true}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Text>{'\n'}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

