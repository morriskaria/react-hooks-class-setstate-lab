import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>Shopster</h2>
        <button onClick={this.props.onDarkModeClick}>
          {this.props.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    );
  }
}

export default Header;