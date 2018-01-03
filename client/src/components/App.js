import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as actions from './../actions';
import Header from './Header';
import InGeniousTable from './InGeniousTable';
import RowsNew from './RowsNew';


class App extends Component {
	componentDidMount() {         
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<BrowserRouter>
						<div> 
							<Header />
							<Route exact path="/" component={InGeniousTable} />
							<RowsNew />
						</div>
					</BrowserRouter>
				</div>
			</MuiThemeProvider>
		);
	}
};

export default connect(null, actions)(App);