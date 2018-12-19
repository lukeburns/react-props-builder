import './style.css'

const React = require('react')
const { Editor } = require('../')
const { Section, Form } = require('./components')
const { render } = require('react-dom')
const { pack, unpack } = require('react-pack-unpack')

const props = {
  title: 'beep boop'
}

render(Editor({
  types: { Section, Form },
  updatePreview: state => {
    const packed = pack(<main>
      {toChildren(state)}
    </main>)
    const Unpacked = unpack(packed, { Title: Section.Title })

    return <main>
      <pre>{packed}</pre>
      <pre>{Unpacked(props)}</pre>
    </main>
  }
}), document.body)

function toChildren (nodes = []) {
  return nodes.map(node => {
    return node.component(objectMap(node.props, prop => prop instanceof Array ? toChildren(prop) : prop))
  })
}

function objectMap (object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key)
    return result
  }, {})
}
