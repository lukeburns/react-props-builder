import PropTypes from 'prop-types'

const React = require('react')
const Widgets = require('../widgets')

const Checkbox = ({ label }) => (
  <div>
    <input type='checkbox' /> { label }
  </div>
)

Checkbox.propTypes = {
  label: PropTypes.string
}

Checkbox.Widgets = {
  label: Widgets.InputWidget
}

module.exports = Checkbox
