"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Planet = /*#__PURE__*/function (_React$Component) {
  _inherits(Planet, _React$Component);

  var _super = _createSuper(Planet);

  function Planet() {
    _classCallCheck(this, Planet);

    return _super.apply(this, arguments);
  }

  _createClass(Planet, [{
    key: "render",
    value: function render() {
      var app = {
        title: "Dünya",
        description: "Yuvarlak ve genel olarak mavi görünüme sahip",
        items: ['Hayvanlar', 'Bitkiler', 'İnsanlar', 'Mantarlar'],
        info: "Dünya nın sahip oldukları Şu şekildedir : "
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ListResult, {
        title: app.title,
        description: app.description,
        info: app.info
      }), /*#__PURE__*/React.createElement(ListWiew, {
        items: app.items
      }), /*#__PURE__*/React.createElement(Action, null));
    }
  }]);

  return Planet;
}(React.Component);

var ListResult = /*#__PURE__*/function (_React$Component2) {
  _inherits(ListResult, _React$Component2);

  var _super2 = _createSuper(ListResult);

  function ListResult() {
    _classCallCheck(this, ListResult);

    return _super2.apply(this, arguments);
  }

  _createClass(ListResult, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("div", null, this.props.description), /*#__PURE__*/React.createElement("div", null, this.props.info));
    }
  }]);

  return ListResult;
}(React.Component);

var ListItems = /*#__PURE__*/function (_React$Component3) {
  _inherits(ListItems, _React$Component3);

  var _super3 = _createSuper(ListItems);

  function ListItems() {
    _classCallCheck(this, ListItems);

    return _super3.apply(this, arguments);
  }

  _createClass(ListItems, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.item);
    }
  }]);

  return ListItems;
}(React.Component);

var ListWiew = /*#__PURE__*/function (_React$Component4) {
  _inherits(ListWiew, _React$Component4);

  var _super4 = _createSuper(ListWiew);

  function ListWiew(props) {
    var _this;

    _classCallCheck(this, ListWiew);

    _this = _super4.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ListWiew, [{
    key: "clearItems",
    value: function clearItems() {
      console.log(this.props.items);
      console.log('items cleared');
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(ListItems, {
          key: index,
          item: item
        });
      })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.clearItems
      }, "Listeyi Temizle")));
    }
  }]);

  return ListWiew;
}(React.Component);

var Action = /*#__PURE__*/function (_React$Component5) {
  _inherits(Action, _React$Component5);

  var _super5 = _createSuper(Action);

  function Action() {
    _classCallCheck(this, Action);

    return _super5.apply(this, arguments);
  }

  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();

      if (item) {
        console.log(item);
      } else {
        console.log("Bilgi girmediniz !");
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      })), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, " Bilgi Ekle ")));
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Planet, null), document.getElementById('screen'));
