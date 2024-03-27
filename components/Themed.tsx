import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@/constants/themes';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  themeName?: keyof typeof Colors
};
  
export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: {
    themeName: null; light?: string; dark?: string 
},
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark & keyof typeof Colors.blue.colors
) {
  const themeNameFromProps = props.themeName ?? 'dark';
  const theme = themeNameFromProps ?? useColorScheme() ?? 'light';
  return Colors[theme][colorName];

}

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;
  if (props.themeName){
    const color = useThemeColor({ themeName: props.themeName }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  } else {
    const color = useThemeColor({
      themeName: null
    }, 'text');
    return <DefaultText style={[{ color }, style]} {...otherProps} />;
  }

}

export function View(props: ViewProps) {
  const { style, ...otherProps } = props;
  if (props.themeName) {
      const backgroundColor = useThemeColor(
                         { themeName: props.themeName }, 'background');
    return <DefaultView style={[{ backgroundColor }, style]}
                {...otherProps} />;
    } else {
      const backgroundColor = useThemeColor({
        themeName: null
      }, 'background');
      return <DefaultView style={[{ backgroundColor }, style]} 	{...otherProps} />;
    }
  
}