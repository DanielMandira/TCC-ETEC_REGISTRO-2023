import React, { useState, useEffect } from 'react';
import {Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details } from 'react-native';
import logo from '../../assets/logo.png';
import cadUser from '../cadUser/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import {styles} from './style';
import HomeTabs from '../routes/tabScreen';
import { useNavigation } from '@react-navigation/native';
export default function Login() {
  const navigation = useNavigation();
  const [logged, setLogged] = useState(0);
  const [email_usuario, setEmail_usuario] = useState('');
  const [senha_usuario, setSenha_usuario] = useState('');

  async function login(){      
    const obj = { email_usuario, senha_usuario };
    const res = await api.post('apiTCC/login/login.php', obj);

    if(res.data.result === 'Dados Incorretos!'){
      Alert.alert('Ops!', 'Dados Incorretos!');
    }else{
      await AsyncStorage.setItem('@user_usuario', JSON.stringify(res.data.result[0].id_usuario));
      await AsyncStorage.setItem('@tipo_usuario', JSON.stringify(res.data.result[0].tipo_usuario));
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeTabs' }]
      });
    }

  }

 
  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user_usuario');
    
    if(user){
      setLogged(1);

      navigation.reset({
        index: 0,
        routes: [{ name: 'User' }],
      });
    } else {
      setLogged(2)
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);


  return (
    <View style={styles.container}>
            <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>

        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=> navigation.navigate('HomeTabs')}><Image source={logo} style={styles.logo}/></TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
        </View>
        <View style={styles.ContainerBody}>

          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')} />

          <TextInput
            placeholder='Login'
            onChangeText={(email_usuario) => setEmail_usuario(email_usuario)}
            value={email_usuario}
            style={styles.Login} />

          <TextInput
            secureTextEntry={true}
            onChangeText={(senha_usuario) => setSenha_usuario(senha_usuario)}
            placeholder='Senha'
            value={senha_usuario}
            style={styles.Login} />

          <TouchableOpacity
            style={styles.botao}
            onPress={login}>
          <Text 
          style={{ color: '#fff', fontSize: 18, margin: 2 }}>Logar</Text>
          </TouchableOpacity>
          
          <Text style={{ color: 'red', fontSize: 18, margin: 2 }}></Text>
          <Text style={{ fontSize: 18 }}>Não possui conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(cadUser)}><Text style={styles.link}>Cadastre-se</Text></TouchableOpacity>
        </View>
    </View>
  );
}


