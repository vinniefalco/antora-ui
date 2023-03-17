'use strict'

module.exports = (name, value, options) => {
  if (typeof options.data.root !== 'object') {
    options.data.root = Object()
  }
  options.data.root[name] = value
}
