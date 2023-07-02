import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 20,
        alignItems: 'center',
        height: Dimensions.get('window').height / 6,
        borderRadius: 5,
    },
    modal: {
        justifyContent: 'center',
        margin: 0,
    },
    input_container: {
        flex: 1,
    }
})