import { Component } from "react/cjs/react.production.min";
class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.Name}>{this.props.Placeholder}:</label>
        <input
          id={this.props.Name}
          onChange={this.props.OnChange}
          type={this.props.Type}
          placeholder={this.props.Placeholder}
          className={this.props.Class}
          name={this.props.Name}
        ></input>
      </div>
    );
  }
}
export default Input;
