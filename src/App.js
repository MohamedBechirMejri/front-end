import "./App.css";
import Footer from "./Components/Footer";
// import Login from "./Components/Login";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
// import Register from "./Components/Register";
// import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import { Component } from "react/cjs/react.production.min";
import axios from "axios";
// import { Toaster } from "react-hot-toast";

class App extends Component {
  constructor(props) {
    super(props);

    this.grabUser = this.grabUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setToken = this.setToken.bind(this);

    this.state = {
      token: null,
      user: null,
    };
  }
  setUser(user) {
    this.setState({
      user,
    });
  }
  setToken(token) {
    this.setState({
      token,
    });
  }
  grabUser() {
    const { token } = this.state;

    const config = {
      method: "get",
      url: "https://aqueous-falls-70675.herokuapp.com/protected",
      headers: {
        Authorization: `${token}`,
      },
    };

    axios(config)
      .then((res) => {
        this.setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Menu Css="left-menu d-flex" />
        <Header />
        <Home />
        <Footer />
      </div>
    );
    // return (
    //   <div className="App">
    //     <Toaster position="top-right" reverseOrder={true} />
    //     {user && <Menu Css="left-menu d-flex" />}
    //     {user && <Header />}

    //     <Routes>
    //       <Route
    //         path="login"
    //         element={
    //           user ? (
    //             <Navigate to="/dashboard" replace={true} />
    //           ) : (
    //             <Login SetToken={this.setToken} GrabUser={this.grabUser} />
    //           )
    //         }
    //       />
    //       <Route
    //         path="register"
    //         element={
    //           user ? <Navigate to="/dashboard" replace={true} /> : <Register />
    //         }
    //       />
    //       <Route
    //         path="/"
    //         element={
    //           user ? <Navigate to="/dashboard" replace={true} /> : <Home />
    //         }
    //       />
    //       <Route
    //         path="dashboard"
    //         element={
    //           !user ? (
    //             <Navigate to="/login" replace={true} />
    //           ) : (
    //             <Home User={user} />
    //           )
    //         }
    //       />
    //       <Route
    //         path="tournaments"
    //         element={
    //           !user ? (
    //             <Navigate to="/login" replace={true} />
    //           ) : (
    //             <Home User={user} />
    //           )
    //         }
    //       />
    //       <Route
    //         path="teams"
    //         element={
    //           !user ? (
    //             <Navigate to="/login" replace={true} />
    //           ) : (
    //             <Home User={user} />
    //           )
    //         }
    //       />
    //     </Routes>

    //     <Footer />
    //   </div>
    // );
  }
}

export default App;
