import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

//QUESTÕES

// 01

import Questao01 from './components/Questao01/Questao01'

//------------------
import Questao02 from './components/Questao02/Questao02.js'

//----------------------------------
import Questao03 from './components/Questao03/Questao03'

//-------------------------------------------
import Questao04 from './components/Questao04/Questao04'


export default function App() {
  return (
    <View>
    <Questao04/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
