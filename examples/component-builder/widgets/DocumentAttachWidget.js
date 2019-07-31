import React from 'react'
import FileBrowser from 'react-keyed-file-browser'
import PropTypes from 'prop-types'

class DocumentAttachWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      files: []
    }
    props.initState(files => {
      this.state.files = files
    })
    this.handleChange = this.handleChange.bind(this)
  }
  getState () {
    return this.state.files
  }
  handleChange (event) {
    console.log(event.target.files[0])
    let file = event.target.files[0]
    this.props.onUpload({
      key: file.name,
      size: file.size,
      lastModifiedDate: file.lastModified
    }, files => {
      this.setState({ files })
      if (this.props.onChange) {
        this.props.onChange(this.getState())
      }
    }, this.getState.bind(this))
  }
  render () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='file' onChange={this.handleChange} />
        </form>
        <FileBrowser
          files={this.state.files}
        />
      </div>
    )
  }
}

DocumentAttachWidget.propTypes = {
  initState: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired
}

export default DocumentAttachWidget
