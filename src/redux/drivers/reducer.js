export const listOfDriversReducer = (
  listOfDrivers = { data: null, status: "idle", error: null },
  action
) => {
  return action.type === "LIST_OF_DRIVERS" ? action.payload : listOfDrivers;
};