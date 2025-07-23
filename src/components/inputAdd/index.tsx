import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';


export function InputAdd() {
  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput  style={styles.textInput}></TextInput>
        <Text style={styles.label}>Valor</Text>
        <TextInput  style={styles.textInput}></TextInput>
        <View>
            <Text>Entrada</Text>
            <Text>Saida</Text>
        </View>
        
        
    </BlurView>
  );
}