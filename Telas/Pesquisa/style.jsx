import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    top:5
  },
  containerSearch: {
    width: width,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
  },
  livro: {
    width: 120,
    height: 150,
    margin: 5,
    resizeMode: "contain",
  },
  titulo: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  ContainerBody: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: width


  },
  Filtro: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 15,
    color: '#000',
    textAlign: 'justify',
    margin: 20,
  },
  botao: {
    backgroundColor: '#783560',
    borderRadius: 25,
    fontSize: 18,
    color: '#fff'
  },
  logo: {
    width: 45,
    height: 38,
    margin: 5
  },
  textlogo: {
    color: '#783560',
    fontSize: 15,
    margin: 2
  },
  pesquisa: {
    height: 32,
    width: 225,
    padding: 7,
    margin: 2,
    backgroundColor: '#FFF',
    top: 6,
    borderRadius: 13
  },
  subtitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',


  },
  categoria: {
    color: '#fff',
    margin: 5,
    fontSize: 15,
    textAlign:'left',

  },
  modalView: {
    backgroundColor: "#404040",
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    elevation: 50
  },
  containerResult: {
    flexDirection: 'row',
    width: width,

  },
  livroResult: {
    flexDirection: 'column',
    width: 120,
  },
  subTResult: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold'
  },
  containerCategoria: {
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    flexDirection:'column',
    marginTop:15,
    width:width

  }

},
);

