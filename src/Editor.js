const React = require('react')
const TreeEditor = require('./TreeEditor')
const Preview = require('./Preview')

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.previewRef = React.createRef()
    this.treeRef = React.createRef()
  }
  getState () {
    if (this.treeRef.current) {
      return this.treeRef.current.getState()
    }
  }
  render () {
    let { types, onChange = () => {}, updatePreview = () => {} } = this.props
    return (
      <main>
        <TreeEditor
          export={this.props.export}
          ref={this.treeRef}
          types={types}
          onChange={state => {
            onChange(state)
            this.previewRef.current.set(
              updatePreview(state)
            )
          }}
        />
        <Preview ref={this.previewRef} />
      </main>
    )
  }
}

module.exports = Editor
