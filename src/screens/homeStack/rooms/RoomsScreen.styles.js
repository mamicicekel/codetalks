import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flex: 1,
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
            color:'white',
        },
        ...base_style.messages,
        ...base_style.date,
    }),
    dark: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor:'#101B20',
        },
        ...base_style.messages,
        date: {
            ...base_style.date,
            color: 'white',
        },
    }),
}