const React = require('react')
const TreeEditor = require('./TreeEditor')
const Preview = require('./Preview')

const Editor = ({ types, onChange = () => {}, updatePreview = () => {} }, ref) => {
  const previewRef = React.createRef()
  return (
    <main>
      <TreeEditor
        ref={ref}
        types={types}
        onChange={state => {
          onChange(state)
          previewRef.current.set(
            updatePreview(state)
          )
        }}
      />
      <Preview ref={previewRef} />
    </main>
  )
}

module.exports = Editor
