const React = require('react')
const TreeEditor = require('../')
const Preview = require('./Preview').default

const Editor = ({ types }, ref) => {
  const previewRef = React.createRef()
  return (
    <main>
      <TreeEditor
        ref={ref}
        types={types}
        onChange={state => {
          previewRef.current.set(run(state))
        }}
    />
      <Preview ref={previewRef} />
    </main>
  )
}

module.exports = Editor

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
