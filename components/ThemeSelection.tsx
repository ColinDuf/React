import React, { useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorTxtRed } from './ColorTxtComponent';

// Liste des thèmes disponibles
const themes = ['light', 'dark', 'blue'];

// const ThemeSelector: React.FC = () => {
export default function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Fonction pour changer le thème
  const changeTheme = async (theme: string) => {
    try {
      // Stockage du thème dans AsyncStorage
      await AsyncStorage.setItem('themeName', theme);
      // Appliquer le thème à l'application
      setSelectedTheme(theme);
    } catch (error) {
      console.error('Erreur lors du changement de thème : ', error);
    }
  };

  return (
    <View>
      <ColorTxtRed>Sélectionnez un thème :</ColorTxtRed>
      {/* Affichage de la liste des thèmes */}
      {themes.map((theme, index) => (
        <TouchableOpacity key={index} onPress={() => changeTheme(theme)}>
          <ColorTxtRed style={{ fontSize: 18, marginVertical: 5}}>{theme}</ColorTxtRed>
        </TouchableOpacity>
      ))}
      {/* Affichage du thème actuellement sélectionné */}
      {selectedTheme && (
        <ColorTxtRed style={{ marginTop: 10}}>Thème actuel : {selectedTheme}</ColorTxtRed>
      )}
    </View>
  );
};