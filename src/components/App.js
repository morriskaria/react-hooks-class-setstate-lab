import React from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  handleDarkModeClick = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  render() {
    const appClass = this.state.isDarkMode ? 'App dark' : 'App light';
    return (
      <div className={appClass}>
        <Header 
          onDarkModeClick={this.handleDarkModeClick} 
          isDarkMode={this.state.isDarkMode}
        />
        <ShoppingList />
      </div>
    );
  }
}

export default App;