import React from 'react';
import { Text } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';

interface BoxProps {
  name: string;
  value: string; 
}

export function Box({name , value}:BoxProps) {
  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.value}>R$ {value}</Text>
    </BlurView>
  );
}