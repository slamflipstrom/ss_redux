export default (state = [], action) => {
  switch (action) {
    case 'new': 
      return [...state, action.playerCount];
    default:
      return state;
  }
};