import {DatePicker} from 'redux-form-material-ui'
import React from 'react';
import {Field} from 'redux-form';
import RowField from './RowField';

export const renderFields = () => {
  return (
    <div>
      <Field 
        label="Student" 
        type="text" 
        name="student" 
        component={RowField} 
      />
      <Field 
        label="Counselor" 
        type="text" 
        name="counselor" 
        component={RowField} 
      />
      <Field 
        label="Hours" 
        type="number" 
        name="hours" 
        component={RowField} 
      />
      <Field 
        label="Date"
        floatingLabelText={'Date'}
        name="date" 
        component={DatePicker}
        format={(value, name) => value === '' ? null : value} 
      />
    </div>
  );
};