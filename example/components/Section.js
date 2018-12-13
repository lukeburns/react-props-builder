import PropTypes from 'prop-types'
import Form from './Form'
import Input from './Input'

const React = require('react')
const Widgets = require('../widgets')
const TreeEditor = require('../../')

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

const withProps = TreeEditor.withProps
Section.Widgets = {
  title: Widgets.InputWidget,
  children: withProps(TreeEditor, { types: [Section, Form]})
}

export default Section
