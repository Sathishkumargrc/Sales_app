// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import ToolBar from '../Component/ToolBar'

// const VendorScreen = () => {
//   return (
//     <View>
//         <ToolBar title='Vendor screen' backBtn={true} />
//       <Text>VendorScreen</Text>
//     </View>
//   )
// }

// export default VendorScreen

// const styles = StyleSheet.create({})

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const VendorScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default VendorScreen;