import './style.css'

const React = require('react')
const { render } = require('react-dom')
const { Editor } = require('../')
const { Section, Form } = require('./components')
const { pack, unpack } = require('react-pack-unpack')

const props = {
  title: 'beep boop'
}

render(<Editor 
  types={{ Section, Form }}
  updatePreview={output => {
    const packed = pack(<main>
      {output}
    </main>)
    
    const Unpacked = unpack(packed, { Title: Section.Title })

    return <main>
      <pre>{packed}</pre>
      <pre>{Unpacked(props)}</pre>
      <pre>{JSON.stringify(props)}</pre>
      <button onClick={save.bind(this, packed)}>Save</button>
    </main>
  }}/>
), document.body)

function save (packed) {
  saveToDb(packed)
}