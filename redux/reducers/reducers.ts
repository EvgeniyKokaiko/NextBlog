import { combineReducers } from "redux";
import { ActionTypes } from "../types";
import { DispatchObj } from "../../interfaces/Interface";

function PostsReducer(initial_state = [], action: DispatchObj) {
  if (action.type === ActionTypes.fetchPosts) {
    return action.payload;
  }

  return initial_state;
}
function PostReducer(initial_state = {}, action: DispatchObj) {
  if (action.type === ActionTypes.fetchPost) {
    return action.payload;
  }

  return initial_state;
}

function AddPostReducer(initial_state = {}, action: DispatchObj) {
  if (action.type === ActionTypes.AddPost) {
    return action.payload;
  }
  return initial_state;
}

export default combineReducers({
  PostsReducer,
  PostReducer,
  AddPostReducer,
});
