import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styles from './RoomsScreen.styles';
import { useSelector } from 'react-redux';
import database from '@react-native-firebase/database';
import FloatingButton from '../../../components/buttons/floatingButton/FloatingButton';
import RoomInputModal from '../../../components/inputs/roomInputModal/RoomInputModal';
import RoomCard from '../../../components/cards/roomCard/RoomCard';
import parseRoomData from '../../../utils/parseRoomData';
import DeleteButtonModal from '../../../components/generalComponents/deleteModal/deleteButtonModal';

export default function RoomScreen({ navigation }) {
    const [modal, setModal] = useState(false)
    const [rooms, setRooms] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedRoom, setSelectedRoom] = useState(null)
    const darkMode = useSelector((state) => state.theme.darkMode)

    useEffect(() => {
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val()
                const parsedData = parseRoomData(contentData || {})
                setRooms(parsedData)
            })
    }, [])

    const handleModal = () => {
        setModal(!modal)
    }

    const createRoom = (modelText) => {
        handleModal()
        const myroom = {
            room: modelText,
            date: (new Date().toISOString()),
            messages: '',
        }
        database().ref('/rooms').push(myroom)
    }

    const deleteRoom = () => {
        if (selectedRoom) {
            database()
                .ref(`/rooms/${selectedRoom.id}`)
                .remove()
                .then(() => {
                    setModalVisible(false)
                })
                .catch((error) => console.log('The room could not be deleted.', error))
        }
    }

    const toggleModal = (room) => {
        if (modalVisible) {
            setSelectedRoom(null)
        } else {
            setSelectedRoom(room)
        }
        setModalVisible(!modalVisible)
    }

    const renderRooms = ({ item }) => (
        <RoomCard text={item.room} onPress={() => navigation.navigate('ChatScreen', { item })} onLongPress={() => toggleModal(item)} />
    )

    return (
        <View style={darkMode ? styles.light.container : styles.dark.container}>
            <FlatList
                data={rooms}
                renderItem={renderRooms}
            />
            <FloatingButton onPress={handleModal} />
            <RoomInputModal
                placeholder={'Room name'}
                handleModalSubmit={createRoom}
                visible={modal}
                onClose={handleModal}
            />
            <DeleteButtonModal
                closeModal={toggleModal}
                modalVisible={modalVisible}
                handleDeleteMessage={deleteRoom}
                text={"Are you sure you want to delete this room?"}
            />
        </View>
    )
}
