import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import fusTheme from './fusTheme'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div className="App">
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onLeftIconButtonTouchTap={() => this.setState({open: !this.state.open})}
            />
            <Drawer 
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
              <NavLink to="/">
                <MenuItem onClick={this.handleClose}>
                  Home
                </MenuItem>
              </NavLink>
              <NavLink to="/logos">
                <MenuItem onClick={this.handleClose}>
                  Logos
                </MenuItem>
              </NavLink>
              <NavLink to="/posters">
                <MenuItem onClick={this.handleClose}>
                  Posters
                </MenuItem>
              </NavLink>
              <NavLink to="/letterhead">
                <MenuItem onClick={this.handleClose}>
                  Letterhead
                </MenuItem>
              </NavLink>
              <NavLink to="/share-a-story">
                <MenuItem onClick={this.handleClose}>
                  Share a Story
                </MenuItem>
              </NavLink>
              <NavLink to="/service-request-form">
                <MenuItem onClick={this.handleClose}>
                  Service Request Form
                </MenuItem>
              </NavLink>
              <NavLink to="/tutorial">
                <MenuItem onClick={this.handleClose}>
                  Tutorial
                </MenuItem>
              </NavLink>
            </Drawer>

            <Route 
              exact 
              path="/" 
              render={() => <h1>Home View</h1>} />
            <Route 
              exact 
              path="/logos-posters" 
              render={() => <h1>Logos and Posters View</h1>} />
            <Route 
              exact 
              path="/logos" 
              render={() => <h1>Logos View</h1>} />
            <Route 
              exact 
              path="/posters" 
              render={() => <h1>Posters View</h1>} />
            <Route 
              exact 
              path="/letterhead" 
              render={() => <h1>Letterhead View</h1>} />
            <Route 
              exact 
              path="/share-a-story" 
              render={() => <h1>Share a Story View</h1>} />
            <Route 
              exact 
              path="/planning-guide" 
              render={() => <h1>Planning Guide View</h1>} />
            <Route 
              exact 
              path="/services" 
              render={() => <h1>Services View</h1>} />
            <Route 
              exact 
              path="/glossary" 
              render={() => <h1>Glossary View</h1>} />
            <Route 
              exact 
              path="/service-request-form" 
              render={() => <h1>Service Request Form View</h1>} />
            <Route 
              exact 
              path="/tutorial" 
              render={() => <h1>Tutorial View</h1>} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
