import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "reducers";
import InlineCommentTrigger from "./InlineCommentTrigger";

const Comments = ({ refId }: { refId: string }) => {
  // todo update subscription to avoid unnecessary rerenders
  const allComments = useSelector(
    (state: AppState) => state.ui.comments.comments,
  );
  const widgetComments = allComments.filter(
    (comment: any) => comment.refId === refId,
  );

  return (
    <>
      {widgetComments.map((comment: any) => (
        <InlineCommentTrigger comment={comment} key={comment.id} />
      ))}
    </>
  );
};

export default Comments;
