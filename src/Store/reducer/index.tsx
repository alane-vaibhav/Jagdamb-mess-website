import { combineReducers } from "redux";
import OrderReducer from "./OrderReducer";

export const rootReducer = combineReducers({
  orderDetails: OrderReducer,
});
