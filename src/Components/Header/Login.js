import "../../Styles/Header/Login.scss";
import Button from "../SubComponents/Button";

const Login = () => {
  return (
    <div className="login">
      <h1>Login With</h1>
      <div className="social-media">
        <Button
          ButtonName=""
          OnClick={() => console.log("hi")}
          ClassName="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md discord-button group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          Icon="bi-discord"
        />
        <Button
          ButtonName=""
          OnClick={() => console.log("hi")}
          ClassName="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md google-button group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          Icon="bi-google"
        />
        <Button
          ButtonName=""
          OnClick={() => console.log("hi")}
          ClassName="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md facebook-button group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          Icon="bi-facebook"
        />
      </div>
    </div>
  );
};
export default Login;
