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

var NodeEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NodeEditor, _React$Component);

  function NodeEditor(props) {
    var _this;

    _classCallCheck(this, NodeEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeEditor).call(this, props));
    _this.label = _this.props.label;
    _this.builder = _this.props.builder;
    _this.getState = _this.getState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.widgets = objectMap(_this.builder.Widgets, function (Widget, label) {
      return React.createElement(Widget, {
        key: label,
        label: toTitleCase(label || ""),
        type: _this.builder,
        ref: React.createRef(),
        onChange: _this.handleChange
      });
    });
    return _this;
  }

  _createClass(NodeEditor, [{
    key: "getState",
    value: function getState() {
      var keys = Object.keys(this.builder.Widgets);
      var props = objectMap(this.widgets, function (widget) {
        return widget.ref && widget.ref.current ? widget.ref.current.getState() : null;
      });
      return this.builder(props);
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(this.getState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("fieldset", {
        className: "node-editor"
      }, React.createElement("legend", null, toTitleCase(this.label) || "Node"), Object.values(this.widgets));
    }
  }]);

  return NodeEditor;
}(React.Component);

module.exports = NodeEditor;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapFn(object[key], key);
    return result;
  }, {});
}