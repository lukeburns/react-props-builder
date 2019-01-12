const React = require('react')
const NodeEditor = require('./NodeEditor')

import './style.css'

class TreeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.types = props.types || {}
    this.nodes = props.nodes || []
    this.getState = this.getState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount () {
    if (typeof this.props.onLoad === 'function') {
      this.props.onLoad({
        appendNode: this.appendNode.bind(this),
        getState: this.getState.bind(this)
      })
    }
  }
  removeNode (node) {
    const i = this.nodes.indexOf(node)
    if (i > -1) {
      this.nodes.splice(i, 1)
      this.handleChange()
      this.forceUpdate()
    }
  }
  // moveNode (node, i) {
  //   const old = this.nodes.indexOf(node)
  //   if (old > -1) {
  //     array_move(this.nodes, old, i)
  //     this.forceUpdate()
  //   }
  // }
  appendNode (label, builder) {
    if (builder.Widgets) {
      this.nodes.push((<NodeEditor label={label} builder={builder} ref={React.createRef()} onChange={this.handleChange} />))
      this.forceUpdate()
    }
  }
  getState () {
    const { hook = x => x } = this.props
    return hook(this.nodes.map(node => (node.ref && node.ref.current) ? node.ref.current.getState() : null))
  }
  getData () {
    return this.nodes.map(node => (node.ref && node.ref.current) ? node.ref.current.getData() : null)
  }
  handleChange () {
    if (this.props.onChange) {
      this.props.onChange(this.getState())
    }
  }
  render () {
    return (
      <fieldset className={'tree-editor' + (this.props.bare ? ' bare' : '')}>
        <legend>{this.props.label || `Editor`}</legend>
        <div className='palette'>
          {Object.keys(this.types).map(label => (
            <button onClick={this.appendNode.bind(this, label, this.types[label])}>Add {label}</button>
          ))}
        </div>
        <div className='nodes'>
          {this.nodes.map(node => (
            <div className='node'>
              {node}
              <button className='remove' onClick={this.removeNode.bind(this, node)}>×</button>
            </div>
          ))}
        </div>
        {this.props.children}
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
