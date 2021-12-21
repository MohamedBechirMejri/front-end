import "../../Styles/Header/Login.scss";
import Button from "../SubComponents/Button";

const RedirectToGoogle= async()=> {
   
  const googleLoginUrl = "http://localhost:3030/login/google";
 const newWindow= window.open(
    googleLoginUrl,
    "_blank",
    "width=500,height=600"
  );
    if (newWindow) { 
     const timer= setInterval(() => {
        if (newWindow.closed) {
          
          clearInterval(timer)
          location.reload();
        }
      }, 500);
      
    }

};
const RedirectToDiscord= async()=> {
   
  const googleLoginUrl = "http://localhost:3030/login/discord";
 const newWindow= window.open(
    googleLoginUrl,
    "_blank",
    "width=500,height=600"
  );
  if (newWindow) { 
    const timer= setInterval(() => {
       if (newWindow.closed) {
         
         clearInterval(timer)
         location.reload();
       }
     }, 500);
     
   }

};

const Login = () => {
  return (
    <div className="login">
      <h1>Login With</h1>
      <div className="social-media">
        <Button
          ButtonName="Discord"
          OnClick={RedirectToDiscord}
          ClassName="discord-button"
          Icon="bi-discord"
        />
        <Button
          ButtonName="Google"
          OnClick={RedirectToGoogle}
          ClassName="google-button"
          Icon="bi-google"
        />
        <Button
          ButtonName="Facebook"
          OnClick={() => console.log("hi")}
          ClassName="facebook-button"
          Icon="bi-facebook"
        />
      </div>
    </div>
  );
};
export default Login;
