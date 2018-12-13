const React = require('react')
const TreeEditor = require('../')
const Preview = require('./Preview')
const { Section, Form } = require('./components')
const { render } = require('react-dom')
const { renderToStaticMarkup } = require('react-dom/server')

render((
  <TreeEditor
    onLoad={({ appendNode, getState }) => {
      appendNode(Section)
    }}
    onChange={state => {
      console.log(renderToStaticMarkup(state[0].component(state[0].props)))
    }}
    />
), document.body)
