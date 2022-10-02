import { combineReducers } from "redux";
import { listOfDriversReducer } from "./drivers/reducer";
import { favouriteReducer } from "./favourites/reducer";

export default combineReducers({ 
    listOfDrivers: listOfDriversReducer,
    favourites: favouriteReducer
});
