import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

//this works pretty well all things considered
//it does need to look better but this is a great start

const DiceRoller = () => {
  const [result, setResult] = useState(null);
  const [selectedDice, setSelectedDice] = useState('d6');

  const rollDice = () => {
    const diceValue = Math.floor(Math.random() * parseInt(selectedDice.slice(1)) + 1);
    setResult(`Result: ${diceValue}`);
  };

  return (
    <View>
      <Text>Select Dice Type:</Text>
      <Picker selectedValue={selectedDice} onValueChange={(itemValue) => setSelectedDice(itemValue)}>
        <Picker.Item label="d4" value="d4" />
        <Picker.Item label="d6" value="d6" />
        <Picker.Item label="d8" value="d8" />
        <Picker.Item label="d10" value="d10" />
        <Picker.Item label="d12" value="d12" />
        <Picker.Item label="d20" value="d20" />
        <Picker.Item label="d100" value="d100" />
        {/* Add other race options here */}
      </Picker>

      <Button title="Roll" onPress={rollDice} />

      <Text>{result}</Text>
    </View>
  );
};

export default DiceRoller;