import axios from "axios";
import { POSTS_ENDPOINT, SERVER_URL } from "../assets/urls";

export const getPosts = (evt, username, obj) => {
  obj.setState({ query: "request param: " + username });
  evt.preventDefault();
  axios({
    method: "get",
    url: SERVER_URL + POSTS_ENDPOINT + username,
  })
    .then((response) => {
      if (response.data) {
        obj.setState({ posts: response.data });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updatePost = (evt, title, description, obj) => {
  evt.preventDefault();

  try {
    title = JSON.parse(title);
  } catch (err) {
    console.log(err);
  }

  const requestData = { title: title, description: description };
  obj.setState({ query: "request data: " + JSON.stringify(requestData) });
  axios({
    method: "put",
    url: SERVER_URL + POSTS_ENDPOINT,
    data: requestData,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const insertPost = (evt, title, description, owner, obj) => {
  evt.preventDefault();

  const requestData = {
    title: title,
    description: description,
    owner: owner,
  };

  obj.setState({ query: "request data: " + JSON.stringify(requestData) });
  axios({
    method: "post",
    url: SERVER_URL + POSTS_ENDPOINT,
    data: requestData,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
