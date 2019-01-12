const React = require('react')
const TreeEditor = require('./TreeEditor')
const Preview = require('./Preview')

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.previewRef = React.createRef()
    this.treeRef = React.createRef()
    this.update = this.update.bind(this)
  }
  getState () {
    if (this.treeRef.current) {
      return this.treeRef.current.getState()
    }
  }
  update () {
    if (this.props.update) {
      this.previewRef.current.set(this.props.update(this.getState()))
    }
  }
  render () {
    let { builders = {}, onChange = () => {}, update, label } = this.props
    return (
      <main>
        <TreeEditor
          label={label}
          ref={this.treeRef}
          types={builders}
          onChange={state => {
            onChange(state)
            if (update) {
              this.previewRef.current.set(update(state))
            }
          }}>
          {this.props.children}
        </TreeEditor>
        {update ? <Preview ref={this.previewRef} /> : ``}
      </main>
    )
  }
}

module.exports = Editor
