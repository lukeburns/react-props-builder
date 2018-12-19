import PropTypes from 'prop-types'

const React = require('react')
const Input = require('./Input')
const TextArea = require('./TextArea')
const Section = require('./Section')
const { InputWidget } = require('../widgets')
const { TreeEditor, withProps } = require('../../')

const Form = ({ action, children }) => (
  <form action={action}>
    <fieldset>
      {children.map(child => <div>{child}</div>)}
      <button>Submit</button>
    </fieldset>
  </form>
)

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node
}

Form.Widgets = {
  action: InputWidget,
<<<<<<< HEAD
  children: withProps(TreeEditor, { types: {Input, TextArea} })
=======
  children: withProps(TreeEditor, { types: [Input, TextArea] })
>>>>>>> 441439a1f86c8e1c6b626dfc97d14c91030b91a3
}

module.exports = Form
