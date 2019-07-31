"use strict";

require("./style.css");

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

var NodeEditor = require('./NodeEditor');

var TreeEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TreeEditor, _React$Component);

  function TreeEditor(props) {
    var _this;

    _classCallCheck(this, TreeEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TreeEditor).call(this, props));
    _this.types = props.types || {};
    _this.nodes = props.nodes || [];
    _this.getState = _this.getState.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.componentDidMount = _this.componentDidMount.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(TreeEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof this.props.onLoad === 'function') {
        this.props.onLoad({
          appendNode: this.appendNode.bind(this),
          getState: this.getState.bind(this)
        });
      }
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var i = this.nodes.indexOf(node);

      if (i > -1) {
        this.nodes.splice(i, 1);
        this.handleChange();
        this.forceUpdate();
      }
    } // moveNode (node, i) {
    //   const old = this.nodes.indexOf(node)
    //   if (old > -1) {
    //     array_move(this.nodes, old, i)
    //     this.forceUpdate()
    //   }
    // }

  }, {
    key: "appendNode",
    value: function appendNode(label, builder) {
      if (builder.Widgets) {
        this.nodes.push(React.createElement(NodeEditor, {
          label: label,
          builder: builder,
          ref: React.createRef(),
          onChange: this.handleChange
        }));
        this.forceUpdate();
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      var _this$props$hook = this.props.hook,
          hook = _this$props$hook === void 0 ? function (x) {
        return x;
      } : _this$props$hook;
      return hook(this.nodes.map(function (node) {
        return node.ref && node.ref.current ? node.ref.current.getState() : null;
      }));
    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      if (this.props.onChange) {
        this.props.onChange(this.getState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement("fieldset", {
        className: 'tree-editor' + (this.props.bare || this.props.noPalette ? ' bare' : '')
      }, this.props.label ? React.createElement("legend", null, this.props.label) : "", this.props.noPalette ? "" : React.createElement("div", {
        className: "palette"
      }, Object.keys(this.types).map(function (label) {
        return React.createElement("button", {
          key: label,
          onClick: _this2.appendNode.bind(_this2, label, _this2.types[label])
        }, "Add ", label);
      })), React.createElement("div", {
        className: "nodes"
      }, this.nodes.map(function (node) {
        return React.createElement("div", {
          className: "node",
          key: node.ref
        }, node, React.createElement("button", {
          className: "remove",
          onClick: _this2.removeNode.bind(_this2, node)
        }, "\xD7"));
      })), this.props.children);
    }
  }]);

  return TreeEditor;
}(React.Component);

module.exports = TreeEditor;

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;

    while (k--) {
      arr.push(undefined);
    }
  }

  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}