const React = require('react')

const withProps = (Wrapped, preset) => {
  class Wrapper extends React.Component {
    constructor (props) {
      super(props)
      this.getState = this.getState.bind(this)
      this.childRef = React.createRef()
      this.getState = this.getState.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    getState () {
      return this.childRef.current.getState()
    }
    handleChange () {
      if (this.props.onChange) {
        this.props.onChange(this.getState())
      }
    }
    render () {
      return (
        <Wrapped {...preset} {...this.props} onChange={this.handleChange} ref={this.childRef} />
      )
    }
  }
  return Wrapper
}

module.exports = withProps
