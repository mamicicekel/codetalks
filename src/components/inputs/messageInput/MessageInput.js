import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import styles from './MessageInput.styles';
import { useSelector } from 'react-redux';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MessageInput({ type, isSecure, value, onChangeText, iconName, onPress }) {
    const darkMode = useSelector((state) => state.theme.darkMode)
    const [inputHeight, setInputHeight] = useState(0)
    const handleContentSizeChange = (event) => {
        setInputHeight(event.nativeEvent.contentSize.height)
    }

    return (
        <View style={darkMode ? styles.light.container : styles.dark.container}>
            <TextInput
                style={[darkMode ? styles.light.input : styles.dark.input, { height: Math.max(35, inputHeight) }]}
                textContentType={type}
                secureTextEntry={isSecure}
                autoCapitalize='none'
                value={value}
                onChangeText={onChangeText}
                placeholder='Message'
                placeholderTextColor={darkMode ? '#657781' : '#8695A0'}
                multiline
                onContentSizeChange={handleContentSizeChange}
            />
            <Pressable onPress={onPress} style={darkMode ? styles.light.pressable : styles.dark.pressable}>
                <Icon style={darkMode ? styles.light.icon : styles.dark.icon} name={iconName} size={40} color="white" />
            </Pressable>
        </View>
    )
}