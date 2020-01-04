import { ADD_QUERY } from "../actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_QUERY:
      return [...state, action.payload.query];
    default:
      return [];
  }
}
