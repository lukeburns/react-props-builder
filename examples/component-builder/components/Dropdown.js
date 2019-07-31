import PropTypes from 'prop-types'

const React = require('react')
const Option = require('./Option')
const { TreeEditor, withProps } = require('../../../')

const Dropdown = ({ options }) => (
  <select>
    {options}
  </select>
)

Dropdown.propTypes = {
  options: PropTypes.node
}

Dropdown.Widgets = {
  options: withProps(TreeEditor, { types: { Option } })
}

module.exports = Dropdown
