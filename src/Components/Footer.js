import { Component } from "react/cjs/react.production.min";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="left-foot">
          <a href="https://discord.com" target="_blank" rel="noreferrer">
            <i className="bi bi-discord"></i>
          </a>
          <a href="https://twitch.tv" target="_blank" rel="noreferrer">
            <i className="bi bi-twitch"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i className="bi bi-youtube"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div className="right-foot">
          <a href="" target="_blank">
            © iChala MBM Kimo Gotella 2021
          </a>
          <a href="" target="_blank">
            Terms
          </a>
          <a href="" target="_blank">
            About
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
