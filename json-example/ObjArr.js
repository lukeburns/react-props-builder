const React = require('react')
const { TreeEditor, withProps } = require('../')
const InputWidget = require('./InputWidget')
const WidgetSelector = require('./WidgetSelector')

// Arrays
const ArrElement = ({ element }) => element

const ArrWidget = withProps(TreeEditor, {
  types: { Element: ArrElement },
  bare: true
})

const Arr = ({ array }) => array

Arr.Widgets = {
  array: ArrWidget
}

// Objects

const ObjElement = ({ key = ``, value = `` }) => ({
  key,
  value
})

const ObjWidget = withProps(TreeEditor, {
  types: { Element: ObjElement },
  hook: elements => elements.reduce(function (obj, next) {
    obj[next.key] = next.value
    return obj
  }, {}),
  bare: true
})

const Obj = ({ object }) => object

Obj.Widgets = {
  object: ObjWidget
}

// Element Widgets

const ElementWidget = withProps(WidgetSelector, {
  options: {
    Value: InputWidget,
    Object: ObjWidget,
    Array: ArrWidget
  }
})

ObjElement.Widgets = {
  key: InputWidget,
  value: ElementWidget
}

ArrElement.Widgets = {
  element: ElementWidget
}

module.exports = {
  Obj,
  ObjElement,
  ObjWidget,
  Arr,
  ArrElement,
  ArrWidget,
  ElementWidget
}
