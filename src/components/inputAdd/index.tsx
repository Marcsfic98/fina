import React, { useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';


export function InputAdd() {

  const [description , setDescription] = useState<string>("")
  const [value , setValue] = useState<string>("")

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
        <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.txtSwitch}>Adicionar</Text>
        </TouchableOpacity>
        
    </BlurView>
  );
}