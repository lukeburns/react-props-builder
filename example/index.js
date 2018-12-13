const React = require('react')
const Editor = require('./Editor')
const { Section, Form } = require('./components')
const { render } = require('react-dom')
import './style.css'

render(Editor({
  types: [Section, Form]
}), document.body)
