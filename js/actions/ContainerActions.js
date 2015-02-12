var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/ContainerConstants');

var ContainerActions = {

  create: function (newContainer) {
    AppDispatcher.dispatch({
      actionType: Constants.CONTAINER_CREATE,
      container: newContainer
    });
  }
}

module.exports = ContainerActions;
