import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:"80%",
    height:300,
    borderRadius:16,
    overflow:"hidden",
    alignItems:"center",
    marginBottom:30
  },
  textInput:{
    width: '80%',
    height: 30, 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 10,
    paddingHorizontal: 15, 
    fontSize: 16, 
    color: '#fff', 
    
  },
  label:{
    color:"#fff",
    alignSelf:"flex-start"
    ,marginTop:20,
    marginLeft:34,
    marginBottom:5
  },
  switchContainer:{
    width:"100%",
    flexDirection:"row",
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    gap:12
  },
  txtSwitch:{
    color:"#fff",
    fontSize:16
  },
  btnAdd:{
     width: '40%',
    height: 30, 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    borderRadius: 10,
    paddingHorizontal: 15, 
    fontSize: 16, 
    color: '#fff', 
    alignItems:"center",
    justifyContent:"center",
    marginTop:40
  }
});