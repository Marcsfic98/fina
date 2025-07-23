import { Box } from '@/src/components/Box';
import { BoxItens } from '@/src/components/BoxItens';
import { InputAdd } from '@/src/components/inputAdd';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default function HomeScreen() {
  return (
    
      <LinearGradient
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }}   
        colors={['rgb(29, 28, 51)', 'rgb(43, 25, 37)']}
        style={styles.linearGradientBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Box />
        <Box/>
        <Box/>
        <InputAdd/>
        <BoxItens/>
        </ScrollView>

      </LinearGradient>
    
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