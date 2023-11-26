import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DiceRoller from '../components/DiceRoller';
import NameGenerator from '../components/NameGenerator';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Dungeon Master Tools</Text>
      <DiceRoller />
      <NameGenerator />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Home;
