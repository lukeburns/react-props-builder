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

Section.Widgets = {
  title: Widgets.InputWidget,
  children: Widgets.InputWidget
}

export default Section
