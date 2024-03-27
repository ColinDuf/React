import React, {useEffect, useState} from "react";
import {View, Button} from 'react-native';
import { ColorTxtWhite, ColorTxtRed, ColorTxtBlack } from "./ColorTxtComponent";
import useInterval from '../useInterval';

export const LoaderComponent = () => {
    let delay = 10000
    const counter = useInterval((seconds) => {
        console.log(`temps passé depuis lancement de l'app : ${seconds*(delay/1000)} secondes`);
      }, delay);

    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <ColorTxtRed>Loading...</ColorTxtRed>
        ) : (
          <ColorTxtRed>Content loaded !</ColorTxtRed>
        )}
      </div>
    );
  };