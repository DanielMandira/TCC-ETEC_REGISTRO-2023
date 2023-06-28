import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',  
      backgroundColor:'#fff'
    },
    containerSearch: {
      width: width,
      flexDirection: 'row',
      backgroundColor: '#e0e0e0',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    livro: {
      alignItems: 'center',
      width: 275,
      height: 375,
    },
    titulo: {
      alignSelf:'center',
      alignContent:'center',
      alignItems: 'center',
      fontSize: 25,
      color: '#000',
    },
    ContainerBody: {
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: width
    },
    Sinopse: {
      fontSize: 18.5,
      color: '#000',
      textAlign: 'justify',
      margin: 8,
      backgroundColor: '#e6e6e6'
    },
    footer: {
      backgroundColor: '#fff',
      fontSize: 15,
  
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
      borderRadius: 14
  
    },
    logo: {
      width: 45,
      height: 38,
      margin: 3
    },
    textlogo: {
      color: '#783560',
      fontSize: 15,
      margin: 3,
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
    imgPerfil: {
      height: 32,
      width: 32,
      borderRadius: 50,
      justifyContent: 'flex-start',
    },
    stars: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      right: 77.5
    },
    Carousel: {
      alignItems: 'center',
      backgroundColor: '#e0e0e0',
      justifyContent: 'space-around',
      flexDirection:'column',
      width: width
    },
    ContainerList:{
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      width: width
    }
  }
  );
  