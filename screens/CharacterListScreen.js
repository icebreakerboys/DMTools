// CharacterListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CharacterListScreen = ({ navigation }) => {
  const [characterSheets, setCharacterSheets] = useState([]);

  useEffect(() => {
    loadCharacterSheets();
  }, []);

  const loadCharacterSheets = async () => {
    try {
      const storedSheets = await AsyncStorage.getItem('characterSheets');
      if (storedSheets) {
        setCharacterSheets(JSON.parse(storedSheets));
      }
    } catch (error) {
      console.error('Error loading character sheets:', error);
    }
  };

  const handleAddCharacter = async () => {
    navigation.navigate('AddCharacter');
  };

  return (
    <View>
      <FlatList
        data={characterSheets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="View"
              onPress={() => navigation.navigate('ViewCharacter', { characterSheet: item })}
            />
            <Button
              title="Edit"
              onPress={() => navigation.navigate('EditCharacter', { characterSheet: item })}
            />
          </View>
        )}
      />
      <Button title="Load List" onPress={loadCharacterSheets} />
      <Button title="Add Character" onPress={handleAddCharacter} />
    </View>
  );
};

export default CharacterListScreen;
