var React = require('react');
var ContainerActions = require('../actions/ContainerActions');

var ContainerForm = React.createClass({
  getInitialState: function () {
    return { name: ''};
  },

  render: function () {
    return (
      <div>
        <label>Container Name:</label>
        <input type="text" ref="name" value={this.state.name} onChange={this._onChange}/>
        <br/>
        <label>Type:</label>
        <input type="radio" ref="containerType" name="type" value="Private"/>
        <label>Private</label>
        <input type="radio" ref="containerType" name="type" value="Public"/>
        <label>Public</label>
        <br/>
      <button onClick={this._save}>Save</button>
      </div>
    );
  },

  _onChange: function(event) {
    this.setState({
      name: event.target.value
    });
  },

  _save: function () {
    ContainerActions.create({
      name: this.refs.name.getDOMNode().value,
      type: this.refs.containerType.getDOMNode().value

    });
    this.setState({name: ''});
  }
});

module.exports = ContainerForm;
