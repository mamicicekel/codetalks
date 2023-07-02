import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: -30,
        marginVertical: -30,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalButton: {
        marginLeft: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})