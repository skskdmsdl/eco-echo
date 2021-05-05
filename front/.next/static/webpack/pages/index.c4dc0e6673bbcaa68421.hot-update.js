webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\euni\\workspaces\\eco_store\\front\\components\\LoginForm.js",
    _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _templateObject5,
    _templateObject6,
    _templateObject7,
    _this = undefined,
    _s = $RefreshSig$();









var ButtonWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #aacd6e;\n    border-color: #aacd6e;\n    \n    :hover {\n        background: #80c340;\n        border-color: #80c340;\n    }\n"])));
_c = ButtonWrapper;
var InputWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["    \n    :hover {\n        border-color: #aacd6e;\n    } \n"])));
_c2 = InputWrapper;
var ButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #aacd6e;\n    border-color: #aacd6e;\n    padding: 0 80px;\n    \n    :hover {\n        background: #80c340;\n        border-color: #80c340;\n    }\n"])));
_c3 = ButtonStyle;
var Signup = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: black;\n    font-size: 10px;\n\n    :hover {\n        color: #80c340;\n    }\n"])));
_c4 = Signup;
var SearchPassword = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: black;\n    font-size: 10px;\n    margin-left: 100px;\n\n    :hover {\n        color: #80c340;\n    }\n"])));
_c5 = SearchPassword;
var LoginWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].p(_templateObject6 || (_templateObject6 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 12px;\n    border-top: 1px solid #f0f0f0;\n    margin-top: 30px;\n    padding-top: 35px;\n\n"])));
_c6 = LoginWrapper;
var ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].img(_templateObject7 || (_templateObject7 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 25px;\n    float: right;\n    margin: 0 5px;\n\n"]))); // const Global = createGlobalStyle`
//     .ant-input-affix-wrapper {
//         background: #aacd6e;
//         border-color: #aacd6e;
//     }
// `;

_c7 = ImgWrapper;

var LoginForm = function LoginForm() {
  _s();

  // const dispatch = useDispatch();
  // const { logInLoading, logInError } = useSelector((state) => state.user);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var showDrawer = function showDrawer() {
    setVisible(true);
  };

  var onClose = function onClose() {
    setVisible(false);
  }; // useEffect(() => {
  //     if (logInError) {
  //       alert(logInError);
  //     }
  // }, [logInError]);


  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    console.log(email, password); // dispatch({
    //   type: LOG_IN_REQUEST,
    //   data: { email, password },
    // });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonWrapper, {
      type: "primary",
      onClick: showDrawer,
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      title: "\uB85C\uADF8\uC778",
      placement: "right",
      closable: false,
      onClose: onClose,
      visible: visible,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uC774\uBA54\uC77C",
          type: "email",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 71
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 74
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonStyle, {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Signup, {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SearchPassword, {
            children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(LoginWrapper, {
        children: ["\uC18C\uC15C \uB85C\uADF8\uC778", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ImgWrapper, {
          src: "/images/google.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ImgWrapper, {
          src: "/images/facebook.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ImgWrapper, {
          src: "/images/naver.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(LoginForm, "fHDNzHcih+kzoC1v8TUSdt/11XM=");

_c8 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "InputWrapper");
$RefreshReg$(_c3, "ButtonStyle");
$RefreshReg$(_c4, "Signup");
$RefreshReg$(_c5, "SearchPassword");
$RefreshReg$(_c6, "LoginWrapper");
$RefreshReg$(_c7, "ImgWrapper");
$RefreshReg$(_c8, "LoginForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsIkJ1dHRvbiIsIklucHV0V3JhcHBlciIsIklucHV0IiwiQnV0dG9uU3R5bGUiLCJTaWdudXAiLCJhIiwiU2VhcmNoUGFzc3dvcmQiLCJMb2dpbldyYXBwZXIiLCJwIiwiSW1nV3JhcHBlciIsImltZyIsIkxvZ2luRm9ybSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzaG93RHJhd2VyIiwib25DbG9zZSIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLGlFQUFNLENBQUNDLDJDQUFELENBQVQsZ1NBQW5CO0tBQU1GLGE7QUFVTixJQUFNRyxZQUFZLEdBQUdGLGlFQUFNLENBQUNHLDBDQUFELENBQVQsNk1BQWxCO01BQU1ELFk7QUFNTixJQUFNRSxXQUFXLEdBQUdKLGlFQUFNLENBQUNDLDJDQUFELENBQVQsd1RBQWpCO01BQU1HLFc7QUFXTixJQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNNLENBQVYsNE9BQVo7TUFBTUQsTTtBQVNOLElBQU1FLGNBQWMsR0FBR1AseURBQU0sQ0FBQ00sQ0FBVixxUUFBcEI7TUFBTUMsYztBQVVOLElBQU1DLFlBQVksR0FBR1IseURBQU0sQ0FBQ1MsQ0FBViw4UEFBbEI7TUFBTUQsWTtBQVFOLElBQU1FLFVBQVUsR0FBR1YseURBQU0sQ0FBQ1csR0FBViw4TUFBaEIsQyxDQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFaTUQsVTs7QUFjTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7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O01BQUFBLFM7QUE2RFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0ZGMwZTY2NzNiYmNhYTY4NDIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEcmF3ZXIsIEJ1dHRvbiwgSW5wdXQsIEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgVXNlck91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGJhY2tncm91bmQ6ICNhYWNkNmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbiAgICBcclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzgwYzM0MDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM4MGMzNDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQoSW5wdXQpYCAgICBcclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4gICAgfSBcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvblN0eWxlID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFjZDZlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4gICAgcGFkZGluZzogMCA4MHB4O1xyXG4gICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MGMzNDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBjMzQwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaFBhc3N3b3JkID0gc3R5bGVkLmFgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcblxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ2luV3JhcHBlciA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcblxyXG5gO1xyXG5cclxuY29uc3QgSW1nV3JhcHBlciA9IHN0eWxlZC5pbWdgXHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG5gO1xyXG5cclxuLy8gY29uc3QgR2xvYmFsID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbi8vICAgICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICNhYWNkNmU7XHJcbi8vICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4vLyAgICAgfVxyXG4vLyBgO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgLy8gY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0RyYXdlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChsb2dJbkVycm9yKSB7XHJcbiAgICAvLyAgICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgIC8vIGRpc3BhdGNoKHtcclxuICAgICAgICAvLyAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIC8vICAgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8QnV0dG9uV3JhcHBlciB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3Nob3dEcmF3ZXJ9PlxyXG4gICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgICB0aXRsZT1cIuuhnOq3uOyduFwiXHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXIgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIiB0eXBlPVwiZW1haWxcIiAgcHJlZml4PXs8VXNlck91dGxpbmVkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFdyYXBwZXIgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIiB0eXBlPVwicGFzc3dvcmRcIiBwcmVmaXg9ezxMb2NrT3V0bGluZWQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblN0eWxlIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj7roZzqt7jsnbg8L0J1dHRvblN0eWxlPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48U2lnbnVwPu2ajOybkOqwgOyehTwvU2lnbnVwPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PFNlYXJjaFBhc3N3b3JkPuu5hOuwgOuyiO2YuCDssL7quLA8L1NlYXJjaFBhc3N3b3JkPjwvTGluaz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8TG9naW5XcmFwcGVyPuyGjOyFnCDroZzqt7jsnbhcclxuICAgICAgICAgICAgICAgIDxJbWdXcmFwcGVyIHNyYz1cIi9pbWFnZXMvZ29vZ2xlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW1nV3JhcHBlciBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW1nV3JhcHBlciBzcmM9XCIvaW1hZ2VzL25hdmVyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvTG9naW5XcmFwcGVyPlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9