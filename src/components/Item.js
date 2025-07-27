import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false
    };
  }

  handleAddToCartClick = () => {
    this.setState(prevState => ({
      isInCart: !prevState.isInCart
    }));
  };

  render() {
    const itemClass = this.state.isInCart ? "in-cart" : "";
    return (
      <li className={itemClass}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button 
          className={this.state.isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {this.state.isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;