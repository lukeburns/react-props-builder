import React from 'react'

class DocumentAttachWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit (e) {
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
      console.log('res[ data', response.data)
    })
  }
  onChange (e) {
    this.setState({ file: e.target.files[0] })
  }
  fileUpload (file) {
    // const url = 'http://example.com/file-upload'
    debugger;
    console.log('file ', file.value)
    const formData = new FormData()
    formData.append('file', file)
    console.log('formData ', formData)
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // }
    // return  post(url, formData,config)
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type='file' onChange={this.onChange} />
        <button type='submit'>Upload</button>
      </form>
    )
  }
}

export default DocumentAttachWidget
