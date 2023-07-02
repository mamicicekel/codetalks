import React from 'react';
import { Text, View } from 'react-native';
import styles from './deleteButtonModal.styles';
import Modal from 'react-native-modal';
import Button from '../../buttons/button/Button';

export default function DeleteButtonModal({ modalVisible, closeModal, handleDeleteMessage, text }) {
    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            onRequestClose={closeModal}
            onSwipeComplete={closeModal}
            onBackdropPress={closeModal}
            onBackButtonPress={closeModal}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{text}</Text>
                    <View style={styles.modalButtonContainer}>
                        <Button title='Delete' onPress={handleDeleteMessage} theme="primary" />
                        <Button title='Cancel' onPress={closeModal} theme="primary" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}