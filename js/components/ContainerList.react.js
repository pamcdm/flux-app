var React = require('react');
var ContainerItem = require('./ContainerItem.react.js');

var ContainerList = React.createClass({
  render: function () {
    var allContainers = this.props.allContainers;
    var containers = [];

    for (var key in allContainers) {
      containers.push(<ContainerItem name={allContainers[key]} />);
    }

    return (
      <ul id="todo-list">{containers}</ul>
    );
  }
});

module.exports = ContainerList;
