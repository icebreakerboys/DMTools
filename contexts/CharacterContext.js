import React, { createContext, useReducer, useContext } from 'react';

const CharacterContext = createContext();

const initialState = {
  characters: [],
};

const characterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      return { characters: [...state.characters, action.payload] };
    case 'EDIT_CHARACTER':
      // Implement logic to edit character
      return state;
    case 'DELETE_CHARACTER':
      // Implement logic to delete character
      return state;
    default:
      return state;
  }
};

const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  const addCharacter = (character) => {
    dispatch({ type: 'ADD_CHARACTER', payload: character });
  };

  const editCharacter = (character) => {
    dispatch({ type: 'EDIT_CHARACTER', payload: character });
  };

  const deleteCharacter = (characterId) => {
    dispatch({ type: 'DELETE_CHARACTER', payload: characterId });
  };

  return (
    <CharacterContext.Provider
      value={{ characters: state.characters, addCharacter, editCharacter, deleteCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
};

export { CharacterProvider, useCharacterContext };
