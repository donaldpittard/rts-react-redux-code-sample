import { ADD_QUERY } from "./actionTypes";

export const addQuery = query => ({
  type: ADD_QUERY,
  payload: {
    query: query
  }
});
