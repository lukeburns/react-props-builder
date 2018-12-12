const React = require('react')

class InputWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  getState () {
    return this.state
  }
  render () {
    return (
      <input type='text' value={this.state.value} />
    )
  }
}

export default InputWidget
