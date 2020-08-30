import { PostActionTypes } from "./posts.type";

const INITIAL_STATE = { posts: [] };

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.CREATE_NEW_POST:
      return state;
    case PostActionTypes.REMOVE_POST:
      return {
        ...state,
        posts: [],
      };
    case PostActionTypes.FETCHED_POST_SUCCESS:
      return {
        ...state,
        posts: action.resp,
      };
    default:
      return state;
  }
};

export default postReducer;
