import React from "react";
import "./App.css";

// function App() {
//   return <div className="App">
//   <h1>Hello Classy Weather App</h1>
//   </div>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((currState) => {
      return { count: currState.count - 1 };
    });
  }
  handleIncrement() {
    this.setState((currState) => {
      return { count: currState.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;
