const React = require('react')
/*
[{ action: "/submit", children: [
  inputWidget,
  textareaWidget
] }]
*/
class TextAreaWidget extends React.Component {
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
      <textarea>{this.state.value}</textarea>
    )
  }
}

export default TextAreaWidget
