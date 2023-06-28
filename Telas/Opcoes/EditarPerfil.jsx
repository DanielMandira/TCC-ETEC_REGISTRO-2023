import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Alert,
    ScrollView,
    Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { styles } from './style';
import SelectDropdown from 'react-native-select-dropdown'
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import { askAsync } from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function EditarPerfil() {
    const navigation = useNavigation();
    const genero = ["Masculino", "Feminino", "Outros"]
    const [nome_usuario, setNome_usuario] = useState("");
    const [sobrenome_usuario, setSobrenome_usuario] = useState("")
    const [bio, setBio] = useState("");
    const [mensagem, setMensagem] = useState('')
    const [result, setResult] = useState(false);
    const [loading, setLoading] = useState(false);

    async function loadEditPerfil(){
        const user = await AsyncStorage.getItem('@user_usuario');
        try{
            setLoading(true);
            const res = await api.get(`apiTCC/usuarios/loadEditPerfil.php?idu=${user}`);
            setNome_usuario(res.data.dados.nome_usuario);
            setSobrenome_usuario(res.data.dados.sobrenome_usuario);
            setBio(res.data.dados.bio_usuario);
            
        }
        catch (error) {
            console.log('Error ao carregar os Dados ' + error);
          }
        }
      
    useEffect(() => {
      loadEditPerfil()
    }, [])
    

    async function saveData() {
        const user = await AsyncStorage.getItem('@user_usuario');
        try {
            setLoading(true);
            const obj = {
                nome_usuario: nome_usuario,
                sobrenome_usuario: sobrenome_usuario,
                bio_usuario:bio
            }
             await api.post(`apiTCC/usuarios/editarPerfil.php?idu=${user}`, obj);
             console.log(obj)
        } catch (error) {
            Alert.alert("Alguma coisa deu errado, tente novamente " + error);
        }
    }


    return (
        <View style={styles.container} >
            <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
            <SafeAreaView>
                <View style={styles.containerSearch}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeTabs')}><Image source={logo} style={styles.logo} /></TouchableOpacity>
                    <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
                </View>
            </SafeAreaView>
            <ScrollView>
                <View style={styles.ContainerBody}>
                    <Text style={styles.TextTitle}>Nome:
                    </Text>
                    <TextInput
                        autoCapitalize='sentences'
                        style={styles.TextInput}
                        onChangeText={(text) => setNome_usuario(text)}
                        value={nome_usuario}
                        placeholder='Nome' />
                    <Text style={styles.TextTitle}>Sobrenome:
                    </Text>
                    <TextInput
                        autoCapitalize='sentences'
                        style={styles.TextInput}
                        onChangeText={(text) => setSobrenome_usuario(text)}
                        value={sobrenome_usuario}
                        placeholder='Sobrenome' />
                        <Text style={styles.TextTitle}>Bio:
                    </Text>
                    <TextInput
                     editable
                     multiline
                     numberOfLines={4}
                     maxLength={50}
                        autoCapitalize='sentences'
                        style={styles.TextInputBio}
                        onChangeText={(text) => setBio(text)}
                        value={bio}
                        placeholder='Sobrenome' />
                    <TouchableOpacity style={styles.botao}
                        onPress={() => saveData()}
                        onPressOut={() => {
                                navigation.navigate('User');
                        }
                        }
                    >
                        <Text style={styles.botaoText}>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text>{'\n'}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

