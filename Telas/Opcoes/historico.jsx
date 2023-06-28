import * as React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details, FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './style';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Historico() {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            loadEmp();
            setRefreshing(false);
        }, 500);
    }, []);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [lista, setLista] = useState([]);
    const [codDev, setCodDev] = useState('');

    async function devoLoad() {
        const user = await AsyncStorage.getItem('@user_usuario');
        try {
            setLoading(true);
            const obj = {
                idl: idl,
                idu: user
            }
            console.log(obj);
            await api.post(`apiTCC/usuarios/devolver.php?`, obj);
        }
        catch (error) {
            console.log('Error ao carregar os Dados ' + error);
        }
    }
    async function loadEmp() {
        const user = await AsyncStorage.getItem('@user_usuario');
        try {
            setLoading(true);
            const res = await api.get(`apiTCC/usuarios/historico.php?idu=${user}`);
            [
                setLista([...res.data.dados])
            ]
        } catch (error) {
            console.log('Error ao carregar os Dados ' + error);
        }
    }

    useEffect(() => {
        loadEmp()
    }, [])

    const RenderItem = function ({ item }) {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'flex-start',marginTop:15, borderBottomColor:'#CCC '}}>
                <Image source={{ uri: item.imagem_livro }} style={styles.livro} />
                <Text> {item.data_emprestimo_livro} - {item.status_emprestimo} - {item.data_devolucao_livro}{' '}</Text>
                {item.status_emprestimo == 'Finalizado' ? <AntDesign name="check" size={24} color="black" />
                    :
                    item.status_emprestimo == 'Devolvido' ?
                    <Text>Digite o Codigo  de Devolução no Terminal: {' '}
                        <Text style={{fontWeight:'bold'}}>"{item.codigo_emprestimo_devolucao}" {' '}</Text>
                    <Feather name="clock" size={24} color="black" />
                    </Text>
                        :
                        <TouchableOpacity style={styles.botao} onPressIn={() => setIdl(item.id_livro)} onPressOut={() => { devoLoad(); setTimeout(() => { loadEmp() }, 500) }}>
                            <Text style={styles.textBotao}>Devolver</Text>
                        </TouchableOpacity>}
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
            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
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
                        Bibiotec <FontAwesome name='copyright' size={10.5} />{'\n'}By POWERHARD
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

