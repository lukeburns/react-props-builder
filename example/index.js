import './style.css'

const React = require('react')
const { Editor } = require('../')
const { Section, Form } = require('./components')
const { render } = require('react-dom')
const { pack, unpack } = require('react-pack-unpack')

const props = {
  title: 'beep boop'
}

const editor = React.createRef()
render(<Editor
  ref={editor}
  builders={{ Form }}
  noPalette={true}
  onLoad={({ appendNode }) => appendNode('Form', Form)}
  update={handleUpdate}>
  <button onClick={() => handleExport(editor.current.getState())}>Save</button>
</Editor>, document.body)

function handleUpdate (children) {
  const packed = pack(<main>
    {children}
  </main>)
  const Unpacked = unpack(packed, { Title: Section.Title })
  return <main>
    <pre>{packed}</pre>
    <pre>{Unpacked(props)}</pre>
  </main>
}

function handleExport (children) {
  const packed = pack(<main>
    {children}
  </main>)
  console.log(packed)
}
