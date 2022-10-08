import React from "react";
import AbstractMessage from "./AbstractMessage";

export default function MessageHistory({list = []}) {
  const MessageElements = list.map((item, index) => (
    <AbstractMessage key={item.id} from={item.from} message={item} />
  ));
  return (
    <ul className="ul">
      {MessageElements}
    </ul>
  );
};