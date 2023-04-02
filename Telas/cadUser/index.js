import { StyleSheet, Text, View, caretHidden, Modal, TouchableOpacity, SafeAreaView, TextInput, Alert, ScrollView, Image, Pressable, Details, DatePickerIOSBase } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import logo from '../../assets/logo.png'
import { showMessage, hideMessage } from "react-native-flash-message";
import { styles } from './style';
import Login from '../login';
import SelectDropdown from 'react-native-select-dropdown'
export default function Cadastro({ navigation }) {
  const genero = ["Masculino", "Feminino", "Outros"]

  

  const [nome_usuario, setNome_usuario] = useState("");
  const [telefone_usuario, setTelefone_usuario] = useState("");
  const [email_usuario, setEmail_usuario] = useState("");
  const [senha_usuario, setSenha_usuario] = useState("");
  const [tipo_usuario, setTipo_usuario] = useState("");
  const [genero_usuario, setGenero_usuario] = useState("");
  const [data_nasc_usuario, setData_nasc_usuario] = useState("");
  const [endereco_usuario, setEndereco_usuario] = useState("");
  const [senhaRep_usuario, setSenhaRep_usuario] = useState("");
  const [sucess, setSucess] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  async function saveData() {


    if (nome_usuario == "" || email_usuario == "" || senha_usuario == "") {
      showMessage({
        message: "Erro ao Salvar",
        description: 'Preencha os Campos Obrigatórios!',
        type: "warning",
      });
      return;
    }

    try {
      const obj = {
        nome_usuario: nome_usuario,
        email_usuario: email_usuario,
        senha_usuario: senha_usuario,
        tipo_usuario: tipo_usuario,
        genero_usuario: genero_usuario,
        data_nasc_usuario: data_nasc_usuario,
        endereco_usuario: endereco_usuario,
      }

      const res = await api.post('apiTCC/usuarios/salvar.php', obj);

      if (res.data.sucesso === false) {
        showMessage({
          message: "Erro ao Salvar",
          description: res.data.mensagem,
          type: "warning",
          duration: 3000,
        });

        return;
      }

      setSucess(true);
      showMessage({
        message: "Salvo com Sucesso",
        description: "Registro Salvo",
        type: "success",
        duration: 800,
      });
      navigation.navigate("login")

    } catch (error) {
      Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
      setSucess(false);
    }
  }


  return (
    <View style={styles.container} >
      <SafeAreaView>
        <View style={styles.containerSearch}>
          <TouchableOpacity onPress={() => navigation.navigate(Home)}><Image source={logo} style={styles.logo} /></TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.ContainerBody}>
          <TextInput style={{width:0, height:0}}
           onChangeText={(text)=> setTipo_usuario(text)}
           value={'Usuario'}
          />
          <Text style={styles.Text}>Nome Completo:
          </Text>
          <TextInput style={styles.TextInput} 
          onChangeText={(text)=> setNome_usuario(text)}
          value={nome_usuario}
          placeholder='Nome Completo'/>
          <Text style={styles.Text}>Sexo:
          </Text>
          {/* <SelectDropdown data={genero}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}></SelectDropdown> */}
            <TextInput
            style={styles.TextInput} 
            onChangeText={(text)=> setGenero_usuario(text)}
            value={genero_usuario}
            placeholder='Genero'
            />
          <Text style={styles.Text}>Data de Nascimento:
          </Text>
          <TextInput
          style={styles.TextInput} 
          onChangeText={(text)=> setData_nasc_usuario(text)}
          value={data_nasc_usuario}
          placeholder='dd/MM/YYYY'
          />

          <Text style={styles.Text}>Telefone:
          </Text>
          <TextInput style={styles.TextInput}
          onChangeText={(text)=> setTelefone_usuario(text)}
          value={telefone_usuario}
          placeholder='Apenas Numeros...'
          />
          <Text style={styles.Text}>Endereço:
          </Text>
          <TextInput style={styles.TextInput}
          onChangeText={(text)=> setEndereco_usuario(text)}
          value={endereco_usuario}
          />
          <Text style={styles.Text}>Email:
          </Text>
          <TextInput style={styles.TextInput}
          onChangeText={(text)=> setEmail_usuario(text)}
          value={email_usuario}
          />
          <Text style={styles.Text}>Senha:
          </Text>
          <TextInput style={styles.TextInput}
          onChangeText={(text)=> setSenha_usuario(text)}
          value={senha_usuario}
          />
          <Text style={styles.Text}>Repita a Senha:
          </Text>
          <TextInput style={styles.TextInput}
          onChangeText={(text)=> setSenhaRep_usuario(text)}
          value={senhaRep_usuario}
          />
          <TouchableOpacity style={styles.botao} 
          onPress={() => {
            setSucess(true);
            saveData();
            setSucess(false);
          }}
          >
            <Text style={styles.botaoText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>{'\n'}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

