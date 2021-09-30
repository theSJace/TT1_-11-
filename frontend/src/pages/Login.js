import { useHistory } from "react-router";
import LoginForm from "../meetups/LoginForm";
const axios = require('axios');

const LoginPage = () => {
    // const history = useHistory()
    const loginHandler = (loginData) => {
      axios.post(loginData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
        console.log(loginData);
    }
  return (
    <section>
      <h1>Login/Signup</h1>
      <LoginForm onLogin={loginHandler}/>
    </section>
  );
};

export default LoginPage;
