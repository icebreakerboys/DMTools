import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const NameGenerator = () => {
  const [generatedName, setGeneratedName] = useState('');
  const [selectedRace, setSelectedRace] = useState('random');

  const generateName = () => {
    //Replace this with the name generation logic
    //randommly select name from a list of names of the selected race type race
    //ideally we use an api of some sort.
    //i want to also add functionally for people to add custom name lists
    const names = ['Gandalf', 'Aragorn', 'Frodo', 'Legolas', 'Gimli'];
    const randomIndex = Math.floor(Math.random() * names.length);
    setGeneratedName(`Generated Name: ${names[randomIndex]}`);
  };

  return (
    <View>
      <Text>Select Race:</Text>
      <Picker selectedValue={selectedRace} onValueChange={(itemValue) => setSelectedRace(itemValue)}>
        <Picker.Item label="random" value="random" />
        <Picker.Item label="human" value="human" />
        {/* Add other race options here */}
      </Picker>

      <Button onPress={generateName} title="Generate Name" />

      <Text>{generatedName}</Text>
    </View>
  );
};

export default NameGenerator;