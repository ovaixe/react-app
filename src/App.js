import React, { Component } from 'react';
import NavBar from './componenets/navbar';
import Counters from './componenets/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 6 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    // Ajax goes here
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters })
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // counters[index] = { ...counter }
    counters[index].value--;
    this.setState({ counters })
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({ counters });
  };
  
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
    });
    this.setState({ counters })
  };
  render() { 
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
