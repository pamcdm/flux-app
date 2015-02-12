var React = require('react');

var ContainerItem = React.createClass({
  render: function () {
    return (
      <li>{this.props.container.name} - {this.props.container.type}</li>
    );
  }
});

module.exports = ContainerItem;
