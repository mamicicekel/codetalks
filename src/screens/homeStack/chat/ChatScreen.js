import React, { useState, useEffect, useRef } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import styles from './ChatScreen.styles';
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import parseContentData from '../../../utils/parseContentData';
import MessageCard from '../../../components/cards/messageCard/MessageCard';
import MessageInput from '../../../components/inputs/messageInput/MessageInput';
import DeleteButtonModal from '../../../components/generalComponents/deleteModal/deleteButtonModal';

export default function ChatScreen({ route }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedMessage, setSelectedMessage] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [contentList, setContentList] = useState([])
    const [usermail, setUsername] = useState(auth().currentUser.email)
    const flatlistRef = useRef()
    const darkMode = useSelector((state) => state.theme.darkMode)
    
    useEffect(() => {
        database().ref(`/rooms/${route.params.item.id}/messages/`).on('value', snapshot => {
            const contentData = snapshot.val()
            const parseData = parseContentData(contentData || {})
            setContentList(parseData)
        })
    }, [])

    useEffect(() => {
        flatlistRef.current.scrollToEnd({ animated: true })
    }, [contentList])

    const sendMessage = () => {
        if (inputValue.trim() === '') {
            return
        }

        const contentObj = {
            text: inputValue,
            username: usermail.split('@')[0],
            date: new Date().toISOString(),
        }

        database().ref(`/rooms/${route.params.item.id}/messages/`)
            .push(contentObj)
            .then(() => {
                setInputValue('')
                flatlistRef.current.scrollToEnd()
            })
            .catch((error) => showMessage({
                message: error,
                type: "warning",
            }))
    }

    const deleteMessage = () => {
        if (selectedMessage) {
            if (selectedMessage.username === usermail.split('@')[0]) {
                database()
                    .ref(`/rooms/${route.params.item.id}/messages/${selectedMessage.id}`)
                    .remove()
                    .then(() => {
                        setModalVisible(false);
                    })
                    .catch((error) =>
                        showMessage({
                            message: error,
                            type: 'warning',
                        })
                    )
            }
        }
    }

    const toggleModal = (message) => {
        if (modalVisible) {
            setSelectedMessage(null);
        } else {
            setSelectedMessage(message);
        }
        setModalVisible(!modalVisible);
    }

    const renderMessageCard = ({ item }) => (
        <>
            <Text style={darkMode ? styles.light.date : styles.dark.date}>{item.date}</Text>
            {item.messages.map((message, index) => (
                <MessageCard
                    key={index}
                    message={message}
                    onLongPress={
                        message.username === usermail.split('@')[0]
                            ? () => toggleModal(message)
                            : undefined
                    }
                />
            ))}
        </>
    )


    return (
        <SafeAreaView style={darkMode ? styles.light.container : styles.dark.container}>
            <FlatList
                data={contentList}
                renderItem={renderMessageCard}
                keyExtractor={(index) => index.toString()}
                ref={flatlistRef}
                onContentSizeChange={() => {
                    if (flatlistRef.current) {
                        flatlistRef.current.scrollToEnd({ animated: true })
                    }
                }}
            />
            <MessageInput
                iconName="send-circle"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                onPress={sendMessage}
            />
            <DeleteButtonModal
                closeModal={toggleModal}
                modalVisible={modalVisible}
                handleDeleteMessage={deleteMessage}
                text={"Are you sure you want to delete this message?"}
            />
        </SafeAreaView>
    )
}
