import PropTypes from 'prop-types'

const Widgets = require('../widgets')

const Description = ({ WYSIWYGOutput }) => (
  WYSIWYGOutput
)

Description.propTypes = {
  WYSIWYGOutput: PropTypes.string
}

Description.Widgets = {
  WYSIWYGOutput: Widgets.WYSIWYGWidget
}

module.exports = Description
