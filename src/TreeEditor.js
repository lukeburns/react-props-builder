const React = require('react')
const NodeEditor = require('./NodeEditor')

class TreeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.types = props.types || []
    this.nodes = props.nodes || []
    this.handleChange = this.handleChange.bind(this)
    if (typeof props.onLoad === 'function') props.onLoad({ appendNode: this.appendNode.bind(this), getState: this.getState.bind(this) })
  }
  removeNode (node) {
    const i = this.nodes.indexOf(node)
    if (i > -1) {
      this.nodes.splice(i, 1)
      this.forceUpdate()
    }
  }
  moveNode (node, i) {
    const old = this.nodes.indexOf(node)
    if (old > -1) {
      array_move(this.nodes, old, i)
      this.forceUpdate()
    }
  }
  appendNode (node) {
    if (node.Widgets) {
      this.nodes.push((<NodeEditor type={node} ref={React.createRef()} onChange={this.handleChange} />))
      this.forceUpdate()
    }
  }
  getState () {
    return this.nodes.map(node => (node.ref && node.ref.current) ? node.ref.current.getState() : null)
  }
  handleChange () {
    if (this.props.onChange) {
      this.props.onChange(this.getState())
    }
  }
  render () {
    return (
      <fieldset className='tree-editor'>
        <legend>{this.props.label || `Editor`}</legend>
        <div className='palette'>
          {this.types.map(type => type ? (
            <button onClick={this.appendNode.bind(this, type)}>Add {type.name || type.toString()}</button>
          ) : ``)}
        </div>
        <div className='nodes'>
          {this.nodes}
        </div>
      </fieldset>
    )
  }
}

module.exports = TreeEditor

function array_move (arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr
}
