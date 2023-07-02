import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react-native';

export default function Loading() {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <View style={{ backgroundColor: darkMode ? 'white' : '#252525', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Lottie
        source={require('/Users/mamicicekel/Develop/ReactNative/Codetalks/assets/loading.json')}
        autoPlay
        style={{ backgroundColor: 'transparent', height: 80 }}
      />
    </View>
  )
}
