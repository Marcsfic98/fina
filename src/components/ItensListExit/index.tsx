import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { saldoContext } from '@/src/context/saldoContext';
import Entypo from '@expo/vector-icons/Entypo';
import { styles } from './styles';

export function ItensListExit() {

  const {value,description}:any = useContext(saldoContext)

  return (
    <View style={styles.container}>
        <View style={styles.content} >
            <Text style={styles.descriptionTxt}>{description}</Text>
            <Text style={styles.ValueTxt}>R$ {value}</Text>
        </View>

        <View style={styles.containerIcon}>
            <Text style={styles.descriptionTxt}>Tipo</Text>
            <Entypo name="arrow-with-circle-down" size={24} color="#a30402" />
            </View>
    </View>
  );
}