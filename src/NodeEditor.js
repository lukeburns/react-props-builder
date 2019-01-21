const React = require('react')

class NodeEditor extends React.Component {
  constructor (props) {
    super(props)
    this.label = this.props.label
    this.builder = this.props.builder
    this.getState = this.getState.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.widgets = objectMap(this.builder.Widgets, (Widget, label) => {
      return (<Widget key={label} label={toTitleCase(label || ``)} type={this.builder} ref={React.createRef()} onChange={this.handleChange} />)
    })
  }
  getState () {
    const props = objectMap(this.widgets, widget => {
      return (widget.ref && widget.ref.current) ? widget.ref.current.getState() : null
    })
    return this.builder(props)
  }
  getData () {
    const data = objectMap(this.widgets, widget => {
      return (widget.ref && widget.ref.current) ? widget.ref.current.getData() : null
    })
    return this.builder.getData ? this.builder.getData(data) : data
  }
  handleChange () {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.getState())
    }
  }
  render () {
    return (
      <fieldset className='node-editor'>
        <legend>{toTitleCase(this.label) || `Node`}</legend>
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
