import Users from "./Component/Usercards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users_data: [],
      loading: true,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    document.getElementById("main").style.display = "inline-block";
    const URL = "https://reqres.in/api/users?page=1";
    fetch(URL)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        // console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav">
            <div className="row">
              <div className="heading">
                <h1>Laundary Shop</h1>
              </div>

              <div className="btn">
                <button onClick={this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="box">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;