export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYER': 
      return [...state, action.playerCount + 1];
    default:
      return state;
  }
};