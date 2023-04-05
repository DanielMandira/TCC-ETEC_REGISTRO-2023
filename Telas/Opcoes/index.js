import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import {styles} from './style';
import logo from '../../assets/logo.png';
import EditPerfil from './EditarPerfil';
import cadUser from '../cadUser/index';
import Home from '../Inicio/index';
export default function User({ navigation }) {
  return (
    <View style={styles.container}>
            <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
      <SafeAreaView>
        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=> navigation.navigate(Home)}><Image source={logo} style={styles.logo}/></TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}   BIT</Text>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.ContainerBody}>
          <TouchableOpacity onPress={() => navigation.navigate(EditPerfil)}>
            <Text style={styles.config}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(cadUser)}>
          <Text style={styles.config}>Conta</Text>
          </TouchableOpacity>
          <Text style={styles.config}>Historico</Text>
          <Text style={styles.config}>Idioma</Text>
          <Text style={styles.config}>Armazenamento e Dados</Text>
          <Text style={styles.config}>Notificações</Text>
          <Text style={styles.config}>Privacidade</Text>
          <Text style={styles.config}>Sair</Text>
          <Text style={styles.config}>Ajuda</Text>

          <Text style={{ fontSize: 12, alignItems: 'center', textAlign: 'center', justifyContent: 'center', left: 150, marginTop: 50, color: '#FFF' }}><FontAwesome name="registered" size={10} color="#FFF" /> Bibiotec{'\n'}From{'\n'} POWEHARD</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.powerby}>
           Bibiotec <FontAwesome name='copyright' size={10.5} />{'\n'}By POWEHARD 
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

