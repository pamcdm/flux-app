var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _containers = [];

var ContainerStore = assign({}, EventEmitter.prototype, {

  getAll: function () {
    _containers.push({'name': "My container"});
    _containers.push({'name': "My fave container for pics"});
    _containers.push({'name': "My container for blog"});
    return _containers;
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

module.exports = ContainerStore;


