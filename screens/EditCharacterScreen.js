// EditCharacterScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditCharacterScreen = ({ route, navigation }) => {
  const { characterSheet } = route.params;
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [characterLevel, setCharacterLevel] = useState('');

  useEffect(() => {
    // Set the initial character name
    setCharacterName(characterSheet.name);
    setCharacterClass(characterSheet.class);
    setCharacterLevel(characterSheet.level);
  }, [characterSheet]);

  const handleSaveCharacter = async () => {
    // Get existing character sheets
    const existingSheets = await AsyncStorage.getItem('characterSheets');
    const parsedSheets = existingSheets ? JSON.parse(existingSheets) : [];

    // Update the edited character sheet
    const updatedSheets = parsedSheets.map((sheet) =>
      sheet.id === characterSheet.id ? { ...sheet, name: characterName, class: characterClass, level: characterLevel } : sheet
    );

    // Save the updated character sheets
    await AsyncStorage.setItem('characterSheets', JSON.stringify(updatedSheets));

    // Navigate back to the character list
    navigation.navigate('CharacterList');
  };

  const handleDeleteCharacter = async () => {
    // Display a confirmation prompt before deleting
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to delete ${characterSheet.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            // Get existing character sheets
            const existingSheets = await AsyncStorage.getItem('characterSheets');
            const parsedSheets = existingSheets ? JSON.parse(existingSheets) : [];

            // Filter out the character sheet to be deleted
            const updatedSheets = parsedSheets.filter((sheet) => sheet.id !== characterSheet.id);

            // Save the updated character sheets
            await AsyncStorage.setItem('characterSheets', JSON.stringify(updatedSheets));

            // Navigate back to the character list
            navigation.navigate('CharacterList');
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <View>
      <Text>Edit Character</Text>
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
      <Button title="Delete Character" onPress={handleDeleteCharacter} />

    </View>
  );
};

export default EditCharacterScreen;
