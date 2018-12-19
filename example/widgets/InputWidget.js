const React = require('react')

class InputWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  getState () {
    return this.state.value
  }
  handleChange (event) {
    this.setState({ value: event.target.value }, function () {
      if (this.props.onChange) {
        this.props.onChange(this.getState())
      }
    })
  }
  render () {
    return (
      <input type='text' value={this.state.value} onChange={this.handleChange} placeholder={this.props.label} />
    )
  }
}

export default InputWidget
