import React, { Component } from "react";

class ButtonClicker extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0
    };
  }
  handleClick(e) {
    e.preventDefault();
    if (e.target.classList.contains("increment")) {
      this.setState({
        counter: this.state.counter + 1
      });
    } else if (e.target.classList.contains("decrement")) {
      this.setState({
        counter: this.state.counter - 1
      });
    } else {
      this.setState({
        counter: 0
      });
    }
  }
  render() {
    return (
      <div className="button-clicker-container">
        <div className="inner">
          <div className="counter">{this.state.counter}</div>
          <div className="button-area">
            <button
              className="glyphicon glyphicon-plus increment btn"
              onClick={this.handleClick}
            />
            <button
              className="glyphicon glyphicon-refresh refresh btn"
              onClick={this.handleClick}
            />
            <button
              className="glyphicon glyphicon-minus decrement btn"
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonClicker;
