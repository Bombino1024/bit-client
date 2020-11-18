import axios from "axios";

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
    url: "http://localhost:3001/logins/login",
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
