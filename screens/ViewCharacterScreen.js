// ViewCharacterScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ViewCharacterScreen = ({ route, navigation }) => {
  const { characterSheet } = route.params;

  return (
    <View>
      <Text>View Character Screen</Text>
      <Text>Name: {characterSheet.name}</Text>
      <Text>Class: {characterSheet.class}</Text>
      <Text>Level: {characterSheet.level}</Text>
      {/* Display other character sheet details as needed */}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ViewCharacterScreen;
