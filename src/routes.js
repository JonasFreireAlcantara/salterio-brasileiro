import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LetterList from './pages/LetterList';
import About from './pages/About';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='LetterList' component={LetterList} />
        <AppStack.Screen name='About' component={About} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
