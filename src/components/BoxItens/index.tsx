import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import { saldoContext } from '@/src/context/saldoContext';
import { BlurView } from 'expo-blur';
import { ItensListEntry } from '../ItensListEntry';
import { ItensListExit } from '../ItensListExit';
import { styles } from './styles';

export function BoxItens() {

  const {addItem}:any = useContext(saldoContext)

  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <View>
            <Text style={styles.title}>Historico</Text>
        </View>

        {
          addItem ? (
            <>
            <ItensListEntry/>
            <ItensListExit/>
            </>
          ):null
        }
    </BlurView>
  );
}