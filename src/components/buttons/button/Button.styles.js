import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height / 20,
        width: Dimensions.get('window').width / 3.5,
        borderRadius: 10,
        margin: 10,
    },
    title: {
        fontWeight: '700',
    },
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#146C94',
        },
        title: {
            ...base_style.title,
            color: 'white',
        },
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#19A7CE',
        },
        title: {
            ...base_style.title,
            color: 'white',
        },
    }),
    tertiary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#19A7CE',
            width: Dimensions.get('window').width / 2,
        },
        title: {
            ...base_style.title,
            color: 'white',
        },
    }),
}