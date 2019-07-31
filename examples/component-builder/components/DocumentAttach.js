import PropTypes from 'prop-types'

const React = require('react')
const Widgets = require('../widgets')
const { withProps } = require('../../../src') 

const DocumentAttach = ({ label }) => (
  label.map(document => {
    return (<div class='download-box'>
      Click to download: { document.key }
    </div>)
  })
)

DocumentAttach.propTypes = {
  label: PropTypes.string
}

DocumentAttach.Widgets = {
  label: withProps(Widgets.DocumentAttachWidget, {
    onUpload: (file, setFiles, getFiles) => {
      setFiles([...getFiles(), file])
    },
    initState: (setFiles) => {
      console.log(setFiles)
      setFiles(
        [{
          'key': 'fakefile.png',
          'size': 100
        }]
      )
    }
  })
}

module.exports = DocumentAttach
