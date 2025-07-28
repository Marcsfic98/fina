import React, { useContext } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';

import { saldoContext } from '@/src/context/saldoContext';


export function InputAdd() {

  const {setDescription,setValue,handleAddItem}:any = useContext(saldoContext)
  

  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <Text  style={styles.label}>Descrição</Text>
        <TextInput onChangeText={setDescription}  style={styles.textInput}></TextInput>
        <Text style={styles.label}>Valor</Text>
        <TextInput onChangeText={setValue} style={styles.textInput}></TextInput>
        <View style={styles.switchContainer}>
            <Text  style={styles.txtSwitch}>Saida</Text>
            <Switch/>
            <Text style={styles.txtSwitch}>Entrada</Text>
        </View>
        <TouchableOpacity onPress={handleAddItem} style={styles.btnAdd}>
            <Text style={styles.txtSwitch}>Adicionar </Text>
        </TouchableOpacity>
        
    </BlurView>
  );
}