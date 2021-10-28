import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(new Date().getTime() + this.props.timeZone * 1000)
      .toUTCString()
      .replace(/ GMT$/, ""),
  };

  timeRefresh() {
    this.setState({
      date: new Date(new Date().getTime() + this.props.timeZone * 1000)
        .toUTCString()
        .replace(/ GMT$/, ""),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.timeRefresh();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <span>{this.state.date}</span>
      </div>
    );
  }
}
export default Clock;
