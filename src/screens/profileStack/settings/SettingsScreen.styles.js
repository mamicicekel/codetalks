import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    themeContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    barText: {
        flex: 1,
        fontWeight: '400',
        fontSize: 20,
    }
})

export default {
    light: StyleSheet.create({
        ...base_style,
        ...base_style.themeContainer,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: 'white',
        },
        barText: {
            ...base_style.barText,
            color: 'black',
        },
    }),
    dark: StyleSheet.create({
        ...base_style,
        ...base_style.themeContainer,
        container: {
            ...base_style.container,
            backgroundColor: '#1A1A1A',
            borderColor: 'transparent',
        },
        barText: {
            ...base_style.barText,
            color: 'white',
        },
    }),
}