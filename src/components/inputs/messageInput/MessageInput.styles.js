import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        flex: 2,
        borderWidth: 1,
        justifyContent: 'flex-end',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginLeft: 10,
    },
    pressable: {
        marginRight: 10,
        flexDirection: 'column-reverse',
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        input: {
            ...base_style.input,
            borderColor: '#53646F',
            color: 'black',
        },
        icon: {
            color: '#146C94',
        },
        ...base_style.pressable,
    }),
    dark: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        input: {
            ...base_style.input,
            borderColor: '#8695A0',
            color: 'white',
        },
        icon: {
            color: '#146C94',
        },
        ...base_style.pressable,
    }),
} 