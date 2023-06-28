import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFF',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-around',
      bottom: 1,
  
    },
    containerSearch: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#E0E0E0',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    livro: {
      alignItems: 'center',
      width: 275,
      height: 375,
    },
    titulo: {
      alignItems: 'center',
      fontSize: 25,
      color: '#000',
      marginStart:15,
      marginEnd:15
    },
    ContainerBody: {
      top: 8,
      bottom: 25,
      backgroundColor: '#FFF',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: '100%',
    },
    Sinopse: {
      backgroundColor: '#e8e8e8',
      fontSize: 18.5,
      color: '#000',
      textAlign: 'justify',
      margin: 5,
      padding:15,
    },
    footer: {
      fontSize: 12,
      flexDirection: 'column'
  
    },
    modalView: {
      marginTop: 300,
      margin: 55,
      backgroundColor: "#18191a",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      modalView: {
        margin: 20,
        backgroundColor: "#18191a",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
    },
    botao: {
      backgroundColor: '#783560',
      borderRadius: 14,
      justifyContent:'center'
  
    },
    logo: {
      width: 45,
      height: 38,
      margin: 2
    },
    textlogo: {
      color: '#783560',
      fontSize: 15,
      margin: 2
    },
    placeholderView: {
      flexDirection: 'row',
      backgroundColor: '#404040',
      bottom: 21.5,
      justifyContent: 'space-around',
      width: 275,
    },
    situacao: {
      color: '#FFF',
      fontSize: 16,
    },
    viewinfo: {
      flex: 1,
      flexDirection: 'row',
      position: 'relative',
      margin: 5,
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundColor: '#404040'
  
    },
    info: {
      color: '#FFF',
      fontSize: 15.4,
      fontStyle: 'normal',
      margin: 3,
      position: 'relative',
      alignItems: 'center',
      alignContent: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
  
    },
    comentarios: {
      color: '#000',
      fontSize: 18,
      fontStyle: 'normal',
      margin: 5,
      position: 'relative',
      textAlign: 'justify',
      padding: 5
    },
    viewComentarios: {
      backgroundColor: '#E0E0E0',
      borderWidth: 2,
      borderColor: '#CCC',
      borderRadius: 20,
      marginLeft: 15,
      marginRight: 15,
      padding: 0,
      bottom: 20
    },
    Autor: {
      color: '#000',
      top: 20,
      fontSize: 23.5,
      fontWeight: 'bold',
      position: 'relative',
      textAlign: 'center',
  
    },
    sobreAutor: {
      color: '#000',
      fontSize: 16.5,
      fontStyle: 'normal',
      margin: 25,
      textAlign: 'justify',
      borderBottomWidth: 3.5,
      borderBottomColor: '#ccc'
  
    },
    comentariostilte: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      padding: 0,
      color: '#000'
    },
    stars: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      right: 77.5
    },
    imgPerfil: {
      height: 32,
      width: 32,
      borderRadius: 50,
      justifyContent: 'flex-start',
    },
    containerAutor: {
      backgroundColor: '#E0E0E0',
      justifyContent: 'space-around',
    },
    Comentarios:{
      padding:3,
      marginTop:3,
      borderBottomWidth:3,
      borderBottomColor:'#ccc',
      borderBottomEndRadius:20, 
      borderBottomStartRadius:20,
      flexDirection:'column'
    }
  }
  );
  