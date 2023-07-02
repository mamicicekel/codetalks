import React from 'react';
import { Text, TextInput, View, } from 'react-native';
import styles from './EditProfileInput.styles';
import { useSelector } from 'react-redux';

export default function EditProfileInput({ label, type, isSecure, value, onChangeText }) {
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
                editable
            />
        </View>
    )
}