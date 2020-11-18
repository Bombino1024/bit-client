import React, { Component } from "react";
import GraphPage from "../../UI/pages/graph/graph_page";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      query: "",
    };
  }

  render() {
    return <GraphPage parent={this} />;
  }
}

export default Graph;
