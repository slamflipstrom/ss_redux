export const addPlayer = playerCount => {
  return {
    type: "ADD_PLAYER",
    playerCount
  };
};

export const removePlayer = playerCount => {
  return {
    type: "REMOVE_PLAYER",
    playerCount
  };
};

export const startGame = () => {
  return {
    type: "START_GAME"
  };
};
