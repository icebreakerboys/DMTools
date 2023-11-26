import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AddCharacterSheet from '../screens/AddCharacterScreen';
import { Button } from 'react-native';

const SheetList = ({ characterSheets }) => {

  return (
    <View style={styles.container}>
      <Text>Characters:</Text>

      {/*<AddCharacterSheet onAddSheet={onAddSheet} />*/}

      <FlatList
        data={characterSheets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <Text>Name: {item.name}</Text>
            <Text>Class: {item.class}</Text>
            <Text>Level: {item.level}</Text>
            {/* ... render other stats */}
          </View>
        )}
      />
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

export default SheetList;
