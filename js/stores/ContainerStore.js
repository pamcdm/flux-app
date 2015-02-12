var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ContainerConstants = require('../Constants/ContainerConstants');

var CHANGE_EVENT = 'change';

var _containers = [];

function create(container) {
  _containers.push(container);
  // this could be replaced by the call of a API
}

function listContainers() {
  call class handle APIS
}

var ContainerStore = assign({}, EventEmitter.prototype, {

  getAll: function () {
    return _containers;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case ContainerConstants.CONTAINER_CREATE:
      container = action.container;
      if (container.name !== '') {
        create(container);
      }
      ContainerStore.emitChange();
      break;
  }
});


module.exports = ContainerStore;


