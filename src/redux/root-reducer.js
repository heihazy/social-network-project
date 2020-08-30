import { combineReducers } from "redux";
import userReducer from "./users/users.reducer";
import postReducer from "./posts/posts.reducer";
export default combineReducers({
  user: userReducer,
  post: postReducer,
});
