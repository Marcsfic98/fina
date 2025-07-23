import React from 'react';
import { Text, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import { styles } from './styles';

export function ItensListExit() {
  return (
    <View style={styles.container}>
        <View style={styles.content} >
            <Text style={styles.descriptionTxt}>Salario</Text>
            <Text style={styles.ValueTxt}>R$ 1.600.00</Text>
        </View>

        <View style={styles.containerIcon}>
            <Text style={styles.descriptionTxt}>Tipo</Text>
            <Entypo name="arrow-with-circle-down" size={24} color="#a30402" />
            </View>
    </View>
  );
}