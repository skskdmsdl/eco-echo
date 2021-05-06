module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchForm */ "./components/SearchForm.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _SettingForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SettingForm */ "./components/SettingForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\components\\AppLayout.js";









const dummy = {
  nickname: '에코에코',
  isLoggedIn: []
};

const AppLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/shop",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uC1FC\uD551\uBAB0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 40
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uC0C1\uD488"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 40
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uB354\uBCF4\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined), dummy.isLoggedIn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_SettingForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 37
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 55
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_SearchForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true);
};

AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/ItemList.js":
/*!********************************!*\
  !*** ./components/ItemList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\components\\ItemList.js";






const {
  Text,
  Link
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];
const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__["Card"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const children = [];

for (let i = 10; i < 36; i++) {
  children.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Option, {
    children: i.toString(36) + i
  }, i.toString(36) + i, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 19
  }, undefined));
}

const AppDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
    flex: 1;
    flex-direction: 'row';
    justifyContent: 'space-between';
`;
const AppBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
`;

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const ItemList = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(AppDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        size: "default",
        defaultValue: "a1",
        onChange: handleChange,
        style: {
          width: 200
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(AppBlock, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          gutter: [16, 16],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              hoverable: true,
              style: {
                width: 240
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 40
              }, undefined),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                title: "\uCE74\uC0AC\uD06C\uB86D \uB9E8\uD22C\uB9E8",
                description: "22,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Link, {
                type: "secondary",
                href: "",
                children: "\uD788\uD504\uB098\uD2F1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (ItemList);

/***/ }),

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\components\\LoginForm.js";









const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"])`
    background: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;
const SignupInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Input"])` 
    margin-bottom: 10px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 13px;
    outline: none;
    :hover {
        border-color: #aacd6e;
    } 
    :focus {
        box-shadow: none;
    }
`;
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Input"])` 
    margin-bottom: 10px;
    border: 0 0 0 1px;
    :hover {
        border-color: #aacd6e;
    } 
    :focus {
        box-shadow: none;
    }
`;
const DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div` 
    height: 102px;
    overflow: auto;
    padding: 16px 14px;
    font-size: 12px;
    color: #909090;
    border: 1px solid #f0f0f0;
    margin-top: 10px;
`;
const CheckWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"])` 
    margin: 10px 0;
    color: #909090;
    span {
        font-size: 12px;
        padding-left: 3px;

    }
`;
const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"])`
    background: #aacd6e;
    border-color: #aacd6e;
    padding: 0 80px;
    margin-left: 2px;
    margin-top: 5px;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;
const Signup = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a`
    color: black;
    font-size: 10px;

    :hover {
        color: #80c340;
    }
`;
const SearchPassword = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a`
    color: black;
    font-size: 10px;
    margin-left: 100px;

    :hover {
        color: #80c340;
    }
`;
const LoginWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p`
    font-size: 12px;
    border-top: 1px solid #f0f0f0;
    margin-top: 30px;
    padding-top: 35px;

`;
const ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img`
    width: 25px;
    float: right;
    margin: 0 5px;

`; // const Global = createGlobalStyle`
//     .ant-input-affix-wrapper {
//         background: #aacd6e;
//         border-color: #aacd6e;
//     }
// `;

const LoginForm = () => {
  // const dispatch = useDispatch();
  // const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])('');
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])('');
  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log({
      email,
      password
    });
  }, [email, password]); // 오른쪽 drawer 보이기 안보이기

  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setSignupState(false);
  }; // useEffect(() => {
  //     if (logInError) {
  //       alert(logInError);
  //     }
  // }, [logInError]);
  // const onSubmitForm = useCallback(() => {
  //     console.log(email, password);
  //     dispatch({
  //       type: LOG_IN_REQUEST,
  //       data: { email, password },
  //     });
  // }, []);
  // 회원가입 or 로그인 창 구분


  const {
    0: signupState,
    1: setSignupState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onSignup = () => {
    setSignupState(true);
  }; // 체크박스 이벤트


  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonWrapper, {
      type: "primary",
      onClick: showDrawer,
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }, undefined), signupState ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      placement: "right",
      closable: false,
      onClose: onClose,
      visible: visible,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SignupInput, {
          value: email,
          onChange: onChangeEmail,
          placeholder: "\uC774\uBA54\uC77C",
          type: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SignupInput, {
          placeholder: "\uB2C9\uB124\uC784",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SignupInput, {
          value: password,
          onChange: onChangePassword,
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SignupInput, {
          placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
          type: "password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DivWrapper, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            children: "\uC81C1\uC870(\uBAA9\uC801) \uC774 \uC57D\uAD00\uC740 \uC5D0\uCF54\uC5D0\uCF54\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC778\uD130\uB137 \uAD00\uB828 \uC11C\uBE44\uC2A4(\uC774\uD558 \"\uC11C\uBE44\uC2A4\"\uB77C \uD55C\uB2E4)\uB97C \uC6A9\uD568\uC5D0 \uC788\uC5B4 \uC0AC\uC774\uBC84\uBAB0\uACFC \uC774\uC6A9\uC790\uC758 \uAD8C\uB9AC\xB7\uC758\uBB34 \uBC0F \uCC45\uC784\uC0AC\uD56D\uC744 \uADDC\uC815\uD568\uC744 \uBAA9\uC801\uC73C\uB85C \uD569\uB2C8\uB2E4. \uC81C2\uC870(\uC815\uC758) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\" \uC774\uB780 \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC744 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uAE30 \uC704\uD558\uC5EC \uCEF4\uD4E8\uD130\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uB97C \uC774\uC6A9\uD558\uC5EC \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC744 \uAC70\uB798\uD560 \uC218 \uC788\uB3C4\uB85D \uC124\uC815\uD55C \uAC00\uC0C1\uC758 \uC5EC\uB7EC\uC7A5\uC744 \uB9D0\uD558\uBA70, \uC544\uC6B8\uB7EC \uC0AC\uC774\uBC84\uBAB0\uC744 \uC6B4\uC601\uD558\uB294 \uC0AC\uC5C5\uC790\uC758 \uC758\uBBF8\uB85C\uB3C4 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \u2461 \"\uC774\uC6A9\uC790\"\uB780 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uC811\uC18D\uD558\uC5EC \uC774 \uC57D\uAD00\uC5D0 \uB530\uB77C \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uBC1B\uB294 \uD68C\uC6D0 \uBC0F \uBE44\uD68C\uC6D0\uC744 \uB9D0\uD569\uB2C8\uB2E4. \u2462 '\uD68C\uC6D0'\uC774\uB77C \uD568\uC740 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uD558\uC5EC \uD68C\uC6D0\uB4F1\uB85D\uC744 \uD55C \uC790\uB85C\uC11C, \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uC815\uBCF4\uB97C \uC9C0\uC18D\uC801\uC73C\uB85C \uC81C\uACF5\uBC1B\uC73C\uBA70, \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uACC4\uC18D\uC801\uC73C\uB85C \uC774\uC6A9\uD560 \uC218 \uC788\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4. \u2463 '\uBE44\uD68C\uC6D0'\uC774\uB77C \uD568\uC740 \uD68C\uC6D0\uC5D0 \uAC00\uC785\uD558\uC9C0 \uC54A\uACE0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC81C\uACF5\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uB294 \uC790\uB97C \uB9D0\uD569\uB2C8\uB2E4. \uC81C3\uC870 (\uC57D\uAD00\uC758 \uBA85\uC2DC\uC640 \uAC1C\uC815) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774 \uC57D\uAD00\uC758 \uB0B4\uC6A9\uACFC \uC0C1\uD638, \uC601\uC5C5\uC18C \uC18C\uC7AC\uC9C0, \uB300\uD45C\uC790\uC758 \uC131\uBA85, \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638, \uC5F0\uB77D\uCC98(\uC804\uD654, \uD329\uC2A4, \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C \uB4F1) \uB4F1\uC744 \uC774\uC6A9\uC790\uAC00 \uC54C \uC218 \uC788\uB3C4\uB85D \uC11C\uBE44\uC2A4\uD654\uBA74(\uC804\uBA74)\uC5D0 \uAC8C\uC2DC\uD569\uB2C8\uB2E4. \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC57D\uAD00\uC758\uADDC\uC81C\uB4F1\uC5D0\uAD00\uD55C\uBC95\uB960, \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95, \uC804\uC790\uC11C\uBA85\uBC95, \uC815\uBCF4\uD1B5\uC2E0\uB9DD\uC774\uC6A9\uCD09\uC9C4\uB4F1\uC5D0\uAD00\uD55C\uBC95\uB960, \uBC29\uBB38\uD310\uB9E4\uB4F1\uC5D0\uAD00\uD55C\uBC95\uB960, \uC18C\uBE44\uC790\uBCF4\uD638\uBC95 \uB4F1 \uAD00\uB828\uBC95\uC744 \uC704\uBC30\uD558\uC9C0 \uC54A\uB294 \uBC94\uC704\uC5D0\uC11C \uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uC801\uC6A9\uC77C\uC790 \uBC0F \uAC1C\uC815\uC0AC\uC720\uB97C \uBA85\uC2DC\uD558\uC5EC \uD604\uD589\uC57D\uAD00\uACFC \uD568\uAED8 \uBAB0\uC758 \uCD08\uAE30\uD654\uBA74\uC5D0 \uADF8 \uC801\uC6A9\uC77C\uC790 7\uC77C\uC774\uC804\uBD80\uD130 \uC801\uC6A9\uC77C\uC790 \uC804\uC77C\uAE4C\uC9C0 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \u2463 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC57D\uAD00\uC744 \uAC1C\uC815\uD560 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC1C\uC815\uC57D\uAD00\uC740 \uADF8 \uC801\uC6A9\uC77C\uC790 \uC774\uD6C4\uC5D0 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0\uB9CC \uC801\uC6A9\uB418\uACE0 \uADF8 \uC774\uC804\uC5D0 \uC774\uBBF8 \uCCB4\uACB0\uB41C \uACC4\uC57D\uC5D0 \uB300\uD574\uC11C\uB294 \uAC1C\uC815\uC804\uC758 \uC57D\uAD00\uC870\uD56D\uC774 \uADF8\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4. \uB2E4\uB9CC \uC774\uBBF8 \uACC4\uC57D\uC744 \uCCB4\uACB0\uD55C \uC774\uC6A9\uC790\uAC00 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC758 \uC801\uC6A9\uC744 \uBC1B\uAE30\uB97C \uC6D0\uD558\uB294 \uB73B\uC744 \uC81C3\uD56D\uC5D0 \uC758\uD55C \uAC1C\uC815\uC57D\uAD00\uC758 \uACF5\uC9C0\uAE30\uAC04\uB0B4\uC5D0 '\uBAB0\"\uC5D0 \uC1A1\uC2E0\uD558\uC5EC \"\uBAB0\"\uC758 \uB3D9\uC758\uB97C \uBC1B\uC740 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC815\uC57D\uAD00 \uC870\uD56D\uC774 \uC801\uC6A9\uB429\uB2C8\uB2E4. \u2464 \uC774 \uC57D\uAD00\uC5D0\uC11C \uC815\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0AC\uD56D\uACFC \uC774 \uC57D\uAD00\uC758 \uD574\uC11D\uC5D0 \uAD00\uD558\uC5EC\uB294 \uC815\uBD80\uAC00 \uC81C\uC815\uD55C \uC804\uC790\uAC70\uB798\uC18C\uBE44\uC790\uBCF4\uD638\uC9C0\uCE68 \uBC0F \uAD00\uACC4\uBC95\uB839 \uB610\uB294 \uC0C1\uAD00\uB840\uC5D0 \uB530\uB985\uB2C8\uB2E4. \uC81C4\uC870(\uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5 \uBC0F \uBCC0\uACBD) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC5C5\uBB34\uB97C \uC218\uD589\uD569\uB2C8\uB2E4. 1. \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC5D0 \uB300\uD55C \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uAD6C\uB9E4\uACC4\uC57D\uC758 \uCCB4\uACB0 2. \uAD6C\uB9E4\uACC4\uC57D\uC774 \uCCB4\uACB0\uB41C \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC758 \uBC30\uC1A1 3. \uAE30\uD0C0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC815\uD558\uB294 \uC5C5\uBB34 \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC7AC\uD654\uC758 \uD488\uC808 \uB610\uB294 \uAE30\uC220\uC801 \uC0AC\uC591\uC758 \uBCC0\uACBD \uB4F1\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC7A5\uCC28 \uCCB4\uACB0\uB418\uB294 \uACC4\uC57D\uC5D0 \uC758\uD574 \uC81C\uACF5\uD560 \uC7AC\uD654\xB7\uC6A9\uC5ED\uC758 \uB0B4\uC6A9\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 \uBCC0\uACBD\uB41C \uC7AC\uD654\xB7\uC6A9\uC5ED\uC758 \uB0B4\uC6A9 \uBC0F \uC81C\uACF5\uC77C\uC790\uB97C \uBA85\uC2DC\uD558\uC5EC \uD604\uC7AC\uC758 \uC7AC\uD654\xB7\uC6A9\uC5ED\uC758 \uB0B4\uC6A9\uC744 \uAC8C\uC2DC\uD55C \uACF3\uC5D0 \uADF8 \uC81C\uACF5\uC77C\uC790 \uC774\uC804 7\uC77C\uBD80\uD130 \uACF5\uC9C0\uD569\uB2C8\uB2E4. \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC81C\uACF5\uD558\uAE30\uB85C \uC774\uC6A9\uC790\uC640 \uACC4\uC57D\uC744 \uCCB4\uACB0\uD55C \uC11C\uBE44\uC2A4\uC758 \uB0B4\uC6A9\uC744 \uC7AC\uD654\uC758 \uD488\uC808 \uB610\uB294 \uAE30\uC220\uC801 \uC0AC\uC591\uC758 \uBCC0\uACBD\uB4F1\uC758 \uC0AC\uC720\uB85C \uBCC0\uACBD\uD560 \uACBD\uC6B0\uC5D0\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790\uAC00 \uC785\uC740 \uC190\uD574\uB97C \uBC30\uC0C1\uD569\uB2C8\uB2E4. \uB2E8, \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uACE0\uC758 \uB610\uB294 \uACFC\uC2E4\uC774 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB7EC\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4. \uC81C5\uC870(\uC11C\uBE44\uC2A4\uC758 \uC911\uB2E8) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uCEF4\uD4E8\uD130 \uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uC124\uBE44\uC758 \uBCF4\uC218\uC810\uAC80\xB7\uAD50\uCCB4 \uBC0F \uACE0\uC7A5, \uD1B5\uC2E0\uC758 \uB450\uC808 \uB4F1\uC758 \uC0AC\uC720\uAC00 \uBC1C\uC0DD\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2461 \uC81C1\uD56D\uC5D0 \uC758\uD55C \uC11C\uBE44\uC2A4 \uC911\uB2E8\uC758 \uACBD\uC6B0\uC5D0\uB294 \"\uBAB0\"\uC740 \uC81C8\uC870\uC5D0 \uC815\uD55C \uBC29\uBC95\uC73C\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD569\uB2C8\uB2E4. \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC81C1\uD56D\uC758 \uC0AC\uC720\uB85C \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC774 \uC77C\uC2DC\uC801\uC73C\uB85C \uC911\uB2E8\uB428\uC73C\uB85C \uC778\uD558\uC5EC \uC774\uC6A9\uC790 \uB610\uB294 \uC81C3\uC790\uAC00 \uC785\uC740 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC \uBC30\uC0C1\uD569\uB2C8\uB2E4. \uB2E8 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uACE0\uC758 \uB610\uB294 \uACFC\uC2E4\uC774 \uC5C6\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB7EC\uD558\uC9C0 \uC544\uB2C8\uD569\uB2C8\uB2E4. \uC81C6\uC870(\uD68C\uC6D0\uAC00\uC785) \u2460 \uC774\uC6A9\uC790\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC815\uD55C \uAC00\uC785 \uC591\uC2DD\uC5D0 \uB530\uB77C \uD68C\uC6D0\uC815\uBCF4\uB97C \uAE30\uC785\uD55C \uD6C4 \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uC758\uC0AC\uD45C\uC2DC\uB97C \uD568\uC73C\uB85C\uC11C \uD68C\uC6D0\uAC00\uC785\uC744 \uC2E0\uCCAD\uD569\uB2C8\uB2E4. \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC81C1\uD56D\uACFC \uAC19\uC774 \uD68C\uC6D0\uC73C\uB85C \uAC00\uC785\uD560 \uAC83\uC744 \uC2E0\uCCAD\uD55C \uC774\uC6A9\uC790 \uC911 \uB2E4\uC74C \uAC01\uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uD68C\uC6D0\uC73C\uB85C \uB4F1\uB85D\uD569\uB2C8\uB2E4. 1. \uAC00\uC785\uC2E0\uCCAD\uC790\uAC00 \uC774 \uC57D\uAD00 \uC81C7\uC870\uC81C3\uD56D\uC5D0 \uC758\uD558\uC5EC \uC774\uC804\uC5D0 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uD55C \uC801\uC774 \uC788\uB294 \uACBD\uC6B0, \uB2E4\uB9CC \uC81C7\uC870\uC81C3\uD56D\uC5D0 \uC758\uD55C \uD68C\uC6D0\uC790\uACA9 \uC0C1\uC2E4\uD6C4 3\uB144\uC774 \uACBD\uACFC\uD55C \uC790\uB85C\uC11C \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uD68C\uC6D0\uC7AC\uAC00\uC785 \uC2B9\uB099\uC744 \uC5BB\uC740 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD55C\uB2E4. 2. \uB4F1\uB85D \uB0B4\uC6A9\uC5D0 \uD5C8\uC704, \uAE30\uC7AC\uB204\uB77D, \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0 3. \uAE30\uD0C0 \uD68C\uC6D0\uC73C\uB85C \uB4F1\uB85D\uD558\uB294 \uAC83\uC774 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uAE30\uC220\uC0C1 \uD604\uC800\uD788 \uC9C0\uC7A5\uC774 \uC788\uB2E4\uACE0 \uD310\uB2E8\uB418\uB294 \uACBD\uC6B0 \u2462 \uD68C\uC6D0\uAC00\uC785\uACC4\uC57D\uC758 \uC131\uB9BD\uC2DC\uAE30\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uC2B9\uB099\uC774 \uD68C\uC6D0\uC5D0\uAC8C \uB3C4\uB2EC\uD55C \uC2DC\uC810\uC73C\uB85C \uD569\uB2C8\uB2E4. \u2463 \uD68C\uC6D0\uC740 \uC81C15\uC870\uC81C1\uD56D\uC5D0 \uC758\uD55C \uB4F1\uB85D\uC0AC\uD56D\uC5D0 \uBCC0\uACBD\uC774 \uC788\uB294 \uACBD\uC6B0, \uC989\uC2DC \uC804\uC790\uC6B0\uD3B8 \uAE30\uD0C0 \uBC29\uBC95\uC73C\uB85C \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uB300\uD558\uC5EC \uADF8 \uBCC0\uACBD\uC0AC\uD56D\uC744 \uC54C\uB824\uC57C \uD569\uB2C8\uB2E4. \uC81C7\uC870(\uD68C\uC6D0 \uD0C8\uD1F4 \uBC0F \uC790\uACA9 \uC0C1\uC2E4 \uB4F1) \u2460 \uD68C\uC6D0\uC740 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uC5B8\uC81C\uB4E0\uC9C0 \uD0C8\uD1F4\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC73C\uBA70 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC989\uC2DC \uD68C\uC6D0\uD0C8\uD1F4\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \u2461 \uD68C\uC6D0\uC774 \uB2E4\uC74C \uAC01\uD638\uC758 \uC0AC\uC720\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0, \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uD68C\uC6D0\uC790\uACA9\uC744 \uC81C\uD55C \uBC0F \uC815\uC9C0\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. 1. \uAC00\uC785 \uC2E0\uCCAD\uC2DC\uC5D0 \uD5C8\uC704 \uB0B4\uC6A9\uC744 \uB4F1\uB85D\uD55C \uACBD\uC6B0 2. \"\uC5D0\uCF54\uC5D0\uCF54\"\uC744 \uC774\uC6A9\uD558\uC5EC \uAD6C\uC785\uD55C \uC7AC\uD654\xB7\uC6A9\uC5ED \uB4F1\uC758 \uB300\uAE08, \uAE30\uD0C0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774\uC6A9\uC5D0 \uAD00\uB828\uD558\uC5EC \uD68C\uC6D0\uC774 \uBD80\uB2F4\uD558\uB294 \uCC44\uBB34\uB97C \uAE30\uC77C\uC5D0 \uC9C0\uAE09\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0 3. \uB2E4\uB978 \uC0AC\uB78C\uC758 \"\uC5D0\uCF54\uC5D0\uCF54\" \uC774\uC6A9\uC744 \uBC29\uD574\uD558\uAC70\uB098 \uADF8 \uC815\uBCF4\uB97C \uB3C4\uC6A9\uD558\uB294 \uB4F1 \uC804\uC790\uAC70\uB798\uC9C8\uC11C\uB97C \uC704\uD611\uD558\uB294 \uACBD\uC6B0 4. \"\uC5D0\uCF54\uC5D0\uCF54\"\uC744 \uC774\uC6A9\uD558\uC5EC \uBC95\uB839\uACFC \uC774 \uC57D\uAD00\uC774 \uAE08\uC9C0\uD558\uAC70\uB098 \uACF5\uC11C\uC591\uC18D\uC5D0 \uBC18\uD558\uB294 \uD589\uC704\uB97C \uD558\uB294 \uACBD\uC6B0 \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uD68C\uC6D0 \uC790\uACA9\uC744 \uC81C\uD55C\xB7\uC815\uC9C0 \uC2DC\uD0A8\uD6C4, \uB3D9\uC77C\uD55C \uD589\uC704\uAC00 2\uD68C\uC774\uC0C1 \uBC18\uBCF5\uB418\uAC70\uB098 30\uC77C\uC774\uB0B4\uC5D0 \uADF8 \uC0AC\uC720\uAC00 \uC2DC\uC815\uB418\uC9C0 \uC544\uB2C8\uD558\uB294 \uACBD\uC6B0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2463 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uD68C\uC6D0\uC790\uACA9\uC744 \uC0C1\uC2E4\uC2DC\uD0A4\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD68C\uC6D0\uB4F1\uB85D\uC744 \uB9D0\uC18C\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD68C\uC6D0\uC5D0\uAC8C \uC774\uB97C \uD1B5\uC9C0\uD558\uACE0, \uD68C\uC6D0\uB4F1\uB85D \uB9D0\uC18C\uC804\uC5D0 \uC18C\uBA85\uD560 \uAE30\uD68C\uB97C \uBD80\uC5EC\uD569\uB2C8\uB2E4. \uC81C8\uC870(\uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0\uB97C \uD558\uB294 \uACBD\uC6B0, \uD68C\uC6D0\uC774 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uC81C\uCD9C\uD55C \uC804\uC790\uC6B0\uD3B8 \uC8FC\uC18C\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uBD88\uD2B9\uC815\uB2E4\uC218 \uD68C\uC6D0\uC5D0 \uB300\uD55C \uD1B5\uC9C0\uC758 \uACBD\uC6B0 1\uC8FC\uC77C\uC774\uC0C1 \"\uC5D0\uCF54\uC5D0\uCF54\" \uAC8C\uC2DC\uD310\uC5D0 \uAC8C\uC2DC\uD568\uC73C\uB85C\uC11C \uAC1C\uBCC4 \uD1B5\uC9C0\uC5D0 \uAC08\uC74C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 9\uC870(\uAD6C\uB9E4\uC2E0\uCCAD) \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774\uC6A9\uC790\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC0C1\uC5D0\uC11C \uC774\uD558\uC758 \uBC29\uBC95\uC5D0 \uC758\uD558\uC5EC \uAD6C\uB9E4\uB97C \uC2E0\uCCAD\uD569\uB2C8\uB2E4. 1. \uC131\uBA85, \uC8FC\uC18C, \uC804\uD654\uBC88\uD638 \uC785\uB825 2. \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC758 \uC120\uD0DD 3. \uACB0\uC81C\uBC29\uBC95\uC758 \uC120\uD0DD 4. \uC774 \uC57D\uAD00\uC5D0 \uB3D9\uC758\uD55C\uB2E4\uB294 \uD45C\uC2DC(\uC608, \uB9C8\uC6B0\uC2A4 \uD074\uB9AD) \uC81C10\uC870 (\uACC4\uC57D\uC758 \uC131\uB9BD) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC81C9\uC870\uC640 \uAC19\uC740 \uAD6C\uB9E4\uC2E0\uCCAD\uC5D0 \uB300\uD558\uC5EC \uB2E4\uC74C \uAC01\uD638\uC5D0 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294 \uD55C \uC2B9\uB099\uD569\uB2C8\uB2E4. 1. \uC2E0\uCCAD \uB0B4\uC6A9\uC5D0 \uD5C8\uC704, \uAE30\uC7AC\uB204\uB77D, \uC624\uAE30\uAC00 \uC788\uB294 \uACBD\uC6B0 2. \uBBF8\uC131\uB144\uC790\uAC00 \uB2F4\uBC30, \uC8FC\uB958\uB4F1 \uCCAD\uC18C\uB144\uBCF4\uD638\uBC95\uC5D0\uC11C \uAE08\uC9C0\uD558\uB294 \uC7AC\uD654 \uBC0F \uC6A9\uC5ED\uC744 \uAD6C\uB9E4\uD558\uB294 \uACBD\uC6B0 3. \uAE30\uD0C0 \uAD6C\uB9E4\uC2E0\uCCAD\uC5D0 \uC2B9\uB099\uD558\uB294 \uAC83\uC774 \"\uC5D0\uCF54\uC5D0\uCF54\" \uAE30\uC220\uC0C1 \uD604\uC800\uD788 \uC9C0\uC7A5\uC774 \uC788\uB2E4\uACE0 \uD310\uB2E8\uD558\uB294 \uACBD\uC6B0 \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uC2B9\uB099\uC774 \uC81C12\uC870\uC81C1\uD56D\uC758 \uC218\uC2E0\uD655\uC778\uD1B5\uC9C0\uD615\uD0DC\uB85C \uC774\uC6A9\uC790\uC5D0\uAC8C \uB3C4\uB2EC\uD55C \uC2DC\uC810\uC5D0 \uACC4\uC57D\uC774 \uC131\uB9BD\uD55C \uAC83\uC73C\uB85C \uBD05\uB2C8\uB2E4. \uC81C11\uC870(\uC9C0\uAE09\uBC29\uBC95) \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0\uC11C \uAD6C\uB9E4\uD55C \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC5D0 \uB300\uD55C \uB300\uAE08\uC9C0\uAE09\uBC29\uBC95\uC740 \uB2E4\uC74C \uAC01\uD638\uC758 \uD558\uB098\uB85C \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. 1. \uACC4\uC88C\uC774\uCCB4 2. \uC2E0\uC6A9\uCE74\uB4DC\uACB0\uC81C 3. \uC628\uB77C\uC778\uBB34\uD1B5\uC7A5\uC785\uAE08 4. \uC804\uC790\uD654\uD3D0\uC5D0 \uC758\uD55C \uACB0\uC81C \uC81C12\uC870(\uC218\uC2E0\uD655\uC778\uD1B5\uC9C0\xB7\uAD6C\uB9E4\uC2E0\uCCAD \uBCC0\uACBD \uBC0F \uCDE8\uC18C) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uC758 \uAD6C\uB9E4\uC2E0\uCCAD\uC774 \uC788\uB294 \uACBD\uC6B0 \uC774\uC6A9\uC790\uC5D0\uAC8C \uC218\uC2E0\uD655\uC778\uD1B5\uC9C0\uB97C \uD569\uB2C8\uB2E4. \u2461 \uC218\uC2E0\uD655\uC778\uD1B5\uC9C0\uB97C \uBC1B\uC740 \uC774\uC6A9\uC790\uB294 \uC758\uC0AC\uD45C\uC2DC\uC758 \uBD88\uC77C\uCE58\uB4F1\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uC218\uC2E0\uD655\uC778\uD1B5\uC9C0\uB97C \uBC1B\uC740 \uD6C4 \uC989\uC2DC \uAD6C\uB9E4\uC2E0\uCCAD \uBCC0\uACBD \uBC0F \uCDE8\uC18C\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uBC30\uC1A1\uC804 \uC774\uC6A9\uC790\uC758 \uAD6C\uB9E4\uC2E0\uCCAD \uBCC0\uACBD \uBC0F \uCDE8\uC18C \uC694\uCCAD\uC774 \uC788\uB294 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uADF8 \uC694\uCCAD\uC5D0 \uB530\uB77C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC81C13\uC870(\uBC30\uC1A1) \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uAC00 \uAD6C\uB9E4\uD55C \uC7AC\uD654\uC5D0 \uB300\uD574 \uBC30\uC1A1\uC218\uB2E8, \uC218\uB2E8\uBCC4 \uBC30\uC1A1\uBE44\uC6A9 \uBD80\uB2F4\uC790, \uC218\uB2E8\uBCC4 \uBC30\uC1A1\uAE30\uAC04 \uB4F1\uC744 \uBA85\uC2DC\uD569\uB2C8\uB2E4. \uB9CC\uC57D \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uACE0\uC758\xB7\uACFC\uC2E4\uB85C \uC57D\uC815 \uBC30\uC1A1\uAE30\uAC04\uC744 \uCD08\uACFC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uADF8\uB85C \uC778\uD55C \uC774\uC6A9\uC790\uC758 \uC190\uD574\uB97C \uBC30\uC0C1\uD569\uB2C8\uB2E4. \uC81C14\uC870(\uD658\uAE09, \uBC18\uD488 \uBC0F \uAD50\uD658) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uAC00 \uAD6C\uB9E4\uC2E0\uCCAD\uD55C \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC774 \uD488\uC808\uB4F1\uC758 \uC0AC\uC720\uB85C \uC7AC\uD654\uC758 \uC778\uB3C4 \uB610\uB294 \uC6A9\uC5ED\uC758 \uC81C\uACF5\uC744 \uD560 \uC218 \uC5C6\uC744 \uB54C\uC5D0\uB294 \uC9C0\uCCB4\uC5C6\uC774 \uADF8 \uC0AC\uC720\uB97C \uC774\uC6A9\uC790\uC5D0\uAC8C \uD1B5\uC9C0\uD558\uACE0, \uC0AC\uC804\uC5D0 \uC7AC\uD654 \uB610\uB294 \uC6A9\uC5ED\uC758 \uB300\uAE08\uC744 \uBC1B\uC740 \uACBD\uC6B0\uC5D0\uB294 \uB300\uAE08\uC744 \uBC1B\uC740 \uB0A0\uBD80\uD130 3\uC77C\uC774\uB0B4\uC5D0, \uADF8\uB807\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uC0AC\uC720\uBC1C\uC0DD\uC77C\uB85C\uBD80\uD130 3\uC77C\uC774\uB0B4\uC5D0 \uACC4\uC57D\uD574\uC81C \uBC0F \uD658\uAE09\uC808\uCC28\uB97C \uCDE8\uD569\uB2C8\uB2E4. \u2461 \uB2E4\uC74C \uAC01\uD638\uC758 \uACBD\uC6B0\uC5D0\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uBC30\uC1A1\uB41C \uC7AC\uD654\uC77C\uC9C0\uB77C\uB3C4 \uC7AC\uD654\uB97C \uBC18\uD488\uBC1B\uC740 \uB2E4\uC74C \uC601\uC5C5\uC77C \uC774\uB0B4\uC5D0 \uC774\uC6A9\uC790\uC758 \uC694\uAD6C\uC5D0 \uB530\uB77C \uC989\uC2DC \uD658\uAE09, \uBC18\uD488 \uBC0F \uAD50\uD658 \uC870\uCE58\uB97C \uD569\uB2C8\uB2E4. \uB2E4\uB9CC \uADF8 \uC694\uAD6C\uAE30\uD55C\uC740 \uBC30\uC1A1\uB41C \uB0A0\uB85C\uBD80\uD130 20\uC77C \uC774\uB0B4\uB85C \uD569\uB2C8\uB2E4. 1. \uBC30\uC1A1\uB41C \uC7AC\uD654\uAC00 \uC8FC\uBB38\uB0B4\uC6A9\uACFC \uC0C1\uC774\uD558\uAC70\uB098 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC81C\uACF5\uD55C \uC815\uBCF4\uC640 \uC0C1\uC774\uD560 \uACBD\uC6B0 2. \uBC30\uC1A1\uB41C \uC7AC\uD654\uAC00 \uD30C\uC190, \uC190\uC0C1\uB418\uC5C8\uAC70\uB098 \uC624\uC5FC\uB418\uC5C8\uC744 \uACBD\uC6B0 3. \uC7AC\uD654\uAC00 \uAD11\uACE0\uC5D0 \uD45C\uC2DC\uB41C \uBC30\uC1A1\uAE30\uAC04\uBCF4\uB2E4 \uB2A6\uAC8C \uBC30\uC1A1\uB41C \uACBD\uC6B0 4. \uBC29\uBB38\uD310\uB9E4\uB4F1\uC5D0\uAD00\uD55C\uBC95\uB960 \uC81C18\uC870\uC5D0 \uC758\uD558\uC5EC \uAD11\uACE0\uC5D0 \uD45C\uC2DC\uD558\uC5EC\uC57C \uD560 \uC0AC\uD56D\uC744 \uD45C\uC2DC\uD558\uC9C0 \uC544\uB2C8\uD55C \uC0C1\uD0DC\uC5D0\uC11C \uC774\uC6A9\uC790\uC758 \uCCAD\uC57D\uC774 \uC774\uB8E8\uC5B4\uC9C4 \uACBD\uC6B0 \uC81C15\uC870(\uAC1C\uC778\uC815\uBCF4\uBCF4\uD638) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uC758 \uC815\uBCF4\uC218\uC9D1\uC2DC \uAD6C\uB9E4\uACC4\uC57D \uC774\uD589\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C\uD55C\uC758 \uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4. \uB2E4\uC74C \uC0AC\uD56D\uC744 \uD544\uC218\uC0AC\uD56D\uC73C\uB85C \uD558\uBA70 \uADF8 \uC678 \uC0AC\uD56D\uC740 \uC120\uD0DD\uC0AC\uD56D\uC73C\uB85C \uD569\uB2C8\uB2E4. 1. \uC131\uBA85 2. \uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638(\uD68C\uC6D0\uC758 \uACBD\uC6B0) 3. \uC8FC\uC18C 4. \uC804\uD654\uBC88\uD638 5. \uD76C\uB9DDID(\uD68C\uC6D0\uC758 \uACBD\uC6B0) 6. \uBE44\uBC00\uBC88\uD638(\uD68C\uC6D0\uC758 \uACBD\uC6B0) \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC2DD\uBCC4\uC774 \uAC00\uB2A5\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uB294 \uB54C\uC5D0\uB294 \uBC18\uB4DC\uC2DC \uB2F9\uD574 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uBC1B\uC2B5\uB2C8\uB2E4. \u2462 \uC81C\uACF5\uB41C \uAC1C\uC778\uC815\uBCF4\uB294 \uB2F9\uD574 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uC5C6\uC774 \uBAA9\uC801\uC678\uC758 \uC774\uC6A9\uC774\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD560 \uC218 \uC5C6\uC73C\uBA70, \uC774\uC5D0 \uB300\uD55C \uBAA8\uB4E0 \uCC45\uC784\uC740 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC9D1\uB2C8\uB2E4. \uB2E4\uB9CC, \uB2E4\uC74C\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4. 1. \uBC30\uC1A1\uC5C5\uBB34\uC0C1 \uBC30\uC1A1\uC5C5\uCCB4\uC5D0\uAC8C \uBC30\uC1A1\uC5D0 \uD544\uC694\uD55C \uCD5C\uC18C\uD55C\uC758 \uC774\uC6A9\uC790\uC758 \uC815\uBCF4(\uC131\uBA85, \uC8FC\uC18C, \uC804\uD654\uBC88\uD638)\uB97C \uC54C\uB824\uC8FC\uB294 \uACBD\uC6B0 2. \uD1B5\uACC4\uC791\uC131, \uD559\uC220\uC5F0\uAD6C \uB610\uB294 \uC2DC\uC7A5\uC870\uC0AC\uB97C \uC704\uD558\uC5EC \uD544\uC694\uD55C \uACBD\uC6B0\uB85C\uC11C \uD2B9\uC815 \uAC1C\uC778\uC744 \uC2DD\uBCC4\uD560 \uC218 \uC5C6\uB294 \uD615\uD0DC\uB85C \uC81C\uACF5\uD558\uB294 \uACBD\uC6B0 \u2463 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC81C2\uD56D\uACFC \uC81C3\uD56D\uC5D0 \uC758\uD574 \uC774\uC6A9\uC790\uC758 \uB3D9\uC758\uB97C \uBC1B\uC544\uC57C \uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC778\uC815\uBCF4\uAD00\uB9AC \uCC45\uC784\uC790\uC758 \uC2E0\uC6D0(\uC18C\uC18D, \uC131\uBA85 \uBC0F \uC804\uD654\uBC88\uD638 \uAE30\uD0C0 \uC5F0\uB77D\uCC98), \uC815\uBCF4\uC758 \uC218\uC9D1\uBAA9\uC801 \uBC0F \uC774\uC6A9\uBAA9\uC801, \uC81C3\uC790\uC5D0 \uB300\uD55C \uC815\uBCF4\uC81C\uACF5 \uAD00\uB828\uC0AC\uD56D(\uC81C\uACF5\uBC1B\uB294\uC790, \uC81C\uACF5\uBAA9\uC801 \uBC0F \uC81C\uACF5\uD560 \uC815\uBCF4\uC758 \uB0B4\uC6A9)\uB4F1 \uC815\uBCF4\uD1B5\uC2E0\uB9DD\uC774\uC6A9\uCD09\uC9C4\uB4F1\uC5D0\uAD00\uD55C\uBC95\uB960 \uC81C16\uC870\uC81C3\uD56D\uC774 \uADDC\uC815\uD55C \uC0AC\uD56D\uC744 \uBBF8\uB9AC \uBA85\uC2DC\uD558\uAC70\uB098 \uACE0\uC9C0\uD574\uC57C \uD558\uBA70 \uC774\uC6A9\uC790\uB294 \uC5B8\uC81C\uB4E0\uC9C0 \uC774 \uB3D9\uC758\uB97C \uCCA0\uD68C\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \u2464 \uC774\uC6A9\uC790\uB294 \uC5B8\uC81C\uB4E0\uC9C0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uAC00\uC9C0\uACE0 \uC788\uB294 \uC790\uC2E0\uC758 \uAC1C\uC778\uC815\uBCF4\uC5D0 \uB300\uD574 \uC5F4\uB78C \uBC0F \uC624\uB958\uC815\uC815\uC744 \uC694\uAD6C\uD560 \uC218 \uC788\uC73C\uBA70 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC5D0 \uB300\uD574 \uC9C0\uCCB4\uC5C6\uC774 \uD544\uC694\uD55C \uC870\uCE58\uB97C \uCDE8\uD560 \uC758\uBB34\uB97C \uC9D1\uB2C8\uB2E4. \uC774\uC6A9\uC790\uAC00 \uC624\uB958\uC758 \uC815\uC815\uC744 \uC694\uAD6C\uD55C \uACBD\uC6B0\uC5D0\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uADF8 \uC624\uB958\uB97C \uC815\uC815\uD560 \uB54C\uAE4C\uC9C0 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC774\uC6A9\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \u2465 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uB97C \uC704\uD558\uC5EC \uAD00\uB9AC\uC790\uB97C \uD55C\uC815\uD558\uC5EC \uADF8 \uC218\uB97C \uCD5C\uC18C\uD654\uD558\uBA70 \uC2E0\uC6A9\uCE74\uB4DC, \uC740\uD589\uACC4\uC88C \uB4F1\uC744 \uD3EC\uD568\uD55C \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uC758 \uBD84\uC2E4, \uB3C4\uB09C, \uC720\uCD9C, \uBCC0\uC870 \uB4F1\uC73C\uB85C \uC778\uD55C \uC774\uC6A9\uC790\uC758 \uC190\uD574\uC5D0 \uB300\uD558\uC5EC \uBAA8\uB4E0 \uCC45\uC784\uC744 \uC9D1\uB2C8\uB2E4. \u2466 \"\uC5D0\uCF54\uC5D0\uCF54\" \uB610\uB294 \uADF8\uB85C\uBD80\uD130 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C\uACF5\uBC1B\uC740 \uC81C3\uC790\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1\uBAA9\uC801 \uB610\uB294 \uC81C\uACF5\uBC1B\uC740 \uBAA9\uC801\uC744 \uB2EC\uC131\uD55C \uB54C\uC5D0\uB294 \uB2F9\uD574 \uAC1C\uC778\uC815\uBCF4\uB97C \uC9C0\uCCB4\uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uC81C16\uC870(\"\uBAB0\"\uC758 \uC758\uBB34) \u2460 \"\uBAB0\uC740 \uBC95\uB839\uACFC \uC774 \uC57D\uAD00\uC774 \uAE08\uC9C0\uD558\uAC70\uB098 \uACF5\uC11C\uC591\uC18D\uC5D0 \uBC18\uD558\uB294 \uD589\uC704\uB97C \uD558\uC9C0 \uC54A\uC73C\uBA70 \uC774 \uC57D\uAD00\uC774 \uC815\uD558\uB294 \uBC14\uC5D0 \uB530\uB77C \uC9C0\uC18D\uC801\uC774\uACE0, \uC548\uC815\uC801\uC73C\uB85C \uC7AC\uD654\xB7\uC6A9\uC5ED\uC744 \uC81C\uACF5\uD558\uB294 \uB370 \uCD5C\uC120\uC744 \uB2E4\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4. \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uAC00 \uC548\uC804\uD558\uAC8C \uC778\uD130\uB137 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD560 \uC218 \uC788\uB3C4\uB85D \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4(\uC2E0\uC6A9\uC815\uBCF4 \uD3EC\uD568)\uBCF4\uD638\uB97C \uC704\uD55C \uBCF4\uC548 \uC2DC\uC2A4\uD15C\uC744 \uAC16\uCD94\uC5B4\uC57C \uD569\uB2C8\uB2E4. \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC0C1\uD488\uC774\uB098 \uC6A9\uC5ED\uC5D0 \uB300\uD558\uC5EC \u300C\uD45C\uC2DC\xB7\uAD11\uACE0\uC758\uACF5\uC815\uD654\uC5D0\uAD00\uD55C\uBC95\uB960\u300D \uC81C3\uC870 \uC18C\uC815\uC758 \uBD80\uB2F9\uD55C \uD45C\uC2DC\xB7\uAD11\uACE0\uD589\uC704\uB97C \uD568\uC73C\uB85C\uC368 \uC774\uC6A9\uC790\uAC00 \uC190\uD574\uB97C \uC785\uC740 \uB54C\uC5D0\uB294 \uC774\uB97C \uBC30\uC0C1\uD560 \uCC45\uC784\uC744 \uC9D1\uB2C8\uB2E4. \u2463 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uAC00 \uC6D0\uD558\uC9C0 \uC54A\uB294 \uC601\uB9AC\uBAA9\uC801\uC758 \uAD11\uACE0\uC131 \uC804\uC790\uC6B0\uD3B8\uC744 \uBC1C\uC1A1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC81C17\uC870( \uD68C\uC6D0\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uC5D0 \uB300\uD55C \uC758\uBB34) \u2460 \uC81C15\uC870\uC758 \uACBD\uC6B0\uB97C \uC81C\uC678\uD55C ID\uC640 \uBE44\uBC00\uBC88\uD638\uC5D0 \uAD00\uD55C \uAD00\uB9AC\uCC45\uC784\uC740 \uD68C\uC6D0\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4. \u2461 \uD68C\uC6D0\uC740 \uC790\uC2E0\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC774\uC6A9\uD558\uAC8C \uD574\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \u2462 \uD68C\uC6D0\uC774 \uC790\uC2E0\uC758 ID \uBC0F \uBE44\uBC00\uBC88\uD638\uB97C \uB3C4\uB09C\uB2F9\uD558\uAC70\uB098 \uC81C3\uC790\uAC00 \uC0AC\uC6A9\uD558\uACE0 \uC788\uC74C\uC744 \uC778\uC9C0\uD55C \uACBD\uC6B0\uC5D0\uB294 \uBC14\uB85C \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uD1B5\uBCF4\uD558\uACE0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uC548\uB0B4\uAC00 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uADF8\uC5D0 \uB530\uB77C\uC57C \uD569\uB2C8\uB2E4. \uC81C18\uC870(\uC774\uC6A9\uC790\uC758 \uC758\uBB34) \uC774\uC6A9\uC790\uB294 \uB2E4\uC74C \uD589\uC704\uB97C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. 1. \uC2E0\uCCAD \uB610\uB294 \uBCC0\uACBD\uC2DC \uD5C8\uC704\uB0B4\uC6A9\uC758 \uB4F1\uB85D 2. \"\uC5D0\uCF54\uC5D0\uCF54\"\uC5D0 \uAC8C\uC2DC\uB41C \uC815\uBCF4\uC758 \uBCC0\uACBD 3. \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uC815\uD55C \uC815\uBCF4 \uC774\uC678\uC758 \uC815\uBCF4(\uCEF4\uD4E8\uD130 \uD504\uB85C\uADF8\uB7A8 \uB4F1)\uC758 \uC1A1\uC2E0 \uB610\uB294 \uAC8C\uC2DC 4. \"\uC5D0\uCF54\uC5D0\uCF54\" \uAE30\uD0C0 \uC81C3\uC790\uC758 \uC800\uC791\uAD8C \uB4F1 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC5D0 \uB300\uD55C \uCE68\uD574 5. \"\uC5D0\uCF54\uC5D0\uCF54\" \uAE30\uD0C0 \uC81C3\uC790\uC758 \uBA85\uC608\uB97C \uC190\uC0C1\uC2DC\uD0A4\uAC70\uB098 \uC5C5\uBB34\uB97C \uBC29\uD574\uD558\uB294 \uD589\uC704 6. \uC678\uC124 \uB610\uB294 \uD3ED\uB825\uC801\uC778 \uBA54\uC2DC\uC9C0\xB7\uD654\uC0C1\xB7\uC74C\uC131 \uAE30\uD0C0 \uACF5\uC11C\uC591\uC18D\uC5D0 \uBC18\uD558\uB294 \uC815\uBCF4\uB97C \uBAB0\uC5D0 \uACF5\uAC1C \uB610\uB294 \uAC8C\uC2DC\uD558\uB294 \uD589\uC704 \uC81C19\uC870(\uC5F0\uACB0\"\uC5D0\uCF54\uC5D0\uCF54\"\uACFC \uD53C\uC5F0\uACB0\"\uC5D0\uCF54\uC5D0\uCF54\" \uAC04\uC758 \uAD00\uACC4) \u2460 \uC0C1\uC704 \"\uC5D0\uCF54\uC5D0\uCF54\"\uACFC \uD558\uC704 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uD558\uC774\uD37C \uB9C1\uD06C(\uC608: \uD558\uC774\uD37C \uB9C1\uD06C\uC758 \uB300\uC0C1\uC5D0\uB294 \uBB38\uC790, \uADF8\uB9BC \uBC0F \uB3D9\uD654\uC0C1 \uB4F1\uC774 \uD3EC\uD568\uB428)\uBC29\uC2DD \uB4F1\uC73C\uB85C \uC5F0\uACB0\uB41C \uACBD\uC6B0, \uC804\uC790\uB97C \uC5F0\uACB0 \"\uC5D0\uCF54\uC5D0\uCF54\"(\uC6F9 \uC0AC\uC774\uD2B8)\uC774\uB77C\uACE0 \uD558\uACE0 \uD6C4\uC790\uB97C \uD53C\uC5F0\uACB0 \"\uC5D0\uCF54\uC5D0\uCF54\"(\uC6F9\uC0AC\uC774\uD2B8)\uC774\uB77C\uACE0 \uD569\uB2C8\uB2E4. \u2461 \uC5F0\uACB0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uD53C\uC5F0\uACB0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC774 \uB3C5\uC790\uC801\uC73C\uB85C \uC81C\uACF5\uD558\uB294 \uC7AC\uD654\xB7\uC6A9\uC5ED\uC5D0 \uC758\uD558\uC5EC \uC774\uC6A9\uC790\uC640 \uD589\uD558\uB294 \uAC70\uB798\uC5D0 \uB300\uD574\uC11C \uBCF4\uC99D\uCC45\uC784\uC744\uC9C0\uC9C0 \uC54A\uB294\uB2E4\uB294 \uB73B\uC744 \uC5F0\uACB0 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uBA85\uC2DC\uD55C \uACBD\uC6B0\uC5D0\uB294 \uADF8 \uAC70\uB798\uC5D0 \uB300\uD55C \uBCF4\uC99D\uCC45\uC784\uC744\uC9C0\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC81C20\uC870(\uC800\uC791\uAD8C\uC758 \uADC0\uC18D \uBC0F \uC774\uC6A9\uC81C\uD55C) \u2460 \"\uBAB0\"\uC774 \uC791\uC131\uD55C \uC800\uC791\uBB3C\uC5D0 \uB300\uD55C \uC800\uC791\uAD8C \uAE30\uD0C0 \uC9C0\uC801\uC7AC\uC0B0\uAD8C\uC740 \"\uBAB0\"\uC5D0 \uADC0\uC18D\uD569\uB2C8\uB2E4. \u2461 \uC774\uC6A9\uC790\uB294 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC744 \uC774\uC6A9\uD568\uC73C\uB85C\uC368 \uC5BB\uC740 \uC815\uBCF4\uB97C \"\uC5D0\uCF54\uC5D0\uCF54\"\uC758 \uC0AC\uC804 \uC2B9\uB099\uC5C6\uC774 \uBCF5\uC81C, \uC1A1\uC2E0, \uCD9C\uD310, \uBC30\uD3EC, \uBC29\uC1A1 \uAE30\uD0C0 \uBC29\uBC95\uC5D0 \uC758\uD558\uC5EC \uC601\uB9AC\uBAA9\uC801\uC73C\uB85C \uC774\uC6A9\uD558\uAC70\uB098 \uC81C3\uC790\uC5D0\uAC8C \uC774\uC6A9\uD558\uAC8C \uD558\uC5EC\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4. \uC81C21\uC870(\uBD84\uC7C1\uD574\uACB0) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uAC00 \uC81C\uAE30\uD558\uB294 \uC815\uB2F9\uD55C \uC758\uACAC\uC774\uB098 \uBD88\uB9CC\uC744 \uBC18\uC601\uD558\uACE0 \uADF8 \uD53C\uD574\uB97C \uBCF4\uC0C1\uCC98\uB9AC\uD558\uAE30 \uC704\uD558\uC5EC \uD53C\uD574\uBCF4\uC0C1\uCC98\uB9AC\uAE30\uAD6C\uB97C \uC124\uCE58\xB7\uC6B4\uC601\uD569\uB2C8\uB2E4. \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uC740 \uC774\uC6A9\uC790\uB85C\uBD80\uD130 \uC81C\uCD9C\uB418\uB294 \uBD88\uB9CC\uC0AC\uD56D \uBC0F \uC758\uACAC\uC740 \uC6B0\uC120\uC801\uC73C\uB85C \uADF8 \uC0AC\uD56D\uC744 \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uC2E0\uC18D\uD55C \uCC98\uB9AC\uAC00 \uACE4\uB780\uD55C \uACBD\uC6B0\uC5D0\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uADF8 \uC0AC\uC720\uC640 \uCC98\uB9AC\uC77C\uC815\uC744 \uC989\uC2DC \uD1B5\uBCF4\uD574 \uB4DC\uB9BD\uB2C8\uB2E4. \u2462 \"\uC5D0\uCF54\uC5D0\uCF54\"\uACFC \uC774\uC6A9\uC790\uAC04\uC5D0 \uBC1C\uC0DD\uD55C \uBD84\uC7C1\uC740 \uC804\uC790\uAC70\uB798\uAE30\uBCF8\uBC95 \uC81C28\uC870 \uBC0F \uB3D9 \uC2DC\uD589\uB839 \uC81C15\uC870\uC5D0 \uC758\uD558\uC5EC \uC124\uCE58\uB41C \uC804\uC790\uAC70\uB798\uBD84\uC7C1\uC870\uC815\uC704\uC6D0\uD68C\uC758 \uC870\uC815\uC5D0 \uB530\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC81C22\uC870(\uC7AC\uD310\uAD8C \uBC0F \uC900\uAC70\uBC95) \u2460 \"\uC5D0\uCF54\uC5D0\uCF54\"\uACFC \uC774\uC6A9\uC790\uAC04\uC5D0 \uBC1C\uC0DD\uD55C \uC804\uC790\uAC70\uB798 \uBD84\uC7C1\uC5D0 \uAD00\uD55C \uC18C\uC1A1\uC740 \uBBFC\uC0AC\uC18C\uC1A1\uBC95\uC0C1\uC758 \uAD00\uD560\uBC95\uC6D0\uC5D0 \uC81C\uAE30\uD569\uB2C8\uB2E4. \u2461 \"\uC5D0\uCF54\uC5D0\uCF54\"\uACFC \uC774\uC6A9\uC790\uAC04\uC5D0 \uC81C\uAE30\uB41C \uC804\uC790\uAC70\uB798 \uC18C\uC1A1\uC5D0\uB294 \uD55C\uAD6D\uBC95\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. * \uC801\uC6A9\uC77C : 2021\uB144 05\uC6D4 15\uC77C \uC774\uD6C4 \uBC1C\uC0DD\uD558\uB294 \uBAA8\uB4E0\uAC70\uB798 \uD589\uC704"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CheckWrapper, {
          onChange: onChange,
          children: "\uC774\uC6A9\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DivWrapper, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            children: "1. \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9 \uBC0F \uC218\uC9D1\uBC29\uBC95 \uAC00. \uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9 \uCCAB\uC9F8, \uD68C\uC0AC\uB294 \uD68C\uC6D0\uAC00\uC785, \uC6D0\uD65C\uD55C \uACE0\uAC1D\uC0C1\uB2F4, \uAC01\uC885 \uC11C\uBE44\uC2A4\uC758 \uC81C\uACF5\uC744 \uC704\uD574 \uCD5C\uCD08 \uD68C\uC6D0\uAC00\uC785 \uB2F9\uC2DC \uC544\uB798\uC640 \uAC19\uC740 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. [\uC77C\uBC18 \uD68C\uC6D0\uAC00\uC785 \uC2DC] - \uD544\uC218\uD56D\uBAA9 : \uB2C9\uB124\uC784, \uD504\uB85C\uD544 \uC0AC\uC9C4 - \uC120\uD0DD\uC0AC\uD56D : \uC774\uBA54\uC77C \uC8FC\uC18C, \uD734\uB300\uD3F0 \uBC88\uD638 [\uC81C\uD734 \uBB38\uC758 \uC2DC] - \uC218\uC9D1 \uD56D\uBAA9 : \uD68C\uC0AC\uBA85, \uB2F4\uB2F9\uC790\uBA85, \uC5F0\uB77D\uCC98, \uC774\uBA54\uC77C, \uC81C\uBAA9, \uB0B4\uC6A9, \uCCA8\uBD80\uD30C\uC77C \uB458\uC9F8, \uC11C\uBE44\uC2A4 \uC774\uC6A9\uACFC\uC815\uC774\uB098 \uC0AC\uC5C5\uCC98\uB9AC \uACFC\uC815\uC5D0\uC11C \uC544\uB798\uC640 \uAC19\uC740 \uC815\uBCF4\uB4E4\uC774 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB418\uC5B4 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. - IP Address, \uCFE0\uD0A4, \uBC29\uBB38 \uC77C\uC2DC, \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uAE30\uB85D, \uBD88\uB7C9 \uC774\uC6A9 \uAE30\uB85D \uC14B\uC9F8, \uBD80\uAC00 \uC11C\uBE44\uC2A4 \uBC0F \uB9DE\uCDA4\uC2DD \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC5D0\uC11C \uD574\uB2F9 \uC11C\uBE44\uC2A4\uC758 \uC774\uC6A9\uC790\uC5D0 \uD55C\uD574\uC11C\uB9CC \uC544\uB798\uC640 \uAC19\uC740 \uC815\uBCF4\uB4E4\uC774 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. - \uC8FC\uC18C, \uC5F0\uB77D\uCC98, \uC0AC\uC6A9 \uC774\uB3D9\uD1B5\uC2E0\uC0AC, \uACC4\uC88C\uBC88\uD638 \uB4F1 \uB137\uC9F8, \uC720\uB8CC \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uACFC\uC815\uC5D0\uC11C \uC544\uB798\uC640 \uAC19\uC740 \uACB0\uC81C \uC815\uBCF4\uB4E4\uC774 \uC218\uC9D1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4. - \uC2E0\uC6A9\uCE74\uB4DC \uACB0\uC81C\uC2DC : \uCE74\uB4DC\uC0AC\uBA85, \uCE74\uB4DC\uBC88\uD638 \uB4F1 - \uD734\uB300\uC804\uD654 \uACB0\uC81C\uC2DC : \uC774\uB3D9\uC804\uD654\uBC88\uD638, \uD1B5\uC2E0\uC0AC, \uACB0\uC81C\uC2B9\uC778\uBC88\uD638 \uB4F1 - \uACC4\uC88C\uC774\uCCB4\uC2DC : \uC740\uD589\uBA85, \uACC4\uC88C\uBC88\uD638 \uB4F1 - \uC0C1\uD488\uAD8C \uC774\uC6A9\uC2DC : \uC0C1\uD488\uAD8C \uBC88\uD638 \uB098. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\uBC29\uBC95 \uD68C\uC0AC\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uBC29\uBC95\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD569\uB2C8\uB2E4. - \uD648\uD398\uC774\uC9C0, \uC11C\uBA74\uC591\uC2DD, \uD329\uC2A4, \uC804\uD654, \uC0C1\uB2F4 \uAC8C\uC2DC\uD310, \uC774\uBA54\uC77C, \uC774\uBCA4\uD2B8 \uC751\uBAA8, \uBC30\uC1A1\uC694\uCCAD - \uD611\uB825\uD68C\uC0AC\uB85C\uBD80\uD130\uC758 \uC81C\uACF5 - \uC0DD\uC131\uC815\uBCF4 \uC218\uC9D1 \uD234\uC744 \uD1B5\uD55C \uC218\uC9D1. 2. \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801 \uAC00. \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uAD00\uD55C \uACC4\uC57D \uC774\uD589 \uBC0F \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC5D0 \uB530\uB978 \uC694\uAE08\uC815\uC0B0 \uCEE8\uD150\uCE20 \uC81C\uACF5, \uD2B9\uC815 \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uBB3C\uD488\uBC30\uC1A1 \uB610\uB294 \uCCAD\uAD6C\uC11C \uB4F1 \uBC1C\uC1A1, \uBCF8\uC778\uC778\uC99D, \uAD6C\uB9E4 \uBC0F \uC694\uAE08 \uACB0\uC81C, \uC694\uAE08\uCD94\uC2EC \uB098. \uD68C\uC6D0\uAD00\uB9AC \uD68C\uC6D0\uC81C \uC11C\uBE44\uC2A4 \uC774\uC6A9 \uBC0F \uC81C\uD55C\uC801 \uBCF8\uC778 \uD655\uC778\uC81C\uC5D0 \uB530\uB978 \uBCF8\uC778\uD655\uC778, \uAC1C\uC778\uC2DD\uBCC4, \uBD88\uB7C9\uD68C\uC6D0(\uC2A4\uD0C0\uC77C\uB2F7\uCEF4\uC774\uC6A9\uC57D\uAD00 \uC81C20\uC870 1\uD56D\uC911 \uC81C11\uC870 1\uD56D 1\uD638~8\uD638 \uC704\uBC18\uC0AC\uC720\uB85C \uC778\uD55C \uC601\uAD6C\uC774\uC6A9\uC815\uC9C0 \uBC0F 2\uD56D\uC5D0 \uB530\uB77C \uACC4\uC57D\uD574\uC9C0\uB41C \uC601\uAD6C\uC774\uC6A9\uC815\uC9C0 \uD68C\uC6D0)\uC758 \uBD80\uC815 \uC774\uC6A9\uBC29\uC9C0\uC640 \uBE44\uC778\uAC00 \uC0AC\uC6A9\uBC29\uC9C0, \uAC00\uC785\uC758\uC0AC \uD655\uC778, \uAC00\uC785 \uBC0F \uAC00\uC785\uD69F\uC218 \uC81C\uD55C, \uB9CC14\uC138 \uBBF8\uB9CC \uC544\uB3D9 \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC2DC \uBC95\uC815 \uB300\uB9AC\uC778 \uB3D9\uC758\uC5EC\uBD80 \uD655\uC778, \uCD94\uD6C4 \uBC95\uC815 \uB300\uB9AC\uC778 \uBCF8\uC778\uD655\uC778,\uBD84\uC7C1 \uC870\uC815\uC744 \uC704\uD55C \uAE30\uB85D\uBCF4\uC874, \uBD88\uB9CC\uCC98\uB9AC \uB4F1 \uBBFC\uC6D0\uCC98\uB9AC, \uACE0\uC9C0\uC0AC\uD56D \uC804\uB2EC \uB2E4. \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uAC1C\uBC1C \uBC0F \uB9C8\uCF00\uD305 \uC2E0\uADDC \uC11C\uBE44\uC2A4 \uAC1C\uBC1C \uBC0F \uB9DE\uCDA4 \uC11C\uBE44\uC2A4 \uC81C\uACF5, \uD1B5\uACC4\uD559\uC801 \uD2B9\uC131\uC5D0 \uB530\uB978 \uC11C\uBE44\uC2A4 \uC81C\uACF5 \uBC0F \uAD11\uACE0 \uAC8C\uC7AC, \uC11C\uBE44\uC2A4\uC758 \uC720\uD6A8\uC131 \uD655\uC778, \uC774\uBCA4\uD2B8 \uBC0F \uAD11\uACE0\uC131 \uC815\uBCF4 \uC81C\uACF5 \uBC0F \uCC38\uC5EC\uAE30\uD68C \uC81C\uACF5\uC811\uC18D\uBE48\uB3C4 \uD30C\uC545, \uD68C\uC6D0\uC758 \uC11C\uBE44\uC2A4\uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4 3. \uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB294 \uC6D0\uCE59\uC801\uC73C\uB85C \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801\uC774 \uB2EC\uC131\uB418\uBA74 \uC9C0\uCCB4 \uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E8, \uB2E4\uC74C\uC758 \uC815\uBCF4\uC5D0 \uB300\uD574\uC11C\uB294 \uC544\uB798\uC758 \uC774\uC720\uB85C \uBA85\uC2DC\uD55C \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uC874\uD569\uB2C8\uB2E4. \uAC00. \uD68C\uC0AC \uB0B4\uBD80 \uBC29\uCE68\uC5D0 \uC758\uD55C \uC815\uBCF4\uBCF4\uC720 \uC0AC\uC720 - \uBD80\uC815\uC774\uC6A9\uAE30\uB85D \uBCF4\uC874 \uC774\uC720 : \uBD80\uC815 \uC774\uC6A9 \uBC29\uC9C0 \uBCF4\uC874 \uAE30\uAC04 : 1\uB144 \uB098. \uAD00\uB828\uBC95\uB839\uC5D0 \uC758\uD55C \uC815\uBCF4\uBCF4\uC720 \uC0AC\uC720 \uC0C1\uBC95, \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uB4F1 \uAD00\uACC4\uBC95\uB839\uC758 \uADDC\uC815\uC5D0 \uC758\uD558\uC5EC \uBCF4\uC874\uD560 \uD544\uC694\uAC00 \uC788\uB294 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uAD00\uACC4\uBC95\uB839\uC5D0\uC11C \uC815\uD55C \uC77C\uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uD68C\uC6D0\uC815\uBCF4\uB97C \uBCF4\uAD00\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0 \uD68C\uC0AC\uB294 \uBCF4\uAD00\uD558\uB294 \uC815\uBCF4\uB97C \uADF8 \uBCF4\uAD00\uC758 \uBAA9\uC801\uC73C\uB85C\uB9CC \uC774\uC6A9\uD558\uBA70 \uBCF4\uC874\uAE30\uAC04\uC740 \uC544\uB798\uC640 \uAC19\uC2B5\uB2C8\uB2E4. - \uACC4\uC57D \uB610\uB294 \uCCAD\uC57D\uCCA0\uD68C \uB4F1\uC5D0 \uAD00\uD55C \uAE30\uB85D\u318D\uBCF4\uC874 \uC774\uC720 : \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960\u318D\uBCF4\uC874 \uAE30\uAC04 : 5\uB144 - \uB300\uAE08\uACB0\uC81C \uBC0F \uC7AC\uD654 \uB4F1\uC758 \uACF5\uAE09\uC5D0 \uAD00\uD55C \uAE30\uB85D \uBCF4\uC874 \uC774\uC720 : \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBCF4\uC874 \uAE30\uAC04 : 5\uB144 - \uC18C\uBE44\uC790\uC758 \uBD88\uB9CC \uB610\uB294 \uBD84\uC7C1\uCC98\uB9AC\uC5D0 \uAD00\uD55C \uAE30\uB85D \uBCF4\uC874 \uC774\uC720 : \uC804\uC790\uC0C1\uAC70\uB798 \uB4F1\uC5D0\uC11C\uC758 \uC18C\uBE44\uC790\uBCF4\uD638\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBCF4\uC874 \uAE30\uAC04 : 3\uB144 - \uBCF8\uC778\uD655\uC778\uC5D0 \uAD00\uD55C \uAE30\uB85D \uBCF4\uC874 \uC774\uC720 : \uC815\uBCF4\uD1B5\uC2E0 \uC774\uC6A9\uCD09\uC9C4 \uBC0F \uC815\uBCF4\uBCF4\uD638 \uB4F1\uC5D0 \uAD00\uD55C \uBC95\uB960 \uBCF4\uC874 \uAE30\uAC04 : 6\uAC1C\uC6D4 - \uBC29\uBB38\uC5D0 \uAD00\uD55C \uAE30\uB85D \uBCF4\uC874 \uC774\uC720 : \uD1B5\uC2E0\uBE44\uBC00\uBCF4\uD638\uBC95 \uBCF4\uC874 \uAE30\uAC04 : 3\uAC1C\uC6D4 4. \uC774\uC6A9\uC790 \uBC0F \uBC95\uC815\uB300\uB9AC\uC778\uC758 \uAD8C\uB9AC\uC640 \uADF8 \uD589\uC0AC\uBC29\uBC95 \uC774\uC6A9\uC790 \uBC0F \uBC95\uC815\uB300\uB9AC\uC778\uC740 \uB4F1\uB85D\uB418\uC5B4 \uC788\uB294 \uC774\uC6A9\uC790 \uBCF8\uC778 \uD639\uC740 \uB2F9\uD574 \uB9CC 14\uC138 \uBBF8\uB9CC\uC790\uC758 \uAC1C\uC778\uC815\uBCF4 \uAD00\uB828\uD558\uC5EC, \uC5B8\uC81C\uB4E0\uC9C0 \uAC1C\uC778\uC815\uBCF4 \uC5F4\uB78C/ \uC815\uC815,\uC0AD\uC81C/ \uCC98\uB9AC\uC815\uC9C0/ \uB3D9\uC758 \uCCA0\uD68C\uB97C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uC704\uD558\uC5EC \uD648\uD398\uC774\uC9C0\uC758 \u201C\uAC1C\uC778\uC815\uBCF4\uBCC0\uACBD\u201D(\uB610\uB294 \u201C\uD68C\uC6D0\uC815\uBCF4\uC218\uC815\u201D \uB4F1) \uBA54\uB274\uB97C \uC774\uC6A9\uD558\uC2DC\uAC70\uB098, \uB300\uD45C\uC804\uD654(1588-3366) \uB610\uB294 \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790\uC5D0\uAC8C \uC804\uD654 \uB610\uB294 \uC774\uBA54\uC77C\uB85C \uC5F0\uB77D\uD558\uC2DC\uBA74 \uC9C0\uCCB4\uC5C6\uC774 \uC870\uCE58\uD558\uACA0\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uB2E4\uC74C\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC804\uBD80 \uB610\uB294 \uC77C\uBD80\uC5D0 \uB300\uD558\uC5EC \uC5F4\uB78C/ \uC815\uC815,\uC0AD\uC81C\uB97C \uAC70\uC808\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. - \uBC95\uB960\uC5D0 \uB530\uB77C \uC5F4\uB78C\uC774 \uAE08\uC9C0\uB418\uAC70\uB098 \uC81C\uD55C\uB418\uB294 \uACBD\uC6B0 - \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC0DD\uBA85?\uC2E0\uCCB4\uB97C \uD574\uD560 \uC6B0\uB824\uAC00 \uC788\uAC70\uB098 \uB2E4\uB978 \uC0AC\uB78C\uC758 \uC7AC\uC0B0\uACFC \uADF8 \uBC16\uC758 \uC774\uC775\uC744 \uBD80\uB2F9\uD558\uAC8C \uCE68\uD574\uD560 \uC6B0\uB824\uAC00 \uC788\uB294 \uACBD\uC6B0 - \uAC1C\uC778\uC815\uBCF4 \uC790\uB3D9\uC218\uC9D1 \uC7A5\uCE58\uC758 \uC124\uCE58\xB7\uC6B4\uC601 \uBC0F \uAC70\uBD80 - \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC5D0\uAC8C \uD2B9\uD654\uB41C \uB9DE\uCDA4\uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uAE30 \uC704\uD574\uC11C \uC774\uC6A9\uC790\uB4E4\uC758 \uC815\uBCF4\uB97C \uC218\uC2DC\uB85C \uC800\uC7A5\uD558\uACE0 \uCC3E\uC544\uB0B4\uB294 '\uC138\uC158(session)' \uB610\uB294 '\uCFE0\uD0A4(cookie)' \uB4F1\uC744 \uC6B4\uC6A9\uD569\uB2C8\uB2E4. (1) \uC138\uC158 \uBC0F \uCFE0\uD0A4\uC758 \uC758\uBBF8 : \uC138\uC158\uC774\uB780 \uC2A4\uD0C0\uC77C\uB2F7\uCEF4 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uB294\uB370 \uC774\uC6A9\uB418\uB294 \uC11C\uBC84\uAC00 \uC774\uC6A9\uC790\uC758 \uC811\uC18D \uC2DC\uAC04 \uB3D9\uC548 \uC774\uC6A9 \uC815\uBCF4\uB97C \uC11C\uBC84\uC5D0 \uC800\uC7A5\uD558\uB294 \uAC83\uC744 \uC758\uBBF8\uD558\uACE0, \uCFE0\uD0A4\uB780 \uC6F9 \uB610\uB294 \uC571\uC744 \uC6B4\uC601\uD558\uB294 \uB370 \uC774\uC6A9\uB418\uB294 \uC11C\uBC84\uAC00 \uC774\uC6A9\uC790\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uBCF4\uB0B4\uB294 \uC544\uC8FC \uC791\uC740 \uD14D\uC2A4\uD2B8 \uD30C\uC77C\uB85C\uC11C \uC774\uC6A9\uC790\uC758 \uCEF4\uD4E8\uD130 \uD558\uB4DC\uB514\uC2A4\uD06C\uC5D0 \uC800\uC7A5\uB418\uAE30\uB3C4 \uD558\uB294 \uC815\uBCF4\uB97C \uB9D0\uD569\uB2C8\uB2E4. (2) \uC138\uC158 \uBC0F \uCFE0\uD0A4\uC758 \uC0AC\uC6A9 \uBAA9\uC801 :\uD68C\uC0AC\uB294 \uC138\uC158 \uBC0F \uCFE0\uD0A4\uB97C \uC774\uC6A9\uC790\uC758 \uC811\uC18D \uBE48\uB3C4\uB098 \uBC29\uBB38 \uC2DC\uAC04, \uC11C\uBE44\uC2A4\uC774\uC6A9 \uD328\uD134\uC744 \uBD84\uC11D\uD558\uC5EC \uAC1C\uC778 \uB9DE\uCDA4 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD558\uACE0 \uC11C\uBE44\uC2A4 \uB9CC\uC871\uB3C4\uB97C \uB192\uC774\uAE30 \uC704\uD55C \uBAA9\uC801\uC73C\uB85C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uB610\uD55C \uAC01\uC885 \uC774\uBCA4\uD2B8 \uCC38\uC5EC \uBC0F \uD0C0\uAC9F \uB9C8\uCF00\uD305 \uB4F1\uC758 \uBAA9\uC801\uC73C\uB85C \uCFE0\uD0A4 \uBC0F \uC138\uC158 \uC815\uBCF4\uB97C \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uACE0\uAC1D\uC11C\uBE44\uC2A4 \uB2F4\uB2F9\uBD80\uC11C \uB4F1 \uC548\uB0B4 \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uD638\uD558\uACE0 \uAC1C\uC778\uC815\uBCF4\uC640 \uAD00\uB828\uD55C \uBD88\uB9CC\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD558\uC5EC \uC544\uB798\uC640 \uAC19\uC774 \uAD00\uB828 \uBD80\uC11C \uBC0F \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uCC45\uC784\uC790\uB97C \uC9C0\uC815\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4. (1) \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 \uBC0F \uAD00\uB828 \uC5C5\uBB34 \uB2F4\uB2F9\uBD80\uC11C \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uCC45\uC784\uC790 : \uBC15\uADDC\uB3C4 \uAD00\uB828 \uC5C5\uBB34 \uB2F4\uB2F9\uBD80\uC11C : \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uC0AC\uBB34\uAD6D \uC804\uD654 : 02 3442 3555 \uBB38\uC758\uCC98 : info@sta1.com (2) \uACE0\uAC1D\uC11C\uBE44\uC2A4 \uB2F4\uB2F9\uBD80\uC11C \uACE0\uAC1D\uC11C\uBE44\uC2A4 \uB2F4\uB2F9\uBD80\uC11C: \uACE0\uAC1D \uC0C1\uB2F4\uC2E4 \uC804\uD654 : 02 3442 3555 \uBB38\uC758\uCC98 : info@sta1.com (3) \uAE30\uD0C0 \uAE30\uAD00 \uC774\uC6A9\uC790\uB294 \uD68C\uC0AC\uC758 \uC11C\uBE44\uC2A4\uB97C \uC774\uC6A9\uD558\uC2DC\uBA70 \uBC1C\uC0DD\uD558\uB294 \uBAA8\uB4E0 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638 \uAD00\uB828 \uBBFC\uC6D0\uC744 \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638\uCC45\uC784\uC790 \uD639\uC740 \uB2F4\uB2F9\uBD80\uC11C\uB85C \uC2E0\uACE0\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD68C\uC0AC\uB294 \uC774\uC6A9\uC790\uB4E4\uC758 \uC2E0\uACE0\uC0AC\uD56D\uC5D0 \uB300\uD574 \uC2E0\uC18D\uD558\uAC8C \uCDA9\uBD84\uD55C \uB2F5\uBCC0\uC744 \uB4DC\uB9B4 \uAC83\uC785\uB2C8\uB2E4. \uAE30\uD0C0 \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC5D0 \uB300\uD55C \uC2E0\uACE0\uB098 \uC0C1\uB2F4\uC774 \uD544\uC694\uD558\uC2E0 \uACBD\uC6B0\uC5D0\uB294 \uC544\uB798 \uAE30\uAD00\uC5D0 \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. \uAC1C\uC778\uC815\uBCF4\uCE68\uD574\uC2E0\uACE0\uC13C\uD130 (http://privacy.kisa.or.kr) \uB300\uAC80\uCC30\uCCAD \uACFC\uD559\uC218\uC0AC\uBD80 \uC0AC\uC774\uBC84\uBC94\uC8C4\uC218\uC0AC\uACFC (www.spo.go.kr / \uAD6D\uBC88\uC5C6\uC774 1301) \uACBD\uCC30\uCCAD \uC0AC\uC774\uBC84\uC548\uC804\uAD6D (cyberbureau.police.go.kr / \uAD6D\uBC88\uC5C6\uC774 182)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CheckWrapper, {
          onChange: onChange,
          children: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonStyle, {
          type: "primary",
          htmlType: "submit",
          children: "\uAC00\uC785\uC644\uB8CC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      title: "\uB85C\uADF8\uC778",
      placement: "right",
      closable: false,
      onClose: onClose,
      visible: visible,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uC774\uBA54\uC77C",
          type: "email",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 75
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LockOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 455,
            columnNumber: 78
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonStyle, {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Signup, {
            onClick: onSignup,
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SearchPassword, {
            children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 458,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(LoginWrapper, {
        children: ["\uC18C\uC15C \uB85C\uADF8\uC778", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ImgWrapper, {
          src: "/images/google.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 461,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ImgWrapper, {
          src: "/images/facebook.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 462,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ImgWrapper, {
          src: "/images/naver.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\components\\SearchForm.js";





const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_2__["Input"];
const SpanWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
    border-left: 1px solid #edeff0;
    position: fixed;
    right: 0;
    height: 47.44px;
    padding-left: 15px;
    :hover {
        
    }
    
    input {
        height: 46px;
        border: 0;
        outline: 0;
        margin-left: 5px;
        font-size: 12px;
    }
`;

const SearchForm = () => {
  const onSearch = value => console.log(value);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(SpanWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
      placeholder: "\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./components/SettingForm.js":
/*!***********************************!*\
  !*** ./components/SettingForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\components\\SettingForm.js";









const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"])`
    background: #aacd6e;
    border-color: #aacd6e;
    
    :hover {
        background: #80c340;
        border-color: #80c340;
    }
`;
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Input"])` 
    margin-top: 20px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 13px;
    outline: none;
    :hover {
        border-color: #aacd6e;
    } 
    :focus {
        box-shadow: none;
    }
`;

const SettingForm = () => {
  // 오른쪽 drawer 보이기 안보이기
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    console.log(email, password); // dispatch({
    //   type: LOG_IN_REQUEST,
    //   data: { email, password },
    // });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonWrapper, {
      type: "primary",
      onClick: showDrawer,
      children: "\uC124\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      placement: "right",
      closable: false,
      onClose: onClose,
      visible: visible,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uC774\uBA54\uC77C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uB2C9\uB124\uC784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uB85C\uADF8\uC544\uC6C3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (SettingForm);

/***/ }),

/***/ "./components/ShopList.js":
/*!********************************!*\
  !*** ./components/ShopList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\components\\ShopList.js";






const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__["Card"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
const {
  Search
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const children = [];

for (let i = 10; i < 36; i++) {
  children.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Option, {
    children: i.toString(36) + i
  }, i.toString(36) + i, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 19
  }, undefined));
}

const AppDiv = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
    width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
    flex: 1;
    flex-direction: 'row';
    justifyContent: 'space-between';
`;
const AppBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
`;

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const onSearch = value => console.log(value);

const ShopList = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(AppDiv, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        size: "default",
        defaultValue: "a1",
        onChange: handleChange,
        style: {
          width: 200
        },
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Search, {
        placeholder: "\uC1FC\uD551\uBAB0 \uAC80\uC0C9",
        allowClear: true,
        onSearch: onSearch,
        style: {
          width: 200
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(AppBlock, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          gutter: [16, 16],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300,
                display: 'inline-block'
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            span: 4.5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
              style: {
                width: 300
              },
              cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
                alt: "example",
                src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 33
              }, undefined),
              actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {}, "setting", false, {
                fileName: _jsxFileName,
                lineNumber: 254,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {}, "edit", false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, "ellipsis", false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 33
              }, undefined)],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 260,
                  columnNumber: 41
                }, undefined),
                title: "Card title",
                description: "This is the description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 29
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 245,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((initValue = null) => {
  const {
    0: value,
    1: setter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
});

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_ShopList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ShopList */ "./components/ShopList.js");
/* harmony import */ var _components_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ItemList */ "./components/ItemList.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\euni\\workspaces\\eco-echo\\front\\pages\\index.js";






const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_ShopList__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSXRlbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2V0dGluZ0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaG9wTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJkdW1teSIsIm5pY2tuYW1lIiwiaXNMb2dnZWRJbiIsIkFwcExheW91dCIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJUZXh0IiwiTGluayIsIlR5cG9ncmFwaHkiLCJNZXRhIiwiQ2FyZCIsIk9wdGlvbiIsIlNlbGVjdCIsImkiLCJwdXNoIiwidG9TdHJpbmciLCJBcHBEaXYiLCJzdHlsZWQiLCJkaXYiLCJBcHBCbG9jayIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsIkl0ZW1MaXN0Iiwid2lkdGgiLCJCdXR0b25XcmFwcGVyIiwiQnV0dG9uIiwiU2lnbnVwSW5wdXQiLCJJbnB1dCIsIklucHV0V3JhcHBlciIsIkRpdldyYXBwZXIiLCJDaGVja1dyYXBwZXIiLCJDaGVja2JveCIsIkJ1dHRvblN0eWxlIiwiU2lnbnVwIiwiYSIsIlNlYXJjaFBhc3N3b3JkIiwiTG9naW5XcmFwcGVyIiwicCIsIkltZ1dyYXBwZXIiLCJpbWciLCJMb2dpbkZvcm0iLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInNob3dEcmF3ZXIiLCJvbkNsb3NlIiwic2V0U2lnbnVwU3RhdGUiLCJzaWdudXBTdGF0ZSIsIm9uU2lnbnVwIiwiZSIsInRhcmdldCIsIlNlYXJjaCIsIlNwYW5XcmFwcGVyIiwic3BhbiIsIlNlYXJjaEZvcm0iLCJvblNlYXJjaCIsIlNldHRpbmdGb3JtIiwiU2hvcExpc3QiLCJkaXNwbGF5IiwiaW5pdFZhbHVlIiwic2V0dGVyIiwiaGFuZGxlciIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsIlJlYWN0IiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGUiLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZE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Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vU2VhcmNoRm9ybSc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgU2V0dGluZ0Zvcm0gZnJvbSAnLi9TZXR0aW5nRm9ybSc7XHJcblxyXG5jb25zdCBkdW1teSA9IHtcclxuICAgIG5pY2tuYW1lOiAn7JeQ7L2U7JeQ7L2UJyxcclxuICAgIGlzTG9nZ2VkSW46IFtdLFxyXG59O1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4geyAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaG9wJz48YT7sh7ztlZHrqrA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9pdGVtJz48YT7sg4Htkog8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxhPuuNlOuztOq4sDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIHtkdW1teS5pc0xvZ2dlZEluID8gPFNldHRpbmdGb3JtIC8+IDogPExvZ2luRm9ybSAvPn1cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENhcmQsIEF2YXRhciwgUm93LCBDb2wsIFNlbGVjdCwgVHlwb2dyYXBoeSwgU3dpdGNoIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7RWRpdE91dGxpbmVkLCBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IHsgVGV4dCwgTGluayB9ID0gVHlwb2dyYXBoeTtcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5jb25zdCBjaGlsZHJlbiA9IFtdO1xyXG5mb3IgKGxldCBpID0gMTA7IGkgPCAzNjsgaSsrKSB7XHJcbiAgICBjaGlsZHJlbi5wdXNoKDxPcHRpb24ga2V5PXtpLnRvU3RyaW5nKDM2KSArIGl9PntpLnRvU3RyaW5nKDM2KSArIGl9PC9PcHRpb24+KTtcclxufVxyXG5cclxuY29uc3QgQXBwRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogJ3Jvdyc7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nO1xyXG5gO1xyXG5cclxuY29uc3QgQXBwQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuYDtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coYFNlbGVjdGVkOiAke3ZhbHVlfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkNoYW5nZShjaGVja2VkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgc3dpdGNoIHRvICR7Y2hlY2tlZH1gKTtcclxufVxyXG5cclxuY29uc3QgSXRlbUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBcHBEaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IHNpemU9J2RlZmF1bHQnIGRlZmF1bHRWYWx1ZT1cImExXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc3R5bGU9e3sgd2lkdGg6IDIwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxBcHBCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzE2LDE2XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCLsubTsgqztgazroa0g66eo7Yis66eoXCIgZGVzY3JpcHRpb249XCIyMiwwMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJzZWNvbmRhcnlcIiBocmVmPVwiXCI+7Z6I7ZSE64KY7YuxPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17PGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwi7Lm07IKs7YGs66GtIOunqO2IrOunqFwiIGRlc2NyaXB0aW9uPVwiMjIsMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0eXBlPVwic2Vjb25kYXJ5XCIgaHJlZj1cIlwiPu2eiO2UhOuCmO2LsTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0LjV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT1cIuy5tOyCrO2BrOuhrSDrp6jtiKzrp6hcIiBkZXNjcmlwdGlvbj1cIjIyLDAwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cInNlY29uZGFyeVwiIGhyZWY9XCJcIj7tnojtlITrgpjti7E8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCLsubTsgqztgazroa0g66eo7Yis66eoXCIgZGVzY3JpcHRpb249XCIyMiwwMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJzZWNvbmRhcnlcIiBocmVmPVwiXCI+7Z6I7ZSE64KY7YuxPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17PGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwi7Lm07IKs7YGs66GtIOunqO2IrOunqFwiIGRlc2NyaXB0aW9uPVwiMjIsMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0eXBlPVwic2Vjb25kYXJ5XCIgaHJlZj1cIlwiPu2eiO2UhOuCmO2LsTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0LjV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT1cIuy5tOyCrO2BrOuhrSDrp6jtiKzrp6hcIiBkZXNjcmlwdGlvbj1cIjIyLDAwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cInNlY29uZGFyeVwiIGhyZWY9XCJcIj7tnojtlITrgpjti7E8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXs8aW1nIGFsdD1cImV4YW1wbGVcIiBzcmM9XCJodHRwczovL29zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9RQm5PT29MYUFmS1BpcmMucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1ldGEgdGl0bGU9XCLsubTsgqztgazroa0g66eo7Yis66eoXCIgZGVzY3JpcHRpb249XCIyMiwwMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJzZWNvbmRhcnlcIiBocmVmPVwiXCI+7Z6I7ZSE64KY7YuxPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17PGltZyBhbHQ9XCJleGFtcGxlXCIgc3JjPVwiaHR0cHM6Ly9vcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvUUJuT09vTGFBZktQaXJjLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhIHRpdGxlPVwi7Lm07IKs7YGs66GtIOunqO2IrOunqFwiIGRlc2NyaXB0aW9uPVwiMjIsMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0eXBlPVwic2Vjb25kYXJ5XCIgaHJlZj1cIlwiPu2eiO2UhOuCmO2LsTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs0LjV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9ezxpbWcgYWx0PVwiZXhhbXBsZVwiIHNyYz1cImh0dHBzOi8vb3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL1FCbk9Pb0xhQWZLUGlyYy5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YSB0aXRsZT1cIuy5tOyCrO2BrOuhrSDrp6jtiKzrp6hcIiBkZXNjcmlwdGlvbj1cIjIyLDAwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cInNlY29uZGFyeVwiIGhyZWY9XCJcIj7tnojtlITrgpjti7E8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQXBwQmxvY2s+XHJcbiAgICAgICAgICAgIDwvQXBwRGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERyYXdlciwgQnV0dG9uLCBJbnB1dCwgRm9ybSwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFjZDZlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4gICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MGMzNDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBjMzQwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwSW5wdXQgPSBzdHlsZWQoSW5wdXQpYCBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIH0gXHJcbiAgICA6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoSW5wdXQpYCBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXI6IDAgMCAwIDFweDtcclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4gICAgfSBcclxuICAgIDpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IERpdldyYXBwZXIgPSBzdHlsZWQuZGl2YCBcclxuICAgIGhlaWdodDogMTAycHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHggMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja1dyYXBwZXIgPSBzdHlsZWQoQ2hlY2tib3gpYCBcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgY29sb3I6ICM5MDkwOTA7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcblxyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGJhY2tncm91bmQ6ICNhYWNkNmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbiAgICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MGMzNDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBjMzQwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaFBhc3N3b3JkID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcblxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ2luV3JhcHBlciA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG5gO1xyXG5cclxuLy8gY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbi8vICAgICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNhYWNkNmU7XHJcbi8vICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8gY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgICAgZW1haWwsIHBhc3N3b3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICAgIC8vIOyYpOuluOyqvSBkcmF3ZXIg67O07J206riwIOyViOuztOydtOq4sFxyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgc2V0U2lnbnVwU3RhdGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChsb2dJbkVycm9yKSB7XHJcbiAgICAvLyAgICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICAgIC8vIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gICAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgLy8gICAgICAgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0sIFtdKTtcclxuXHJcbiAgICAvLyDtmozsm5DqsIDsnoUgb3Ig66Gc6re47J24IOywvSDqtazrtoRcclxuICAgIGNvbnN0IFtzaWdudXBTdGF0ZSwgc2V0U2lnbnVwU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25TaWdudXAgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2lnbnVwU3RhdGUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOyytO2BrOuwleyKpCDsnbTrsqTtirhcclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY2hlY2tlZCA9ICR7ZS50YXJnZXQuY2hlY2tlZH1gKTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvbldyYXBwZXIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93RHJhd2VyfT5cclxuICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7c2lnbnVwU3RhdGUgPyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbnVwSW5wdXQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIiB0eXBlPVwiZW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWdudXBJbnB1dCBwbGFjZWhvbGRlcj1cIuuLieuEpOyehFwiIHR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U2lnbnVwSW5wdXQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0gcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIiB0eXBlPVwicGFzc3dvcmRcIiAvPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaWdudXBJbnB1dCBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD7soJwx7KGwKOuqqeyggSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOydtCDslb3qtIDsnYAg7JeQ7L2U7JeQ7L2U7JeQ7IScIOygnOqzte2VmOuKlCDsnbjthLDrhLcg6rSA66CoIOyEnOu5hOyKpCjsnbTtlZggXCLshJzruYTsiqRcIuudvCDtlZzri6Qp66W8IOyaqe2VqOyXkCDsnojslrQg7IKs7J2067KE66qw6rO8IOydtOyaqeyekOydmCDqtozrpqzCt+ydmOustCDrsI8g7LGF7J6E7IKs7ZWt7J2EIOq3nOygle2VqOydhCDrqqnsoIHsnLzroZwg7ZWp64uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcMuyhsCjsoJXsnZgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaAgXCLsl5DsvZTsl5DsvZRcIiDsnbTrnoAg7J6s7ZmUIOuYkOuKlCDsmqnsl63snYQg7J207Jqp7J6Q7JeQ6rKMIOygnOqzte2VmOq4sCDsnITtlZjsl6wg7Lu07ZOo7YSw65OxIOygleuztO2GteyLoOyEpOu5hOulvCDsnbTsmqntlZjsl6wg7J6s7ZmUIOuYkOuKlCDsmqnsl63snYQg6rGw656Y7ZWgIOyImCDsnojrj4TroZ0g7ISk7KCV7ZWcIOqwgOyDgeydmCDsl6zrn6zsnqXsnYQg66eQ7ZWY66mwLCDslYTsmrjrn6wg7IKs7J2067KE66qw7J2EIOyatOyYge2VmOuKlCDsgqzsl4XsnpDsnZgg7J2Y66+466Gc64+EIOyCrOyaqe2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGhIFwi7J207Jqp7J6QXCLrnoAgXCLsl5DsvZTsl5DsvZRcIuyXkCDsoJHsho3tlZjsl6wg7J20IOyVveq0gOyXkCDrlLDrnbwgXCLsl5DsvZTsl5DsvZRcIuydtCDsoJzqs7XtlZjripQg7ISc67mE7Iqk66W8IOuwm+uKlCDtmozsm5Ag67CPIOu5hO2ajOybkOydhCDrp5Dtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoiAn7ZqM7JuQJ+ydtOudvCDtlajsnYAgXCLsl5DsvZTsl5DsvZRcIuyXkCDqsJzsnbjsoJXrs7Trpbwg7KCc6rO17ZWY7JesIO2ajOybkOuTseuhneydhCDtlZwg7J6Q66Gc7IScLCBcIuyXkOy9lOyXkOy9lFwi7J2YIOygleuztOulvCDsp4Dsho3soIHsnLzroZwg7KCc6rO167Cb7Jy866mwLCBcIuyXkOy9lOyXkOy9lFwi7J20IOygnOqzte2VmOuKlCDshJzruYTsiqTrpbwg6rOE7IaN7KCB7Jy866GcIOydtOyaqe2VoCDsiJgg7J6I64qUIOyekOulvCDrp5Dtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoyAn67mE7ZqM7JuQJ+ydtOudvCDtlajsnYAg7ZqM7JuQ7JeQIOqwgOyehe2VmOyngCDslYrqs6AgXCLsl5DsvZTsl5DsvZRcIuydtCDsoJzqs7XtlZjripQg7ISc67mE7Iqk66W8IOydtOyaqe2VmOuKlCDsnpDrpbwg66eQ7ZWp64uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcM+yhsCAo7JW96rSA7J2YIOuqheyLnOyZgCDqsJzsoJUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaAgXCLsl5DsvZTsl5DsvZRcIuydgCDsnbQg7JW96rSA7J2YIOuCtOyaqeqzvCDsg4HtmLgsIOyYgeyXheyGjCDshozsnqzsp4AsIOuMgO2RnOyekOydmCDshLHrqoUsIOyCrOyXheyekOuTseuhneuyiO2YuCwg7Jew65297LKYKOyghO2ZlCwg7Yyp7IqkLCDsoITsnpDsmrDtjrgg7KO87IaMIOuTsSkg65Ox7J2EIOydtOyaqeyekOqwgCDslYwg7IiYIOyeiOuPhOuhnSDshJzruYTsiqTtmZTrqbQo7KCE66m0KeyXkCDqsozsi5ztlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoSBcIuyXkOy9lOyXkOy9lFwi7J2AIOyVveq0gOydmOq3nOygnOuTseyXkOq0gO2VnOuyleuloCwg7KCE7J6Q6rGw656Y6riw67O467KVLCDsoITsnpDshJzrqoXrspUsIOygleuztO2GteyLoOunneydtOyaqey0ieynhOuTseyXkOq0gO2VnOuyleuloCwg67Cp66y47YyQ66ek65Ox7JeQ6rSA7ZWc67KV66WgLCDshozruYTsnpDrs7TtmLjrspUg65OxIOq0gOugqOuyleydhCDsnITrsLDtlZjsp4Ag7JWK64qUIOuylOychOyXkOyEnCDsnbQg7JW96rSA7J2EIOqwnOygle2VoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaIgXCLsl5DsvZTsl5DsvZRcIuydtCDslb3qtIDsnYQg6rCc7KCV7ZWgIOqyveyasOyXkOuKlCDsoIHsmqnsnbzsnpAg67CPIOqwnOygleyCrOycoOulvCDrqoXsi5ztlZjsl6wg7ZiE7ZaJ7JW96rSA6rO8IO2VqOq7mCDrqrDsnZgg7LSI6riw7ZmU66m07JeQIOq3uCDsoIHsmqnsnbzsnpAgN+ydvOydtOyghOu2gO2EsCDsoIHsmqnsnbzsnpAg7KCE7J286rmM7KeAIOqzteyngO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGjIFwi7JeQ7L2U7JeQ7L2UXCLsnbQg7JW96rSA7J2EIOqwnOygle2VoCDqsr3smrDsl5DripQg6re4IOqwnOygleyVveq0gOydgCDqt7gg7KCB7Jqp7J287J6QIOydtO2bhOyXkCDssrTqsrDrkJjripQg6rOE7JW97JeQ66eMIOyggeyaqeuQmOqzoCDqt7gg7J207KCE7JeQIOydtOuvuCDssrTqsrDrkJwg6rOE7JW97JeQIOuMgO2VtOyEnOuKlCDqsJzsoJXsoITsnZgg7JW96rSA7KGw7ZWt7J20IOq3uOuMgOuhnCDsoIHsmqnrkKnri4jri6QuIOuLpOunjCDsnbTrr7gg6rOE7JW97J2EIOyytOqysO2VnCDsnbTsmqnsnpDqsIAg6rCc7KCV7JW96rSAIOyhsO2VreydmCDsoIHsmqnsnYQg67Cb6riw66W8IOybkO2VmOuKlCDrnLvsnYQg7KCcM+2VreyXkCDsnZjtlZwg6rCc7KCV7JW96rSA7J2YIOqzteyngOq4sOqwhOuCtOyXkCAn66qwXCLsl5Ag7Iah7Iug7ZWY7JesIFwi66qwXCLsnZgg64+Z7J2Y66W8IOuwm+ydgCDqsr3smrDsl5DripQg6rCc7KCV7JW96rSAIOyhsO2VreydtCDsoIHsmqnrkKnri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRpCDsnbQg7JW96rSA7JeQ7IScIOygle2VmOyngCDslYTri4jtlZwg7IKs7ZWt6rO8IOydtCDslb3qtIDsnZgg7ZW07ISd7JeQIOq0gO2VmOyXrOuKlCDsoJXrtoDqsIAg7KCc7KCV7ZWcIOyghOyekOqxsOuemOyGjOu5hOyekOuztO2YuOyngOy5qCDrsI8g6rSA6rOE67KV66C5IOuYkOuKlCDsg4HqtIDroYDsl5Ag65Sw66aF64uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcNOyhsCjshJzruYTsiqTsnZgg7KCc6rO1IOuwjyDrs4Dqsr0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaAgXCLsl5DsvZTsl5DsvZRcIuydgCDri6TsnYzqs7wg6rCZ7J2AIOyXheustOulvCDsiJjtlontlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEuIOyerO2ZlCDrmJDripQg7Jqp7Jet7JeQIOuMgO2VnCDsoJXrs7Qg7KCc6rO1IOuwjyDqtazrp6Tqs4Tslb3snZgg7LK06rKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIuIOq1rOunpOqzhOyVveydtCDssrTqsrDrkJwg7J6s7ZmUIOuYkOuKlCDsmqnsl63snZgg67Cw7IahXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMuIOq4sO2DgCBcIuyXkOy9lOyXkOy9lFwi7J20IOygle2VmOuKlCDsl4XrrLRcclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGhIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7J6s7ZmU7J2YIO2SiOygiCDrmJDripQg6riw7Iig7KCBIOyCrOyWkeydmCDrs4Dqsr0g65Ox7J2YIOqyveyasOyXkOuKlCDsnqXssKgg7LK06rKw65CY64qUIOqzhOyVveyXkCDsnZjtlbQg7KCc6rO17ZWgIOyerO2ZlMK37Jqp7Jet7J2YIOuCtOyaqeydhCDrs4Dqsr3tlaAg7IiYIOyeiOyKteuLiOuLpC4g7J20IOqyveyasOyXkOuKlCDrs4Dqsr3rkJwg7J6s7ZmUwrfsmqnsl63snZgg64K07JqpIOuwjyDsoJzqs7XsnbzsnpDrpbwg66qF7Iuc7ZWY7JesIO2YhOyerOydmCDsnqztmZTCt+yaqeyXreydmCDrgrTsmqnsnYQg6rKM7Iuc7ZWcIOqzs+yXkCDqt7gg7KCc6rO17J287J6QIOydtOyghCA37J2867aA7YSwIOqzteyngO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGiIFwi7JeQ7L2U7JeQ7L2UXCLsnbQg7KCc6rO17ZWY6riw66GcIOydtOyaqeyekOyZgCDqs4Tslb3snYQg7LK06rKw7ZWcIOyEnOu5hOyKpOydmCDrgrTsmqnsnYQg7J6s7ZmU7J2YIO2SiOygiCDrmJDripQg6riw7Iig7KCBIOyCrOyWkeydmCDrs4Dqsr3rk7HsnZgg7IKs7Jyg66GcIOuzgOqyve2VoCDqsr3smrDsl5DripQgXCLsl5DsvZTsl5DsvZRcIuydgCDsnbTroZwg7J247ZWY7JesIOydtOyaqeyekOqwgCDsnoXsnYAg7IaQ7ZW066W8IOuwsOyDge2VqeuLiOuLpC4g64uoLCBcIuyXkOy9lOyXkOy9lFwi7JeQIOqzoOydmCDrmJDripQg6rO87Iuk7J20IOyXhuuKlCDqsr3smrDsl5DripQg6re465+s7ZWY7KeAIOyVhOuLiO2VqeuLiOuLpC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDXsobAo7ISc67mE7Iqk7J2YIOykkeuLqClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoCBcIuyXkOy9lOyXkOy9lFwi7J2AIOy7tO2TqO2EsCDrk7Eg7KCV67O07Ya17Iug7ISk67mE7J2YIOuztOyImOygkOqygMK36rWQ7LK0IOuwjyDqs6DsnqUsIO2GteyLoOydmCDrkZDsoIgg65Ox7J2YIOyCrOycoOqwgCDrsJzsg53tlZwg6rK97Jqw7JeQ64qUIOyEnOu5hOyKpOydmCDsoJzqs7XsnYQg7J287Iuc7KCB7Jy866GcIOykkeuLqO2VoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaEg7KCcMe2VreyXkCDsnZjtlZwg7ISc67mE7IqkIOykkeuLqOydmCDqsr3smrDsl5DripQgXCLrqrBcIuydgCDsoJw47KGw7JeQIOygle2VnCDrsKnrspXsnLzroZwg7J207Jqp7J6Q7JeQ6rKMIO2GteyngO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGiIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7KCcMe2VreydmCDsgqzsnKDroZwg7ISc67mE7Iqk7J2YIOygnOqzteydtCDsnbzsi5zsoIHsnLzroZwg7KSR64uo65Co7Jy866GcIOyduO2VmOyXrCDsnbTsmqnsnpAg65iQ64qUIOygnDPsnpDqsIAg7J6F7J2AIOyGkO2VtOyXkCDrjIDtlZjsl6wg67Cw7IOB7ZWp64uI64ukLiDri6ggXCLsl5DsvZTsl5DsvZRcIuyXkCDqs6DsnZgg65iQ64qUIOqzvOyLpOydtCDsl4bripQg6rK97Jqw7JeQ64qUIOq3uOufrO2VmOyngCDslYTri4jtlanri4jri6QuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoJw27KGwKO2ajOybkOqwgOyehSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoCDsnbTsmqnsnpDripQgXCLsl5DsvZTsl5DsvZRcIuydtCDsoJXtlZwg6rCA7J6FIOyWkeyLneyXkCDrlLDrnbwg7ZqM7JuQ7KCV67O066W8IOq4sOyehe2VnCDtm4Qg7J20IOyVveq0gOyXkCDrj5nsnZjtlZzri6TripQg7J2Y7IKs7ZGc7Iuc66W8IO2VqOycvOuhnOyEnCDtmozsm5DqsIDsnoXsnYQg7Iug7LKt7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaEgXCLsl5DsvZTsl5DsvZRcIuydgCDsoJwx7ZWt6rO8IOqwmeydtCDtmozsm5DsnLzroZwg6rCA7J6F7ZWgIOqyg+ydhCDsi6Dssq3tlZwg7J207Jqp7J6QIOykkSDri6TsnYwg6rCB7Zi47JeQIO2VtOuLue2VmOyngCDslYrripQg7ZWcIO2ajOybkOycvOuhnCDrk7HroZ3tlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEuIOqwgOyeheyLoOyyreyekOqwgCDsnbQg7JW96rSAIOygnDfsobDsoJwz7ZWt7JeQIOydmO2VmOyXrCDsnbTsoITsl5Ag7ZqM7JuQ7J6Q6rKp7J2EIOyDgeyLpO2VnCDsoIHsnbQg7J6I64qUIOqyveyasCwg64uk66eMIOygnDfsobDsoJwz7ZWt7JeQIOydmO2VnCDtmozsm5DsnpDqsqkg7IOB7Iuk7ZuEIDPrhYTsnbQg6rK96rO87ZWcIOyekOuhnOyEnCBcIuyXkOy9lOyXkOy9lFwi7J2YIO2ajOybkOyerOqwgOyehSDsirnrgpnsnYQg7Ja77J2AIOqyveyasOyXkOuKlCDsmIjsmbjroZwg7ZWc64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyLiDrk7HroZ0g64K07Jqp7JeQIO2XiOychCwg6riw7J6s64iE6529LCDsmKTquLDqsIAg7J6I64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzLiDquLDtg4Ag7ZqM7JuQ7Jy866GcIOuTseuhne2VmOuKlCDqsoPsnbQgXCLsl5DsvZTsl5DsvZRcIuydmCDquLDsiKDsg4Eg7ZiE7KCA7Z6IIOyngOyepeydtCDsnojri6Tqs6Ag7YyQ64uo65CY64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaIg7ZqM7JuQ6rCA7J6F6rOE7JW97J2YIOyEseumveyLnOq4sOuKlCBcIuyXkOy9lOyXkOy9lFwi7J2YIOyKueuCmeydtCDtmozsm5Dsl5Dqsowg64+E64us7ZWcIOyLnOygkOycvOuhnCDtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoyDtmozsm5DsnYAg7KCcMTXsobDsoJwx7ZWt7JeQIOydmO2VnCDrk7HroZ3sgqztla3sl5Ag67OA6rK97J20IOyeiOuKlCDqsr3smrAsIOymieyLnCDsoITsnpDsmrDtjrgg6riw7YOAIOuwqeuyleycvOuhnCBcIuyXkOy9lOyXkOy9lFwi7JeQIOuMgO2VmOyXrCDqt7gg67OA6rK97IKs7ZWt7J2EIOyVjOugpOyVvCDtlanri4jri6QuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoJw37KGwKO2ajOybkCDtg4jth7Qg67CPIOyekOqyqSDsg4Hsi6Qg65OxKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIO2ajOybkOydgCBcIuyXkOy9lOyXkOy9lFwi7JeQIOyWuOygnOuToOyngCDtg4jth7Trpbwg7JqU7LKt7ZWgIOyImCDsnojsnLzrqbAgXCLsl5DsvZTsl5DsvZRcIuydgCDsponsi5wg7ZqM7JuQ7YOI7Ye066W8IOyymOumrO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGhIO2ajOybkOydtCDri6TsnYwg6rCB7Zi47J2YIOyCrOycoOyXkCDtlbTri7ntlZjripQg6rK97JqwLCBcIuyXkOy9lOyXkOy9lFwi7J2AIO2ajOybkOyekOqyqeydhCDsoJztlZwg67CPIOygleyngOyLnO2CrCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxLiDqsIDsnoUg7Iug7LKt7Iuc7JeQIO2XiOychCDrgrTsmqnsnYQg65Ox66Gd7ZWcIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyLiBcIuyXkOy9lOyXkOy9lFwi7J2EIOydtOyaqe2VmOyXrCDqtazsnoXtlZwg7J6s7ZmUwrfsmqnsl60g65Ox7J2YIOuMgOq4iCwg6riw7YOAIFwi7JeQ7L2U7JeQ7L2UXCLsnbTsmqnsl5Ag6rSA66Co7ZWY7JesIO2ajOybkOydtCDrtoDri7TtlZjripQg7LGE66y066W8IOq4sOydvOyXkCDsp4DquIntlZjsp4Ag7JWK64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzLiDri6Trpbgg7IKs656M7J2YIFwi7JeQ7L2U7JeQ7L2UXCIg7J207Jqp7J2EIOuwqe2VtO2VmOqxsOuCmCDqt7gg7KCV67O066W8IOuPhOyaqe2VmOuKlCDrk7Eg7KCE7J6Q6rGw656Y7KeI7ISc66W8IOychO2Yke2VmOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgNC4gXCLsl5DsvZTsl5DsvZRcIuydhCDsnbTsmqntlZjsl6wg67KV66C56rO8IOydtCDslb3qtIDsnbQg6riI7KeA7ZWY6rGw64KYIOqzteyEnOyWkeyGjeyXkCDrsJjtlZjripQg7ZaJ7JyE66W8IO2VmOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGiIFwi7JeQ7L2U7JeQ7L2UXCLsnbQg7ZqM7JuQIOyekOqyqeydhCDsoJztlZzCt+ygleyngCDsi5ztgqjtm4QsIOuPmeydvO2VnCDtlonsnITqsIAgMu2ajOydtOyDgSDrsJjrs7XrkJjqsbDrgpggMzDsnbzsnbTrgrTsl5Ag6re4IOyCrOycoOqwgCDsi5zsoJXrkJjsp4Ag7JWE64uI7ZWY64qUIOqyveyasCBcIuyXkOy9lOyXkOy9lFwi7J2AIO2ajOybkOyekOqyqeydhCDsg4Hsi6Tsi5ztgqwg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGjIFwi7JeQ7L2U7JeQ7L2UXCLsnbQg7ZqM7JuQ7J6Q6rKp7J2EIOyDgeyLpOyLnO2CpOuKlCDqsr3smrDsl5DripQg7ZqM7JuQ65Ox66Gd7J2EIOunkOyGjO2VqeuLiOuLpC4g7J20IOqyveyasCDtmozsm5Dsl5Dqsowg7J2066W8IO2GteyngO2VmOqzoCwg7ZqM7JuQ65Ox66GdIOunkOyGjOyghOyXkCDshozrqoXtlaAg6riw7ZqM66W8IOu2gOyXrO2VqeuLiOuLpC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDjsobAo7ZqM7JuQ7JeQIOuMgO2VnCDthrXsp4ApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaAgXCLsl5DsvZTsl5DsvZRcIuydtCDtmozsm5Dsl5Ag64yA7ZWcIO2GteyngOulvCDtlZjripQg6rK97JqwLCDtmozsm5DsnbQgXCLsl5DsvZTsl5DsvZRcIuyXkCDsoJzstpztlZwg7KCE7J6Q7Jqw7Y64IOyjvOyGjOuhnCDtlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGhIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg67aI7Yq57KCV64uk7IiYIO2ajOybkOyXkCDrjIDtlZwg7Ya17KeA7J2YIOqyveyasCAx7KO87J287J207IOBIFwi7JeQ7L2U7JeQ7L2UXCIg6rKM7Iuc7YyQ7JeQIOqyjOyLnO2VqOycvOuhnOyEnCDqsJzrs4Qg7Ya17KeA7JeQIOqwiOydjO2VoCDsiJgg7J6I7Iq164uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOeyhsCjqtazrp6Tsi6Dssq0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIuyXkOy9lOyXkOy9lFwi7J207Jqp7J6Q64qUIFwi7JeQ7L2U7JeQ7L2UXCLsg4Hsl5DshJwg7J207ZWY7J2YIOuwqeuyleyXkCDsnZjtlZjsl6wg6rWs66ek66W8IOyLoOyyre2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4g7ISx66qFLCDso7zshowsIOyghO2ZlOuyiO2YuCDsnoXroKVcclxuICAgICAgICAgICAgICAgICAgICAgICAgMi4g7J6s7ZmUIOuYkOuKlCDsmqnsl63snZgg7ISg7YOdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMuIOqysOygnOuwqeuyleydmCDshKDtg51cclxuICAgICAgICAgICAgICAgICAgICAgICAgNC4g7J20IOyVveq0gOyXkCDrj5nsnZjtlZzri6TripQg7ZGc7IucKOyYiCwg66eI7Jqw7IqkIO2BtOumrSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDEw7KGwICjqs4Tslb3snZgg7ISx66a9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7KCcOeyhsOyZgCDqsJnsnYAg6rWs66ek7Iug7LKt7JeQIOuMgO2VmOyXrCDri6TsnYwg6rCB7Zi47JeQIO2VtOuLue2VmOyngCDslYrripQg7ZWcIOyKueuCme2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4g7Iug7LKtIOuCtOyaqeyXkCDtl4jsnIQsIOq4sOyerOuIhOudvSwg7Jik6riw6rCAIOyeiOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgMi4g66+47ISx64WE7J6Q6rCAIOuLtOuwsCwg7KO866WY65OxIOyyreyGjOuFhOuztO2YuOuyleyXkOyEnCDquIjsp4DtlZjripQg7J6s7ZmUIOuwjyDsmqnsl63snYQg6rWs66ek7ZWY64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzLiDquLDtg4Ag6rWs66ek7Iug7LKt7JeQIOyKueuCme2VmOuKlCDqsoPsnbQgXCLsl5DsvZTsl5DsvZRcIiDquLDsiKDsg4Eg7ZiE7KCA7Z6IIOyngOyepeydtCDsnojri6Tqs6Ag7YyQ64uo7ZWY64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaEgXCLsl5DsvZTsl5DsvZRcIuydmCDsirnrgpnsnbQg7KCcMTLsobDsoJwx7ZWt7J2YIOyImOyLoO2ZleyduO2GteyngO2Yle2DnOuhnCDsnbTsmqnsnpDsl5Dqsowg64+E64us7ZWcIOyLnOygkOyXkCDqs4Tslb3snbQg7ISx66a97ZWcIOqyg+ycvOuhnCDrtIXri4jri6QuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoJwxMeyhsCjsp4DquInrsKnrspUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIuyXkOy9lOyXkOy9lFwi7JeQ7IScIOq1rOunpO2VnCDsnqztmZQg65iQ64qUIOyaqeyXreyXkCDrjIDtlZwg64yA6riI7KeA6riJ67Cp67KV7J2AIOuLpOydjCDqsIHtmLjsnZgg7ZWY64KY66GcIO2VoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxLiDqs4TsoozsnbTssrRcclxuICAgICAgICAgICAgICAgICAgICAgICAgMi4g7Iug7Jqp7Lm065Oc6rKw7KCcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMuIOyYqOudvOyduOustO2Gteyepeyeheq4iFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LiDsoITsnpDtmZTtj5Dsl5Ag7J2Y7ZWcIOqysOygnFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcMTLsobAo7IiY7Iug7ZmV7J247Ya17KeAwrfqtazrp6Tsi6Dssq0g67OA6rK9IOuwjyDst6jshowpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaAgXCLsl5DsvZTsl5DsvZRcIuydgCDsnbTsmqnsnpDsnZgg6rWs66ek7Iug7LKt7J20IOyeiOuKlCDqsr3smrAg7J207Jqp7J6Q7JeQ6rKMIOyImOyLoO2ZleyduO2GteyngOulvCDtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoSDsiJjsi6DtmZXsnbjthrXsp4Drpbwg67Cb7J2AIOydtOyaqeyekOuKlCDsnZjsgqztkZzsi5zsnZgg67aI7J287LmY65Ox7J20IOyeiOuKlCDqsr3smrDsl5DripQg7IiY7Iug7ZmV7J247Ya17KeA66W8IOuwm+ydgCDtm4Qg7KaJ7IucIOq1rOunpOyLoOyyrSDrs4Dqsr0g67CPIOy3qOyGjOulvCDsmpTssq3tlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGiIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg67Cw7Iah7KCEIOydtOyaqeyekOydmCDqtazrp6Tsi6Dssq0g67OA6rK9IOuwjyDst6jshowg7JqU7LKt7J20IOyeiOuKlCDrlYzsl5DripQg7KeA7LK07JeG7J20IOq3uCDsmpTssq3sl5Ag65Sw6528IOyymOumrO2VqeuLiOuLpC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDEz7KGwKOuwsOyGoSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7J207Jqp7J6Q6rCAIOq1rOunpO2VnCDsnqztmZTsl5Ag64yA7ZW0IOuwsOyGoeyImOuLqCwg7IiY64uo67OEIOuwsOyGoeu5hOyaqSDrtoDri7TsnpAsIOyImOuLqOuzhCDrsLDshqHquLDqsIQg65Ox7J2EIOuqheyLnO2VqeuLiOuLpC4g66eM7JW9IFwi7JeQ7L2U7JeQ7L2UXCLsnZgg6rOg7J2Ywrfqs7zsi6TroZwg7JW97KCVIOuwsOyGoeq4sOqwhOydhCDstIjqs7ztlZwg6rK97Jqw7JeQ64qUIOq3uOuhnCDsnbjtlZwg7J207Jqp7J6Q7J2YIOyGkO2VtOulvCDrsLDsg4Htlanri4jri6QuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoJwxNOyhsCjtmZjquIksIOuwmO2SiCDrsI8g6rWQ7ZmYKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7J207Jqp7J6Q6rCAIOq1rOunpOyLoOyyre2VnCDsnqztmZQg65iQ64qUIOyaqeyXreydtCDtkojsoIjrk7HsnZgg7IKs7Jyg66GcIOyerO2ZlOydmCDsnbjrj4Qg65iQ64qUIOyaqeyXreydmCDsoJzqs7XsnYQg7ZWgIOyImCDsl4bsnYQg65WM7JeQ64qUIOyngOyytOyXhuydtCDqt7gg7IKs7Jyg66W8IOydtOyaqeyekOyXkOqyjCDthrXsp4DtlZjqs6AsIOyCrOyghOyXkCDsnqztmZQg65iQ64qUIOyaqeyXreydmCDrjIDquIjsnYQg67Cb7J2AIOqyveyasOyXkOuKlCDrjIDquIjsnYQg67Cb7J2AIOuCoOu2gO2EsCAz7J287J2064K07JeQLCDqt7jroIfsp4Ag7JWK7J2AIOqyveyasOyXkOuKlCDqt7gg7IKs7Jyg67Cc7IOd7J2866Gc67aA7YSwIDPsnbzsnbTrgrTsl5Ag6rOE7JW97ZW07KCcIOuwjyDtmZjquInsoIjssKjrpbwg7Leo7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaEg64uk7J2MIOqwge2YuOydmCDqsr3smrDsl5DripQgXCLsl5DsvZTsl5DsvZRcIuydgCDrsLDshqHrkJwg7J6s7ZmU7J287KeA652864+EIOyerO2ZlOulvCDrsJjtkojrsJvsnYAg64uk7J2MIOyYgeyXheydvCDsnbTrgrTsl5Ag7J207Jqp7J6Q7J2YIOyalOq1rOyXkCDrlLDrnbwg7KaJ7IucIO2ZmOq4iSwg67CY7ZKIIOuwjyDqtZDtmZgg7KGw7LmY66W8IO2VqeuLiOuLpC4g64uk66eMIOq3uCDsmpTqtazquLDtlZzsnYAg67Cw7Iah65CcIOuCoOuhnOu2gO2EsCAyMOydvCDsnbTrgrTroZwg7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxLiDrsLDshqHrkJwg7J6s7ZmU6rCAIOyjvOusuOuCtOyaqeqzvCDsg4HsnbTtlZjqsbDrgpggXCLsl5DsvZTsl5DsvZRcIuydtCDsoJzqs7XtlZwg7KCV67O07JmAIOyDgeydtO2VoCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgMi4g67Cw7Iah65CcIOyerO2ZlOqwgCDtjIzshpAsIOyGkOyDgeuQmOyXiOqxsOuCmCDsmKTsl7zrkJjsl4jsnYQg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMuIOyerO2ZlOqwgCDqtJHqs6Dsl5Ag7ZGc7Iuc65CcIOuwsOyGoeq4sOqwhOuztOuLpCDriqbqsowg67Cw7Iah65CcIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LiDrsKnrrLjtjJDrp6Trk7Hsl5DqtIDtlZzrspXrpaAg7KCcMTjsobDsl5Ag7J2Y7ZWY7JesIOq0keqzoOyXkCDtkZzsi5ztlZjsl6zslbwg7ZWgIOyCrO2VreydhCDtkZzsi5ztlZjsp4Ag7JWE64uI7ZWcIOyDge2DnOyXkOyEnCDsnbTsmqnsnpDsnZgg7LKt7JW97J20IOydtOujqOyWtOynhCDqsr3smrBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDE17KGwKOqwnOyduOygleuztOuztO2YuClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoCBcIuyXkOy9lOyXkOy9lFwi7J2AIOydtOyaqeyekOydmCDsoJXrs7TsiJjsp5Hsi5wg6rWs66ek6rOE7JW9IOydtO2WieyXkCDtlYTsmpTtlZwg7LWc7IaM7ZWc7J2YIOygleuztOulvCDsiJjsp5Htlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuLpOydjCDsgqztla3snYQg7ZWE7IiY7IKs7ZWt7Jy866GcIO2VmOupsCDqt7gg7Jm4IOyCrO2VreydgCDshKDtg53sgqztla3snLzroZwg7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxLiDshLHrqoVcclxuICAgICAgICAgICAgICAgICAgICAgICAgMi4g7KO866+865Ox66Gd67KI7Zi4KO2ajOybkOydmCDqsr3smrApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMuIOyjvOyGjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LiDsoITtmZTrsojtmLhcclxuICAgICAgICAgICAgICAgICAgICAgICAgNS4g7Z2s66edSUQo7ZqM7JuQ7J2YIOqyveyasClcclxuICAgICAgICAgICAgICAgICAgICAgICAgNi4g67mE67CA67KI7Zi4KO2ajOybkOydmCDqsr3smrApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoSBcIuyXkOy9lOyXkOy9lFwi7J20IOydtOyaqeyekOydmCDqsJzsnbjsi53rs4TsnbQg6rCA64ql7ZWcIOqwnOyduOygleuztOulvCDsiJjsp5HtlZjripQg65WM7JeQ64qUIOuwmOuTnOyLnCDri7ntlbQg7J207Jqp7J6Q7J2YIOuPmeydmOulvCDrsJvsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoiDsoJzqs7XrkJwg6rCc7J247KCV67O064qUIOuLue2VtCDsnbTsmqnsnpDsnZgg64+Z7J2Y7JeG7J20IOuqqeyggeyZuOydmCDsnbTsmqnsnbTrgpgg7KCcM+yekOyXkOqyjCDsoJzqs7XtlaAg7IiYIOyXhuycvOupsCwg7J207JeQIOuMgO2VnCDrqqjrk6Ag7LGF7J6E7J2AIFwi7JeQ7L2U7JeQ7L2UXCLsnbQg7KeR64uI64ukLiDri6Trp4wsIOuLpOydjOydmCDqsr3smrDsl5DripQg7JiI7Jm466GcIO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4g67Cw7Iah7JeF66y07IOBIOuwsOyGoeyXheyytOyXkOqyjCDrsLDshqHsl5Ag7ZWE7JqU7ZWcIOy1nOyGjO2VnOydmCDsnbTsmqnsnpDsnZgg7KCV67O0KOyEseuqhSwg7KO87IaMLCDsoITtmZTrsojtmLgp66W8IOyVjOugpOyjvOuKlCDqsr3smrBcclxuICAgICAgICAgICAgICAgICAgICAgICAgMi4g7Ya16rOE7J6R7ISxLCDtlZnsiKDsl7Dqtawg65iQ64qUIOyLnOyepeyhsOyCrOulvCDsnITtlZjsl6wg7ZWE7JqU7ZWcIOqyveyasOuhnOyEnCDtirnsoJUg6rCc7J247J2EIOyLneuzhO2VoCDsiJgg7JeG64qUIO2Yle2DnOuhnCDsoJzqs7XtlZjripQg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoyBcIuyXkOy9lOyXkOy9lFwi7J20IOygnDLtla3qs7wg7KCcM+2VreyXkCDsnZjtlbQg7J207Jqp7J6Q7J2YIOuPmeydmOulvCDrsJvslYTslbwg7ZWY64qUIOqyveyasOyXkOuKlCDqsJzsnbjsoJXrs7TqtIDrpqwg7LGF7J6E7J6Q7J2YIOyLoOybkCjshozsho0sIOyEseuqhSDrsI8g7KCE7ZmU67KI7Zi4IOq4sO2DgCDsl7Drnb3sspgpLCDsoJXrs7TsnZgg7IiY7KeR66qp7KCBIOuwjyDsnbTsmqnrqqnsoIEsIOygnDPsnpDsl5Ag64yA7ZWcIOygleuztOygnOqztSDqtIDroKjsgqztla0o7KCc6rO167Cb64qU7J6QLCDsoJzqs7XrqqnsoIEg67CPIOygnOqzte2VoCDsoJXrs7TsnZgg64K07JqpKeuTsSDsoJXrs7TthrXsi6Drp53snbTsmqnstInsp4Trk7Hsl5DqtIDtlZzrspXrpaAg7KCcMTbsobDsoJwz7ZWt7J20IOq3nOygle2VnCDsgqztla3snYQg66+466asIOuqheyLnO2VmOqxsOuCmCDqs6Dsp4DtlbTslbwg7ZWY66mwIOydtOyaqeyekOuKlCDslrjsoJzrk6Dsp4Ag7J20IOuPmeydmOulvCDssqDtmoztlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGkIOydtOyaqeyekOuKlCDslrjsoJzrk6Dsp4AgXCLsl5DsvZTsl5DsvZRcIuydtCDqsIDsp4Dqs6Ag7J6I64qUIOyekOyLoOydmCDqsJzsnbjsoJXrs7Tsl5Ag64yA7ZW0IOyXtOuejCDrsI8g7Jik66WY7KCV7KCV7J2EIOyalOq1rO2VoCDsiJgg7J6I7Jy866mwIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7J207JeQIOuMgO2VtCDsp4DssrTsl4bsnbQg7ZWE7JqU7ZWcIOyhsOy5mOulvCDst6jtlaAg7J2Y66y066W8IOynkeuLiOuLpC4g7J207Jqp7J6Q6rCAIOyYpOulmOydmCDsoJXsoJXsnYQg7JqU6rWs7ZWcIOqyveyasOyXkOuKlCBcIuyXkOy9lOyXkOy9lFwi7J2AIOq3uCDsmKTrpZjrpbwg7KCV7KCV7ZWgIOuVjOq5jOyngCDri7ntlbQg6rCc7J247KCV67O066W8IOydtOyaqe2VmOyngCDslYrsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRpSBcIuyXkOy9lOyXkOy9lFwi7J2AIOqwnOyduOygleuztCDrs7TtmLjrpbwg7JyE7ZWY7JesIOq0gOumrOyekOulvCDtlZzsoJXtlZjsl6wg6re4IOyImOulvCDstZzshoztmZTtlZjrqbAg7Iug7Jqp7Lm065OcLCDsnYDtlonqs4Tsoowg65Ox7J2EIO2PrO2VqO2VnCDsnbTsmqnsnpDsnZgg6rCc7J247KCV67O07J2YIOu2hOyLpCwg64+E64KcLCDsnKDstpwsIOuzgOyhsCDrk7HsnLzroZwg7J247ZWcIOydtOyaqeyekOydmCDshpDtlbTsl5Ag64yA7ZWY7JesIOuqqOuToCDssYXsnoTsnYQg7KeR64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaYgXCLsl5DsvZTsl5DsvZRcIiDrmJDripQg6re466Gc67aA7YSwIOqwnOyduOygleuztOulvCDsoJzqs7XrsJvsnYAg7KCcM+yekOuKlCDqsJzsnbjsoJXrs7TsnZgg7IiY7KeR66qp7KCBIOuYkOuKlCDsoJzqs7XrsJvsnYAg66qp7KCB7J2EIOuLrOyEse2VnCDrlYzsl5DripQg64u57ZW0IOqwnOyduOygleuztOulvCDsp4DssrTsl4bsnbQg7YyM6riw7ZWp64uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcMTbsobAoXCLrqrBcIuydmCDsnZjrrLQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaAgXCLrqrDsnYAg67KV66C56rO8IOydtCDslb3qtIDsnbQg6riI7KeA7ZWY6rGw64KYIOqzteyEnOyWkeyGjeyXkCDrsJjtlZjripQg7ZaJ7JyE66W8IO2VmOyngCDslYrsnLzrqbAg7J20IOyVveq0gOydtCDsoJXtlZjripQg67CU7JeQIOuUsOudvCDsp4Dsho3soIHsnbTqs6AsIOyViOygleyggeycvOuhnCDsnqztmZTCt+yaqeyXreydhCDsoJzqs7XtlZjripQg642wIOy1nOyEoOydhCDri6TtlZjsl6zslbwg7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaEgXCLsl5DsvZTsl5DsvZRcIuydgCDsnbTsmqnsnpDqsIAg7JWI7KCE7ZWY6rKMIOyduO2EsOuEtyDshJzruYTsiqTrpbwg7J207Jqp7ZWgIOyImCDsnojrj4TroZ0g7J207Jqp7J6Q7J2YIOqwnOyduOygleuztCjsi6DsmqnsoJXrs7Qg7Y+s7ZWoKeuztO2YuOulvCDsnITtlZwg67O07JWIIOyLnOyKpO2FnOydhCDqsJbstpTslrTslbwg7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDikaIgXCLsl5DsvZTsl5DsvZRcIuydtCDsg4HtkojsnbTrgpgg7Jqp7Jet7JeQIOuMgO2VmOyXrCDjgIztkZzsi5zCt+q0keqzoOydmOqzteygle2ZlOyXkOq0gO2VnOuyleuloOOAjSDsoJwz7KGwIOyGjOygleydmCDrtoDri7ntlZwg7ZGc7IucwrfqtJHqs6DtlonsnITrpbwg7ZWo7Jy866Gc7I2oIOydtOyaqeyekOqwgCDshpDtlbTrpbwg7J6F7J2AIOuVjOyXkOuKlCDsnbTrpbwg67Cw7IOB7ZWgIOyxheyehOydhCDsp5Hri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoyBcIuyXkOy9lOyXkOy9lFwi7J2AIOydtOyaqeyekOqwgCDsm5DtlZjsp4Ag7JWK64qUIOyYgeumrOuqqeyggeydmCDqtJHqs6DshLEg7KCE7J6Q7Jqw7Y647J2EIOuwnOyGoe2VmOyngCDslYrsirXri4jri6QuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoJwxN+yhsCgg7ZqM7JuQ7J2YIElEIOuwjyDruYTrsIDrsojtmLjsl5Ag64yA7ZWcIOydmOustClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoCDsoJwxNeyhsOydmCDqsr3smrDrpbwg7KCc7Jm47ZWcIElE7JmAIOu5hOuwgOuyiO2YuOyXkCDqtIDtlZwg6rSA66as7LGF7J6E7J2AIO2ajOybkOyXkOqyjCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoSDtmozsm5DsnYAg7J6Q7Iug7J2YIElEIOuwjyDruYTrsIDrsojtmLjrpbwg7KCcM+yekOyXkOqyjCDsnbTsmqntlZjqsowg7ZW07ISc64qUIOyViOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGiIO2ajOybkOydtCDsnpDsi6DsnZggSUQg67CPIOu5hOuwgOuyiO2YuOulvCDrj4Trgpzri7ntlZjqsbDrgpgg7KCcM+yekOqwgCDsgqzsmqntlZjqs6Ag7J6I7J2M7J2EIOyduOyngO2VnCDqsr3smrDsl5DripQg67CU66GcIFwi7JeQ7L2U7JeQ7L2UXCLsl5Ag7Ya167O07ZWY6rOgIFwi7JeQ7L2U7JeQ7L2UXCLsnZgg7JWI64K06rCAIOyeiOuKlCDqsr3smrDsl5DripQg6re47JeQIOuUsOudvOyVvCDtlanri4jri6QuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoJwxOOyhsCjsnbTsmqnsnpDsnZgg7J2Y66y0KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7J207Jqp7J6Q64qUIOuLpOydjCDtlonsnITrpbwg7ZWY7Jes7ISc64qUIOyViOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMS4g7Iug7LKtIOuYkOuKlCDrs4Dqsr3si5wg7ZeI7JyE64K07Jqp7J2YIOuTseuhnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyLiBcIuyXkOy9lOyXkOy9lFwi7JeQIOqyjOyLnOuQnCDsoJXrs7TsnZgg67OA6rK9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDMuIFwi7JeQ7L2U7JeQ7L2UXCLsnbQg7KCV7ZWcIOygleuztCDsnbTsmbjsnZgg7KCV67O0KOy7tO2TqO2EsCDtlITroZzqt7jrnqgg65OxKeydmCDshqHsi6Ag65iQ64qUIOqyjOyLnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA0LiBcIuyXkOy9lOyXkOy9lFwiIOq4sO2DgCDsoJwz7J6Q7J2YIOyggOyekeq2jCDrk7Eg7KeA7KCB7J6s7IKw6raM7JeQIOuMgO2VnCDsuajtlbRcclxuICAgICAgICAgICAgICAgICAgICAgICAgNS4gXCLsl5DsvZTsl5DsvZRcIiDquLDtg4Ag7KCcM+yekOydmCDrqoXsmIjrpbwg7IaQ7IOB7Iuc7YKk6rGw64KYIOyXheustOulvCDrsKntlbTtlZjripQg7ZaJ7JyEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDYuIOyZuOyEpCDrmJDripQg7Y+t66Cl7KCB7J24IOuplOyLnOyngMK37ZmU7IOBwrfsnYzshLEg6riw7YOAIOqzteyEnOyWkeyGjeyXkCDrsJjtlZjripQg7KCV67O066W8IOuqsOyXkCDqs7XqsJwg65iQ64qUIOqyjOyLnO2VmOuKlCDtlonsnIRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDE57KGwKOyXsOqysFwi7JeQ7L2U7JeQ7L2UXCLqs7wg7ZS87Jew6rKwXCLsl5DsvZTsl5DsvZRcIiDqsITsnZgg6rSA6rOEKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIOyDgeychCBcIuyXkOy9lOyXkOy9lFwi6rO8IO2VmOychCBcIuyXkOy9lOyXkOy9lFwi7J20IO2VmOydtO2NvCDrp4Htgawo7JiIOiDtlZjsnbTtjbwg66eB7YGs7J2YIOuMgOyDgeyXkOuKlCDrrLjsnpAsIOq3uOumvCDrsI8g64+Z7ZmU7IOBIOuTseydtCDtj6ztlajrkKgp67Cp7IudIOuTseycvOuhnCDsl7DqsrDrkJwg6rK97JqwLCDsoITsnpDrpbwg7Jew6rKwIFwi7JeQ7L2U7JeQ7L2UXCIo7Ju5IOyCrOydtO2KuCnsnbTrnbzqs6Ag7ZWY6rOgIO2bhOyekOulvCDtlLzsl7DqsrAgXCLsl5DsvZTsl5DsvZRcIijsm7nsgqzsnbTtirgp7J2065286rOgIO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGhIOyXsOqysCBcIuyXkOy9lOyXkOy9lFwi7J2AIO2UvOyXsOqysCBcIuyXkOy9lOyXkOy9lFwi7J20IOuPheyekOyggeycvOuhnCDsoJzqs7XtlZjripQg7J6s7ZmUwrfsmqnsl63sl5Ag7J2Y7ZWY7JesIOydtOyaqeyekOyZgCDtlontlZjripQg6rGw656Y7JeQIOuMgO2VtOyEnCDrs7Tspp3ssYXsnoTsnYTsp4Dsp4Ag7JWK64qU64uk64qUIOucu+ydhCDsl7DqsrAgXCLsl5DsvZTsl5DsvZRcIuydmCDsgqzsnbTtirjsl5DshJwg66qF7Iuc7ZWcIOqyveyasOyXkOuKlCDqt7gg6rGw656Y7JeQIOuMgO2VnCDrs7Tspp3ssYXsnoTsnYTsp4Dsp4Ag7JWK7Iq164uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcMjDsobAo7KCA7J6R6raM7J2YIOq3gOyGjSDrsI8g7J207Jqp7KCc7ZWcKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIFwi66qwXCLsnbQg7J6R7ISx7ZWcIOyggOyekeusvOyXkCDrjIDtlZwg7KCA7J6R6raMIOq4sO2DgCDsp4DsoIHsnqzsgrDqtozsnYAgXCLrqrBcIuyXkCDqt4Dsho3tlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoSDsnbTsmqnsnpDripQgXCLsl5DsvZTsl5DsvZRcIuydhCDsnbTsmqntlajsnLzroZzsjagg7Ja77J2AIOygleuztOulvCBcIuyXkOy9lOyXkOy9lFwi7J2YIOyCrOyghCDsirnrgpnsl4bsnbQg67O17KCcLCDshqHsi6AsIOy2nO2MkCwg67Cw7Y+sLCDrsKnshqEg6riw7YOAIOuwqeuyleyXkCDsnZjtlZjsl6wg7JiB66as66qp7KCB7Jy866GcIOydtOyaqe2VmOqxsOuCmCDsoJwz7J6Q7JeQ6rKMIOydtOyaqe2VmOqyjCDtlZjsl6zshJzripQg7JWI65Cp64uI64ukLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7KCcMjHsobAo67aE7J+B7ZW06rKwKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7J207Jqp7J6Q6rCAIOygnOq4sO2VmOuKlCDsoJXri7ntlZwg7J2Y6rKs7J2064KYIOu2iOunjOydhCDrsJjsmIHtlZjqs6Ag6re4IO2UvO2VtOulvCDrs7Tsg4HsspjrpqztlZjquLAg7JyE7ZWY7JesIO2UvO2VtOuztOyDgeyymOumrOq4sOq1rOulvCDshKTsuZjCt+yatOyYge2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGhIFwi7JeQ7L2U7JeQ7L2UXCLsnYAg7J207Jqp7J6Q66Gc67aA7YSwIOygnOy2nOuQmOuKlCDrtojrp4zsgqztla0g67CPIOydmOqyrOydgCDsmrDshKDsoIHsnLzroZwg6re4IOyCrO2VreydhCDsspjrpqztlanri4jri6QuIOuLpOunjCwg7Iug7IaN7ZWcIOyymOumrOqwgCDqs6TrnoDtlZwg6rK97Jqw7JeQ64qUIOydtOyaqeyekOyXkOqyjCDqt7gg7IKs7Jyg7JmAIOyymOumrOydvOygleydhCDsponsi5wg7Ya167O07ZW0IOuTnOumveuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGiIFwi7JeQ7L2U7JeQ7L2UXCLqs7wg7J207Jqp7J6Q6rCE7JeQIOuwnOyDne2VnCDrtoTsn4HsnYAg7KCE7J6Q6rGw656Y6riw67O467KVIOygnDI47KGwIOuwjyDrj5kg7Iuc7ZaJ66C5IOygnDE17KGw7JeQIOydmO2VmOyXrCDshKTsuZjrkJwg7KCE7J6Q6rGw656Y67aE7J+B7KGw7KCV7JyE7JuQ7ZqM7J2YIOyhsOygleyXkCDrlLDrpbwg7IiYIOyeiOyKteuLiOuLpC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOygnDIy7KGwKOyerO2MkOq2jCDrsI8g7KSA6rGw67KVKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4pGgIFwi7JeQ7L2U7JeQ7L2UXCLqs7wg7J207Jqp7J6Q6rCE7JeQIOuwnOyDne2VnCDsoITsnpDqsbDrnpgg67aE7J+B7JeQIOq0gO2VnCDshozshqHsnYAg66+87IKs7IaM7Iah67KV7IOB7J2YIOq0gO2VoOuyleybkOyXkCDsoJzquLDtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKRoSBcIuyXkOy9lOyXkOy9lFwi6rO8IOydtOyaqeyekOqwhOyXkCDsoJzquLDrkJwg7KCE7J6Q6rGw656YIOyGjOyGoeyXkOuKlCDtlZzqta3rspXsnYQg7KCB7Jqp7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqIOyggeyaqeydvCA6IDIwMjHrhYQgMDXsm5QgMTXsnbwg7J207ZuEIOuwnOyDne2VmOuKlCDrqqjrk6DqsbDrnpgg7ZaJ7JyEPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGl2V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tXcmFwcGVyIG9uQ2hhbmdlPXtvbkNoYW5nZX0+7J207Jqp7JW96rSA7JeQIOuPmeydmO2VqeuLiOuLpC48L0NoZWNrV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8RGl2V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+MS4g7IiY7KeR7ZWY64qUIOqwnOyduOygleuztOydmCDtla3rqqkg67CPIOyImOynkeuwqeuylVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6rCALiDsiJjsp5HtlZjripQg6rCc7J247KCV67O07J2YIO2VreuqqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDssqvsp7gsIO2ajOyCrOuKlCDtmozsm5DqsIDsnoUsIOybkO2ZnO2VnCDqs6DqsJ3sg4Hri7QsIOqwgeyihSDshJzruYTsiqTsnZgg7KCc6rO17J2EIOychO2VtCDstZzstIgg7ZqM7JuQ6rCA7J6FIOuLueyLnCDslYTrnpjsmYAg6rCZ7J2AIOqwnOyduOygleuztOulvCDsiJjsp5HtlZjqs6Ag7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBb7J2867CYIO2ajOybkOqwgOyehSDsi5xdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g7ZWE7IiY7ZWt66qpIDog64uJ64Sk7J6ELCDtlITroZztlYQg7IKs7KeEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g7ISg7YOd7IKs7ZWtIDog7J2066mU7J28IOyjvOyGjCwg7Zy064yA7Y+wIOuyiO2YuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBb7KCc7Zy0IOusuOydmCDsi5xdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g7IiY7KeRIO2VreuqqSA6IO2ajOyCrOuqhSwg64u064u57J6Q66qFLCDsl7Drnb3sspgsIOydtOuplOydvCwg7KCc66qpLCDrgrTsmqksIOyyqOu2gO2MjOydvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrkZjsp7gsIOyEnOu5hOyKpCDsnbTsmqnqs7zsoJXsnbTrgpgg7IKs7JeF7LKY66asIOqzvOygleyXkOyEnCDslYTrnpjsmYAg6rCZ7J2AIOygleuztOuTpOydtCDsnpDrj5nsnLzroZwg7IOd7ISx65CY7Ja0IOyImOynkeuQoCDsiJgg7J6I7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIElQIEFkZHJlc3MsIOy/oO2CpCwg67Cp66y4IOydvOyLnCwg7ISc67mE7IqkIOydtOyaqSDquLDroZ0sIOu2iOufiSDsnbTsmqkg6riw66GdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyFi+ynuCwg67aA6rCAIOyEnOu5hOyKpCDrsI8g66ee7Lak7IudIOyEnOu5hOyKpCDsnbTsmqkg6rO87KCV7JeQ7IScIO2VtOuLuSDshJzruYTsiqTsnZgg7J207Jqp7J6Q7JeQIO2VnO2VtOyEnOunjCDslYTrnpjsmYAg6rCZ7J2AIOygleuztOuTpOydtCDsiJjsp5HrkKAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSDso7zshowsIOyXsOudveyymCwg7IKs7JqpIOydtOuPme2GteyLoOyCrCwg6rOE7KKM67KI7Zi4IOuTsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrhLfsp7gsIOycoOujjCDshJzruYTsiqQg7J207JqpIOqzvOygleyXkOyEnCDslYTrnpjsmYAg6rCZ7J2AIOqysOygnCDsoJXrs7Trk6TsnbQg7IiY7KeR65CgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g7Iug7Jqp7Lm065OcIOqysOygnOyLnCA6IOy5tOuTnOyCrOuqhSwg7Lm065Oc67KI7Zi4IOuTsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIO2ctOuMgOyghO2ZlCDqsrDsoJzsi5wgOiDsnbTrj5nsoITtmZTrsojtmLgsIO2GteyLoOyCrCwg6rKw7KCc7Iq57J2467KI7Zi4IOuTsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOqzhOyijOydtOyytOyLnCA6IOydgO2WieuqhSwg6rOE7KKM67KI7Zi4IOuTsVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOyDge2SiOq2jCDsnbTsmqnsi5wgOiDsg4Htkojqtowg67KI7Zi4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuCmC4g6rCc7J247KCV67O0IOyImOynkeuwqeuylVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDtmozsgqzripQg64uk7J2M6rO8IOqwmeydgCDrsKnrspXsnLzroZwg6rCc7J247KCV67O066W8IOyImOynke2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSDtmYjtjpjsnbTsp4AsIOyEnOuptOyWkeyLnSwg7Yyp7IqkLCDsoITtmZQsIOyDgeuLtCDqsozsi5ztjJAsIOydtOuplOydvCwg7J2067Kk7Yq4IOydkeuqqCwg67Cw7Iah7JqU7LKtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g7ZiR66Cl7ZqM7IKs66Gc67aA7YSw7J2YIOygnOqztVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOyDneyEseygleuztCDsiJjsp5Eg7Yi07J2EIO2Gte2VnCDsiJjsp5EuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyLiDqsJzsnbjsoJXrs7TsnZgg7IiY7KeRIOuwjyDsnbTsmqnrqqnsoIFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOqwgC4g7ISc67mE7IqkIOygnOqzteyXkCDqtIDtlZwg6rOE7JW9IOydtO2WiSDrsI8g7ISc67mE7IqkIOygnOqzteyXkCDrlLDrpbgg7JqU6riI7KCV7IKwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOy7qO2FkOy4oCDsoJzqs7UsIO2KueyglSDrp57stqQg7ISc67mE7IqkIOygnOqztSwg66y87ZKI67Cw7IahIOuYkOuKlCDssq3qtazshJwg65OxIOuwnOyGoSwg67O47J247J247KadLCDqtazrp6Qg67CPIOyalOq4iCDqsrDsoJwsIOyalOq4iOy2lOyLrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrgpguIO2ajOybkOq0gOumrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDtmozsm5DsoJwg7ISc67mE7IqkIOydtOyaqSDrsI8g7KCc7ZWc7KCBIOuzuOyduCDtmZXsnbjsoJzsl5Ag65Sw66W4IOuzuOyduO2ZleyduCwg6rCc7J247Iud67OELCDrtojrn4ntmozsm5Ao7Iqk7YOA7J2864u37Lu07J207Jqp7JW96rSAIOygnDIw7KGwIDHtla3spJEg7KCcMTHsobAgMe2VrSAx7Zi4fjjtmLgg7JyE67CY7IKs7Jyg66GcIOyduO2VnCDsmIHqtazsnbTsmqnsoJXsp4Ag67CPIDLtla3sl5Ag65Sw6528IOqzhOyVve2VtOyngOuQnCDsmIHqtazsnbTsmqnsoJXsp4Ag7ZqM7JuQKeydmCDrtoDsoJUg7J207Jqp67Cp7KeA7JmAIOu5hOyduOqwgCDsgqzsmqnrsKnsp4AsIOqwgOyeheydmOyCrCDtmZXsnbgsIOqwgOyehSDrsI8g6rCA7J6F7Zqf7IiYIOygnO2VnCwg66eMMTTshLgg66+466eMIOyVhOuPmSDqsJzsnbjsoJXrs7Qg7IiY7KeRIOyLnCDrspXsoJUg64yA66as7J24IOuPmeydmOyXrOu2gCDtmZXsnbgsIOy2lO2bhCDrspXsoJUg64yA66as7J24IOuzuOyduO2ZleyduCzrtoTsn4Eg7KGw7KCV7J2EIOychO2VnCDquLDroZ3rs7TsobQsIOu2iOunjOyymOumrCDrk7Eg66+87JuQ7LKY66asLCDqs6Dsp4Dsgqztla0g7KCE64usXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuLpC4g7Iug6recIOyEnOu5hOyKpCDqsJzrsJwg67CPIOuniOy8gO2MhVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsi6Dqt5wg7ISc67mE7IqkIOqwnOuwnCDrsI8g66ee7LakIOyEnOu5hOyKpCDsoJzqs7UsIO2GteqzhO2VmeyggSDtirnshLHsl5Ag65Sw66W4IOyEnOu5hOyKpCDsoJzqs7Ug67CPIOq0keqzoCDqsozsnqwsIOyEnOu5hOyKpOydmCDsnKDtmqjshLEg7ZmV7J24LCDsnbTrsqTtirgg67CPIOq0keqzoOyEsSDsoJXrs7Qg7KCc6rO1IOuwjyDssLjsl6zquLDtmowg7KCc6rO17KCR7IaN67mI64+EIO2MjOyVhSwg7ZqM7JuQ7J2YIOyEnOu5hOyKpOydtOyaqeyXkCDrjIDtlZwg7Ya16rOEXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzLiDqsJzsnbjsoJXrs7TsnZgg67O07JygIOuwjyDsnbTsmqnquLDqsIRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOydtOyaqeyekOydmCDqsJzsnbjsoJXrs7TripQg7JuQ7LmZ7KCB7Jy866GcIOqwnOyduOygleuztOydmCDsiJjsp5Eg67CPIOydtOyaqeuqqeyggeydtCDri6zshLHrkJjrqbQg7KeA7LK0IOyXhuydtCDtjIzquLDtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuLqCwg64uk7J2M7J2YIOygleuztOyXkCDrjIDtlbTshJzripQg7JWE656Y7J2YIOydtOycoOuhnCDrqoXsi5ztlZwg6riw6rCEIOuPmeyViCDrs7TsobTtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOqwgC4g7ZqM7IKsIOuCtOu2gCDrsKnsuajsl5Ag7J2Y7ZWcIOygleuztOuztOycoCDsgqzsnKBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLSDrtoDsoJXsnbTsmqnquLDroZ1cclxuICAgICAgICAgICAgICAgICAgICAgICAg67O07KG0IOydtOycoCA6IOu2gOyglSDsnbTsmqkg67Cp7KeAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuztOyhtCDquLDqsIQgOiAx64WEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuCmC4g6rSA66Co67KV66C57JeQIOydmO2VnCDsoJXrs7Trs7TsnKAg7IKs7JygXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyDgeuylSwg7KCE7J6Q7IOB6rGw656YIOuTseyXkOyEnOydmCDshozruYTsnpDrs7TtmLjsl5Ag6rSA7ZWcIOuyleuloCDrk7Eg6rSA6rOE67KV66C57J2YIOq3nOygleyXkCDsnZjtlZjsl6wg67O07KG07ZWgIO2VhOyalOqwgCDsnojripQg6rK97JqwIO2ajOyCrOuKlCDqtIDqs4TrspXroLnsl5DshJwg7KCV7ZWcIOydvOygle2VnCDquLDqsIQg64+Z7JWIIO2ajOybkOygleuztOulvCDrs7TqtIDtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOydtCDqsr3smrAg7ZqM7IKs64qUIOuztOq0gO2VmOuKlCDsoJXrs7Trpbwg6re4IOuztOq0gOydmCDrqqnsoIHsnLzroZzrp4wg7J207Jqp7ZWY66mwIOuztOyhtOq4sOqwhOydgCDslYTrnpjsmYAg6rCZ7Iq164uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOqzhOyVvSDrmJDripQg7LKt7JW97LKg7ZqMIOuTseyXkCDqtIDtlZwg6riw66Gd44aN67O07KG0IOydtOycoCA6IOyghOyekOyDgeqxsOuemCDrk7Hsl5DshJzsnZgg7IaM67mE7J6Q67O07Zi47JeQIOq0gO2VnCDrspXrpaDjho3rs7TsobQg6riw6rCEIDogNeuFhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOuMgOq4iOqysOygnCDrsI8g7J6s7ZmUIOuTseydmCDqs7XquInsl5Ag6rSA7ZWcIOq4sOuhnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrs7TsobQg7J207JygIDog7KCE7J6Q7IOB6rGw656YIOuTseyXkOyEnOydmCDshozruYTsnpDrs7TtmLjsl5Ag6rSA7ZWcIOuyleuloFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrs7TsobQg6riw6rCEIDogNeuFhFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOyGjOu5hOyekOydmCDrtojrp4wg65iQ64qUIOu2hOyfgeyymOumrOyXkCDqtIDtlZwg6riw66GdIOuztOyhtCDsnbTsnKAgOiDsoITsnpDsg4HqsbDrnpgg65Ox7JeQ7ISc7J2YIOyGjOu5hOyekOuztO2YuOyXkCDqtIDtlZwg67KV66WgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuztOyhtCDquLDqsIQgOiAz64WEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g67O47J247ZmV7J247JeQIOq0gO2VnCDquLDroZ1cclxuICAgICAgICAgICAgICAgICAgICAgICAg67O07KG0IOydtOycoCA6IOygleuztO2GteyLoCDsnbTsmqnstInsp4Qg67CPIOygleuztOuztO2YuCDrk7Hsl5Ag6rSA7ZWcIOuyleuloFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrs7TsobQg6riw6rCEIDogNuqwnOyblFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOuwqeusuOyXkCDqtIDtlZwg6riw66GdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOuztOyhtCDsnbTsnKAgOiDthrXsi6DruYTrsIDrs7TtmLjrspVcclxuICAgICAgICAgICAgICAgICAgICAgICAg67O07KG0IOq4sOqwhCA6IDPqsJzsm5RcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDQuIOydtOyaqeyekCDrsI8g67KV7KCV64yA66as7J247J2YIOq2jOumrOyZgCDqt7gg7ZaJ7IKs67Cp67KVXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsnbTsmqnsnpAg67CPIOuyleygleuMgOumrOyduOydgCDrk7HroZ3rkJjslrQg7J6I64qUIOydtOyaqeyekCDrs7jsnbgg7Zi57J2AIOuLue2VtCDrp4wgMTTshLgg66+466eM7J6Q7J2YIOqwnOyduOygleuztCDqtIDroKjtlZjsl6wsIOyWuOygnOuToOyngCDqsJzsnbjsoJXrs7Qg7Je0656MLyDsoJXsoJUs7IKt7KCcLyDsspjrpqzsoJXsp4AvIOuPmeydmCDssqDtmozrpbwg7JqU7LKt7ZWgIOyImCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOydtOulvCDsnITtlZjsl6wg7ZmI7Y6Y7J207KeA7J2YIOKAnOqwnOyduOygleuztOuzgOqyveKAnSjrmJDripQg4oCc7ZqM7JuQ7KCV67O07IiY7KCV4oCdIOuTsSkg66mU64m066W8IOydtOyaqe2VmOyLnOqxsOuCmCwg64yA7ZGc7KCE7ZmUKDE1ODgtMzM2Nikg65iQ64qUIOqwnOyduOygleuztCDrs7TtmLjssYXsnoTsnpDsl5Dqsowg7KCE7ZmUIOuYkOuKlCDsnbTrqZTsnbzroZwg7Jew65297ZWY7Iuc66m0IOyngOyytOyXhuydtCDsobDsuZjtlZjqsqDsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIO2ajOyCrOuKlCDri6TsnYzsl5Ag7ZW064u57ZWY64qUIOqyveyasOyXkOuKlCDqsJzsnbjsoJXrs7TsnZgg7KCE67aAIOuYkOuKlCDsnbzrtoDsl5Ag64yA7ZWY7JesIOyXtOuejC8g7KCV7KCVLOyCreygnOulvCDqsbDsoIjtlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSDrspXrpaDsl5Ag65Sw6528IOyXtOuejOydtCDquIjsp4DrkJjqsbDrgpgg7KCc7ZWc65CY64qUIOqyveyasFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIOuLpOuluCDsgqzrnozsnZgg7IOd66qFP+yLoOyytOulvCDtlbTtlaAg7Jqw66Ck6rCAIOyeiOqxsOuCmCDri6Trpbgg7IKs656M7J2YIOyerOyCsOqzvCDqt7gg67CW7J2YIOydtOydteydhCDrtoDri7ntlZjqsowg7Lmo7ZW07ZWgIOyasOugpOqwgCDsnojripQg6rK97JqwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0g6rCc7J247KCV67O0IOyekOuPmeyImOynkSDsnqXsuZjsnZgg7ISk7LmYwrfsmrTsmIEg67CPIOqxsOu2gFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIO2ajOyCrOuKlCDsnbTsmqnsnpDsl5Dqsowg7Yq57ZmU65CcIOunnuy2pOyEnOu5hOyKpOulvCDsoJzqs7XtlZjquLAg7JyE7ZW07IScIOydtOyaqeyekOuTpOydmCDsoJXrs7Trpbwg7IiY7Iuc66GcIOyggOyepe2VmOqzoCDssL7slYTrgrTripQgJ+yEuOyFmChzZXNzaW9uKScg65iQ64qUICfsv6DtgqQoY29va2llKScg65Ox7J2EIOyatOyaqe2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDEpIOyEuOyFmCDrsI8g7L+g7YKk7J2YIOydmOuvuCA6IOyEuOyFmOydtOuegCDsiqTtg4Dsnbzri7fsu7Qg7ISc67mE7Iqk66W8IOygnOqzte2VmOuKlOuNsCDsnbTsmqnrkJjripQg7ISc67KE6rCAIOydtOyaqeyekOydmCDsoJHsho0g7Iuc6rCEIOuPmeyViCDsnbTsmqkg7KCV67O066W8IOyEnOuyhOyXkCDsoIDsnqXtlZjripQg6rKD7J2EIOydmOuvuO2VmOqzoCwg7L+g7YKk656AIOybuSDrmJDripQg7JWx7J2EIOyatOyYge2VmOuKlCDrjbAg7J207Jqp65CY64qUIOyEnOuyhOqwgCDsnbTsmqnsnpDsnZgg67iM65287Jqw7KCA7JeQIOuztOuCtOuKlCDslYTso7wg7J6R7J2AIO2FjeyKpO2KuCDtjIzsnbzroZzshJwg7J207Jqp7J6Q7J2YIOy7tO2TqO2EsCDtlZjrk5zrlJTsiqTtgazsl5Ag7KCA7J6l65CY6riw64+EIO2VmOuKlCDsoJXrs7Trpbwg66eQ7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMikg7IS47IWYIOuwjyDsv6DtgqTsnZgg7IKs7JqpIOuqqeyggSA67ZqM7IKs64qUIOyEuOyFmCDrsI8g7L+g7YKk66W8IOydtOyaqeyekOydmCDsoJHsho0g67mI64+E64KYIOuwqeusuCDsi5zqsIQsIOyEnOu5hOyKpOydtOyaqSDtjKjthLTsnYQg67aE7ISd7ZWY7JesIOqwnOyduCDrp57stqQg7ISc67mE7Iqk66W8IOygnOqzte2VmOqzoCDshJzruYTsiqQg66eM7KGx64+E66W8IOuGkuydtOq4sCDsnITtlZwg66qp7KCB7Jy866GcIOyCrOyaqe2VqeuLiOuLpC4g65iQ7ZWcIOqwgeyihSDsnbTrsqTtirgg7LC47JesIOuwjyDtg4Dqsp8g66eI7LyA7YyFIOuTseydmCDrqqnsoIHsnLzroZwg7L+g7YKkIOuwjyDshLjshZgg7KCV67O066W8IOyCrOyaqe2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6rCc7J247KCV67O0IOuztO2YuOyxheyehOyekCDrsI8g6rOg6rCd7ISc67mE7IqkIOuLtOuLueu2gOyEnCDrk7Eg7JWI64K0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIO2ajOyCrOuKlCDsnbTsmqnsnpDsnZgg6rCc7J247KCV67O066W8IOuztO2YuO2VmOqzoCDqsJzsnbjsoJXrs7TsmYAg6rSA66Co7ZWcIOu2iOunjOydhCDsspjrpqztlZjquLAg7JyE7ZWY7JesIOyVhOuemOyZgCDqsJnsnbQg6rSA66CoIOu2gOyEnCDrsI8g6rCc7J247KCV67O067O07Zi47LGF7J6E7J6Q66W8IOyngOygle2VmOqzoCDsnojsirXri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgxKSDqsJzsnbjsoJXrs7Qg67O07Zi47LGF7J6E7J6QIOuwjyDqtIDroKgg7JeF66y0IOuLtOuLueu2gOyEnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDqsJzsnbjsoJXrs7Qg67O07Zi47LGF7J6E7J6QIDog67CV6rec64+EXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOq0gOugqCDsl4XrrLQg64u064u567aA7IScIDog6rCc7J247KCV67O0IOuztO2YuOyCrOustOq1rVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsoITtmZQgOiAwMiAzNDQyIDM1NTVcclxuICAgICAgICAgICAgICAgICAgICAgICAg66y47J2Y7LKYIDogaW5mb0BzdGExLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoMikg6rOg6rCd7ISc67mE7IqkIOuLtOuLueu2gOyEnFxyXG4gICAgICAgICAgICAgICAgICAgICAgICDqs6DqsJ3shJzruYTsiqQg64u064u567aA7IScOiDqs6DqsJ0g7IOB64u07IukXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyghO2ZlCA6IDAyIDM0NDIgMzU1NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrrLjsnZjsspggOiBpbmZvQHN0YTEuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgzKSDquLDtg4Ag6riw6rSAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOydtOyaqeyekOuKlCDtmozsgqzsnZgg7ISc67mE7Iqk66W8IOydtOyaqe2VmOyLnOupsCDrsJzsg53tlZjripQg66qo65OgIOqwnOyduOygleuztOuztO2YuCDqtIDroKgg66+87JuQ7J2EIOqwnOyduOygleuztOuztO2YuOyxheyehOyekCDtmLnsnYAg64u064u567aA7ISc66GcIOyLoOqzoO2VmOyLpCDsiJgg7J6I7Iq164uI64ukLiDtmozsgqzripQg7J207Jqp7J6Q65Ok7J2YIOyLoOqzoOyCrO2VreyXkCDrjIDtlbQg7Iug7IaN7ZWY6rKMIOy2qeu2hO2VnCDri7Xrs4DsnYQg65Oc66a0IOqyg+yeheuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6riw7YOAIOqwnOyduOygleuztOy5qO2VtOyXkCDrjIDtlZwg7Iug6rOg64KYIOyDgeuLtOydtCDtlYTsmpTtlZjsi6Ag6rK97Jqw7JeQ64qUIOyVhOuemCDquLDqtIDsl5Ag66y47J2Y7ZWY7Iuc6riwIOuwlOuejeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6rCc7J247KCV67O07Lmo7ZW07Iug6rOg7IS87YSwIChodHRwOi8vcHJpdmFjeS5raXNhLm9yLmtyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDrjIDqsoDssLDssq0g6rO87ZWZ7IiY7IKs67aAIOyCrOydtOuyhOuylOyjhOyImOyCrOqzvCAod3d3LnNwby5nby5rciAvIOq1reuyiOyXhuydtCAxMzAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDqsr3ssLDssq0g7IKs7J2067KE7JWI7KCE6rWtIChjeWJlcmJ1cmVhdS5wb2xpY2UuZ28ua3IgLyDqta3rsojsl4bsnbQgMTgyKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L0RpdldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrV3JhcHBlciBvbkNoYW5nZT17b25DaGFuZ2V9PuqwnOyduOygleuztOyymOumrOuwqey5qOyXkCDrj5nsnZjtlanri4jri6QuPC9DaGVja1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblN0eWxlIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7qsIDsnoXsmYTro4w8L0J1dHRvblN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXIgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIiB0eXBlPVwiZW1haWxcIiAgcHJlZml4PXs8VXNlck91dGxpbmVkIC8+fSAvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0V3JhcHBlciBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiIHR5cGU9XCJwYXNzd29yZFwiIHByZWZpeD17PExvY2tPdXRsaW5lZCAvPn0gLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblN0eWxlIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvblN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PFNpZ251cCBvbkNsaWNrPXtvblNpZ251cH0gPu2ajOybkOqwgOyehTwvU2lnbnVwPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxTZWFyY2hQYXNzd29yZD7ruYTrsIDrsojtmLgg7LC+6riwPC9TZWFyY2hQYXNzd29yZD48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5XcmFwcGVyPuyGjOyFnCDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgICAgICA8SW1nV3JhcHBlciBzcmM9XCIvaW1hZ2VzL2dvb2dsZS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2sucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1nV3JhcHBlciBzcmM9XCIvaW1hZ2VzL25hdmVyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xvZ2luV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IFNwYW5XcmFwcGVyID0gc3R5bGVkLnNwYW5gXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlZGVmZjA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNDcuNDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb25TZWFyY2ggPSB2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3BhbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxTZWFyY2hPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCLqsoDsg4nslrTrpbwg7J6F66Cl7ZWY7IS47JqUXCI+PC9pbnB1dD5cclxuICAgICAgICA8L1NwYW5XcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZvcm07IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhd2VyLCBCdXR0b24sIElucHV0LCBGb3JtLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGJhY2tncm91bmQ6ICNhYWNkNmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbiAgICBcclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzgwYzM0MDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM4MGMzNDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoSW5wdXQpYCBcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIH0gXHJcbiAgICA6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZXR0aW5nRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICAvLyDsmKTrpbjsqr0gZHJhd2VyIOuztOydtOq4sCDslYjrs7TsnbTquLBcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgLy8gICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvbldyYXBwZXIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93RHJhd2VyfT5cclxuICAgICAgICAgICAgICAgIOyEpOyglVxyXG4gICAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyIHBsYWNlaG9sZGVyPVwi7J2066mU7J28XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyIHBsYWNlaG9sZGVyPVwi64uJ64Sk7J6EXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOuzgOqyvVwiIC8+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0V3JhcHBlciBwbGFjZWhvbGRlcj1cIuuhnOq3uOyVhOybg1wiICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSAgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBBdmF0YXIsIFJvdywgQ29sLCBTZWxlY3QsIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEVkaXRPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuY29uc3QgeyBTZWFyY2ggfSA9IElucHV0O1xyXG5cclxuY29uc3QgY2hpbGRyZW4gPSBbXTtcclxuZm9yIChsZXQgaSA9IDEwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgY2hpbGRyZW4ucHVzaCg8T3B0aW9uIGtleT17aS50b1N0cmluZygzNikgKyBpfT57aS50b1N0cmluZygzNikgKyBpfTwvT3B0aW9uPik7XHJcbn1cclxuXHJcbmNvbnN0IEFwcERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246ICdyb3cnO1xyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJztcclxuYDtcclxuXHJcbmNvbnN0IEFwcEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBTZWxlY3RlZDogJHt2YWx1ZX1gKTtcclxufVxyXG5cclxuY29uc3Qgb25TZWFyY2ggPSB2YWx1ZSA9PiBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcblxyXG5jb25zdCBTaG9wTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8QXBwRGl2PlxyXG4gICAgICAgICAgICA8U2VsZWN0IHNpemU9J2RlZmF1bHQnIGRlZmF1bHRWYWx1ZT1cImExXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gc3R5bGU9e3sgd2lkdGg6IDIwMCB9fT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggcGxhY2Vob2xkZXI9XCLsh7ztlZHrqrAg6rKA7IOJXCIgYWxsb3dDbGVhciBvblNlYXJjaD17b25TZWFyY2h9IHN0eWxlPXt7IHdpZHRoOiAyMDAgfX0gLz5cclxuICAgICAgICAgICAgPEFwcEJsb2NrPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1sxNiwxNl19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9KaXFHc3RFZm9XQU9IaVR4Y2xxaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9KaXFHc3RFZm9XQU9IaVR4Y2xxaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9KaXFHc3RFZm9XQU9IaVR4Y2xxaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9KaXFHc3RFZm9XQU9IaVR4Y2xxaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY292ZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9KaXFHc3RFZm9XQU9IaVR4Y2xxaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyB0aGUgZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NC41fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAsIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIGtleT1cImVsbGlwc2lzXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgdGhlIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIGtleT1cImVsbGlwc2lzXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgdGhlIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIGtleT1cImVsbGlwc2lzXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgdGhlIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIGtleT1cImVsbGlwc2lzXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgdGhlIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezQuNX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvSmlxR3N0RWZvV0FPSGlUeGNscWkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIGtleT1cImVsbGlwc2lzXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgdGhlIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9BcHBCbG9jaz5cclxuICAgICAgICA8L0FwcERpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BMaXN0OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0VmFsdWUgPSBudWxsKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdFZhbHVlKTtcclxuICBjb25zdCBoYW5kbGVyID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldHRlcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XHJcblxyXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XHJcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xyXG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcclxuICAgIHJldHVybiBjYWNoZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gY2FjaGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xyXG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcclxuXHJcbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XHJcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmV3T2JqID0ge307XHJcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xyXG5cclxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcclxuXHJcbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XHJcblxyXG4gIGlmIChjYWNoZSkge1xyXG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXdPYmo7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xyXG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX3R5cGVvZihvYmopO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGxleGVyKHN0cikge1xyXG4gICAgdmFyIHRva2VucyA9IFtdO1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcclxuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xyXG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxyXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcclxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxyXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcclxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcclxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcclxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xyXG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XHJcbiAgICAgICAgICAgIGkgPSBqO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcclxuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xyXG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XHJcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcclxuICAgICAgICAgICAgaSA9IGo7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xyXG4gICAgfVxyXG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XHJcbiAgICByZXR1cm4gdG9rZW5zO1xyXG59XHJcbi8qKlxyXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcclxuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xyXG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIHZhciBrZXkgPSAwO1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgdmFyIHBhdGggPSBcIlwiO1xyXG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcclxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xyXG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcclxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcclxuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XHJcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xyXG4gICAgICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xyXG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcclxuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xyXG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XHJcbi8qKlxyXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxyXG4gKi9cclxuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xyXG59XHJcbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XHJcbi8qKlxyXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcclxuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XHJcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cclxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XHJcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XHJcbi8qKlxyXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cclxuICovXHJcbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xyXG4gICAgdmFyIGtleXMgPSBbXTtcclxuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xyXG59XHJcbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcclxuLyoqXHJcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XHJcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcclxuICAgICAgICBpZiAoIW0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcclxuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xyXG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcclxuLyoqXHJcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcclxufVxyXG4vKipcclxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cclxuICovXHJcbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xyXG59XHJcbi8qKlxyXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XHJcbiAgICBpZiAoIWtleXMpXHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxyXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xyXG4gICAgaWYgKGdyb3Vwcykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGtleXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG59XHJcbi8qKlxyXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cclxuICovXHJcbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcclxuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cclxuICovXHJcbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcclxuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XHJcbn1cclxuLyoqXHJcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcclxuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xyXG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XHJcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcclxuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcclxuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xyXG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxyXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGVuZCkge1xyXG4gICAgICAgIGlmICghc3RyaWN0KVxyXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcclxuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXHJcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICghc3RyaWN0KSB7XHJcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XHJcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcclxufVxyXG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XHJcbi8qKlxyXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXHJcbiAqXHJcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXHJcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcclxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xyXG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XHJcbn1cclxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBTaG9wTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Nob3BMaXN0JztcclxuaW1wb3J0IEl0ZW1MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSXRlbUxpc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPFNob3BMaXN0IC8+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=