const defaultState = {
	playerCount: 0,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, playerCount: action.playerCount + 1 };
    case "REMOVE_PLAYER":
      return [...state, action.playerCount];
    default:
      return state;
  }
};
