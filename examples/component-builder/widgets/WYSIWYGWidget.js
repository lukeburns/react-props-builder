const { Editor, EditorState, RichUtils, getDefaultKeyBinding } = require('draft-js')
const { convertToHTML } = require('draft-convert')
const React = require('react')

class WYSIWYGWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.focus = () => this.refs.editor.focus()
    this.onChange = (editorState) => {
      this.setState({ editorState })
      this.props.onChange(this.getState())
    }
    this.handleKeyCommand = this._handleKeyCommand.bind(this)
    this.toggleBlockType = this._toggleBlockType.bind(this)
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this)
  }

  getState () {
    return convertToHTML(this.state.editorState.getCurrentContent())
  }

  _handleKeyCommand (command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }
  _toggleBlockType (blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    )
  }
  _toggleInlineStyle (inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    )
  }
  render () {
    const { editorState } = this.state
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor'
    var contentState = editorState.getCurrentContent()
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder'
      }
    }
    return (
      <div className='RichEditor-root'>
        <div className='RichEditor-controlContainer'>
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
        </div>
        <div className={className} onClick={this.focus}>
          <Editor
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder='Tell a story...'
            ref='editor'
            spellCheck
          />
        </div>
      </div>
    )
  }
}
class StyleButton extends React.Component {
  constructor () {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }
  render () {
    let className = 'RichEditor-styleButton'
    if (this.props.active) {
      className += ' RichEditor-activeButton'
    }
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    )
  }
}
const BLOCK_TYPES = [
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' }
]
const BlockStyleControls = (props) => {
  const { editorState } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()
  return (
    <div className='RichEditor-controls'>
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}
var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' }
]
const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className='RichEditor-controls'>
      {INLINE_STYLES.map((type) =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  )
}

export default WYSIWYGWidget
