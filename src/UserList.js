import React from "react";

export default function UserList(props) {
  return <ul>{props.users.map(user => <li>{user.name}</li>)}</ul>;
}
