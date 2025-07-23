import { Box } from '@/src/components/Box';
import { InputAdd } from '@/src/components/inputAdd';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const { height: screenHeight } = Dimensions.get('window'); 

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <LinearGradient
        start={{ x: 0, y: 0.5 }} 
        end={{ x: 1, y: 0.5 }}   
        colors={['rgb(29, 28, 51)', 'rgb(43, 25, 37)']}
        style={styles.linearGradientBackground}
      >
        <Box />
        <Box/>
        <Box/>
        <InputAdd/>
      </LinearGradient>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, 
  },
  linearGradientBackground: {
    minHeight: screenHeight, 
    alignItems: 'center',
    paddingTop: 80,
    flex: 1, 
  },
});