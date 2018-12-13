const React = require('react')

class TreeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.types = props.types || []
    this.nodes = props.nodes || []
    this.handleChange = this.handleChange.bind(this)
    if (typeof props.onLoad === 'function') props.onLoad({ appendNode: this.appendNode.bind(this), getState: this.getState.bind(this) })
  }
  appendNode (node) {
    if (node.Widgets) {
      this.nodes.push((<NodeEditor type={node} ref={React.createRef()} onChange={this.handleChange} />))
      this.forceUpdate()
    }
  }
  getState () {
    let state = this.nodes.map(node => (node.ref && node.ref.current) ? node.ref.current.getState() : null)
    return state
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
          {this.types.map(type => (
            <button onClick={this.appendNode.bind(this, type)}>Add {type.name}</button>
          ))}
        </div>
        <div className='nodes'>
          {this.nodes}
        </div>
      </fieldset>
    )
  }
}

class NodeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.type = this.props.type
    this.getState = this.getState.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.widgets = objectMap(this.type.Widgets, (Widget, label) => {
      return (<Widget label={toTitleCase(label || ``)} type={this.type} ref={React.createRef()} onChange={this.handleChange} />)
    })
  }
  getState () {
    const keys = Object.keys(this.type.Widgets)
    const props = objectMap(this.widgets, widget => {
      return (widget.ref && widget.ref.current) ? widget.ref.current.getState() : null
    })
    return { component: this.type, props }
  }
  handleChange () {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getState())
    }
  }
  render () {
    return (
      <fieldset className='node-editor'>
        <legend>{toTitleCase((this.props.type || {}).name) || `Node`}</legend>
        {Object.values(this.widgets)}
      </fieldset>
    )
  }
}

module.exports = TreeEditor

function toTitleCase (str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

function objectMap (object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key)
    return result
  }, {})
}
