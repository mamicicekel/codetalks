import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './RoomCard.styles';
import { useSelector } from 'react-redux';

export default function RoomCard({ text, onPress, onLongPress }) {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      <View style={darkMode ? styles.light.container : styles.dark.container}>
        <Text style={darkMode ? styles.light.text : styles.dark.text}>{text}</Text>
      </View>
    </Pressable>
  )
}
