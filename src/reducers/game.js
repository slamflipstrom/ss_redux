const defaultState = {
  phase: 0,
  playerCount: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return { ...state, playerCount: action.playerCount + 1 };
    case "REMOVE_PLAYER":
      return { ...state, playerCount: action.playerCount - 1 };
    case "START_GAME":
      return { ...state, phase: state.phase + 1 };
    default:
      return state;
  }
};
