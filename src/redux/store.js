import { combineReducers, createStore } from "redux";
import { fileUploadReducer } from "./newInvestor/investorReducer";

let rootreducer = combineReducers({
  fileReducer: fileUploadReducer,
});

export const store = createStore(rootreducer);
