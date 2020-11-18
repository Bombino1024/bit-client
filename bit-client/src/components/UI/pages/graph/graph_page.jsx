import React from "react";
import "./graph_page.css";
import { Link } from "react-router-dom";
import { getPosts, deletePost, insertPost } from "../../../../api/query_api";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

function GraphPage(props) {
  const headingStyle = {
    textAlign: "center",
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link to="/home">
              <button className="btn btn-block btn-primary">NoSQL</button>
            </Link>
          </div>
          <div className="col-sm">
            <button className="btn btn-block btn-primary">GraphQL</button>
          </div>
        </div>
      </div>
      <h3 className="display-3" style={headingStyle}>
        GraphQL
      </h3>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div>
              <span className="m-1">Find posts by author</span>
              <input id="username" placeholder="username" className=""></input>
            </div>
            <button
              className="btn btn-primary"
              onClick={(evt) =>
                getPosts(
                  evt,
                  document.getElementById("username").value,
                  props.parent
                )
              }
            >
              Show posts
            </button>
            {props.parent.state.posts.length
              ? props.parent.state.posts.map((post) => (
                  <div className="post m-2 p-2" key={post._id}>
                    <div>title: {post.title}</div>
                    <div>description: {post.description}</div>
                    <div>owner: {post.owner}</div>
                  </div>
                ))
              : ""}
          </div>
          <div className="col-sm">
            <div>Delete post</div>
            <div>
              <input placeholder="title" className="p-1 m-1" id="title"></input>
              Find post by title
            </div>
            <div>
              <button
                className="btn btn-primary m-1"
                onClick={(evt) =>
                  deletePost(
                    evt,
                    document.getElementById("title").value,
                    props.parent
                  )
                }
              >
                Delete post
              </button>
              <div>Create post</div>
              <div>
                <input
                  placeholder="title"
                  className="p-1 m-1"
                  id="insert-title"
                ></input>
                Insert title
              </div>
              <div>
                <input
                  placeholder="description"
                  className="p-1 m-1"
                  id="insert-description"
                ></input>
                Insert description
              </div>
              <div>
                <input
                  placeholder="owner"
                  className="p-1 m-1"
                  id="insert-owner"
                ></input>
                Insert owner
              </div>
              <div>
                <button
                  className="btn btn-primary m-1"
                  onClick={(evt) =>
                    insertPost(
                      evt,
                      document.getElementById("insert-title").value,
                      document.getElementById("insert-description").value,
                      document.getElementById("insert-owner").value,
                      props.parent
                    )
                  }
                >
                  Create post
                </button>
                <div>
                  <h5>Request data</h5>
                  <div>{props.parent.state.query}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphPage;
