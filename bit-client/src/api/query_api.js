import axios from "axios";
import { GRAPHQL_ENDPOINT, SERVER_URL } from "../assets/urls";

export const getPosts = (evt, title, obj) => {
  evt.preventDefault();
  obj.setState({
    query:
      "request data: " +
      String.raw`
  {
    getPost(title:"${title}"){
          id
          title
          description
          owner
      }
  }
`,
  });
  axios({
    method: "post",
    url: SERVER_URL + GRAPHQL_ENDPOINT,
    data: {
      query: String.raw`
      {
        getPost(title:"${title}"){
              id
              title
              description
              owner
          }
      }
  `,
    },
  })
    .then((response) => {
      obj.setState({ posts: response.data.data.getPost });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deletePost = (evt, title, obj) => {
  evt.preventDefault();
  obj.setState({
    query:
      "request data: " +
      String.raw`
      mutation{
        deletePost(title: "${title}"){
          title
        }
      }
  `,
  });
  axios({
    method: "post",
    url: SERVER_URL + GRAPHQL_ENDPOINT,
    data: {
      query: String.raw`
      mutation{
        deletePost(title: "${title}"){
          title
        }
      }
  `,
    },
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
  obj.setState({
    query:
      "request data: " +
      String.raw`
      mutation{
        createPost(title: "${title}", description: "${description}", owner: "${owner}"){
          id
          title
          description
          owner
        }
      }
  `,
  });
  axios({
    method: "post",
    url: SERVER_URL + GRAPHQL_ENDPOINT,
    data: {
      query: String.raw`
      mutation{
        createPost(title: "${title}", description: "${description}", owner: "${owner}"){
          id
          title
          description
          owner
        }
      }
  `,
    },
  })
    .then((response) => {
      console.log(response.data);
      // obj.setState({ posts: response.data.data.unathorizedGet });
    })
    .catch((error) => {
      console.log(error);
    });
};
