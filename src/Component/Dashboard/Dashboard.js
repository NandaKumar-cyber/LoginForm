import React, { Component } from "react";
import Item from "./Item";

class Dashboard extends Component {
  state = {
    items: [{ id: 1, value: 0 }]
  };

  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            value={item.value}
            onDelete={this.handleDelete}
            id={item.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Dashboard; 
 
 
 
