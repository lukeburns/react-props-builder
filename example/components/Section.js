import PropTypes from 'prop-types'
const React = require('react')
const Widgets = require('../widgets')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title = ``, children = [] }) => (
  <section>
    <Title title={title} />
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

const Form = require('./Form').default

const withProps = (Wrapped, preset) => {
  class Wrapper extends React.Component {
    constructor (props) {
      super(props)
      this.getState = this.getState.bind(this)
      this.childRef = React.createRef()
    }
    getState () {
      return this.childRef.current.getState()
    }
    render () {
      return (
        <Wrapped {...preset} {...this.props} ref={this.childRef} />
      )
    }
  }
  return Wrapper
} // withOnLoad() won't work because NodeEditor uses refs to getState from its children and withOnLoad doesn't have a getState method. Is there a smarter way to retrieve state?

Section.Widgets = {
  title: Widgets.InputWidget,
  children: withProps(Widgets.TreeEditor, { types: [Section, Form]})
}

export default Section
