import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const StyledCommentsWrapper = styled.div`
  position: relative;
`;

// since this is called as a function, we can't subscribe to the store
const widgetCommentsWrapper = (content: React.ReactNode, parentProps: any) => {
  return (
    <StyledCommentsWrapper>
      <Comments refId={parentProps.widgetId} />
      {content}
    </StyledCommentsWrapper>
  );
};

export default widgetCommentsWrapper;
