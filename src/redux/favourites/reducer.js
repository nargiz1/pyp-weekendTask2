export const favouriteReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_FAVOURITES":
      return [...state, payload];
    case "REMOVE_FAVOURITE": {
      const toRemove = state.findIndex((x) => x.driverId === payload.driverId);
      state.splice(toRemove, 1);
      return [...state];
    }
    case "EMPTY":
      return [];
    default:
      return state;
  }
};
