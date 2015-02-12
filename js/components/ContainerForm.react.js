var React = require('react');

var ContainerForm = React.createClass({
  render: function () {
    return (
      <div>
      <label>Container Name</label>
        <input type="text"/>
        <button type="submmit">Save</button>
      </div>
    );
  }
});

module.exports = ContainerForm;
