import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import About from './pages/About';
import CipherList from './pages/CipherList';
import LetterList from './pages/LetterList';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='About' component={About} />
        <AppStack.Screen name='CipherList' component={CipherList} />
        <AppStack.Screen name='LetterList' component={LetterList} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
