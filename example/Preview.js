const React = require('react')

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.children = props.children
  }
  set (children = ``) {
    this.children = children
    this.forceUpdate()
  }
  render () {
    return (
      <div className='preview'>
        {this.children}
      </div>
    )
  }
}

export default Preview
