import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 30,
        paddingStart: 15,
        paddingEnd: 15,
        marginBottom: 10,
        marginHorizontal: 10,
        paddingBottom:3,
    },
    text: {
        color: 'black',
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
    owner: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#6bc9ff',
            marginStart: 10,
            alignSelf: 'flex-end',
        },
        text: {
            ...base_style.text,
            color: 'white',
        },
        date: {
            ...base_style.date,
            color: 'grey',
        },
        ...base_style.user,
    }),
    other: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            alignSelf: 'flex-start',
            marginEnd: 10,
        },
        text: {
            ...base_style.text,
        },
        date: {
            ...base_style.date,
            color: 'grey',
        },
        ...base_style.user,
    }),
}