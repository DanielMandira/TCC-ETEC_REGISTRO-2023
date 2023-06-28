import * as React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details, FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './style';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Agendamentos() {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            loadAgendamento();
            setRefreshing(false);
        }, 500);
    }, []);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [lista, setLista] = useState([])
    async function cancelarAgendamento() {
        const user = await AsyncStorage.getItem('@user_usuario');
        try {
            setLoading(true);
            const obj = {
                idl: idl,
                idu: user
            }
            console.log(obj);
            await api.post(`apiTCC/usuarios/cancelarAgendamento.php`, obj);

        }
        catch (error) {
            console.log('Error ao carregar os Dados ' + error);
        }
    }
    async function loadAgendamento() {
        const user = await AsyncStorage.getItem('@user_usuario');
        try {
            setLoading(true);
            const res = await api.get(`apiTCC/usuarios/historicoAgendamentos.php?idu=${user}`);
            [
                setLista([...res.data.dados])
            ]
        } catch (error) {
            console.log('Error ao carregar os Dados ' + error);
        }
    }

    useEffect(() => {
        loadAgendamento().then(() => setLoading(false))
    }, [])

    const RenderItem = function ({ item }) {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start' }}>
                <Image source={{ uri: item.imagem_livro }} style={styles.livro} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>Livro Agendado.</Text>
                    <Text style={{ fontSize: 16 }}>Retirada Disponivel dia: {item.data_prevista_retirada}{' '}</Text>
                    <TouchableOpacity style={styles.botaoAgenda} onPressIn={() => setIdl(item.id_livro)} onPressOut={() => {
                        cancelarAgendamento();
                        setTimeout(() => {
                            loadAgendamento()
                        }, 200)
                    }}>
                        <Text style={styles.textBotao}>Cancelar Agendamento{' '}
                            <FontAwesome name='close' size={16} /></Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    const [idl, setIdl] = useState('');
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#fff' }}><Text>{'\n'}</Text></View>
            <SafeAreaView>
                <View style={styles.containerSearch}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeTabs")}><Image source={logo} style={styles.logo} /></TouchableOpacity>
                    <Text style={styles.textlogo}>Bibiotec {'\n'}   BIT</Text>
                </View>
            </SafeAreaView>
            <ScrollView>
                <View style={styles.ContainerBody}>
                    <FlatList
                        data={lista}
                        keyExtractor={(item) => String(item.codigo_emprestimo_devolucao)}
                        renderItem={RenderItem}
                        extraData={idl}
                        scrollEnabled={false}

                    />
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

