# react-props-builder

run `npm start` to run the example

## example

```js
const React = require('react')
const { Editor } = require('../')
const { Section, Form } = require('./components')
const { render } = require('react-dom')

const SectionBuilder = ({ id, title, children }) => (
  <Section id={id}>
    <Title title={title}/>
    <Body>{children}</Body>
  </Section>
)

render(<Editor types={[SectionBuilder]} onChange={state => console.log(state)}/>), document.body)
```

## Widget Implementation

Widgets (1) need a `getState` method which returns the state and (2) need to call `props.onChange` every time state changes.
