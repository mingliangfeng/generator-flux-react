var React = require('react');
var ActionCreator = require('../actions/ActionCreators');
var Task = require('./Task.jsx');
var ListGroup = require('react-bootstrap/ListGroup');
var Alert = require('react-bootstrap/Alert');

var TaskList = React.createClass({
  getDefaultProps: function() {
    return {
      tasks: {}
    };
  },

  render: function() {
    if (this.props.tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {Object.keys(this.props.tasks).map(title =>
            <Task task={this.props.tasks[title]} />
          )}
        </ListGroup>
      </form>
    );
  }
});

module.exports = TaskList;
