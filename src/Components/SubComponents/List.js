import { Component } from "react/cjs/react.production.min";
import uniqid from "uniqid";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    const items = this.props.ListItems.map((item) => (
      <ListItem key={uniqid()} Item={item} />
    ));
    return (
      <div className="list-group">
        <h2>{this.props.ListName}</h2>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default List;
