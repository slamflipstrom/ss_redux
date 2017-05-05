export const addPlayer = (playerCount) => {
  console.log("start game with player:", playerCount);
    return {
      type: 'ADD_PLAYER',
      playerCount
    };
}