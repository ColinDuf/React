import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  modal2: undefined;
  // Ajoutez d'autres écrans au besoin
};

type TabThreeScreenNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export default function TabThreeScreen() {
  const navigation = useNavigation<TabThreeScreenNavigationProp>();

  const handleNavigate = () => {
    navigation.navigate('modal2');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yo what's up dude!</Text>
      <Button title="Go to Other Page" onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
