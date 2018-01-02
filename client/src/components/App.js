import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';


const Table = () => <h2>Table</h2>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div> 
					<Header />
					<Route exact path="/" component={Table} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;