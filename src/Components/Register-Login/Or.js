import { Component } from "react/cjs/react.production.min";

class Or extends Component {
  render() {
    return (
      <div className={"or " + (this.props.Hidden ? "hidden" : "")}>
        <hr />
        <h3>OR</h3>
        <hr />
      </div>
    );
  }
}
export default Or;
