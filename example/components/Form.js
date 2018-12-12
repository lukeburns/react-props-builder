import PropTypes from 'prop-types'
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

Form.widgets = {
  action: Widgets.InputWidget,
  children: Widgets.ComponentEditorWidget
}

export default Form
