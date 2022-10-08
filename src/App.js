import React from 'react';
import MessageHistory from './MessageHistory';
import {loadData} from './LoadData'
import "./css/main.css";
import "./fa/css/font-awesome.min.css";

function App() {
  const messages = loadData();

  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
  );
}

export default App;
