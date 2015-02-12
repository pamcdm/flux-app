var React = require('react');

var ContainerItem = React.createClass({
  render: function () {
    return (
      <li>{this.props.name}</li>
    );
  }
});

module.exports = ContainerItem;
