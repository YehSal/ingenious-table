import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import TableExampleControlled from './Table';


const App = () => {
	return (
		<MuiThemeProvider>
			<div>
				<BrowserRouter>
					<div> 
						<Header />
						<Route exact path="/" component={TableExampleControlled} />
					</div>
				</BrowserRouter>
			</div>
		</MuiThemeProvider>
	);
};

export default App;