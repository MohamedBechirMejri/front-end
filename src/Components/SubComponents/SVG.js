import { Component } from "react/cjs/react.production.min";

class SVG extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5rem"
        height="1.5rem"
        fill="currentColor"
        class={this.props.Class}
        viewBox="0 0 16 16"
      >
        <path d={this.props.D} />
        <path d={this.props.D2} />
      </svg>
    );
  }
}
export default SVG;
