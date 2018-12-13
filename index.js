const React = require('react')

class TreeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.nodes = props.nodes || []
    this.handleChange = this.handleChange.bind(this)
    if (typeof props.onLoad === 'function') props.onLoad({ appendNode: this.appendNode.bind(this), getState: this.getState.bind(this) })
  }
  appendNode (node) {
    if (node.Widgets) {
      this.nodes.push((<NodeEditor type={node} ref={React.createRef()} onChange={this.handleChange} />))
    }
  }
  getState () {
    return this.nodes.map(node => (node.ref && node.ref.current) ? node.ref.current.getState() : null)
  }
  handleChange () {
    if (this.props.onChange) this.props.onChange(this.getState())
  }
  render (props) {
    return (
      <section className='tree-editor'>
        <div className='nodes'>
          {this.nodes}
        </div>
      </section>
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
      return (<Widget label={label} type={this.type} ref={React.createRef()} onChange={this.handleChange} />)
    })
  }
  getState () {
    const keys = Object.keys(this.type.Widgets)
    const props = objectMap(this.widgets, widget => (widget.ref && widget.ref.current) ? widget.ref.current.getState() : null)
    return { component: this.type, props }
  }
  handleChange () {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getState())
    }
  }
  render () {
    return (
      <div className='node-editor'>
        {Object.values(this.widgets)}
      </div>
    )
  }
}

module.exports = TreeEditor

function objectMap (object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key)
    return result
  }, {})
}
