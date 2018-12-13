const React = require('react')
const TreeEditor = require('../')
const Preview = require('./Preview').default
const { Section, Form } = require('./components')
const { render } = require('react-dom')

const previewRef = React.createRef()
render((
  <main>
    <TreeEditor
      onLoad={({ appendNode, getState }) => {
        appendNode(Section)
        appendNode(Form)
      }}
      onChange={state => {
        console.log(state)
        previewRef.current.set(state.map(node => node.component(node.props)))
      }}
    />
    <hr />
    <h1>Preview:</h1>
    <Preview ref={previewRef} />
  </main>
), document.body)
