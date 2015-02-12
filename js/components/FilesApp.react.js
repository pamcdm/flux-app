var ContainerList = require('./ContainerList.react.js');
var ContainerForm = require('./ContainerForm.react.js');
var ContainerStore = require('../stores/ContainerStore.js');
var React = require('react');

function getContainerState() {
  return {
    allContainers: ContainerStore.getAll()
  };
}

var FilesApp = React.createClass({
  getInitialState: function () {
    return getContainerState();
  },

  componentDidMount: function() {
    ContainerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ContainerStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
      <div>New Container</div>
      <ContainerForm />
      <div>My containers</div>
      <ContainerList allContainers={this.state.allContainers}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getContainerState());
  }
});

module.exports = FilesApp;
