import React from 'react';
import TextField from 'material-ui/TextField'

export default ({input, label, meta: {touched, error}, ...custom}) => {
	return(
		<div>
		  <TextField 
		  	inputStyle={{textAlign: 'center'}}
  		  floatingLabelText={label}
	   		errorText={touched && error}
	   		{...input}
	   		{...custom}
  		/>
		</div>
	);
};