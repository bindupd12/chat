import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import DataSource from "./DataSource";
import NewMessageForm from "./NewMessageForm";
import { ChatClient } from "meetup-chat-client";

const chatClient = ChatClient.connect(
  "https://serene-basin-84996.herokuapp.com/"
);

function App() {
  return (
    <div>
      <Header text="Hi!" />
      <DataSource chatClient={chatClient} />
      <NewMessageForm chatClient={chatClient} />
    </div>
  );
}

render(<App />, document.getElementById("root"));
