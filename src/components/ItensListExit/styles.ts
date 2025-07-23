import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:"80%",
    height: 70, 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 10,
    marginTop:15,
    flexDirection:"row"
  },
  content:{
    width:"80%",
    gap:10,
    padding:12
  },
  descriptionTxt:{
    color:"#fff"
  },
  ValueTxt:{
    color:"#fff",
    fontSize:18
  },
  containerIcon:{
    marginTop:12,
    alignItems:"center",
    gap:10
  }
});