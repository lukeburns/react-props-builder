import PropTypes from 'prop-types'
const React = require('react')
const Widgets = require('../widgets')

const TextArea = ({ label, name }) => (
  <textarea placeholder={label} name={name} />
)

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

TextArea.Widgets = {
  label: Widgets.InputWidget,
  name: Widgets.InputWidget
}

export default TextArea
