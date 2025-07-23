import React from 'react';
import { Text } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';

export function Box() {
  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <Text style={styles.title}>Entradas</Text>
        <Text style={styles.value}>R$ 1650.00</Text>
    </BlurView>
  );
}