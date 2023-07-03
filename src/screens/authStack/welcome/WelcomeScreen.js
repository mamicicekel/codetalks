import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './WelcomeScreen.styles';
import { useSelector } from 'react-redux';
import Button from '../../../components/buttons/button/Button';

export default function WelcomeScreen({ navigation }) {
    const darkMode = useSelector((state) => state.theme.darkMode)

    return (
        <SafeAreaView style={darkMode ? styles.light.container : styles.dark.container}>
            <Text style={darkMode ? styles.light.logoText : styles.dark.logoText}>{"</>"}</Text>
            <Text style={darkMode ? styles.light.greetingText : styles.dark.greetingText}>Welcome!</Text>
            <Text style={darkMode ? styles.light.headerText : styles.dark.headerText}>Register or sign in to create chat rooms and start messaging.</Text>
            <View style={darkMode ? styles.light.buttonContainer : styles.dark.buttonContainer}>
                <Button theme="primary" title="Sign In" onPress={() => navigation.navigate('SignInScreen')} />
                <Button theme="secondary" title="Register" onPress={() => navigation.navigate('RegisterScreen')} />
            </View>
        </SafeAreaView>
    )
}