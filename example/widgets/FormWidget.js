const React = require('react')

class FormWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      action: props.action || '',
      children: props.children || []
    }
  }
  getState () {
    return {
      action: this.state.action,
      children: this.state.children.map(child => child.getState())
    }
  }
  preview () {
    return (<Form {...this.state} />)
  }
  // exportJSX () {
  //   `<Form action={${this.state.action}} children={${})}`
  // }
  render () {
    return (
      <form>
        <input type='text' name='action' value={this.state.action} />
        {this.props.children}
      </form>
    )
  }
}

export default FormWidget
