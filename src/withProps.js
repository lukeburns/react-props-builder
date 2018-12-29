const React = require('react')

const withProps = (Wrapped, presetProps) => {
  class Wrapper extends Wrapped {
    constructor (props) {
      super(Object.assign({}, props, presetProps))
    }
  }
  return Wrapper
}

module.exports = withProps
