import React from "react";
import axios from "axios";
import Cards from "./components/Cards";
import "./styles.css";

import "./App.css";

class App extends React.Component {
  state = {
    users: [],
  };

  buildArray = async () => {
    const res = await axios.get(`https://api.github.com/users/AdamRuffner`);
    const response = await axios.get(res.data.followers_url);
    const results = await Promise.all(
      response.data.map((follower) => {
        return axios.get(follower.url);
      })
    );
    const resultData = results.map((result) => result.data);
    this.setState({ users: [...this.state.users, res.data, ...resultData] });
  };

  componentDidMount() {
    this.buildArray(this.state.name);
  }



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
