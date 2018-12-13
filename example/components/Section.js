import PropTypes from 'prop-types'
const React = require('react')
const Widgets = require('../widgets')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title = ``, children = [] }) => (
  <section>
    <Title title={title} />
    <div>{children}</div>
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

const Form = require('./Form').default
class TreeEditorWithForm extends Widgets.TreeEditor {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Widgets.TreeEditor {...this.props} onLoad={({ appendNode }) => {
        appendNode(Form)
      }} />
    )
  }
}

Section.Widgets = {
  title: Widgets.InputWidget,
  children: TreeEditorWithForm
}

export default Section
