const React = require('react')

class WidgetSelector extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.options = objectMap(this.props.options || {}, (Widget, label) => {
      return (<Widget label={toTitleCase(label || ``)} type={this.builder} ref={React.createRef()} onChange={this.handleChange} />)
    })
    this.state = { selected: this.options[Object.keys(this.options)[0]] }
    this.handleSelector = this.handleSelector.bind(this)
  }
  getState () {
    return this.state.selected ? this.state.selected.ref.current.getState() : null
  }
  handleChange () {
    if (this.props.onChange) {
      this.props.onChange(this.getState())
    }
  }
  handleSelector (event) {
    const option = event.target.value
    this.setState({ selected: this.options[option] }, function () {
      if (this.props.onChange) {
        this.props.onChange(this.getState())
      }
    })
  }
  render () {
    return (
      <div>
        <select onChange={this.handleSelector}>
          {Object.keys(this.options).map(option => <option value={option}>{option}</option>)}
        </select>
        {this.state.selected}
      </div>
    )
  }
}

module.exports = WidgetSelector

function objectMap (object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key)
    return result
  }, {})
}

function toTitleCase (str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
