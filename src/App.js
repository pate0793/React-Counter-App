import React from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counterComponents';


class App extends React.Component {
  state = { 
      counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
      ]
  };

  handleIncrement = counterValue =>{
      const counters= [...this.state.counters];
      const index = counters.indexOf(counterValue);
      counters[index] = {...counterValue};
      counters[index].value ++ ;
      this.setState({ counters });
  }

  handleReset = () =>{
      const counters= this.state.counters.map( c=> {
          c.value = 0;
          return c;
      }); 
      this.setState({ counters });
  };

  handleDelete = counterId =>{
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  };

  render() { 

    return ( 
      <React.Fragment>
        <NavBar
          totalCounters = {this.state.counters.filter(c => c.value > 0).length}
        />
          <main className="container">
            <Counters
              counters = {this.state.counters}
              onDelete = {this.handleDelete}
              onReset = {this.handleReset}
              onIncrement = {this.handleIncrement}
            />
          </main>
      </React.Fragment>
    );
  }
}
 
export default App;


