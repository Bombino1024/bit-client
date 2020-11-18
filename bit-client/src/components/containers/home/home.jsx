import React, { Component } from "react";
import HomePage from "../../UI/pages/home/home_page";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      query: "",
    };
  }
  render() {
    return (
      <div>
        <HomePage parent={this} />
      </div>
    );
  }
}

export default Home;
