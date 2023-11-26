// AddCharacterScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddCharacterScreen = ({ navigation }) => {
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [characterLevel, setCharacterLevel] = useState('');

  const handleSaveCharacter = async () => {
    // Get existing character sheets
    const existingSheets = await AsyncStorage.getItem('characterSheets');
    const parsedSheets = existingSheets ? JSON.parse(existingSheets) : [];

    // Create a new character sheet
    const newCharacterSheet = {
      id: Date.now(), // Use a timestamp as an ID for simplicity
      name: characterName,
      class: characterClass,
      level: characterLevel
      // Add other character sheet data as needed
    };

    // Save the new character sheet
    const updatedSheets = [...parsedSheets, newCharacterSheet];
    await AsyncStorage.setItem('characterSheets', JSON.stringify(updatedSheets));

    // Navigate back to the character list
    navigation.navigate('CharacterList', { screen: 'CharacterList', params: { 'characterAdded': true } });
  };

  return (
    <View>
      <Text>Add Character</Text>
      <TextInput
        placeholder="Name"
        value={characterName}
        onChangeText={(text) => setCharacterName(text)}
      />
      <TextInput
        placeholder="Class"
        value={characterClass}
        onChangeText={(text) => setCharacterClass(text)}
      />
      <TextInput
        placeholder="Level"
        value={characterLevel}
        onChangeText={(text) => setCharacterLevel(text)}
        keyboardType="numeric"
      />
      
      <Button title="Save Character" onPress={handleSaveCharacter} />
    </View>
  );
};

export default AddCharacterScreen;
