import React from 'react';
import { View } from 'react-native';

import { BlurView } from 'expo-blur';
import { styles } from './styles';

export function BoxItens() {
  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
        <View>
            
        </View>
    </BlurView>
  );
}