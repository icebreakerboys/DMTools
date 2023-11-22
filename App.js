import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DiceRoller from './components/DiceRoller';
import NameGenerator from './components/NameGenerator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Dungeon Master Tools (Mobile)</Text>
      <DiceRoller />
      <NameGenerator />
      {/* Add other components for encounter creation, combat assistance, etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});