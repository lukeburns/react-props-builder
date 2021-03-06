import PropTypes from 'prop-types'

const React = require('react')
const Input = require('./Input')
const TextArea = require('./TextArea')
const Checkbox = require('./Checkbox')
const Dropdown = require('./Dropdown')
const { InputWidget } = require('../widgets')
const { TreeEditor, withProps } = require('../../../src')

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
  children: withProps(TreeEditor, { types: { Input, TextArea, Checkbox, Dropdown } })
}

module.exports = Form
