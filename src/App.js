import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
