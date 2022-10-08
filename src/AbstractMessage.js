import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function AbstractMessage(props) {
  const type = props.message.type;
  return (
    (type === 'response') ? <Response {...props} /> :  
    (type === 'message') ? <Message {...props} /> :    
    (type === 'typing') ? <Typing {...props} /> :
    null
  );
}