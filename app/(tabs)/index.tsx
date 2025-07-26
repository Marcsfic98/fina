import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Box } from '@/src/components/Box';
import { BoxItens } from '@/src/components/BoxItens';
import { InputAdd } from '@/src/components/inputAdd';
import { saldoContext } from '@/src/context/saldoContext';
import { LinearGradient } from 'expo-linear-gradient';



export default function HomeScreen() {

  const [description , setDescription] = useState<string>("")
  const [value , setValue] = useState<string>("")
  const [addItem , setAddItem] = useState<boolean>(false)

  function handleAddItem () {

    setAddItem(true);
    
  }

  return (
    
     <saldoContext.Provider value={{value , setValue,description,setDescription , handleAddItem , addItem}}>
       <LinearGradient
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }}   
        colors={['rgb(29, 28, 51)', 'rgb(43, 25, 37)']}
        style={styles.linearGradientBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Box name="Entradas" value="1600.00"/>
        <Box name="Saidas" value="1100.00"/>
        <Box name="Total" value="1500.00"/>
        <InputAdd/>
        <BoxItens/>
        </ScrollView>

      </LinearGradient>
     </saldoContext.Provider>
    
  );
}

export const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, 
    alignItems:"center",
    marginTop:80,
    marginBottom:80
  },
  linearGradientBackground: {
    flex: 1, 
    
  },
});