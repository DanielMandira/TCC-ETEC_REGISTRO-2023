import {Text, View, Modal, TouchableOpacity, SafeAreaView, FlatList,TextInput, Alert, ScrollView, Image, Pressable, Details } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState} from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import { AntDesign } from '@expo/vector-icons';
import {styles} from './style';
export default function Pesquisa() {
  const [line, setLine] = useState(1);
  const [line2, setLine2] = useState(1);
  const [line3, setLine3] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [busca, setBusca] = useState("");
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [onEndReachedCalledDuringMomentum, setMT] = useState(true);
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
      <SafeAreaView>
        <View style={styles.containerSearch}>
          <Image
           source={logo} 
           style={styles.logo}/>
           
          <Text style={styles.textlogo}>Bibiotec{'\n'}   BIT</Text>
          
          <TextInput 
          style={styles.pesquisa} 
          placeholder='Pesquisa'
          onChangeText={(busca) => setBusca(busca)}
          onTextInput={() => Search()}
          />
          <TouchableOpacity>
            <Ionicons 
            name='search-circle-outline'
            size={30} color="#783560" 
            style={{ margin: 5 }}
            onPress={() => Search()}
            />
          </TouchableOpacity>
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
              <Text numberOfLines={line} onPress={() => {
                if (setLine) {
                  if (line == 1) {
                    setLine(null)
                  }
                  else {
                    setLine(1)
                  }
                }
              }} style={styles.categoria} ellipsizeMode='tail'>
                <FontAwesome5 name="square" size={18} color="#000" />  HQ's e Mangás{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Literatura{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Infantojuvenil{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Autoajuda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Ciências Humanas e Sociais{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Literatura Estrangeira{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Artes{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Economia e Contabilidade{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Esportes e Lazer/Turismo{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Religião e Espiritualidade{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Literatura Brasileira{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Ciências Exatas/Engenharia e tecnologia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Gastronomia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Cursos e Idiomas{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Linguística{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Ciências Biológicas e Medicina{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Direito{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Geografia e História{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Didáticos{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Psicologia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Administração e Negócios{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Dicionários{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Informática{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Pets{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Medicina{'\n'}
              </Text>

              <Text style={styles.subtitulo}>
                Subcategoria
              </Text>
              <Text numberOfLines={line2} onPress={() => {
                if (setLine2) {
                  if (line2 == 1) {
                    setLine2(null)
                  }
                  else {
                    setLine2(1)
                  }
                }
              }} style={styles.categoria} ellipsizeMode='tail'>
                <FontAwesome5 name="square" size={18} color="#000" />  Desenvolvimento Pessoal{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Ficção Científica e Fantasia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Policial e Suspense{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Romance{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Histórias em Quadrinhos{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Profissionalizantes{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Antropologia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Poesia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Filosofia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Biografias e Memórias{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Botânica{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Psicologia e Psicanálise{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  História Mundial{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Política e Atualidades{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Livros para Colorir{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Literatura Juvenil{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Comportamento{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Cães{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Terror{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Teatro{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Religião Geral{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Pintura e Desenho{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Música{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Relações Interpessoais{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Serviço Social{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  História do Brasil{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Psiquiatria{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Dietas{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Biologia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Bíblias{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Teologia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  RPG{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Medicina Geral{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Esportes e Lazer{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Esoterismo{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Culinária{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Contos e Crônicas{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Arquitetura, Urbanismo e Paisagismo{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Afrobrasileiras
              </Text>
              <Text style={styles.subtitulo}>
                Editora
              </Text>
              <Text numberOfLines={line3} onPress={() => {
                if (setLine3) {
                  if (line3 == 1) {
                    setLine3(null)
                  }
                  else {
                    setLine3(1)
                  }
                }
              }} style={styles.categoria} ellipsizeMode='tail'>
                <FontAwesome5 name="square" size={18} color="#000" />  Publibooks Livros e Papeis Ltda. L&PM{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Intrínseca Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  GMT Editores Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Schwarcz SA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Record Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Globo S/A{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Urbana Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Novo Século Editora e Distribuidora Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Planeta do Brasil Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Martin Claret Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Pensamento-Cultrix Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Arqueiro Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  COMPANHIA DAS LETRAS{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Casa dos Livros Editora Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  IBC - Instituto Brasileiro de Cultura Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  SUMA DE LETRAS{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Best Seller Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Faro Editorial Eireli{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Vozes Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Rocco Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  CDG Edições e Publicações Eireli{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Astral Cultural Editora Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  SEGUINTE{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Pandorga Editora e Produtora LTDA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Pensamento Cultrix Grupo Pensamento{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Verus Editora Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  OBJETIVA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Wiser Educação S.A{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Vida Melhor Editora S.A{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Universo dos Livros Editora LTDA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Saraiva Educação S. A.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Geração Editorial Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Todavia{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Aleph Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  BUZZ EDITORA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Autêntica Editora LTDA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Autêntica Editora Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  ASSOCIAÇÃO RELIGIOSA EDITORA MUNDO CRISTÃO{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  ARTMED EDITORA LTDA.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Ajna Editora, Comércio e Serviços Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  THOMAS NELSON BRASIL{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Summus Editorial Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  SEXTANTE{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  ROCCO{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  PEQUENA ZAHAR{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  PARALELA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Pandorga{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Martin Claret{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Maquinaria Sankto Editora e Distribuidora Ltda{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Hunter Books{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  FONTANAR{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Pensamento-Cultrix Ltda. Grupo Editorial Pensamento{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Nova Fronteira Participações S/A{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  EDITORA LAFONTE LTDA{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Gente Livraria e Editora Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  Editora Bertrand Brasil Ltda.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  COMPANHIA DAS LETRINHAS{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  CIRANDA CULTURAL EDITORA E DISTRIBUIDORA LTDA.{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  BRINQUE BOOK{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  ASTRAL CULTURAL{'\n'}
                <FontAwesome5 name="square" size={18} color="#000" />  ALEPH{'\n'}
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
            <Text>Suspense</Text>
          <View style={styles.containerResult}>
            <ScrollView horizontal>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>A Biblioteca da Meia-Noite - Matt Haig</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            </ScrollView>
          </View>
          <Text>Suspense</Text>
          <View style={styles.containerResult}>
            <ScrollView horizontal>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>A Biblioteca da Meia-Noite - Matt Haig</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            </ScrollView>
          </View>
          <Text>Suspense</Text>
          <View style={styles.containerResult}>
            <ScrollView horizontal>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>A Biblioteca da Meia-Noite - Matt Haig</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            </ScrollView>
          </View>
          <Text>Suspense</Text>
          <View style={styles.containerResult}>
            <ScrollView horizontal>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>A Biblioteca da Meia-Noite - Matt Haig</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            </ScrollView>
          </View>
          <Text>Suspense</Text>
          <View style={styles.containerResult}>
            <ScrollView horizontal>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>A Biblioteca da Meia-Noite - Matt Haig</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            </ScrollView>
          </View>
          <Text>Suspense</Text>
          <View style={styles.containerResult}>
            <ScrollView horizontal>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>A Biblioteca da Meia-Noite - Matt Haig</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            <View style={styles.livroResult}>
            <Image source={require('../../assets/Livros/ABibliotecaDaMeiaNoite.jpg')} style={styles.livro}/> 
            <Text style={styles.titulo}>asdasd</Text>
            </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

