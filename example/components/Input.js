import PropTypes from 'prop-types'

const React = require('react')
const Widgets = require('../widgets')

const Input = ({ label }) => (
  <div>
    { label }
    <input type='text' name={label} />
  </div>
)

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

Input.Widgets = {
  label: Widgets.InputWidget
}

module.exports = Input
