import React from "react";
import ReactDOM from "react-dom";

export default class TodoContent extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { id, text } = this.props;

    return (
      <li>
        <span>{id}</span>
        <span>{text}</span>
      </li>
    );
  }
}

