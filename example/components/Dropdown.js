import PropTypes from 'prop-types'

const React = require('react')
const Option = require('./Option')
const { InputWidget } = require('../widgets')
const { TreeEditor, withProps } = require('../../')

const Dropdown = ({ label, options }) => (
  <div>
    {label}
    <select name={label}>
      {options}
    </select>
  </div>
)

Dropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.node
}

Dropdown.Widgets = {
  label: InputWidget,
  options: withProps(TreeEditor, { types: { Option } })
}

Dropdown.getData = function ({ label }) {
  return label
}

module.exports = Dropdown
