import {
  StyleSheet,
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
import { showMessage, hideMessage } from "react-native-flash-message";
import { styles } from './style';
import SelectDropdown from 'react-native-select-dropdown'
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const genero = ["Masculino", "Feminino", "Outros"]
  const [nome_usuario, setNome_usuario] = useState("");
  const [sobrenome_usuario, setSobrenome_usuario] = useState("")
  const [telefone_usuario, setTelefone_usuario] = useState("");
  const [email_usuario, setEmail_usuario] = useState("");
  const [senha_usuario, setSenha_usuario] = useState("");
  const [tipo_usuario, setTipo_usuario] = useState("");
  const [genero_usuario, setGenero_usuario] = useState("");
  const [data_nasc_usuario, setData_nasc_usuario] = useState("");
  const [senhaRep_usuario, setSenhaRep_usuario] = useState("");
  const [rua_usuario, setRua_usuario] = useState("");
  const [cidade_usuario, setCidade_usuario] = useState("");
  const [bairro_usuario, setBairro_usuario] = useState("");
  const [numeroResidencia_usuario, setNumeroResidencia_usuario] = useState("");
  const [mensagem, setMensagem] = useState('')
  const [sucess, setSucess] = useState(false);
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  async function saveData() {
    try {
      setLoading(true);
      const obj = {
        nome_usuario: nome_usuario,
        sobrenome_usuario: sobrenome_usuario,
        email_usuario: email_usuario,
        senha_usuario: senha_usuario,
        tipo_usuario: tipo_usuario,
        genero_usuario: genero_usuario,
        data_nasc_usuario: data_nasc_usuario,
        rua_usuario: rua_usuario,
        cidade_usuario: cidade_usuario,
        bairro_usuario: bairro_usuario,
        numeroResidencia_usuario: numeroResidencia_usuario,
        telefone_usuario: telefone_usuario
      }
      const res = await api.post('apiTCC/usuarios/salvar.php', obj);
      setResult(res.data.sucesso)
      setMensagem(res.data.mensagem);
      console.log(result);
    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
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
          <TextInput

            style={{ width: 0, height: 0 }}
            onChangeText={(text) => setTipo_usuario(text)}
            value={'Usuario'}
          />
          <Text style={styles.Text}>Nome:
          </Text>
          <TextInput
            autoCapitalize='sentences'
            style={styles.TextInput}
            onChangeText={(text) => setNome_usuario(text)}
            value={nome_usuario}
            placeholder='Nome' />
          <Text style={styles.Text}>Sobrenome:
          </Text>
          <TextInput
            autoCapitalize='sentences'
            style={styles.TextInput}
            onChangeText={(text) => setSobrenome_usuario(text)}
            value={sobrenome_usuario}
            placeholder='Sobrenome' />
          <Text style={styles.Text}>Sexo:
          </Text>
          <SelectDropdown style={styles.SelectDropdown} data={genero}
            onSelect={(selectedItem) => {
              setGenero_usuario(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}></SelectDropdown>
          <Text style={styles.Text}>Data de Nascimento:
          </Text>
          <TextInput inputMode='numeric'
            style={styles.TextInput}
            onChangeText={(text) => setData_nasc_usuario(text)}
            value={data_nasc_usuario}
            placeholder='dd/MM/YYYY'
          />

          <Text style={styles.Text}>Telefone:
          </Text>
          <TextInput
            inputMode='tel'
            style={styles.TextInput}
            onChangeText={(text) => setTelefone_usuario(text)}
            value={telefone_usuario}
            placeholder='Apenas Numeros...'
          />
          <Text style={styles.Text}>Rua:
          </Text>
          <TextInput style={styles.TextInput}
            onChangeText={(text) => setRua_usuario(text)}
            value={rua_usuario}
          />
          <Text style={styles.Text}>Cidade:
          </Text>
          <TextInput style={styles.TextInput}
            onChangeText={(text) => setCidade_usuario(text)}
            value={cidade_usuario}
          />
          <Text style={styles.Text}>Bairro:
          </Text>
          <TextInput style={styles.TextInput}
            onChangeText={(text) => setBairro_usuario(text)}
            value={bairro_usuario}
          />
          <Text style={styles.Text}>Numero Residencia:
          </Text>
          <TextInput
            inputMode='numeric'
            style={styles.TextInput}
            onChangeText={(text) => setNumeroResidencia_usuario(text)}
            value={numeroResidencia_usuario}
          />
          <Text style={styles.Text}>Email:
          </Text>
          <TextInput
            inputMode='email'
            style={styles.TextInput}
            onChangeText={(text) => setEmail_usuario(text)}
            value={email_usuario}
          />
          <Text style={styles.Text}>Senha:
          </Text>
          <TextInput
            secureTextEntry={true}
            style={styles.TextInput}
            onChangeText={(text) => setSenha_usuario(text)}
            value={senha_usuario}
          />
          <Text style={styles.Text}>Repita a Senha:
          </Text>
          <TextInput
            secureTextEntry={true}
            style={styles.TextInput}
            onChangeText={(text) => setSenhaRep_usuario(text)}
            value={senhaRep_usuario}
          />
          {senha_usuario == null || senha_usuario == "" ?
            <Text style={styles.alert}>Insira uma Senha</Text>
            :
            senha_usuario != senhaRep_usuario ?
              <Text style={styles.alert}> As senhas não coincidem</Text>
              :
              <TouchableOpacity style={styles.botao}
                onPress={() => saveData()}
                onPressOut={() => {
                  if (result == false) {
                    alert(mensagem);
                  }
                  else {
                    navigation.navigate('Login');

                  }
                }
                }
              >
                <Text style={styles.botaoText}>Cadastrar</Text>
              </TouchableOpacity>
          }
        </View>
        <View style={styles.footer}>
          <Text>{'\n'}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

