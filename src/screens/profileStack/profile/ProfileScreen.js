import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './ProfileScreen.styles';
import auth from "@react-native-firebase/auth";
import { useSelector } from 'react-redux';
import { showMessage } from "react-native-flash-message";
import MenuBar from '../../../components/generalComponents/menuBarComponent/MenuBar';

export default function ProfileScreen({ navigation }) {
    const darkMode = useSelector((state) => state.theme.darkMode)

    function signOut() {
        auth()
            .signOut()
            .then(() => showMessage({
                message: "User signed out.",
                type: 'info',
            }))
    }

    return (
        <SafeAreaView style={darkMode ? styles.light.container : styles.dark.container}>
            <MenuBar text="Settings" icon="cog-outline" onPress={() => navigation.navigate('SettingsScreen')} />
            <MenuBar text="Sign Out" icon="logout" onPress={signOut} />
        </SafeAreaView>
    )
}