import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './Button.styles';

export default function AuthButtons({ onPress, theme, title }) {
    return (
        <Pressable style={styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].title}>{title}</Text>
        </Pressable>
    )
}