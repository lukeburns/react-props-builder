const React = require('react')

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.children = objectMap(this.props.children, Child => {
      return (<Child ref={React.createRef()} onChange={this.handleChange} />)
    })
    this.state = []
  }
  handleChange (state) {
    // this.setState(state)
  }
  render () {
    return (
      <div className='preview'>
        {this.props.children}
        {/* <div className='viewer'>
          {this.state.map(({ View, props }) => (<View {...props} />))}
        </div> */}
      </div>
    )
  }
}

export default Preview
