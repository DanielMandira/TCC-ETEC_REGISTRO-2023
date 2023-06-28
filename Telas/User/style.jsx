import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: width,
  },
  containerSearch: {
    flexDirection: 'row',
    width: width,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  titulo: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 27,
    color: '#000',
    borderBottomColor: '#CCC',
    borderBottomWidth: 3
  },
  ContainerBody: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%'
  },
  footer: {
    fontSize: 18.5,
    flexDirection: 'column'
  },
  logo: {
    width: 45,
    height: 38,
    margin: 5,
  },
  textlogo: {
    color: '#783560',
    fontSize: 15,
    margin: 5
  },
  ContainerFav: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: '#e6e6e6'
  },
  livros: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: 120,
    height: 150,
    margin: 1,
    marginBottom: 6,
    resizeMode: "contain",
  },
  Containerlivros: {
    flexDirection: 'row',
    margin: 6,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#404040',
  },
  Perfil: {
    flexDirection: 'column',
  },
  imgPerfil: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'flex-start',
  },
  namePerfil: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  textSair: {
    color: '#783560',
    fontSize: 15,
    margin: 5
  },
  containerBio: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  containerNamePerf: {
    flexDirection: 'column',
    textAlign: 'justify',
    width: '70%'
  },
  containerIMG: {
    flexDirection: 'row',
    width: width,
    maxWidth: width,
    maxHeight: height
  },
  textBio: {
    fontWeight: '300',
    fontSize: 14.5,
    color: '#000',
  },
  ContainerEmprestimos: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: width,
    backgroundColor: '#e6e6e6',
    marginTop: 10
  },
  ContainerLivrosEmp: {
    margin: 6,
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: width,
    backgroundColor: '#404040'
  },
  textEmp: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
  botao: {
    marginBottom: 6,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '70%',
    backgroundColor: '#783560',
    borderRadius: 14,

  },
  textBotao: {
    color: '#FFF',
    fontSize: 18,
    margin: 1,
    textAlign: 'center'
  },
  NamePerfil: {
    flexDirection: 'row'
  },
  centeredView: {
    flexDirection: 'row',
    backgroundColor: '#404040',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
},
);
