import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './RoomInputModal.styles';
import Modal from 'react-native-modal';
import Button from '../../buttons/button/Button';

export default function RoomInputModal({ visible, handleModalSubmit, onClose }) {
    const [text, setText] = useState('')

    const handleSubmit = () => {
        if (!text) {
            return
        }
        handleModalSubmit(text)
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder="Room name"
                        onChangeText={setText}
                    />
                </View>
                <Button title='Create room' onPress={handleSubmit} theme="primary" />
            </View>
        </Modal>
    )
}