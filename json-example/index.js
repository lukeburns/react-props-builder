import './style.css'

const React = require('react')
const { Editor } = require('../')
const { Obj, Arr } = require('./ObjArr')
const { render } = require('react-dom')
const { pack, unpack } = require('react-pack-unpack')

let editor = React.createRef()
render(<Editor
  label={`JSON Editor`}
  ref={editor}
  builders={{ 'Array': Arr, 'Object': Obj }}
  update={handleUpdate}>
  <button onClick={() => handleExport(editor.current.getState())}>Save</button>
</Editor>, document.body)

function handleUpdate (output) {
  return <main>
    <pre>{JSON.stringify(output, null, 2)}</pre>
  </main>
}

function handleExport (output) {
  console.log(output)
}
