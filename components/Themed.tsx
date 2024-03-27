import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@/constants/themes';
import { useColorScheme } from './useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

type ThemeProps = {
  themeName?: keyof typeof Colors
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

async function getThemeName(): Promise<keyof typeof Colors> {
  try{
    const value= await AsyncStorage.getItem('themeName');
    if(value!== null){
      return value as keyof typeof Colors;
    }else{
      return 'dark';
    }
  }catch(e){
    throw new Error();
  }
}

export function Text(props: TextProps) {
  const [currentTheme,setCurrentTheme] =useState(Colors.light);
  useEffect(() => {
    getThemeName().then((nom: keyof typeof Colors)=>{
      setCurrentTheme(Colors[nom]);
    })
  })

  const { style, ...otherProps } = props;
  if (props.themeName){
    const color = currentTheme.colors.text;
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  } else {
    const color = currentTheme.colors.text
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  }

}

export function View(props: ViewProps) {
  const [currentTheme,setCurrentTheme] =useState(Colors.light);
  useEffect(() => {
    getThemeName().then((nom: keyof typeof Colors)=>{
      setCurrentTheme(Colors[nom]);
    })
  })

  const { style, ...otherProps } = props;
  if (props.themeName) {
      const backgroundColor = currentTheme.colors.backround;
    return <DefaultView style={[{ backgroundColor }, style]}
                {...otherProps} />;
    } else {
      const backgroundColor = currentTheme.colors.backround;
      return <DefaultView style={[{ backgroundColor }, style]} 	{...otherProps} />;
    }
  
}