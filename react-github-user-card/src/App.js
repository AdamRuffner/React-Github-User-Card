import React from "react";
import axios from "axios";
import Cards from "./components/Cards";

import "./App.css";

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/adamruffner/followers`)
      .then((res) => {
        this.setState({ users: [...this.state.users, res.data] });
      })
      .catch();
  }

  // handleNameChange = (e) => {
  //   this.setState({
  //     name: e.target.name
  //   });
  // }

  // onSubmit = (e) => {
  //   e.preventDefailt();
  //   this.fetchName(this.state.name)
  // }

  // fetchName = () => {
  //   fetch(`https://api.github.com/users/adamruffner/followers`).then((res) =>
  //     console.log(res.data)
  //   );
  // };

  render() {
    return (
      <div className="App">
        <h1>GitHub Users</h1>
        <Cards users={this.state.users} />
      </div>
    );
  }
}

export default App;
