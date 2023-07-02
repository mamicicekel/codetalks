import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logoText: {
        fontSize: Dimensions.get('window').width / 2.5,
        marginTop: Dimensions.get('window').height / 10,
        marginBottom: Dimensions.get('window').height / 40,
    },
    greetingText: {
        fontSize: Dimensions.get('window').width / 9,
        marginBottom: Dimensions.get('window').height / 40,
    },
    headerText: {
        marginBottom: Dimensions.get('window').height / 6,
        marginHorizontal: 50,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
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
        greetingText: {
            ...base_style.greetingText,
            color: '#146C94',
        },
        headerText: {
            ...base_style.headerText,
            color: '#146C94',
        },
        ...base_style.buttonContainer,
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
        greetingText: {
            ...base_style.greetingText,
            color: 'white',
        },
        headerText: {
            ...base_style.headerText,
            color: 'white',
        },
        ...base_style.buttonContainer,
    }),
}