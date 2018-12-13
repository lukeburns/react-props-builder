import PropTypes from 'prop-types'
import Section from './Section'
import Input from './Input'
import TextArea from './TextArea'

const React = require('react')
const Widgets = require('../widgets')
const TreeEditor = require('../../')

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

const withProps = TreeEditor.withProps
Form.Widgets = {
  action: Widgets.InputWidget,
  children: withProps(TreeEditor, { types: [Section, Input, TextArea]})
}

export default Form
