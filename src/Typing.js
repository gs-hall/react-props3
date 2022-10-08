import React from "react";

export default function Typing({from, message}) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online" />
          &nbsp;{from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
        <i className="fa fa-circle online typing1" />
        <i className="fa fa-circle online typing2" />
        <i className="fa fa-circle online typing3" />
    </li>   
  );
};