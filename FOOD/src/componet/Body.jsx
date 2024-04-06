import React from 'react'
import Home from './Home'
import { View,Text } from 'react-native'
const Body = (props) => {
  console.log(props)
  return (
    <View className="flex-1">
     <Home/>
    </View>
    
  )
}

export default Body