import React, { useEffect, useRef, useState } from 'react'
import { Button, View, Text } from 'react-native'

function HelloButton({ title, sayHello } : {title : string, sayHello: any}) {
  return <Button title={title} onPress={sayHello} />
}
export  function ClickButton() {
  return (
    <HelloButton
      title={`Click HERE to say hello`}
      sayHello={() => console.warn('HELLO')}
    />
  )
} 

export function useInterval(callback: any, delay: any) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Card = ({ loading, error, title } : {loading? : boolean, error? :  boolean, title? : string}) => { 
  
  let content

  if (error) {
    content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
  } else if (loading) {
    content = <Text style={{ fontSize: 24, color: 'gray' }}>Loading...</Text>
  } else {
    content = (
      <View>
        <Text style={{ fontSize: 60 }}>{title}</Text>
      </View>
    )
  }

  return <View style={{ padding: 24 }}>{content}</View>
}

export function CardLoading() {
  return (
    <View>
      <Card error={true} />
      <Card loading={true} />
      <Card title="Voici le titre" />
    </View>
  )
}

export function ExoUseInterval() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <Text style={{ fontSize: 120 }}>{count}</Text>;
}




