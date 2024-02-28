import React, { useRef, useState } from 'react'
import { View, Text, Button } from 'react-native'

export function Counter() {
    let [counter, setCounter] = useState(0);
    let updateCounter = useRef(0)

    return (
      <>
        <View>
          <Button
            title="+"
            onPress={() => {
                updateCounter.current++;
              
            }}
          ></Button>
          <Button
            title="-"
            onPress={() => {
                updateCounter.current--;
            }}
          ></Button>
          <Button
            title="Reset"
            onPress={() => {
                updateCounter.current=0;
            }}
          ></Button>
          <Button
            title="Mettre à jour"
            onPress={() => {
              setCounter(updateCounter.current);
            }}
          ></Button>
          <Text>{counter}</Text>
        </View>
      </>
    );
  }
