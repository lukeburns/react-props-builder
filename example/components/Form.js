import PropTypes from 'prop-types'
const React = require('react')
const Widgets = require('../widgets')

const Form = ({ action, children }) => (
  <form action={action}>
    <p>{children}</p>
    <button>Submit</button>
  </form>
)

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node
}

Form.Widgets = {
  action: Widgets.InputWidget,
  children: Widgets.InputWidget
}

export default Form
