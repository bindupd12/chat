import React from "react";

export default function Message(props) {
  return <ul>{props.message.map(msg => <li>{msg.text}</li>)}</ul>;
}
