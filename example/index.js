import './style.css'

const React = require('react')
const { Editor } = require('../')
const { Section, Form } = require('./components')
const { render } = require('react-dom')
const { pack, unpack } = require('react-pack-unpack')

const props = {
  title: 'beep boop'
}

render(<Editor
  export={handleExport}
  types={{ Section, Form }}
  updatePreview={children => {
    const packed = pack(<main>
      {children}
    </main>)
    const Unpacked = unpack(packed, { Title: Section.Title })
    return <main>
      <pre>{packed}</pre>
      <pre>{Unpacked(props)}</pre>
    </main>
  }} />, document.body)

function handleExport (children) {
  const packed = pack(<main>
    {children}
  </main>)
  console.log(packed)
}
