import PropTypes from 'prop-types'
const React = require('react')
const Widgets = require('../widgets')

const Form = ({ action, children }) => (
  <form action={action}>
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node
}

Form.Widgets = {
  action: Widgets.InputWidget,
  children: Widgets.TreeEditor
}

export default Form
