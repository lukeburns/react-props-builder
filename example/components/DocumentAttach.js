import PropTypes from 'prop-types'

const React = require('react')
const Widgets = require('../widgets')

const DocumentAttach = ({ label }) => (
  <div class='download-box'>
    Click to download: { label.name }
  </div>
)

DocumentAttach.propTypes = {
  label: PropTypes.string
}

DocumentAttach.Widgets = {
  label: Widgets.DocumentAttachWidget
}

module.exports = DocumentAttach
