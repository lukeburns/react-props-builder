import PropTypes from 'prop-types'

const React = require('react')
const Widgets = require('../widgets')

const Option = ({ value }) => (
  <option value={ value }>{ value }</option>
)

Option.propTypes = {
  value: PropTypes.string
}

Option.Widgets = {
  value: Widgets.InputWidget
}

module.exports = Option
