import React from 'react';
import { Pressable, View, Text } from 'react-native';
import styles from './MenuBar.styles';
import { useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MenuBar({ onPress, icon, text }) {
    const darkMode = useSelector((state) => state.theme.darkMode)

    return (
        <Pressable onPress={onPress}>
            <View style={darkMode ? styles.light.container : styles.dark.container}>
                <Icon style={darkMode ? styles.light.icon : styles.dark.icon} name={icon} size={30} />
                <Text style={darkMode ? styles.light.text : styles.dark.text}>{text}</Text>
            </View>
        </Pressable>
    )
}