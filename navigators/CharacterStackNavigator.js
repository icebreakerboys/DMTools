// CharacterStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddCharacterScreen from '../screens/AddCharacterScreen'; // Replace with your actual screen component
import CharacterListScreen from '../screens/CharacterListScreen'; // Replace with your actual screen component
import EditCharacterScreen from '../screens/EditCharacterScreen';
import ViewCharacterScreen from '../screens/ViewCharacterScreen';

const Stack = createStackNavigator();

const CharacterStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CharacterList" component={CharacterListScreen} />
      <Stack.Screen name="AddCharacter" component={AddCharacterScreen} />
      <Stack.Screen name="EditCharacter" component={EditCharacterScreen} />
      <Stack.Screen name="ViewCharacter" component={ViewCharacterScreen} />
    </Stack.Navigator>
  );
};

export default CharacterStackNavigator;
