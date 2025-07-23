import React from 'react';
import { Text, View } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';

export function BoxItens() {
  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <View>
            <Text style={styles.title}>Historico</Text>
        </View>
    </BlurView>
  );
}