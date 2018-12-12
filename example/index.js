const React = require('react')
const builder = require('../')
const { Section, Form } = require('./components')
const { ComponentEditorWidget, InputWidget, TextAreaWidget, FormWidget } = require('./widgets')
const { render } = require('react-dom')

const Editor = () => (
  <ComponentEditorWidget widgets={[Section, Form]}>
    <InputWidget title='Beep boop' />
    <FormWidget action='/submit'>
      <ComponentEditorWidget>
        <InputWidget value='Name' />
        <TextAreaWidget value='Hi there, I have a question...' />
      </ComponentEditorWidget>
    </FormWidget>
  </ComponentEditorWidget>
)

const editor = Editor()

render(Editor({}), document.body)
