export default (state = 0, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return [...state, { playerCount: action.playerCount }];
    case "REMOVE_PLAYER":
      return [...state, action.playerCount];
    default:
      return state;
  }
};
