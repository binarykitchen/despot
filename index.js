var inherits = require("inherits");
var global = require("global");
var EventEmitter = require("events");

var makeDespot = function () {
  var Despot = function () {
    if (global._singletonDespotInstance) {
      return global._singletonDespotInstance;
    }

    global._singletonDespotInstance = this;
    EventEmitter.call(this);
  };

  inherits(Despot, EventEmitter);

  return new Despot();
};

module.exports = makeDespot();
