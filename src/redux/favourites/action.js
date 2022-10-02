export const emptyFavAction = () => {
  return { type: "EMPTY", payload: "" };
};

export const addToFavsAction = (payload) => {
  return { type: "ADD_TO_FAVOURITES", payload: payload };
};

export const removeFromFavsAction = (payload) => {
  return { type: "REMOVE_FAVOURITE", payload: payload };
};
