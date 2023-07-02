import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 20,
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
    },
    date: {
        alignSelf: 'flex-end',
        paddingHorizontal: 3,
    },
    user: {
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#136C93',
        },
        text: {
            ...base_style.text,
            color: 'white',
        },
        date: {
            ...base_style.date,

        },
        ...base_style.user,
    }),
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#136C93',
        },
        text: {
            ...base_style.text,
            color: 'white',
        },
        date: {
            ...base_style.date,

        },
        ...base_style.user,
    }),
}