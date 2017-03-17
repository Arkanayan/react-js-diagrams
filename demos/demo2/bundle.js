(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("lodash"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "_", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["storm-react-diagrams"] = factory(require("React"), require("lodash"), require("ReactDOM"));
	else
		root["storm-react-diagrams"] = factory(root["React"], root["_"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* unused harmony export BaseModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PointModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PortModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NodeModel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @author Dylan Vorster
 */
var BaseModel = function (_BaseEntity) {
	_inherits(BaseModel, _BaseEntity);

	function BaseModel() {
		_classCallCheck(this, BaseModel);

		var _this = _possibleConstructorReturn(this, (BaseModel.__proto__ || Object.getPrototypeOf(BaseModel)).call(this));

		_this.selected = false;
		return _this;
	}

	_createClass(BaseModel, [{
		key: "deSerialize",
		value: function deSerialize(ob) {
			_get(BaseModel.prototype.__proto__ || Object.getPrototypeOf(BaseModel.prototype), "deSerialize", this).call(this, ob);
			this.selected = ob.selected;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(BaseModel.prototype.__proto__ || Object.getPrototypeOf(BaseModel.prototype), "serialize", this).call(this), {
				_class: this.constructor.name,
				selected: this.selected
			});
		}
	}, {
		key: "getID",
		value: function getID() {
			return this.id;
		}
	}, {
		key: "isSelected",
		value: function isSelected() {
			return this.selected;
		}
	}, {
		key: "setSelected",
		value: function setSelected(selected) {
			this.selected = selected;

			this.itterateListeners(function (listener) {
				if (listener.selectionChanged) {
					listener.selectionChanged();
				}
			});
		}
	}, {
		key: "remove",
		value: function remove() {
			this.itterateListeners(function (listener) {
				if (listener.entityRemoved) {
					listener.entityRemoved();
				}
			});
		}
	}]);

	return BaseModel;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity__["a" /* BaseEntity */]);

var PointModel = function (_BaseModel) {
	_inherits(PointModel, _BaseModel);

	function PointModel(link, points) {
		_classCallCheck(this, PointModel);

		var _this2 = _possibleConstructorReturn(this, (PointModel.__proto__ || Object.getPrototypeOf(PointModel)).call(this));

		_this2.x = points.x;
		_this2.y = points.y;
		_this2.link = link;
		return _this2;
	}

	_createClass(PointModel, [{
		key: "deSerialize",
		value: function deSerialize(ob) {
			_get(PointModel.prototype.__proto__ || Object.getPrototypeOf(PointModel.prototype), "deSerialize", this).call(this, ob);
			this.x = ob.x;
			this.y = ob.y;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(PointModel.prototype.__proto__ || Object.getPrototypeOf(PointModel.prototype), "serialize", this).call(this), {
				x: this.x,
				y: this.y
			});
		}
	}, {
		key: "remove",
		value: function remove() {
			_get(PointModel.prototype.__proto__ || Object.getPrototypeOf(PointModel.prototype), "remove", this).call(this);

			//clear references
			if (this.link) {
				this.link.removePoint(this);
			}
		}
	}, {
		key: "updateLocation",
		value: function updateLocation(points) {
			this.x = points.x;
			this.y = points.y;
		}
	}, {
		key: "getX",
		value: function getX() {
			return this.x;
		}
	}, {
		key: "getY",
		value: function getY() {
			return this.y;
		}
	}, {
		key: "getLink",
		value: function getLink() {
			return this.link;
		}
	}]);

	return PointModel;
}(BaseModel);

var LinkModel = function (_BaseModel2) {
	_inherits(LinkModel, _BaseModel2);

	function LinkModel() {
		_classCallCheck(this, LinkModel);

		var _this3 = _possibleConstructorReturn(this, (LinkModel.__proto__ || Object.getPrototypeOf(LinkModel)).call(this));

		_this3.linkType = 'default';
		_this3.points = [new PointModel(_this3, { x: 0, y: 0 }), new PointModel(_this3, { x: 0, y: 0 })];
		_this3.extras = {};
		_this3.sourcePort = null;
		_this3.targetPort = null;
		return _this3;
	}

	_createClass(LinkModel, [{
		key: "deSerialize",
		value: function deSerialize(ob) {
			var _this4 = this;

			_get(LinkModel.prototype.__proto__ || Object.getPrototypeOf(LinkModel.prototype), "deSerialize", this).call(this, ob);
			this.linkType = ob.type;
			this.points = __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](ob.points, function (point) {
				var p = new PointModel(_this4, { x: point.x, y: point.y });
				p.deSerialize(point);
				return p;
			});
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(LinkModel.prototype.__proto__ || Object.getPrototypeOf(LinkModel.prototype), "serialize", this).call(this), {
				type: this.linkType,
				source: this.sourcePort ? this.sourcePort.getParent().id : null,
				sourcePort: this.sourcePort ? this.sourcePort.id : null,
				target: this.targetPort ? this.targetPort.getParent().id : null,
				targetPort: this.targetPort ? this.targetPort.id : null,
				points: __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.points, function (point) {
					return point.serialize();
				}),
				extras: this.extras
			});
		}
	}, {
		key: "remove",
		value: function remove() {
			_get(LinkModel.prototype.__proto__ || Object.getPrototypeOf(LinkModel.prototype), "remove", this).call(this);
			if (this.sourcePort) {
				this.sourcePort.removeLink(this);
			}
			if (this.targetPort) {
				this.targetPort.removeLink(this);
			}
		}
	}, {
		key: "isLastPoint",
		value: function isLastPoint(point) {
			var index = this.getPointIndex(point);
			return index === this.points.length - 1;
		}
	}, {
		key: "getPointIndex",
		value: function getPointIndex(point) {
			return this.points.indexOf(point);
		}
	}, {
		key: "getPointModel",
		value: function getPointModel(id) {
			for (var i = 0; i < this.points.length; i++) {
				if (this.points[i].id === id) {
					return this.points[i];
				}
			}
			return null;
		}
	}, {
		key: "getFirstPoint",
		value: function getFirstPoint() {
			return this.points[0];
		}
	}, {
		key: "getLastPoint",
		value: function getLastPoint() {
			return this.points[this.points.length - 1];
		}
	}, {
		key: "setSourcePort",
		value: function setSourcePort(port) {
			port.addLink(this);
			this.sourcePort = port;
		}
	}, {
		key: "getSourcePort",
		value: function getSourcePort() {
			return this.sourcePort;
		}
	}, {
		key: "getTargetPort",
		value: function getTargetPort() {
			return this.targetPort;
		}
	}, {
		key: "setTargetPort",
		value: function setTargetPort(port) {
			port.addLink(this);
			this.targetPort = port;
		}
	}, {
		key: "getPoints",
		value: function getPoints() {
			return this.points;
		}
	}, {
		key: "setPoints",
		value: function setPoints(points) {
			this.points = points;
		}
	}, {
		key: "removePoint",
		value: function removePoint(pointModel) {
			this.points.splice(this.getPointIndex(pointModel), 1);
		}
	}, {
		key: "addPoint",
		value: function addPoint(pointModel) {
			var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

			this.points.splice(index, 0, pointModel);
		}
	}, {
		key: "getType",
		value: function getType() {
			return this.linkType;
		}
	}]);

	return LinkModel;
}(BaseModel);

var PortModel = function (_BaseModel3) {
	_inherits(PortModel, _BaseModel3);

	function PortModel(name) {
		_classCallCheck(this, PortModel);

		var _this5 = _possibleConstructorReturn(this, (PortModel.__proto__ || Object.getPrototypeOf(PortModel)).call(this));

		_this5.name = name;
		_this5.links = {};
		_this5.parentNode = null;
		return _this5;
	}

	_createClass(PortModel, [{
		key: "deSerialize",
		value: function deSerialize(ob) {
			_get(PortModel.prototype.__proto__ || Object.getPrototypeOf(PortModel.prototype), "deSerialize", this).call(this, ob);
			this.name = ob.name;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(PortModel.prototype.__proto__ || Object.getPrototypeOf(PortModel.prototype), "serialize", this).call(this), {
				name: this.name,
				parentNode: this.parentNode.id,
				links: __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.links, function (link) {
					return link.id;
				})
			});
		}
	}, {
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "getParent",
		value: function getParent() {
			return this.parentNode;
		}
	}, {
		key: "setParentNode",
		value: function setParentNode(node) {
			this.parentNode = node;
		}
	}, {
		key: "removeLink",
		value: function removeLink(link) {
			delete this.links[link.getID()];
		}
	}, {
		key: "addLink",
		value: function addLink(link) {
			this.links[link.getID()] = link;
		}
	}, {
		key: "getLinks",
		value: function getLinks() {
			return this.links;
		}
	}]);

	return PortModel;
}(BaseModel);

var NodeModel = function (_BaseModel4) {
	_inherits(NodeModel, _BaseModel4);

	function NodeModel() {
		var nodeType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

		_classCallCheck(this, NodeModel);

		var _this6 = _possibleConstructorReturn(this, (NodeModel.__proto__ || Object.getPrototypeOf(NodeModel)).call(this));

		_this6.nodeType = nodeType;
		_this6.x = 0;
		_this6.y = 0;
		_this6.extras = {};
		_this6.ports = {};
		return _this6;
	}

	_createClass(NodeModel, [{
		key: "deSerialize",
		value: function deSerialize(ob) {
			_get(NodeModel.prototype.__proto__ || Object.getPrototypeOf(NodeModel.prototype), "deSerialize", this).call(this, ob);
			this.nodeType = ob.type;
			this.x = ob.x;
			this.y = ob.y;
			this.extras = ob.extras;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(NodeModel.prototype.__proto__ || Object.getPrototypeOf(NodeModel.prototype), "serialize", this).call(this), {
				type: this.nodeType,
				x: this.x,
				y: this.y,
				extras: this.extras,
				ports: __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.ports, function (port) {
					return port.serialize();
				})
			});
		}
	}, {
		key: "remove",
		value: function remove() {
			_get(NodeModel.prototype.__proto__ || Object.getPrototypeOf(NodeModel.prototype), "remove", this).call(this);
			for (var i in this.ports) {
				__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](this.ports[i].getLinks(), function (link) {
					link.remove();
				});
			}
		}
	}, {
		key: "getPortFromID",
		value: function getPortFromID(id) {
			for (var i in this.ports) {
				if (this.ports[i].id === id) {
					return this.ports[i];
				}
			}
			return null;
		}
	}, {
		key: "getPort",
		value: function getPort(name) {
			return this.ports[name];
		}
	}, {
		key: "getPorts",
		value: function getPorts() {
			return this.ports;
		}
	}, {
		key: "removePort",
		value: function removePort(port) {
			//clear the parent node reference
			if (this.ports[port.name]) {
				this.ports[port.name].setParentNode(null);
				delete this.ports[port.name];
			}
		}
	}, {
		key: "addPort",
		value: function addPort(port) {
			port.setParentNode(this);
			this.ports[port.name] = port;
			return port;
		}
	}, {
		key: "getType",
		value: function getType() {
			return this.nodeType;
		}
	}]);

	return NodeModel;
}(BaseModel);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Toolkit__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseEntity; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BaseEntity = function () {
	function BaseEntity() {
		_classCallCheck(this, BaseEntity);

		this.listeners = {};
		this.id = __WEBPACK_IMPORTED_MODULE_0__Toolkit__["a" /* Toolkit */].UID();
	}

	_createClass(BaseEntity, [{
		key: "getID",
		value: function getID() {
			return this.id;
		}
	}, {
		key: "clearListeners",
		value: function clearListeners() {
			this.listeners = {};
		}
	}, {
		key: "deSerialize",
		value: function deSerialize(data) {
			this.id = data.id;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return {
				id: this.id
			};
		}
	}, {
		key: "itterateListeners",
		value: function itterateListeners(cb) {
			for (var i in this.listeners) {
				cb(this.listeners[i]);
			}
		}
	}, {
		key: "removeListener",
		value: function removeListener(listener) {
			if (this.listeners[listener]) {
				delete this.listeners[listener];
				return true;
			}
			return false;
		}
	}, {
		key: "addListener",
		value: function addListener(listener) {
			var uid = __WEBPACK_IMPORTED_MODULE_0__Toolkit__["a" /* Toolkit */].UID();
			this.listeners[uid] = listener;
			return uid;
		}
	}]);

	return BaseEntity;
}();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseEntity__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractInstanceFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


/**
 * @author Dylan Vorster
 */
var AbstractInstanceFactory = function (_BaseEntity) {
	_inherits(AbstractInstanceFactory, _BaseEntity);

	function AbstractInstanceFactory(className) {
		_classCallCheck(this, AbstractInstanceFactory);

		var _this = _possibleConstructorReturn(this, (AbstractInstanceFactory.__proto__ || Object.getPrototypeOf(AbstractInstanceFactory)).call(this, className));

		_this.className = className;
		return _this;
	}

	_createClass(AbstractInstanceFactory, [{
		key: "getName",
		value: function getName() {
			return this.className;
		}
	}]);

	return AbstractInstanceFactory;
}(__WEBPACK_IMPORTED_MODULE_0__BaseEntity__["a" /* BaseEntity */]);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults_DefaultLinkFactory__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__defaults_DefaultLinkFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_DefaultLinkWidget__ = __webpack_require__(7);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_DefaultNodeFactory__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__defaults_DefaultNodeFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaults_DefaultNodeWidget__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaults_DefaultNodeModel__ = __webpack_require__(23);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__defaults_DefaultNodeModel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__defaults_DefaultNodeModel__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaults_DefaultPortModel__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__defaults_DefaultPortModel__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__defaults_DefaultPortModel__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__defaults_DefaultPortLabelWidget__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__WidgetFactories__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_7__WidgetFactories__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Toolkit__ = __webpack_require__(10);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DiagramEngine__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__DiagramEngine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DiagramModel__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__DiagramModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__BaseEntity__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Common__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_12__Common__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_12__Common__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_12__Common__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AbstractInstanceFactory__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_13__AbstractInstanceFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__LinkInstanceFactory__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_14__LinkInstanceFactory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__widgets_DiagramWidget__ = __webpack_require__(25);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_15__widgets_DiagramWidget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__widgets_LinkLayerWidget__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__widgets_LinkWidget__ = __webpack_require__(13);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__widgets_NodeLayerWidget__ = __webpack_require__(14);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__widgets_NodeWidget__ = __webpack_require__(15);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__widgets_PortWidget__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_20__widgets_PortWidget__["a"]; });
/**
 * @author Dylan Vorster
 */

//export defaults

























/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaults_DefaultNodeWidget__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaults_DefaultLinkWidget__ = __webpack_require__(7);
/* unused harmony export WidgetFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeWidgetFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LinkWidgetFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var WidgetFactory = function () {
	function WidgetFactory(name) {
		_classCallCheck(this, WidgetFactory);

		this.type = name;
	}

	_createClass(WidgetFactory, [{
		key: 'getType',
		value: function getType() {
			return this.type;
		}
	}]);

	return WidgetFactory;
}();

var NodeWidgetFactory = function (_WidgetFactory) {
	_inherits(NodeWidgetFactory, _WidgetFactory);

	function NodeWidgetFactory() {
		_classCallCheck(this, NodeWidgetFactory);

		return _possibleConstructorReturn(this, (NodeWidgetFactory.__proto__ || Object.getPrototypeOf(NodeWidgetFactory)).apply(this, arguments));
	}

	_createClass(NodeWidgetFactory, [{
		key: 'generateReactWidget',
		value: function generateReactWidget(diagramEngine, node) {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__defaults_DefaultNodeWidget__["a" /* DefaultNodeWidget */], {
				node: node,
				diagramEngine: diagramEngine
			});
		}
	}]);

	return NodeWidgetFactory;
}(WidgetFactory);

var LinkWidgetFactory = function (_WidgetFactory2) {
	_inherits(LinkWidgetFactory, _WidgetFactory2);

	function LinkWidgetFactory() {
		_classCallCheck(this, LinkWidgetFactory);

		return _possibleConstructorReturn(this, (LinkWidgetFactory.__proto__ || Object.getPrototypeOf(LinkWidgetFactory)).apply(this, arguments));
	}

	_createClass(LinkWidgetFactory, [{
		key: 'generateReactWidget',
		value: function generateReactWidget(diagramEngine, link) {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__defaults_DefaultLinkWidget__["a" /* DefaultLinkWidget */], {
				link: link,
				diagramEngine: diagramEngine
			});
		}
	}]);

	return LinkWidgetFactory;
}(WidgetFactory);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLinkWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * @author Dylan Vorster
 */
var DefaultLinkWidget = function (_React$Component) {
	_inherits(DefaultLinkWidget, _React$Component);

	function DefaultLinkWidget(props) {
		_classCallCheck(this, DefaultLinkWidget);

		var _this = _possibleConstructorReturn(this, (DefaultLinkWidget.__proto__ || Object.getPrototypeOf(DefaultLinkWidget)).call(this, props));

		_this.state = {
			selected: false
		};
		return _this;
	}

	_createClass(DefaultLinkWidget, [{
		key: "generatePoint",
		value: function generatePoint(pointIndex) {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].g({ key: 'point-' + this.props.link.points[pointIndex].id }, __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].circle({
				className: 'point pointui' + (this.props.link.points[pointIndex].isSelected() ? ' selected' : ''),
				cx: this.props.link.points[pointIndex].x,
				cy: this.props.link.points[pointIndex].y,
				r: 5
			}), __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].circle({
				className: 'point',
				'data-linkid': this.props.link.id,
				'data-id': this.props.link.points[pointIndex].id,
				cx: this.props.link.points[pointIndex].x,
				cy: this.props.link.points[pointIndex].y,
				r: 15,
				opacity: 0,
				onMouseLeave: function onMouseLeave() {
					_this2.setState({ selected: false });
					//				this.props.link.setSelected(false);
				},
				onMouseEnter: function onMouseEnter() {
					_this2.setState({ selected: true });
					//				this.props.link.setSelected(true);
				}
			}));
		}
	}, {
		key: "generateLink",
		value: function generateLink(extraProps) {
			var _this3 = this;

			var Bottom = __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].path(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"]({
				className: this.state.selected || this.props.link.isSelected() ? 'selected' : '',
				strokeWidth: this.props.width,
				stroke: this.props.color
			}, extraProps));

			var Top = __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].path(__WEBPACK_IMPORTED_MODULE_2_lodash__["merge"]({
				strokeLinecap: 'round',
				onMouseLeave: function onMouseLeave() {
					_this3.setState({ selected: false });
				},
				onMouseEnter: function onMouseEnter() {
					_this3.setState({ selected: true });
				},
				'data-linkid': this.props.link.getID(),
				stroke: this.props.color,
				strokeOpacity: this.state.selected ? 0.1 : 0,
				strokeWidth: 20,
				onContextMenu: function onContextMenu(event) {
					event.preventDefault();
					_this3.props.link.remove();
				}
			}, extraProps));

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].g({ key: 'link-' + extraProps.id }, Bottom, Top);
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			//ensure id is present for all points on the path
			var points = this.props.link.points;
			var paths = [];

			//draw the smoothing
			if (points.length === 2) {

				//if the points are too close, just draw a straight line
				var margin = 50;
				if (Math.abs(points[0].x - points[1].x) < 50) {
					margin = 5;
				}

				var pointLeft = points[0];
				var pointRight = points[1];

				//some defensive programming to make sure the smoothing is
				//always in the right direction
				if (pointLeft.x > pointRight.x) {
					pointLeft = points[1];
					pointRight = points[0];
				}

				paths.push(this.generateLink({
					id: 0,
					onMouseDown: function onMouseDown(event) {
						if (!event.shiftKey) {
							var point = new __WEBPACK_IMPORTED_MODULE_1__Common__["d" /* PointModel */](_this4.props.link, _this4.props.diagramEngine.getRelativeMousePoint(event));
							point.setSelected(true);
							_this4.forceUpdate();
							_this4.props.link.addPoint(point, 1);
							_this4.props.pointAdded(point, event);
						}
					},
					d: " M" + pointLeft.x + " " + pointLeft.y + " C" + (pointLeft.x + margin) + " " + pointLeft.y + " " + (pointRight.x - margin) + " " + pointRight.y + " " + pointRight.x + " " + pointRight.y
				}));
				if (this.props.link.targetPort === null) {
					paths.push(this.generatePoint(1));
				}
			}

			//draw the multiple anchors and complex line instead
			else {
					var ds = [];
					if (this.props.smooth) {
						ds.push(" M" + points[0].x + " " + points[0].y + " C " + (points[0].x + 50) + " " + points[0].y + " " + points[1].x + " " + points[1].y + " " + points[1].x + " " + points[1].y);
						for (var i = 1; i < points.length - 2; i++) {
							ds.push(" M " + points[i].x + " " + points[i].y + " L " + points[i + 1].x + " " + points[i + 1].y);
						}
						ds.push(" M" + points[i].x + " " + points[i].y + " C " + points[i].x + " " + points[i].y + " " + (points[i + 1].x - 50) + " " + points[i + 1].y + " " + points[i + 1].x + " " + points[i + 1].y);
					} else {
						var ds = [];
						for (var i = 0; i < points.length - 1; i++) {
							ds.push(" M " + points[i].x + " " + points[i].y + " L " + points[i + 1].x + " " + points[i + 1].y);
						}
					}

					paths = ds.map(function (data, index) {
						return _this4.generateLink({
							id: index,
							'data-linkid': _this4.props.link.id,
							'data-point': index,
							onMouseDown: function onMouseDown(event) {
								if (!event.shiftKey) {
									var point = new __WEBPACK_IMPORTED_MODULE_1__Common__["d" /* PointModel */](_this4.props.link, _this4.props.diagramEngine.getRelativeMousePoint(event));
									point.setSelected(true);
									_this4.forceUpdate();
									_this4.props.link.addPoint(point, index + 1);
									_this4.props.pointAdded(point, event);
								}
							},
							d: data
						});
					});

					//render the circles
					for (var i = 1; i < points.length - 1; i++) {
						paths.push(this.generatePoint(i));
					}

					if (this.props.link.targetPort === null) {
						paths.push(this.generatePoint(points.length - 1));
					}
				}

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].g(null, paths);
		}
	}]);

	return DefaultLinkWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
DefaultLinkWidget.defaultProps = {
	color: 'black',
	width: 3,
	link: null,
	engine: null,
	smooth: false,
	diagramEngine: null
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultPortLabelWidget__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultNodeWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var div = __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div;


var DefaultNodeWidget = function (_React$Component) {
	_inherits(DefaultNodeWidget, _React$Component);

	function DefaultNodeWidget() {
		_classCallCheck(this, DefaultNodeWidget);

		return _possibleConstructorReturn(this, (DefaultNodeWidget.__proto__ || Object.getPrototypeOf(DefaultNodeWidget)).apply(this, arguments));
	}

	_createClass(DefaultNodeWidget, [{
		key: "onRemove",
		value: function onRemove() {
			this.props.node.remove();
			this.props.diagramEngine.forceUpdate();
		}
	}, {
		key: "render",
		value: function render() {
			return div({ className: 'basic-node', key: 'basic-node', style: { background: this.props.node.color } }, div({ className: 'title', key: 'title' }, div({ className: 'name', key: 'name' }, this.props.node.name), div({ className: 'fa fa-close', key: 'close', onClick: this.onRemove.bind(this) })), div({ className: 'ports', key: 'ports' }, div({ className: 'in', key: 'in' }, __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.props.node.getInPorts(), function (port, i) {
				return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__DefaultPortLabelWidget__["a" /* DefaultPortLabel */], { model: port, key: "in-port-" + i });
			})), div({ className: 'out', key: 'out' }, __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](this.props.node.getOutPorts(), function (port, i) {
				return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__DefaultPortLabelWidget__["a" /* DefaultPortLabel */], { model: port, key: "out-port-" + i });
			}))));
		}
	}]);

	return DefaultNodeWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
DefaultNodeWidget.defaultProps = {
	node: null
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramModel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DiagramModel = function (_BaseEntity) {
	_inherits(DiagramModel, _BaseEntity);

	function DiagramModel() {
		_classCallCheck(this, DiagramModel);

		var _this = _possibleConstructorReturn(this, (DiagramModel.__proto__ || Object.getPrototypeOf(DiagramModel)).call(this));

		_this.links = {};
		_this.nodes = {};

		_this.offsetX = 0;
		_this.offsetY = 0;
		_this.zoom = 100;
		_this.rendered = false;
		return _this;
	}

	_createClass(DiagramModel, [{
		key: "deSerializeDiagram",
		value: function deSerializeDiagram(object, diagramEngine) {
			var _this2 = this;

			this.deSerialize(object);

			this.offsetX = object.offsetX;
			this.offsetY = object.offsetY;
			this.zoom = object.zoom;

			//deserialize nodes
			__WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](object.nodes, function (node) {
				var nodeOb = diagramEngine.getInstanceFactory(node._class).getInstance();
				nodeOb.deSerialize(node);

				//deserialize ports
				__WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](node.ports, function (port) {
					var portOb = diagramEngine.getInstanceFactory(port._class).getInstance();
					portOb.deSerialize(port);
					nodeOb.addPort(portOb);
				});

				_this2.addNode(nodeOb);
			});

			__WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](object.links, function (link) {
				var linkOb = diagramEngine.getInstanceFactory(link._class).getInstance();
				linkOb.deSerialize(link);

				if (link.target) {
					linkOb.setTargetPort(_this2.getNode(link.target).getPortFromID(link.targetPort));
				}

				if (link.source) {
					linkOb.setSourcePort(_this2.getNode(link.source).getPortFromID(link.sourcePort));
				}

				_this2.addLink(linkOb);
			});
		}
	}, {
		key: "serializeDiagram",
		value: function serializeDiagram() {
			return __WEBPACK_IMPORTED_MODULE_2_lodash__["merge"](this.serialize(), {
				offsetX: this.offsetX,
				offsetY: this.offsetY,
				zoom: this.zoom,
				links: __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.links, function (link) {
					return link.serialize();
				}),
				nodes: __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](this.nodes, function (link) {
					return link.serialize();
				})
			});
		}
	}, {
		key: "clearSelection",
		value: function clearSelection(ignore) {
			__WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.getSelectedItems(), function (element) {
				if (ignore && ignore.getID() === element.getID()) {
					return;
				}
				element.setSelected(false); //TODO dont fire the listener
			});
		}
	}, {
		key: "getSelectedItems",
		value: function getSelectedItems() {
			var items = [];

			//find all nodes
			items = items.concat(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.nodes, function (node) {
				return node.isSelected();
			}));

			//find all points
			items = items.concat(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](__WEBPACK_IMPORTED_MODULE_2_lodash__["flatMap"](this.links, function (node) {
				return node.points;
			}), function (port) {
				return port.isSelected();
			}));

			//find all links
			return items.concat(__WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](this.links, function (link) {
				return link.isSelected();
			}));
		}
	}, {
		key: "setZoomLevel",
		value: function setZoomLevel(zoom) {
			this.zoom = zoom;
			this.itterateListeners(function (listener) {
				listener.controlsUpdated();
			});
		}
	}, {
		key: "setOffset",
		value: function setOffset(offsetX, offsetY) {
			this.offsetX = offsetX;
			this.offsetY = offsetY;
			this.itterateListeners(function (listener) {
				listener.controlsUpdated();
			});
		}
	}, {
		key: "setOffsetX",
		value: function setOffsetX(offsetX) {
			this.offsetX = offsetX;
			this.itterateListeners(function (listener) {
				listener.controlsUpdated();
			});
		}
	}, {
		key: "setOffsetY",
		value: function setOffsetY(offsetY) {
			this.offsetX = offsetY;
			this.itterateListeners(function (listener) {
				listener.controlsUpdated();
			});
		}
	}, {
		key: "getOffsetY",
		value: function getOffsetY() {
			return this.offsetY;
		}
	}, {
		key: "getOffsetX",
		value: function getOffsetX() {
			return this.offsetX;
		}
	}, {
		key: "getZoomLevel",
		value: function getZoomLevel() {
			return this.zoom;
		}
	}, {
		key: "getNode",
		value: function getNode(node) {
			if (node instanceof __WEBPACK_IMPORTED_MODULE_0__Common__["c" /* NodeModel */]) {
				return node;
			}
			if (!this.nodes[node]) {
				return null;
			}
			return this.nodes[node];
		}
	}, {
		key: "getLink",
		value: function getLink(link) {
			if (link instanceof __WEBPACK_IMPORTED_MODULE_0__Common__["a" /* LinkModel */]) {
				return link;
			}
			if (!this.links[link]) {
				return null;
			}
			return this.links[link];
		}
	}, {
		key: "addLink",
		value: function addLink(link) {
			var _this3 = this;

			link.addListener({
				entityRemoved: function entityRemoved() {
					_this3.removeLink(link);
				}
			});
			this.links[link.getID()] = link;
			this.itterateListeners(function (listener) {
				listener.linksUpdated();
			});
			return link;
		}
	}, {
		key: "addNode",
		value: function addNode(node) {
			var _this4 = this;

			node.addListener({
				entityRemoved: function entityRemoved() {
					_this4.removeNode(node);
				}
			});
			this.nodes[node.getID()] = node;
			this.itterateListeners(function (listener) {
				listener.nodesUpdated();
			});
			return node;
		}
	}, {
		key: "removeLink",
		value: function removeLink(link) {
			if (link instanceof __WEBPACK_IMPORTED_MODULE_0__Common__["a" /* LinkModel */]) {
				delete this.links[link.getID()];
				this.itterateListeners(function (listener) {
					listener.linksUpdated();
				});
				return;
			}
			delete this.links['' + link];
			this.itterateListeners(function (listener) {
				listener.linksUpdated();
			});
		}
	}, {
		key: "removeNode",
		value: function removeNode(node) {
			if (node instanceof __WEBPACK_IMPORTED_MODULE_0__Common__["c" /* NodeModel */]) {
				delete this.nodes[node.getID()];
				this.itterateListeners(function (listener) {
					listener.nodesUpdated();
				});
				return;
			}

			delete this.nodes['' + node];
			this.itterateListeners(function (listener) {
				listener.nodesUpdated();
			});
		}
	}, {
		key: "getLinks",
		value: function getLinks() {
			return this.links;
		}
	}, {
		key: "getNodes",
		value: function getNodes() {
			return this.nodes;
		}
	}]);

	return DiagramModel;
}(__WEBPACK_IMPORTED_MODULE_1__BaseEntity__["a" /* BaseEntity */]);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolkit; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Dylan Vorster
 */
var Toolkit = function () {
	function Toolkit() {
		_classCallCheck(this, Toolkit);
	}

	_createClass(Toolkit, null, [{
		key: 'UID',

		/**
    * Generats a unique ID (thanks Stack overflow :3)
    * @returns {String}
    */
		value: function UID() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = Math.random() * 16 | 0,
				    v = c == 'x' ? r : r & 0x3 | 0x8;
				return v.toString(16);
			});
		}
	}]);

	return Toolkit;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widgets_PortWidget__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPortLabel; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @author Dylan Vorster
 */
var DefaultPortLabel = function (_React$Component) {
	_inherits(DefaultPortLabel, _React$Component);

	function DefaultPortLabel() {
		_classCallCheck(this, DefaultPortLabel);

		return _possibleConstructorReturn(this, (DefaultPortLabel.__proto__ || Object.getPrototypeOf(DefaultPortLabel)).apply(this, arguments));
	}

	_createClass(DefaultPortLabel, [{
		key: "render",
		value: function render() {

			var port = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__widgets_PortWidget__["a" /* PortWidget */], { name: this.props.model.name, node: this.props.model.getParent() });
			var label = __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({ className: 'name' }, this.props.model.label);

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({ className: (this.props.model.in ? 'in' : 'out') + '-port' }, this.props.model.in ? port : label, this.props.model.in ? label : port);
		}
	}]);

	return DefaultPortLabel;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
DefaultPortLabel.defaultProps = {
	in: true,
	label: "port"
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LinkWidget__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkLayerWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LinkLayerWidget = function (_React$Component) {
	_inherits(LinkLayerWidget, _React$Component);

	function LinkLayerWidget(props) {
		_classCallCheck(this, LinkLayerWidget);

		var _this = _possibleConstructorReturn(this, (LinkLayerWidget.__proto__ || Object.getPrototypeOf(LinkLayerWidget)).call(this, props));

		_this.state = {};
		return _this;
	}

	_createClass(LinkLayerWidget, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var diagramModel = this.props.diagramEngine.getDiagramModel();

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].svg({
				style: {
					transform: 'scale(' + diagramModel.getZoomLevel() / 100.0 + ') translate(' + diagramModel.getOffsetX() + 'px,' + diagramModel.getOffsetY() + 'px)',
					width: '100%',
					height: '100%'
				}
			}, __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](diagramModel.getLinks(), function (link) {

				//TODO just improve this vastly x_x
				if (link.sourcePort !== null) {
					try {
						//generate a point
						link.points[0].updateLocation(_this2.props.diagramEngine.getPortCenter(link.sourcePort));
					}
					//remove the link because its problematic (TODO implement this rather at an engine level)
					catch (ex) {
						console.log(ex);
						diagramModel.removeLink(link);
						return;
					}
				}
				if (link.targetPort !== null) {
					try {
						__WEBPACK_IMPORTED_MODULE_2_lodash__["last"](link.points).updateLocation(_this2.props.diagramEngine.getPortCenter(link.targetPort));
					}
					//remove the link because its problematic (TODO implement this rather at an engine level)
					catch (ex) {
						console.log(ex);
						diagramModel.removeLink(link);
						return;
					}
				}

				//generate links
				var generatedLink = _this2.props.diagramEngine.generateWidgetForLink(link);
				if (!generatedLink) {
					console.log("no link generated for type: " + link.getType());
					return null;
				}

				return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__LinkWidget__["a" /* LinkWidget */], {
					key: link.getID(),
					link: link,
					diagramEngine: _this2.props.diagramEngine
				}, __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](generatedLink, { pointAdded: _this2.props.pointAdded }));
			}));
		}
	}]);

	return LinkLayerWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var LinkWidget = function (_React$Component) {
	_inherits(LinkWidget, _React$Component);

	function LinkWidget() {
		_classCallCheck(this, LinkWidget);

		return _possibleConstructorReturn(this, (LinkWidget.__proto__ || Object.getPrototypeOf(LinkWidget)).apply(this, arguments));
	}

	_createClass(LinkWidget, [{
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate() {
			return this.props.diagramEngine.canEntityRepaint(this.props.link);
		}
	}, {
		key: "render",
		value: function render() {
			return this.props.children;
		}
	}]);

	return LinkWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NodeWidget__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeLayerWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var NodeLayerWidget = function (_React$Component) {
	_inherits(NodeLayerWidget, _React$Component);

	function NodeLayerWidget() {
		_classCallCheck(this, NodeLayerWidget);

		return _possibleConstructorReturn(this, (NodeLayerWidget.__proto__ || Object.getPrototypeOf(NodeLayerWidget)).apply(this, arguments));
	}

	_createClass(NodeLayerWidget, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    diagramEngine = _props.diagramEngine,
			    updateDiagram = _props.updateDiagram;

			var diagramModel = diagramEngine.getDiagramModel();

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({
				className: 'node-view',
				key: 'node-view',
				style: {
					transform: 'scale(' + diagramModel.getZoomLevel() / 100.0 + ') translate(' + diagramModel.getOffsetX() + 'px,' + diagramModel.getOffsetY() + 'px)',
					width: '100%',
					height: '100%'
				}
			}, __WEBPACK_IMPORTED_MODULE_1_lodash__["map"](diagramModel.getNodes(), function (node) {
				return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__NodeWidget__["a" /* NodeWidget */], { diagramEngine: diagramEngine, updateDiagram: updateDiagram, key: node.id, node: node }, _this2.props.diagramEngine.generateWidgetForNode(node));
			}));
		}
	}]);

	return NodeLayerWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var NodeWidget = function (_React$Component) {
	_inherits(NodeWidget, _React$Component);

	function NodeWidget() {
		_classCallCheck(this, NodeWidget);

		return _possibleConstructorReturn(this, (NodeWidget.__proto__ || Object.getPrototypeOf(NodeWidget)).apply(this, arguments));
	}

	_createClass(NodeWidget, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return this.props.diagramEngine.canEntityRepaint(this.props.node);
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({
				'data-nodeid': this.props.node.id,
				className: 'node' + (this.props.node.isSelected() ? ' selected' : ''),
				style: {
					top: this.props.node.y,
					left: this.props.node.x
				} }, __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](this.props.children, {}));
		}
	}]);

	return NodeWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var PortWidget = function (_React$Component) {
	_inherits(PortWidget, _React$Component);

	function PortWidget(props) {
		_classCallCheck(this, PortWidget);

		var _this = _possibleConstructorReturn(this, (PortWidget.__proto__ || Object.getPrototypeOf(PortWidget)).call(this, props));

		_this.state = {
			selected: false
		};
		return _this;
	}

	_createClass(PortWidget, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({
				onMouseEnter: function onMouseEnter() {
					_this2.setState({ selected: true });
				},
				onMouseLeave: function onMouseLeave() {
					_this2.setState({ selected: false });
				},
				className: 'port' + (this.state.selected ? ' selected' : ''),
				'data-name': this.props.name,
				'data-nodeid': this.props.node.getID()
			});
		}
	}]);

	return PortWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(28)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./test.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./test.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseEntity__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DiagramModel__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramEngine; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * Passed as a parameter to the DiagramWidget
 */
var DiagramEngine = function (_BaseEntity) {
	_inherits(DiagramEngine, _BaseEntity);

	function DiagramEngine() {
		_classCallCheck(this, DiagramEngine);

		var _this = _possibleConstructorReturn(this, (DiagramEngine.__proto__ || Object.getPrototypeOf(DiagramEngine)).call(this));

		_this.diagramModel = new __WEBPACK_IMPORTED_MODULE_2__DiagramModel__["a" /* DiagramModel */]();
		_this.nodeFactories = {};
		_this.linkFactories = {};
		_this.instanceFactories = {};
		_this.canvas = null;
		_this.paintableWidgets = null;
		_this.forceUpdate = function () {};
		return _this;
	}

	_createClass(DiagramEngine, [{
		key: "clearRepaintEntities",
		value: function clearRepaintEntities() {
			this.paintableWidgets = null;
		}
	}, {
		key: "enableRepaintEntities",
		value: function enableRepaintEntities(entities) {
			var _this2 = this;

			this.paintableWidgets = {};
			entities.forEach(function (entity) {

				//if a node is requested to repaint, add all of its links
				if (entity instanceof __WEBPACK_IMPORTED_MODULE_0__Common__["c" /* NodeModel */]) {
					__WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](entity.getPorts(), function (port) {
						__WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](port.getLinks(), function (link) {
							_this2.paintableWidgets[link.getID()] = true;
						});
					});
				}

				if (entity instanceof __WEBPACK_IMPORTED_MODULE_0__Common__["d" /* PointModel */]) {
					_this2.paintableWidgets[entity.getLink().getID()] = true;
				}

				_this2.paintableWidgets[entity.getID()] = true;
			});
		}
	}, {
		key: "canEntityRepaint",
		value: function canEntityRepaint(baseModel) {
			//no rules applied, allow repaint
			if (this.paintableWidgets === null) {
				return true;
			}

			return this.paintableWidgets[baseModel.getID()] !== undefined;
		}
	}, {
		key: "setCanvas",
		value: function setCanvas(canvas) {
			this.canvas = canvas;
		}
	}, {
		key: "setDiagramModel",
		value: function setDiagramModel(model) {
			this.diagramModel = model;
		}
	}, {
		key: "setForceUpdate",
		value: function setForceUpdate(forceUpdate) {
			this.forceUpdate = forceUpdate;
		}
	}, {
		key: "getDiagramModel",
		value: function getDiagramModel() {
			return this.diagramModel;
		}
	}, {
		key: "getNodeFactories",
		value: function getNodeFactories() {
			return this.nodeFactories;
		}
	}, {
		key: "getLinkFactories",
		value: function getLinkFactories() {
			return this.linkFactories;
		}
	}, {
		key: "getInstanceFactory",
		value: function getInstanceFactory(className) {
			return this.instanceFactories[className];
		}
	}, {
		key: "registerInstanceFactory",
		value: function registerInstanceFactory(factory) {
			this.instanceFactories[factory.getName()] = factory;
		}
	}, {
		key: "registerNodeFactory",
		value: function registerNodeFactory(factory) {
			this.nodeFactories[factory.getType()] = factory;
			this.itterateListeners(function (listener) {
				listener.nodeFactoriesUpdated();
			});
		}
	}, {
		key: "registerLinkFactory",
		value: function registerLinkFactory(factory) {
			this.linkFactories[factory.getType()] = factory;
			this.itterateListeners(function (listener) {
				listener.linkFactoriesUpdated();
			});
		}
	}, {
		key: "getFactoryForNode",
		value: function getFactoryForNode(node) {
			if (this.nodeFactories[node.getType()]) {
				return this.nodeFactories[node.getType()];
			}
			console.log("cannot find widget factory for node of type: [" + node.getType() + "]");
			return null;
		}
	}, {
		key: "getFactoryForLink",
		value: function getFactoryForLink(link) {
			if (this.linkFactories[link.getType()]) {
				return this.linkFactories[link.getType()];
			}
			console.log("cannot find widget factory for link of type: [" + link.getType() + "]");
			return null;
		}
	}, {
		key: "generateWidgetForLink",
		value: function generateWidgetForLink(link) {
			var linkFactory = this.getFactoryForLink(link);
			if (!linkFactory) {
				throw "Cannot find link factory for link: " + link.getType();
			}
			return linkFactory.generateReactWidget(this, link);
		}
	}, {
		key: "generateWidgetForNode",
		value: function generateWidgetForNode(node) {
			var nodeFactory = this.getFactoryForNode(node);
			if (!nodeFactory) {
				throw "Cannot find widget factory for node: " + node.getType();
			}
			return nodeFactory.generateReactWidget(this, node);
		}
	}, {
		key: "getRelativeMousePoint",
		value: function getRelativeMousePoint(event) {
			var point = this.getRelativePoint(event.pageX, event.pageY);
			return {
				x: point.x / (this.diagramModel.getZoomLevel() / 100.0) - this.diagramModel.getOffsetX(),
				y: point.y / (this.diagramModel.getZoomLevel() / 100.0) - this.diagramModel.getOffsetY()
			};
		}
	}, {
		key: "getRelativePoint",
		value: function getRelativePoint(x, y) {
			var canvasRect = this.canvas.getBoundingClientRect();
			return { x: x - canvasRect.left, y: y - canvasRect.top };
		}
	}, {
		key: "getNodePortElement",
		value: function getNodePortElement(port) {
			var selector = this.canvas.querySelector('.port[data-name="' + port.getName() + '"][data-nodeid="' + port.getParent().getID() + '"]');
			if (selector === null) {
				throw "Cannot find Node Port element with nodeID: [" + port.getParent().getID() + "] and name: [" + port.getName() + "]";
			}
			return selector;
		}
	}, {
		key: "getPortCenter",
		value: function getPortCenter(port) {
			var sourceElement = this.getNodePortElement(port);
			var sourceRect = sourceElement.getBoundingClientRect();

			var rel = this.getRelativePoint(sourceRect.left, sourceRect.top);

			return {
				x: sourceElement.offsetWidth / 2 + rel.x / (this.diagramModel.getZoomLevel() / 100.0) - this.diagramModel.getOffsetX(),
				y: sourceElement.offsetHeight / 2 + rel.y / (this.diagramModel.getZoomLevel() / 100.0) - this.diagramModel.getOffsetY()
			};
		}
	}]);

	return DiagramEngine;
}(__WEBPACK_IMPORTED_MODULE_1__BaseEntity__["a" /* BaseEntity */]);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AbstractInstanceFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkInstanceFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var LinkInstanceFactory = function (_AbstractInstanceFact) {
	_inherits(LinkInstanceFactory, _AbstractInstanceFact);

	function LinkInstanceFactory() {
		_classCallCheck(this, LinkInstanceFactory);

		return _possibleConstructorReturn(this, (LinkInstanceFactory.__proto__ || Object.getPrototypeOf(LinkInstanceFactory)).call(this, "LinkModel"));
	}

	_createClass(LinkInstanceFactory, [{
		key: "getInstance",
		value: function getInstance() {
			return new __WEBPACK_IMPORTED_MODULE_0__Common__["a" /* LinkModel */]();
		}
	}]);

	return LinkInstanceFactory;
}(__WEBPACK_IMPORTED_MODULE_1__AbstractInstanceFactory__["a" /* AbstractInstanceFactory */]);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WidgetFactories__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultLinkWidget__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLinkFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @author Dylan Vorster
 */
var DefaultLinkFactory = function (_LinkWidgetFactory) {
	_inherits(DefaultLinkFactory, _LinkWidgetFactory);

	function DefaultLinkFactory() {
		_classCallCheck(this, DefaultLinkFactory);

		return _possibleConstructorReturn(this, (DefaultLinkFactory.__proto__ || Object.getPrototypeOf(DefaultLinkFactory)).call(this, "default"));
	}

	_createClass(DefaultLinkFactory, [{
		key: "generateReactWidget",
		value: function generateReactWidget(diagramEngine, link) {
			return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__DefaultLinkWidget__["a" /* DefaultLinkWidget */], {
				link: link,
				diagramEngine: diagramEngine
			});
		}
	}]);

	return DefaultLinkFactory;
}(__WEBPACK_IMPORTED_MODULE_0__WidgetFactories__["b" /* LinkWidgetFactory */]);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WidgetFactories__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DefaultNodeWidget__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultNodeFactory; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @author Dylan Vorster
 */
var DefaultNodeFactory = function (_NodeWidgetFactory) {
	_inherits(DefaultNodeFactory, _NodeWidgetFactory);

	function DefaultNodeFactory() {
		_classCallCheck(this, DefaultNodeFactory);

		return _possibleConstructorReturn(this, (DefaultNodeFactory.__proto__ || Object.getPrototypeOf(DefaultNodeFactory)).call(this, "default"));
	}

	_createClass(DefaultNodeFactory, [{
		key: "generateReactWidget",
		value: function generateReactWidget(diagramEngine, node) {
			return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__DefaultNodeWidget__["a" /* DefaultNodeWidget */], {
				node: node,
				diagramEngine: diagramEngine
			});
		}
	}]);

	return DefaultNodeFactory;
}(__WEBPACK_IMPORTED_MODULE_0__WidgetFactories__["a" /* NodeWidgetFactory */]);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbstractInstanceFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultNodeInstanceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultNodeModel; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var DefaultNodeInstanceFactory = function (_AbstractInstanceFact) {
	_inherits(DefaultNodeInstanceFactory, _AbstractInstanceFact);

	function DefaultNodeInstanceFactory() {
		_classCallCheck(this, DefaultNodeInstanceFactory);

		return _possibleConstructorReturn(this, (DefaultNodeInstanceFactory.__proto__ || Object.getPrototypeOf(DefaultNodeInstanceFactory)).call(this, 'DefaultNodeModel'));
	}

	_createClass(DefaultNodeInstanceFactory, [{
		key: "getInstance",
		value: function getInstance() {
			return new DefaultNodeModel();
		}
	}]);

	return DefaultNodeInstanceFactory;
}(__WEBPACK_IMPORTED_MODULE_2__AbstractInstanceFactory__["a" /* AbstractInstanceFactory */]);

var DefaultNodeModel = function (_NodeModel) {
	_inherits(DefaultNodeModel, _NodeModel);

	function DefaultNodeModel() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Untitled';
		var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(0,192,255)';

		_classCallCheck(this, DefaultNodeModel);

		var _this2 = _possibleConstructorReturn(this, (DefaultNodeModel.__proto__ || Object.getPrototypeOf(DefaultNodeModel)).call(this, 'default'));

		_this2.name = name;
		_this2.color = color;
		return _this2;
	}

	_createClass(DefaultNodeModel, [{
		key: "deSerialize",
		value: function deSerialize(object) {
			_get(DefaultNodeModel.prototype.__proto__ || Object.getPrototypeOf(DefaultNodeModel.prototype), "deSerialize", this).call(this, object);
			this.name = object.name;
			this.color = object.color;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(DefaultNodeModel.prototype.__proto__ || Object.getPrototypeOf(DefaultNodeModel.prototype), "serialize", this).call(this), {
				name: this.name,
				color: this.color
			});
		}
	}, {
		key: "getInPorts",
		value: function getInPorts() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](this.ports, function (portModel) {
				return portModel.in;
			});
		}
	}, {
		key: "getOutPorts",
		value: function getOutPorts() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](this.ports, function (portModel) {
				return !portModel.in;
			});
		}
	}]);

	return DefaultNodeModel;
}(__WEBPACK_IMPORTED_MODULE_0__Common__["c" /* NodeModel */]);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AbstractInstanceFactory__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DefaultPortInstanceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultPortModel; });
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var DefaultPortInstanceFactory = function (_AbstractInstanceFact) {
	_inherits(DefaultPortInstanceFactory, _AbstractInstanceFact);

	function DefaultPortInstanceFactory() {
		_classCallCheck(this, DefaultPortInstanceFactory);

		return _possibleConstructorReturn(this, (DefaultPortInstanceFactory.__proto__ || Object.getPrototypeOf(DefaultPortInstanceFactory)).call(this, "DefaultPortModel"));
	}

	_createClass(DefaultPortInstanceFactory, [{
		key: "getInstance",
		value: function getInstance() {
			return new DefaultPortModel(true, "unknown");
		}
	}]);

	return DefaultPortInstanceFactory;
}(__WEBPACK_IMPORTED_MODULE_2__AbstractInstanceFactory__["a" /* AbstractInstanceFactory */]);

/**
 * @author Dylan Vorster
 */
var DefaultPortModel = function (_PortModel) {
	_inherits(DefaultPortModel, _PortModel);

	function DefaultPortModel(isInput, name) {
		var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		_classCallCheck(this, DefaultPortModel);

		var _this2 = _possibleConstructorReturn(this, (DefaultPortModel.__proto__ || Object.getPrototypeOf(DefaultPortModel)).call(this, name));

		_this2.in = isInput;
		_this2.label = label || name;
		return _this2;
	}

	_createClass(DefaultPortModel, [{
		key: "deSerialize",
		value: function deSerialize(object) {
			_get(DefaultPortModel.prototype.__proto__ || Object.getPrototypeOf(DefaultPortModel.prototype), "deSerialize", this).call(this, object);
			this.in = object.in;
			this.label = object.label;
		}
	}, {
		key: "serialize",
		value: function serialize() {
			return __WEBPACK_IMPORTED_MODULE_1_lodash__["merge"](_get(DefaultPortModel.prototype.__proto__ || Object.getPrototypeOf(DefaultPortModel.prototype), "serialize", this).call(this), {
				in: this.in,
				label: this.label
			});
		}
	}]);

	return DefaultPortModel;
}(__WEBPACK_IMPORTED_MODULE_0__Common__["b" /* PortModel */]);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LinkLayerWidget__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NodeLayerWidget__ = __webpack_require__(14);
/* unused harmony export BaseAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagramWidget; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var BaseAction = function BaseAction(mouseX, mouseY) {
	_classCallCheck(this, BaseAction);

	this.mouseX = mouseX;
	this.mouseY = mouseY;
	this.ms = new Date().getTime();
};

var SelectingAction = function (_BaseAction) {
	_inherits(SelectingAction, _BaseAction);

	function SelectingAction(mouseX, mouseY) {
		_classCallCheck(this, SelectingAction);

		var _this = _possibleConstructorReturn(this, (SelectingAction.__proto__ || Object.getPrototypeOf(SelectingAction)).call(this, mouseX, mouseY));

		_this.mouseX2 = mouseX;
		_this.mouseY2 = mouseY;
		return _this;
	}

	_createClass(SelectingAction, [{
		key: "containsElement",
		value: function containsElement(x, y, diagramModel) {
			var z = diagramModel.getZoomLevel() / 100.0;
			return (x + diagramModel.getOffsetX()) * z > this.mouseX && (x + diagramModel.getOffsetX()) * z < this.mouseX2 && (y + diagramModel.getOffsetY()) * z > this.mouseY && (y + diagramModel.getOffsetY()) * z < this.mouseY2;
		}
	}]);

	return SelectingAction;
}(BaseAction);

var MoveCanvasAction = function (_BaseAction2) {
	_inherits(MoveCanvasAction, _BaseAction2);

	function MoveCanvasAction(mouseX, mouseY, diagramModel) {
		_classCallCheck(this, MoveCanvasAction);

		var _this2 = _possibleConstructorReturn(this, (MoveCanvasAction.__proto__ || Object.getPrototypeOf(MoveCanvasAction)).call(this, mouseX, mouseY));

		_this2.initialOffsetX = diagramModel.getOffsetX();
		_this2.initialOffsetY = diagramModel.getOffsetY();
		return _this2;
	}

	return MoveCanvasAction;
}(BaseAction);

var MoveItemsAction = function (_BaseAction3) {
	_inherits(MoveItemsAction, _BaseAction3);

	function MoveItemsAction(mouseX, mouseY, diagramEngine) {
		_classCallCheck(this, MoveItemsAction);

		var _this3 = _possibleConstructorReturn(this, (MoveItemsAction.__proto__ || Object.getPrototypeOf(MoveItemsAction)).call(this, mouseX, mouseY));

		_this3.moved = false;
		diagramEngine.enableRepaintEntities(diagramEngine.getDiagramModel().getSelectedItems());
		_this3.selectionModels = diagramEngine.getDiagramModel().getSelectedItems().map(function (item) {
			return {
				model: item,
				initialX: item.x,
				initialY: item.y
			};
		});
		return _this3;
	}

	return MoveItemsAction;
}(BaseAction);

var DiagramWidget = function (_React$Component) {
	_inherits(DiagramWidget, _React$Component);

	function DiagramWidget(props) {
		_classCallCheck(this, DiagramWidget);

		var _this4 = _possibleConstructorReturn(this, (DiagramWidget.__proto__ || Object.getPrototypeOf(DiagramWidget)).call(this, props));

		_this4.state = {
			action: null,
			renderedNodes: false,
			windowListener: null
		};
		return _this4;
	}

	_createClass(DiagramWidget, [{
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			this.props.diagramEngine.setCanvas(null);
			window.removeEventListener('keydown', this.state.windowListener);
		}
	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate(nextProps) {
			if (this.props.diagramEngine.diagramModel.id !== nextProps.diagramEngine.diagramModel.id) {
				this.setState({ renderedNodes: false });
				nextProps.diagramEngine.diagramModel.rendered = true;
			}
			if (!nextProps.diagramEngine.diagramModel.rendered) {
				this.setState({ renderedNodes: false });
				nextProps.diagramEngine.diagramModel.rendered = true;
			}
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			if (!this.state.renderedNodes) {
				this.setState({
					renderedNodes: true
				});
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this5 = this;

			this.props.diagramEngine.setCanvas(this.refs['canvas']);
			this.props.diagramEngine.setForceUpdate(this.forceUpdate.bind(this));

			//add a keyboard listener
			this.setState({
				renderedNodes: true,
				windowListener: window.addEventListener('keydown', function (event) {

					//delete all selected
					if (event.keyCode === 46 || event.keyCode === 8) {
						__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](_this5.props.diagramEngine.getDiagramModel().getSelectedItems(), function (element) {
							element.remove();
						});
						_this5.forceUpdate();
					}
				})
			});
			window.focus();
		}

		/**
   * Gets a model and element under the mouse cursor
   */

	}, {
		key: "getMouseElement",
		value: function getMouseElement(event) {
			var target = event.target;
			var diagramModel = this.props.diagramEngine.diagramModel;

			//is it a port
			var element = target.closest('.port[data-name]');
			if (element) {
				var nodeElement = target.closest('.node[data-nodeid]');
				return {
					model: diagramModel.getNode(nodeElement.getAttribute('data-nodeid')).getPort(element.getAttribute('data-name')),
					element: element
				};
			}

			//look for a point
			element = target.closest('.point[data-id]');
			if (element) {
				return {
					model: diagramModel.getLink(element.getAttribute('data-linkid')).getPointModel(element.getAttribute('data-id')),
					element: element
				};
			}

			//look for a link
			element = target.closest('[data-linkid]');
			if (element) {
				return {
					model: diagramModel.getLink(element.getAttribute('data-linkid')),
					element: element
				};
			}

			//look for a node
			element = target.closest('.node[data-nodeid]');
			if (element) {
				return {
					model: diagramModel.getNode(element.getAttribute('data-nodeid')),
					element: element
				};
			}

			return null;
		}
	}, {
		key: "render",
		value: function render() {
			var _this6 = this;

			var diagramEngine = this.props.diagramEngine;
			var diagramModel = diagramEngine.getDiagramModel();

			return __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({
				ref: 'canvas',
				className: 'react-js-diagrams-canvas',
				onWheel: function onWheel(event) {
					event.preventDefault();
					event.stopPropagation();
					diagramModel.setZoomLevel(diagramModel.getZoomLevel() + event.deltaY / 60);
					diagramEngine.enableRepaintEntities([]);
					_this6.forceUpdate();
				},
				onMouseMove: function onMouseMove(event) {

					//select items so draw a bounding box
					if (_this6.state.action instanceof SelectingAction) {
						var relative = diagramEngine.getRelativePoint(event.pageX, event.pageY);

						__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](diagramModel.getNodes(), function (node) {
							if (_this6.state.action.containsElement(node.x, node.y, diagramModel)) {
								node.setSelected(true);
							}
						});

						__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](diagramModel.getLinks(), function (link) {
							var allSelected = true;
							__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](link.points, function (point) {
								if (_this6.state.action.containsElement(point.x, point.y, diagramModel)) {
									point.setSelected(true);
								} else {
									allSelected = false;
								}
							});

							if (allSelected) {
								link.setSelected(true);
							}
						});

						_this6.state.action.mouseX2 = relative.x;
						_this6.state.action.mouseY2 = relative.y;
						_this6.setState({ action: _this6.state.action });
						return;
					}

					//translate the items on the canvas
					else if (_this6.state.action instanceof MoveItemsAction) {
							__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](_this6.state.action.selectionModels, function (model) {
								if (model.model instanceof __WEBPACK_IMPORTED_MODULE_2__Common__["c" /* NodeModel */] || model.model instanceof __WEBPACK_IMPORTED_MODULE_2__Common__["d" /* PointModel */]) {
									model.model.x = model.initialX + (event.pageX - _this6.state.action.mouseX) / (diagramModel.getZoomLevel() / 100);
									model.model.y = model.initialY + (event.pageY - _this6.state.action.mouseY) / (diagramModel.getZoomLevel() / 100);
								}
							});
							_this6.forceUpdate();
						}

						//translate the actual canvas
						else if (_this6.state.action instanceof MoveCanvasAction) {
								diagramModel.setOffset(_this6.state.action.initialOffsetX + (event.pageX - _this6.state.action.mouseX) / (diagramModel.getZoomLevel() / 100), _this6.state.action.initialOffsetY + (event.pageY - _this6.state.action.mouseY) / (diagramModel.getZoomLevel() / 100));
								_this6.forceUpdate();
							}
				},
				onMouseDown: function onMouseDown(event) {
					diagramEngine.clearRepaintEntities();

					var model = _this6.getMouseElement(event);
					//its the canvas
					if (model === null) {
						//is it a multiple selection
						if (event.shiftKey) {
							var relative = diagramEngine.getRelativePoint(event.pageX, event.pageY);
							_this6.setState({
								action: new SelectingAction(relative.x, relative.y)
							});
						}

						//its a drag the canvas event
						else {
								relative = diagramEngine.getRelativePoint(event.pageX, event.pageY);
								diagramModel.clearSelection();
								_this6.setState({
									action: new MoveCanvasAction(relative.x, relative.y, diagramModel)
								});
							}
					}

					//its a port element, we want to drag a link
					else if (model.model instanceof __WEBPACK_IMPORTED_MODULE_2__Common__["b" /* PortModel */]) {
							relative = diagramEngine.getRelativeMousePoint(event);
							var link = new __WEBPACK_IMPORTED_MODULE_2__Common__["a" /* LinkModel */]();
							link.setSourcePort(model.model);

							link.getFirstPoint().updateLocation(relative);
							link.getLastPoint().updateLocation(relative);

							diagramModel.clearSelection();
							link.getLastPoint().setSelected(true);
							diagramModel.addLink(link);

							_this6.setState({
								action: new MoveItemsAction(event.pageX, event.pageY, diagramEngine)
							});
						}
						//its some or other element, probably want to move it
						else {

								if (!event.shiftKey && !model.model.isSelected()) {
									diagramModel.clearSelection();
								}
								model.model.setSelected(true);

								_this6.setState({
									action: new MoveItemsAction(event.pageX, event.pageY, diagramEngine)
								});
							}
				},
				onMouseUp: function onMouseUp(event) {
					//are we going to connect a link to something?
					if (_this6.state.action instanceof MoveItemsAction) {
						var element = _this6.getMouseElement(event);
						if (element) {
							__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](_this6.state.action.selectionModels, function (model) {

								//only care about points connecting to things
								if (!(model.model instanceof __WEBPACK_IMPORTED_MODULE_2__Common__["d" /* PointModel */])) {
									return;
								}

								if (element.model instanceof __WEBPACK_IMPORTED_MODULE_2__Common__["b" /* PortModel */]) {
									model.model.getLink().setTargetPort(element.model);
								}
							});
						}
					}

					diagramEngine.clearRepaintEntities();
					_this6.setState({ action: null });
				}
			}, this.state.renderedNodes ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__LinkLayerWidget__["a" /* LinkLayerWidget */], {
				key: 'diagram-engine',
				diagramEngine: diagramEngine, pointAdded: function pointAdded(point, event) {
					event.stopPropagation();
					diagramModel.clearSelection(point);
					_this6.setState({
						action: new MoveItemsAction(event.pageX, event.pageY, diagramEngine)
					});
				}
			}) : null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__NodeLayerWidget__["a" /* NodeLayerWidget */], { diagramEngine: diagramEngine, updateDiagram: this.forceUpdate }), this.state.action instanceof SelectingAction ? __WEBPACK_IMPORTED_MODULE_0_react__["DOM"].div({
				className: 'selector',
				key: 'selector',
				style: {
					top: this.state.action.mouseY,
					left: this.state.action.mouseX,
					width: this.state.action.mouseX2 - this.state.action.mouseX,
					height: this.state.action.mouseY2 - this.state.action.mouseY
				}
			}) : null);
		}
	}]);

	return DiagramWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #3c3c3c;\n  display: flex; }\n\n.react-js-diagrams-canvas {\n  position: relative;\n  flex-grow: 1;\n  display: flex;\n  cursor: move;\n  overflow: hidden; }\n  .react-js-diagrams-canvas .point {\n    fill: rgba(255, 255, 255, 0.5); }\n    .react-js-diagrams-canvas .point.selected {\n      fill: #00c0ff; }\n  .react-js-diagrams-canvas .selector {\n    position: absolute;\n    background-color: rgba(0, 192, 255, 0.2);\n    border: solid 2px #00c0ff; }\n  .react-js-diagrams-canvas svg {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    transform-origin: 0 0;\n    overflow: visible; }\n  .react-js-diagrams-canvas .node-view {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    pointer-events: none;\n    transform-origin: 0 0; }\n  .react-js-diagrams-canvas .node {\n    position: absolute;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Chrome/Safari/Opera */\n    user-select: none;\n    cursor: move;\n    pointer-events: all; }\n    .react-js-diagrams-canvas .node.selected > * {\n      border-color: #00c0ff !important;\n      -webkit-filter: drop-shadow(0 0 20px rgba(0, 192, 255, 0.5)); }\n\n@keyframes dash {\n  from {\n    stroke-dashoffset: 24; }\n  to {\n    stroke-dashoffset: 0; } }\n  .react-js-diagrams-canvas path {\n    fill: none;\n    pointer-events: all; }\n    .react-js-diagrams-canvas path.selected {\n      stroke: #00c0ff !important;\n      stroke-dasharray: 10,2;\n      animation: dash 1s linear infinite; }\n  .react-js-diagrams-canvas .port {\n    width: 15px;\n    height: 15px;\n    background: rgba(255, 255, 255, 0.1); }\n    .react-js-diagrams-canvas .port:hover, .react-js-diagrams-canvas .port.selected {\n      background: #c0ff00; }\n  .react-js-diagrams-canvas .basic-node {\n    background-color: #1e1e1e;\n    border-radius: 5px;\n    font-family: Arial;\n    color: white;\n    border: solid 2px black;\n    overflow: visible;\n    font-size: 11px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n    .react-js-diagrams-canvas .basic-node .title {\n      /*\t\t\tbackground-image: linear-gradient(rgba(black,0.1),rgba(black,0.2));*/\n      background: rgba(0, 0, 0, 0.3);\n      display: flex;\n      white-space: nowrap; }\n      .react-js-diagrams-canvas .basic-node .title > * {\n        align-self: center; }\n      .react-js-diagrams-canvas .basic-node .title .fa {\n        padding: 5px;\n        opacity: 0.2;\n        cursor: pointer; }\n        .react-js-diagrams-canvas .basic-node .title .fa:hover {\n          opacity: 1.0; }\n      .react-js-diagrams-canvas .basic-node .title .name {\n        flex-grow: 1;\n        padding: 5px 5px; }\n    .react-js-diagrams-canvas .basic-node .ports {\n      display: flex;\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)); }\n      .react-js-diagrams-canvas .basic-node .ports .in, .react-js-diagrams-canvas .basic-node .ports .out {\n        flex-grow: 1;\n        display: flex;\n        flex-direction: column; }\n      .react-js-diagrams-canvas .basic-node .ports .in-port, .react-js-diagrams-canvas .basic-node .ports .out-port {\n        display: flex;\n        margin-top: 1px; }\n        .react-js-diagrams-canvas .basic-node .ports .in-port > *, .react-js-diagrams-canvas .basic-node .ports .out-port > * {\n          align-self: center; }\n        .react-js-diagrams-canvas .basic-node .ports .in-port .name, .react-js-diagrams-canvas .basic-node .ports .out-port .name {\n          padding: 0 5px; }\n      .react-js-diagrams-canvas .basic-node .ports .out-port {\n        justify-content: flex-end; }\n        .react-js-diagrams-canvas .basic-node .ports .out-port .name {\n          justify-content: flex-end;\n          text-align: right; }\n", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




__webpack_require__(17);

/**
 *
 * Simple stress test of the system, shows that it can handle many nodes, and
 * retain good performance
 *
 * @Author Dylan Vorster
 */
window.onload = function () {

	//1) setup the diagram engine
	var engine = new __WEBPACK_IMPORTED_MODULE_0__src_main__["a" /* DiagramEngine */]();
	engine.registerNodeFactory(new __WEBPACK_IMPORTED_MODULE_0__src_main__["b" /* DefaultNodeFactory */]());
	engine.registerLinkFactory(new __WEBPACK_IMPORTED_MODULE_0__src_main__["c" /* DefaultLinkFactory */]());

	function generateNodes(model, offsetX, offsetY) {
		//3-A) create a default node
		var node1 = new __WEBPACK_IMPORTED_MODULE_0__src_main__["e" /* DefaultNodeModel */]("Node 1", "rgb(0,192,255)");
		var port1 = node1.addPort(new __WEBPACK_IMPORTED_MODULE_0__src_main__["f" /* DefaultPortModel */](false, "out-1", "Out"));
		node1.x = 100 + offsetX;
		node1.y = 100 + offsetY;

		//3-B) create another default node
		var node2 = new __WEBPACK_IMPORTED_MODULE_0__src_main__["e" /* DefaultNodeModel */]("Node 2", "rgb(192,255,0)");
		var port2 = node2.addPort(new __WEBPACK_IMPORTED_MODULE_0__src_main__["f" /* DefaultPortModel */](true, "in-1", "IN"));
		node2.x = 200 + offsetX;
		node2.y = 100 + offsetY;

		//3-C) link the 2 nodes together
		var link1 = new __WEBPACK_IMPORTED_MODULE_0__src_main__["g" /* LinkModel */]();
		link1.setSourcePort(port1);
		link1.setTargetPort(port2);

		//4) add the models to the root graph
		model.addNode(node1);
		model.addNode(node2);
		model.addLink(link1);
	}

	//2) setup the diagram model
	var model = new __WEBPACK_IMPORTED_MODULE_0__src_main__["d" /* DiagramModel */]();

	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			generateNodes(model, i * 200, j * 100);
		}
	}

	//5) load model into engine
	engine.setDiagramModel(model);

	//6) render the diagram!
	__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0__src_main__["h" /* DiagramWidget */], { diagramEngine: engine }), document.body);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map