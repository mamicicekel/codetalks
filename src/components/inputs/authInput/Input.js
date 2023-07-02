import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './Input.styles';
import { useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Input({ label, type, isSecure, value, onChangeText, iconName }) {
    const darkMode = useSelector((state) => state.theme.darkMode)

    return (
        <View style={darkMode ? styles.light.container : styles.dark.container}>
            <View style={darkMode ? styles.light.labelContainer : styles.dark.labelContainer}>
                <Text style={darkMode ? styles.light.label : styles.dark.label}>{label}</Text>
            </View>
            <TextInput
                style={darkMode ? styles.light.input : styles.dark.input}
                textContentType={type}
                secureTextEntry={isSecure}
                autoCapitalize='none'
                value={value}
                onChangeText={onChangeText}
            />
            <Icon style={darkMode ? styles.light.icon : styles.dark.icon} name={iconName} size={20} color="white" />
        </View>
    )
}