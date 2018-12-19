const React = require('react')

class NodeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.name = this.props.type[0]
    this.component = this.props.type[1]
    this.getState = this.getState.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.widgets = objectMap(this.component.Widgets, (Widget, label) => {
      return (<Widget label={toTitleCase(label || ``)} type={this.component} ref={React.createRef()} onChange={this.handleChange} />)
    })
  }
  getState () {
    const keys = Object.keys(this.component.Widgets)
    const props = objectMap(this.widgets, widget => {
      return (widget.ref && widget.ref.current) ? widget.ref.current.getState() : null
    })
    return { component: this.component, props }
  }
  handleChange () {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getState())
    }
  }
  render () {
    return (
      <fieldset className='node-editor'>
        <legend>{toTitleCase(this.name) || `Node`}</legend>
        {Object.values(this.widgets)}
      </fieldset>
    )
  }
}

module.exports = NodeEditor

function toTitleCase (str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

function objectMap (object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key)
    return result
  }, {})
}
