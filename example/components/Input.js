import PropTypes from 'prop-types'
const React = require('react')
const Widgets = require('../widgets')

const Input = ({ label, name }) => (
  <input type='text' placeholder={label} name={name} />
)

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

Input.Widgets = {
  label: Widgets.InputWidget,
  name: Widgets.InputWidget
}

export default Input
