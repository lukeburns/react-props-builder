const React = require('react')

class ComponentEditorWidget extends React.Component {
  constructor (props) {
    super(props)
    this.widgets = props.children || []
  }
  getState () {
    this.widgets.map(widget => {
      return widget.getState()
    })
  }
  render () {
    return (<form className='component-editor'>
      { this.widgets }
      <button>Save</button>
    </form>)
  }
}

export default ComponentEditorWidget
