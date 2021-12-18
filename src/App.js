import "./App.css";
import Toaster from "react-hot-toast";
import Menu from "../Old/src/Components/Menu";
import Header from "../Old/src/Components/Header";
import Footer from "../Old/src/Components/Footer";
import Home from '../Old/src/Components/Home';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.grabUser = this.grabUser.bind(this);
//     this.setUser = this.setUser.bind(this);
//     this.setToken = this.setToken.bind(this);

//     this.state = {
//       token: null,
//       user: null,
//     };
//   }
//   setUser(user) {
//     this.setState({
//       user,
//     });
//   }
//   setToken(token) {
//     this.setState({
//       token,
//     });
//   }
//   grabUser() {
//     const { token } = this.state;

//     const config = {
//       method: "get",
//       url: "https://aqueous-falls-70675.herokuapp.com/protected",
//       headers: {
//         Authorization: `${token}`,
//       },
//     };

//     axios(config)
//       .then((res) => {
//         this.setUser(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//
// }

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={true} />
      <Menu Css="left-menu d-flex" />
      <Home />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
