import React, { useReducer } from "react";
import { View, Text, Button } from 'react-native';
import { ColorTxtWhite, ColorTxtRed, ColorTxtBlack } from "./ColorTxtComponent";

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export function IncrementCptUseReducer() {
  const [cpt, dispatch] = useReducer(counterReducer, 0);

  return (
    <View>
      <ColorTxtBlack>Compteur avec useReducer :</ColorTxtBlack>
      <Button title="+" onPress={() => dispatch({ type: 'INCREMENT' })}></Button>
      <Button title="-" onPress={() => dispatch({ type: 'DECREMENT' })}></Button>
      <Button title="RESET" onPress={() => dispatch({ type: 'RESET' })}></Button>
      <ColorTxtBlack>{cpt}</ColorTxtBlack>
    </View>
  );
}