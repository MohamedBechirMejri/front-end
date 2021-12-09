import { Component } from "react/cjs/react.production.min";

class Nav extends Component {
  render() {
    return (
      <nav className={this.props.Css + "nav flex-column .navbar-expand "}>
        {/* hardcode stuff for now */}

        <div className="nav-top-items">
          <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
          <a className="nav-link" href="/tournaments">
            Tournaments
          </a>
          <a className="nav-link" href="/teams">
            Teams
          </a>
        </div>
        <div className="nav-bottom-items">
          <a className="nav-link" href="/faq">
            FAQ
          </a>
          <a className="nav-link" href="/contact">
            Contact Us
          </a>
        </div>
      </nav>
    );
  }
}
export default Nav;
