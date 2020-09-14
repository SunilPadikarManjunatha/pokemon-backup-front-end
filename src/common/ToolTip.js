import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

const ToolTip = (props) => {
  return (
    <OverlayTrigger
      trigger="hover"
      key={"top"}
      placement={"top"}
      overlay={
        <Popover id={`popover-positioned`}>
          <Popover.Content>{props.tip}</Popover.Content>
        </Popover>
      }
    >
      {props.children}
      </OverlayTrigger>
  );
};

export default ToolTip;
