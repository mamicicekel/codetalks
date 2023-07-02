import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 14,
        position: 'relative',
    },
    labelContainer: {
        position: 'absolute',
        top: -12,
        color: 'white'
    },
    label: {
        paddingStart: 5,
    },
    input: {
        borderBottomWidth: 1,
        justifyContent: 'flex-end',
        paddingStart: 5,
        height: Dimensions.get('window').height / 22,
        borderRadius: 10,
        width: Dimensions.get('window').width / 1.1,
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        labelContainer: {
            ...base_style.labelContainer,
            backgroundColor: 'white',
        },
        label: {
            ...base_style.label,
            color: '#146C94',
        },
        input: {
            ...base_style.input,
            borderColor: '#146C94',
            color: '#146C94',
        },
    }),
    dark: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        labelContainer: {
            ...base_style.labelContainer,
            backgroundColor: 'transparent',
        },
        label: {
            ...base_style.label,
            color: 'white',
        },
        input: {
            ...base_style.input,
            borderColor: 'white',
            color: 'white',
        },
    }),
}