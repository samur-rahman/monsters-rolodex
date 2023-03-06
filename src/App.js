import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // incase if I want to fetch data from an api and
  // want to render the data as soon as received use componentDidMount
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((el, _) => {
          return (
            <div key={el.id}>
              <h1>{el.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
