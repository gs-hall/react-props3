import React from "react";

export default function Response({from, message}) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{message.time}&nbsp;&nbsp;</span>
        <span className="message-data-name">{from.name}&nbsp;&nbsp;</span>
        <i className="fa fa-circle me" />
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
  );
};