import React, {Component} from 'react';
import logo from './../assets/logo.png';
import './../assets/styles.css';

class Header extends Component {
	render() {
		return (
			<div className="Header-main">
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Welcome to InGenious Table</h1>
        </header>
      </div>
		);
	}
}

export default Header;