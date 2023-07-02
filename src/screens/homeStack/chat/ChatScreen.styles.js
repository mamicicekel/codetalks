import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    messages: {
        flex: 1
    },
    date: {
        textAlign: 'center',
        marginBottom: 10,
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#F2F2F2',
        },
        ...base_style.messages,
        ...base_style.date,
    }),
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#1A1A1A',
        },
        ...base_style.messages,
        date: {
            ...base_style.date,
            color: 'white',
        },
    }),
}