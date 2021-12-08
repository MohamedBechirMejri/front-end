import { Component } from "react/cjs/react.production.min";

class Nav extends Component {
  render() {
    return (
      <nav className={this.props.Css}>
        {/* hardcode stuff for now */}

        <div className="nav-top-items">
          <a href="/dashboard">Dashboard</a>
          <a href="/tournaments">Tournaments</a>
          <a href="/teams">Teams</a>
        </div>
        <div className="nav-bottom-items">
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact Us</a>
        </div>
      </nav>
    );
  }
}
export default Nav;
