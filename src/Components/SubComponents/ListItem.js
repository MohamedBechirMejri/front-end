import { Component } from "react/cjs/react.production.min";
class ListItem extends Component {
  render() {
    return <li className="list-group-item">{this.props.Item}</li>;
  }
}
export default ListItem;
