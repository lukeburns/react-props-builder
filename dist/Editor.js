"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var React = require('react');

var TreeEditor = require('./TreeEditor');

var Preview = require('./Preview');

var Editor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, props));
    _this.previewRef = React.createRef();
    _this.treeRef = React.createRef();
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Editor, [{
    key: "getState",
    value: function getState() {
      if (this.treeRef.current) {
        return this.treeRef.current.getState();
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (this.props.update) {
        this.previewRef.current.set(this.props.update(this.getState()));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$builders = _this$props.builders,
          builders = _this$props$builders === void 0 ? {} : _this$props$builders,
          _this$props$onChange = _this$props.onChange,
          _onChange = _this$props$onChange === void 0 ? function () {} : _this$props$onChange,
          update = _this$props.update,
          label = _this$props.label,
          onLoad = _this$props.onLoad,
          noPalette = _this$props.noPalette;

      return React.createElement("main", null, React.createElement(TreeEditor, {
        label: label,
        ref: this.treeRef,
        types: builders,
        noPalette: noPalette,
        onLoad: onLoad,
        onChange: function onChange(state) {
          _onChange(state);

          if (update) {
            _this2.previewRef.current.set(update(state));
          }
        }
      }, this.props.children), update ? React.createElement(Preview, {
        ref: this.previewRef
      }) : "");
    }
  }]);

  return Editor;
}(React.Component);

module.exports = Editor;