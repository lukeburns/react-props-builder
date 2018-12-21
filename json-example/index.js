import './style.css'

const React = require('react')
const { Editor } = require('../')
const { Obj, Arr } = require('./ObjArr')
const { render } = require('react-dom')
const { pack, unpack } = require('react-pack-unpack')

render(<Editor
  builders={{ 'Array': Arr, 'Object': Obj }}
  export={handleExport}
  update={handleUpdate} />, document.body)

function handleUpdate (output) {
  return <main>
    <pre>{JSON.stringify(output, null, 2)}</pre>
  </main>
}

function handleExport (output) {
  console.log(output)
}
