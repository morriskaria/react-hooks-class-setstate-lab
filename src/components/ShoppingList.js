import React from 'react';
import Item from './Item';
import shoppingData from '../data/items';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: shoppingData,
      selectedCategory: "All"
    };
  }

  handleCategoryChange = (event) => {
    this.setState({
      selectedCategory: event.target.value
    });
  };

  getItemsToDisplay() {
    return this.state.items.filter((item) => {
      if (this.state.selectedCategory === "All") return true;
      return item.category === this.state.selectedCategory;
    });
  }

  render() {
    const itemsToDisplay = this.getItemsToDisplay();
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select 
            name="filter" 
            onChange={this.handleCategoryChange}
            value={this.state.selectedCategory}
          >
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item 
              key={item.id} 
              name={item.name} 
              category={item.category} 
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;