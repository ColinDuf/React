import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const data = [
    { id: 'a', name: 'Devin' },
    { id: 'b', name: 'Gabe' },
    { id: 'c', name: 'Kim' },
  ]

export function ListPerso() {
  return (
    <View>
      {data.map((item, index) => (
        <Text key={index.toString()}>{item.name}</Text>
      ))}
    </View>
  )
}

<View>
  <Text key="0">Devin</Text>
  <Text key="1">Gabe</Text>
  <Text key="2">Kim</Text>
</View>


  