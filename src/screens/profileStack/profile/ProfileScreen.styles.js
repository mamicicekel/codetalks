import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingStart: 15,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 100,
        marginRight: 15,
    },
    name: {
        fontWeight: '600',
        fontSize: 20,
    },
})

export default {
    light: StyleSheet.create({
        ...base_style,
        ...base_style.topContainer,
        ...base_style.image,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
        },
        name: {
            ...base_style.name,
            color: '#146C94',
        },
    }),
    dark: StyleSheet.create({
        ...base_style,
        ...base_style.topContainer,
        ...base_style.image,
        container: {
            ...base_style.container,
            backgroundColor: '#1A1A1A',
        },
        name: {
            ...base_style.name,
            color: 'white',
        },
    }),
}