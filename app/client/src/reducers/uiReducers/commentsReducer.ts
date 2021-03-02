import { ReduxAction, ReduxActionTypes } from "constants/ReduxActionConstants";
import { createReducer } from "utils/AppsmithUtils";

export enum CommentParentTypes {
  widget = "widget",
  action = "action",
  datasource = "datasource",
}

// ref ui sections within a parent
enum CommentRefChild {
  body = "body",
  header = "header",
}

type CommentMetadata = {
  tabId: string;
  refChild: CommentRefChild;
  position: { top: number; left: number }; // percentage
};

export type Comment = {
  parentType: CommentParentTypes;
  meta: Partial<CommentMetadata>;
  refId: string; // could be an id to refer any parent based on parent type
  body: string;
  id: string;
};

const initialState: CommentsReduxState = {
  comments: [],
};

const helpReducer = createReducer(initialState, {
  [ReduxActionTypes.SET_COMMENTS]: (
    state: CommentsReduxState,
    action: ReduxAction<Array<Comment>>,
  ) => ({
    comments: action.payload,
  }),
});

export interface CommentsReduxState {
  comments: Array<Comment>;
}

export default helpReducer;
