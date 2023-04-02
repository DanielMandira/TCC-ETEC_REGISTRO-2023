import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({

    container: {
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
      justifyContent: 'center',
      width: width,
      backgroundColor: '#e6e6e6'
    },
    livros: {
      width: 120,
      height: 150,
      margin: 5,
      resizeMode: "contain",
  
  
    },
    Containerlivros: {
      flex: 1,
      flexDirection: 'row',
      margin: 6,
      justifyContent: 'center',
      backgroundColor: '#404040'
  
    },
    Perfil: {
      flex: 1,
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
      fontWeight: '200',
      color: '#000',
      textAlign:'center',
    },
    textSair:{
      color: '#783560',
      fontSize: 15,
      margin: 5
    },
    containerBio:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    },
    containerNamePerf:{
      flexDirection:'column',
      textAlign:'justify',
      width:'70%'
    },
    containerIMG:{
      flexDirection:'row',
      width:width,
      maxWidth:width,
      maxHeight:height
    },
    textBio:{
      fontWeight: '100', 
      fontSize: 14.5, 
      color: '#000',
    },
  },
  );
  