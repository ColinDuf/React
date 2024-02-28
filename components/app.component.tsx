import React from 'react'
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




