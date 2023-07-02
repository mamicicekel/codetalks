import React, { useState, useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './MessageCard.styles';
import { useSelector } from 'react-redux';
import auth from "@react-native-firebase/auth";

export default function MessageCard({ message, onLongPress }) {
  const [user, setUser] = useState()
  const [formattedTime, setFormattedTime] = useState()
  const darkMode = useSelector((state) => state.theme.darkMode)

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user.email.split('@')[0])
      }
    })

    const messageDate = new Date(message.date)
    const hours = messageDate.getHours()
    const minutes = messageDate.getMinutes()
    const formattedTimeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
    setFormattedTime(formattedTimeString)
  }, [message.date])

  return (
    <Pressable onLongPress={onLongPress}>
      <View style={user === message.username ? { ...styles.owner.container, backgroundColor: darkMode ? '#63d6f2' : '#146C94' } : { ...styles.other.container, backgroundColor: darkMode ? 'white' : '#252525' }}>
        <Text style={{ ...styles.owner.user, color: darkMode ? '#E26AB5' : '#08CE9B' }}>{message.username}</Text>
        <Text style={user === message.username ? { ...styles.owner.text, color: darkMode ? 'black' : 'white' } : { ...styles.other.text, color: darkMode ? 'black' : 'white' }}>{message.text}</Text>
        <Text style={user === message.username ? { ...styles.owner.date, color: darkMode ? '#6E8087' : 'white' } : { ...styles.other.date, color: darkMode ? '#667781' : 'white' }}>{formattedTime}</Text>
      </View>
    </Pressable>
  )
}
