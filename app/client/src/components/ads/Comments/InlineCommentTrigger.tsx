import React from "react";
import styled from "styled-components";
import { Comment } from "reducers/uiReducers/commentsReducer";
import InlineComment from "./InlineComment";
import { Popover, Position } from "@blueprintjs/core";
import { get } from "lodash";

const CommentTriggerContainer = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  z-index: 1000;
`;

const InlineCommentTrigger = ({ comment }: { comment: Comment }) => {
  const { top, left } = get(comment, "meta.position", { top: 0, left: 0 });

  return (
    <CommentTriggerContainer top={top} left={left}>
      <Popover minimal position={Position.BOTTOM_RIGHT} boundary="viewport">
        <div>Comment Icon</div>
        <InlineComment comment={comment} />
      </Popover>
    </CommentTriggerContainer>
  );
};

export default InlineCommentTrigger;
