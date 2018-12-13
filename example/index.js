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
        previewRef.current.set(run(state))
      }}
    />
    <hr />
    <h1>Preview:</h1>
    <Preview ref={previewRef} />
  </main>
), document.body)

function run (nodes = []) {
  return nodes.map(node => {
    return node.component(objectMap(node.props, prop => prop instanceof Array ? run(prop) : prop))
  })
}

function objectMap (object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key)
    return result
  }, {})
}
