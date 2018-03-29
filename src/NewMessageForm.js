import React from "react";

export default class NewMessageForm extends React.Component {
  state = { text: "Hey!" };

  handleChange = event => {
    const text = event.currentTarget.value;
    this.setState({ text });
  };

  handleClick = () => {
    //alert(this.state.text);
    this.props.chatClient.sendMessage({ text: this.state.text });
    this.setState({ text: "" });
  };

  render() {
    return (
      <form>
        <label>
          Message:{" "}
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </label>
        <input type="submit" value="Submit" onClick={this.handleClick} />
      </form>
    );
  }
}
