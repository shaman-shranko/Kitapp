import React from 'react';
import { ActivityIndicator, View } from 'react-native'

export default Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <ActivityIndicator size={50} color={'#6786DA'} />
    </View>
  )
}