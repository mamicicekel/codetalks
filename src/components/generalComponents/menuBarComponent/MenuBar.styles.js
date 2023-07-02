import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,

    },
    text: {
        paddingLeft: 10,
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        text: {
            ...base_style.text,
            color: '#146C94',
        },
        icon: {
            color: '#146C94',
        },
    }),
    dark: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        text: {
            ...base_style.text,
            color: 'white',
        },
        icon: {
            color: 'white',
        },
    }),
}