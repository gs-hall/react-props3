import React from "react";

export default function Message({from, message}) {
  return (
    <li>
      <div className="message-data">
        <i className="fa fa-circle online" />
        <span className="message-data-name">  
          &nbsp;{from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>    
  );
};