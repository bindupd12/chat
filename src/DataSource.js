import React from "react";
import UserList from "./UserList";
import Message from "./Message";

export default class DataSource extends React.Component {
  state = { client: null };

  componentWillMount() {
    this.props.chatClient.tryLogin("happyhippo");
    this.props.chatClient.stateChanges.subscribe(client =>
      this.setState({ client })
    );
  }
  render() {
    //return JSON.stringify(this.state);
    return (
      this.state.client != null && (
        <div>
          <h1>Messages</h1>
          {this.state.client.chat.messages != null && (
            <Message message={this.state.client.chat.messages} />
          )}
        </div>
      )
    );
  }
}
