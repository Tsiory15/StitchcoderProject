import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/FontAwesome6'

export default function Icone({name}:{name?:string})
{
  return (
    <View>
      <TouchableOpacity>
        <Icon name={name} size={20} color='white'></Icon>
      </TouchableOpacity>
    </View>
  )
}