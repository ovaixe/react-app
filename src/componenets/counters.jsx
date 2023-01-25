import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    console.log('Counters - Rendered');

    return (
      <div className="m-2">
        <button onClick={ this.props.onReset } className="btn btn-primary">Reset</button>
        {this.props.counters.map(counter => <Counter key={counter.id} onIncrement={ this.props.onIncrement } onDecrement={ this.props.onDecrement } onDelete={this.props.onDelete} counter={counter}/>)}
      </div>
    );
  }
}

export default Counters;
