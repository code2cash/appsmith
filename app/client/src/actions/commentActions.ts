import { Comment } from "reducers/uiReducers/commentsReducer";
import { ReduxActionTypes } from "constants/ReduxActionConstants";

// todo remove (for dev)
export const setComments = (comments: Array<Comment>) => ({
  type: ReduxActionTypes.SET_COMMENTS,
  payload: comments,
});

// todo remove (for dev)
export const initComments = () => ({
  type: ReduxActionTypes.INIT_COMMENTS,
});
