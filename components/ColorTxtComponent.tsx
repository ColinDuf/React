import { Text, TextProps } from './Themed';

export function ColorTxtRed(props: TextProps) {
  return <Text {...props} style={[props.style, { color: 'red' }]} />;
}

export function ColorTxtWhite(props: TextProps) {
  return <Text {...props} style={[props.style, { color: 'white' }]} />;
}

export function ColorTxtBlack(props: TextProps) {
  return <Text {...props} style={[props.style, { color: 'black' }]} />;
}