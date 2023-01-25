import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('props', this.props);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server.
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Rendered');

    return (
      <div className="m-2 p-2">
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 10 }}
          className="btn btn-secondary btn-sm m-2">
            +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 10 }}
          className="btn btn-secondary btn-sm m-2">
            -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 10 }}
          className="btn btn-danger btn-sm m-2">
            Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
