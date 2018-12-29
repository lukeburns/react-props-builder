const React = require('react')

const withProps = (Wrapped, defaultProps) => {
  class Wrapper extends Wrapped {
    constructor (props) {
      super(props)
    }
  }
  Wrapper.defaultProps = defaultProps
  return Wrapper
}

module.exports = withProps
