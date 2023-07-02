import React from 'react';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import styles from './SettingsScreen.styles';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../../../redux/features/theme/themeSlice';
import { isEnabled } from '../../../redux/features/switch/switchSlice';

export default function SettingsScreen() {
    const darkMode = useSelector((state) => state.theme.darkMode)
    const switchEnabled = useSelector((state) => state.switch.switchEnabled)
    const dispatch = useDispatch()

    const toggleSwitch = () => {
        dispatch(isEnabled())
        dispatch(changeTheme())
    }

    return (
        <SafeAreaView style={darkMode ? styles.light.container : styles.dark.container}>
            <View style={darkMode ? styles.light.themeContainer : styles.dark.themeContainer}>
                <Text style={darkMode ? styles.light.barText : styles.dark.barText}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: '#ACB7C4', true: 'white' }}
                    thumbColor={isEnabled ? '#146C94' : 'white'}
                    ios_backgroundColor="white"
                    onValueChange={toggleSwitch}
                    value={switchEnabled}
                />
            </View>
        </SafeAreaView>
    )
}