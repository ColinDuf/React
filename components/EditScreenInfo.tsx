import React, { useState, useEffect, useRef} from'react'
import { ScrollView, StyleSheet } from 'react-native';
import { ExternalLink } from './ExternalLink';
import { MonoText, Red, Button } from './StyledText';
import { Text, View } from './Themed';
import { ClickButton, CardLoading, ExoUseInterval } from './app.component';
import Colors from '@/constants/themes';
import { Counter } from './Compteur';
import { MySectionList } from './afficherList';
import { ListPerso } from './list.component';
import { IncrementCptUseState } from './ButtonUseState';
import { IncrementCptUseReducer } from './ButtonUseReducer';


export default function EditScreenInfo({ path }: { path: string }) {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 5000);
    }, []);
    
  return (
    <ScrollView><View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          >
          <Red>Open up the code for this screen:</Red>
        </Text>
        <MySectionList></MySectionList>
        <View><Button></Button></View>
        <ClickButton></ClickButton>
        <View><ExoUseInterval></ExoUseInterval></View>

        <View><CardLoading></CardLoading></View>
        <View><ListPerso></ListPerso></View>
        <View><Counter></Counter></View>
        <View><IncrementCptUseState></IncrementCptUseState></View>
        <View><IncrementCptUseReducer></IncrementCptUseReducer></View>


        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text style={styles.helpLinkText}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </ExternalLink>
      </View>
    </View></ScrollView>
  );
}
const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
