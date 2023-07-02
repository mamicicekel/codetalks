import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logoText: {
        fontSize: Dimensions.get('window').width / 2.5,
        marginTop: Dimensions.get('window').height / 20,
        marginBottom: Dimensions.get('window').height / 10,
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
        },
        logoText: {
            ...base_style.logoText,
            color: '#146C94',
        },
    }),
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#1A1A1A',
        },
        logoText: {
            ...base_style.logoText,
            color: 'white',
        },
    }),
}