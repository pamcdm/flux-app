var React = require('react');
var ContainerItem = require('./ContainerItem.react.js');

var ContainerList = React.createClass({
  render: function () {
    var allContainers = this.props.allContainers;
    var containers = [];

    var createItem = function(item) {
      return <ContainerItem container={item} />;
    };
    containers = allContainers.map(createItem)

    return (
      <ul id="todo-list">{containers}</ul>
    );
  }
});

module.exports = ContainerList;
