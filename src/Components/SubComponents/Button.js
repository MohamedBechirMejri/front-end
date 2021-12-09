import { Component } from "react/cjs/react.production.min";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.OnClick} className={this.props.ClassName}>
        {this.props.ButtonName}
      </button>
    );
  }
}
export default Button;
