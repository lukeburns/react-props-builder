import PropTypes from 'prop-types'

const React = require('react')
const Widgets = require('../widgets')

const DocumentAttach = ({ label }) => (
  <div>
    <input type='DocumentAttach' /> { label }
  </div>
)

DocumentAttach.propTypes = {
  label: PropTypes.string
}

DocumentAttach.Widgets = {
  label: Widgets.DocumentAttachWidget
}

module.exports = DocumentAttach
