var util = require('util')
var global = require('global')
var EventEmitter = require('events')

var makeDespot = function () {
  var Despot = function () {
    if (global._singletonDespotInstance) {
      return global._singletonDespotInstance
    } else {
      global._singletonDespotInstance = this
      EventEmitter.call(this)
    }
  }

  util.inherits(Despot, EventEmitter)

  return new Despot()
}

module.exports = makeDespot()
