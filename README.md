# component-editor

a react component that exposes a graphical interface for building react components from a palette of react components

```
npm i component-editor
```

## api

```js
const { Editor } = require('component-editor')
```

```js
<Editor
  builders={builders}
  update={handleUpdate}
  export={handleExport}
/>
```

instantiates an editor with `builders` as a palette. `handleUpdate` allows you to control the editor preview, and `handleExport` let's you to manage export.

run `npm start` and see the `example` directory for a working example that uses a number of builders and widgets.

#### builders

a builder is a react component along with specification of the widgets used to control its inputs. for instance,

```js
const Article = ({ title, body }) => (
  <article>
    <h1>{title}</h1>
    <p>{body}</h1>
  </article>
)
```

along with the widget configuration

```js
Article.Widgets = {
  title: InputWidget,
  body: TextAreaWidget
}
```

constitutes a builder.

#### widgets

widgets are react components with the following structure: (1) have a `getState` method and (2) call `props.onChange` when its state changes. for example, `InputWidget` used in the example above might be of the following form. `TextAreaWidget` is almost identical.

```js
class InputWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }
  getState () {
    return this.state.value
  }
  handleChange (event) {
    this.setState({ value: event.target.value }, function () {
      if (this.props.onChange) {
        this.props.onChange(this.getState())
      }
    })
  }
  render () {
    return (
      <input type='text' value={this.state.value} onChange={this.handleChange} placeholder={this.props.label} />
    )
  }
}
```

See `example` for more complex widgets.
