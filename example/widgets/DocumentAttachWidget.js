import React from 'react'

class DocumentAttachWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  getState () {
    return this.state.file
  }
  handleChange (event) {
    this.setState({ file: event.target.files[0] }, function () {
      if (this.props.onChange) {
        this.props.onChange(this.getState())
      }
    })
  }
  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='file' onChange={this.handleChange} />
      </form>
    )
  }
}

export default DocumentAttachWidget
