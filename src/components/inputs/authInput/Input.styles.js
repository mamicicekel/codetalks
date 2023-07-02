import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 14,
        position: 'relative',
    },
    labelContainer: {
        position: 'absolute',
        top: -18,
        left: 25,
        padding: 5,
        zIndex: 50,
    },
    input: {
        borderWidth: 1,
        justifyContent: 'flex-end',
        height: Dimensions.get('window').height / 22,
        borderRadius: 10,
        paddingHorizontal: 25,
        width: Dimensions.get('window').width / 1.3,
    },
    icon: {
        left: Dimensions.get('window').width / 1.45,
        top: Dimensions.get('window').height / 30,
        flexDirection: 'column-reverse',
        marginLeft: 5,
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
            color: '#146C94',
        },
        input: {
            ...base_style.input,
            borderColor: '#146C94',
            color: 'black',
        },
        icon: {
            ...base_style.icon,
            color: '#146C94',
        },
    }),
    dark: StyleSheet.create({
        ...base_style,
        ...base_style.container,
        labelContainer: {
            ...base_style.labelContainer,
            backgroundColor: '#1A1A1A',
        },
        label: {
            color: 'white',
        },
        input: {
            ...base_style.input,
            borderColor: 'white',
            color: 'white',
        },
        icon: {
            ...base_style.icon,
            color: 'white',
        },
    }),
} 