import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, event } = this.props;

    return <button onClick={event}>{text}</button>;
  }
}
