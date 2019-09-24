import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = amount => () => {
    this.setState(prevState => ({
      count: prevState.count + amount
    }));
  };

  increment = this.incrementCount(1);

  decrement = this.incrementCount(-1);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Count: {this.state.count}</p>
          <button className="increment" onClick={this.increment}>
            Increment
          </button>
          <button className="decrement" onClick={this.decrement}>
            Decrement
          </button>
        </header>
      </div>
    );
  }
}

export default App;
