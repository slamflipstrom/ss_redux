export const addPlayer = playerCount => {
  console.log("start game with playerCount:", playerCount);
  return {
    type: "ADD_PLAYER",
    playerCount
  };
};
