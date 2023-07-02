import React from 'react';
import { Pressable } from 'react-native';
import styles from './FloatingButton.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FloatingButton({ onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Icon name="plus" size={25} color="white" />
    </Pressable>
  )
}