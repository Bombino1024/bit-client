import axios from "axios";
import { LOGIN_ENDPOINT, SERVER_URL } from "../assets/urls";

export const handleLogin = (evt, username, password, obj) => {
  try {
    password = JSON.parse(password);
  } catch (err) {
    console.log("Error during json parsing");
  }
  evt.preventDefault();
  const requestData = { username: username, password: password };
  axios({
    method: "post",
    url: SERVER_URL + LOGIN_ENDPOINT,
    data: requestData,
  })
    .then((response) => {
      if (response.data[0]) {
        localStorage.setItem("username", response.data[0].username);
        obj.props.history.push("/home");
      } else {
        window.alert("Incorrect username or password");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
