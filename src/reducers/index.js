import { combineReducers } from "redux";

// internal imports
import posts from "./posts";
import auth from "./auth";

export const reducers = combineReducers({ posts, auth });
