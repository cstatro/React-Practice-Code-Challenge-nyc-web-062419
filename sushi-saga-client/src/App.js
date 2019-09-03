import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = { sushi: [], money: 100 };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json =>
        this.setState({
          sushi: json.map(s => {
            s.selected = false;
            return s;
          })
        })
      );
  }

  setSushi = (id, cost) => {
    if (this.state.money - cost >= 0) {
      const sushi = this.state.sushi.map(s =>
        s.id === id ? { ...s, selected: true } : s
      );
      const money = this.state.money - cost;
      this.setState({ sushi, money });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          setSushi={this.setSushi.bind(this)}
          sushi={this.state.sushi}
        />
        <Table sushi={this.state.sushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;
