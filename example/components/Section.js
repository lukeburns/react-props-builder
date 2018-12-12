import PropTypes from 'prop-types'
const Widgets = require('../widgets')

const Title = ({ title }) => <h1>{title}</h1>

const Section = ({ title, children }) => (
  <section>
    <Title title={title} />
    <div>{children}</div>
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Section.widgets = {
  title: Widgets.InputWidget,
  children: Widgets.ComponentEditorWidget
}

export default Section
