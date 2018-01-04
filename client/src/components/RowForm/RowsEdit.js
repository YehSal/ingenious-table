import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import EditIcon from 'react-icons/lib/md/mode-edit';

import * as actions from './../../actions';
import {validate} from './rowFormValidation';
import {renderFields} from './rowFormFields';

class RowsEdit extends Component {
  componentWillMount () {

  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      student: this.props.row.student,  
      counselor: this.props.row.counselor,
      hours: this.props.row.hours,
      date: this.props.row.date    
    };
  }
  
  // Display existing values
  handleOpen = () => {
    this.setState({open: true}); 
    this.props.initialize({ 
      student: this.state.student,
      counselor: this.state.counselor,
      hours: this.state.hours,
      date: new Date(this.state.date)
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
      label="Cancel"          
      onClick={this.handleClose}
    />,
    ];
    return (
      <div>
        <EditIcon
          size={30}                            
          className="EditIcon"
          onClick={this.handleOpen}
        />   
        <Dialog
          actions={actions} 
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={{textAlign: "center"}}
          autoScrollBodyContent={true}
          modal={false}
        >
          <form 
          onSubmit={this.props.handleSubmit(values => {
            const selectedRow = this.props.row;
            this.props.editRow(values, selectedRow.id);
            this.setState({
              open: false,
              student: values.student,  
              counselor: values.counselor,
              hours: values.hours,
              date: values.date    
            });
          })}
          >
            {renderFields()}
            <FlatButton
              type="submit"
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.props.handleClose}
            />
             <FlatButton
              label="Reset"
              secondary={true}
              keyboardFocused={false}
              onClick={this.props.reset}
            />
          </form>           
        </Dialog>
      </div>
    ); 
  }  
};



RowsEdit = connect(null, actions)(RowsEdit);

export default reduxForm({
  validate,
  form: 'editForm',
})(RowsEdit);  
