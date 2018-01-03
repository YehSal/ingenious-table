import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import * as actions from './../actions';

import RowsDelete from './RowsDelete';
import RowsEdit from './RowsEdit';

class InGeniousTable extends Component {
  // When the Table component is loaded, we fetch all our rows
  constructor(props) {
    super(props)
    this.state = {
      showOptions: false,
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,            
      height: '500px',
      editDialog: false,
      selectedRow: null,
      selectedRowIndex: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.props.fetchRows();
  }

  handleToggle = (event, toggled) => {        
    event.preventDefault();
    this.setState({
    [event.target.name]: toggled,
    });      
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({height: event.target.value});
  };

  hideOptions = (event) => {
    this.setState({showOptions: false});      
  }

  showOptions = (event) => {
    this.setState({showOptions: true});    
  }

  renderStudents = () => {
    return _.map(this.props.rows, row => {
      var formattedDate = row ? row.date.toString().slice(0, 10) : 10;
      return(
        <TableRow key={row.id}>
          <TableRowColumn>{row.student}</TableRowColumn>
          <TableRowColumn>{row.counselor}</TableRowColumn>
          <TableRowColumn>{row.hours}</TableRowColumn>
          <TableRowColumn>{formattedDate}</TableRowColumn>
          <TableRowColumn>
            <RowsDelete row={row} />
          </TableRowColumn>
          <TableRowColumn>
            <RowsEdit row={row} />
          </TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader 
          displaySelectAll={false}
          adjustForCheckbox={false}
          enableSelectAll={false}>
          <TableRow>
            <TableHeaderColumn>row</TableHeaderColumn>
            <TableHeaderColumn>Counselor</TableHeaderColumn>
            <TableHeaderColumn>Hours</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Edit</TableHeaderColumn>
            <TableHeaderColumn>Delete</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}>
          {this.renderStudents()}
        </TableBody>
      </Table>
    );
  }
}

function mapStatetoProps(state) {
  return {rows: state.row};
}

export default connect(mapStatetoProps, actions)(InGeniousTable);