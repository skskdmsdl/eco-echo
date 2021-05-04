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
    _this = undefined,
    _s = $RefreshSig$();









var ButtonWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #aacd6e;\n    border-color: #aacd6e;\n    \n    :hover {\n        background: #80c340;\n        border-color: #80c340;\n    }\n"])));
_c = ButtonWrapper;
var InputWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"])(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["    \n    :hover {\n        border-color: #aacd6e;\n    } \n"])));
_c2 = InputWrapper;
var ButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #aacd6e;\n    border-color: #aacd6e;\n    \n    :hover {\n        background: #80c340;\n        border-color: #80c340;\n    }\n"])));
_c3 = ButtonStyle;
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["createGlobalStyle"])(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    .ant-input-affix-wrapper {\n        background: #aacd6e;\n        border-color: #aacd6e;\n    }\n"])));

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
      lineNumber: 70,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      title: "\uB85C\uADF8\uC778",
      placement: "right",
      closable: false,
      onClose: onClose,
      visible: visible,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onSubmitForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uC774\uBA54\uC77C",
          type: "email",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 71
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 74
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonStyle, {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(LoginForm, "fHDNzHcih+kzoC1v8TUSdt/11XM=");

_c4 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "InputWrapper");
$RefreshReg$(_c3, "ButtonStyle");
$RefreshReg$(_c4, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsIkJ1dHRvbiIsIklucHV0V3JhcHBlciIsIklucHV0IiwiQnV0dG9uU3R5bGUiLCJHbG9iYWwiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkxvZ2luRm9ybSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzaG93RHJhd2VyIiwib25DbG9zZSIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLGlFQUFNLENBQUNDLDJDQUFELENBQVQsZ1NBQW5CO0tBQU1GLGE7QUFVTixJQUFNRyxZQUFZLEdBQUdGLGlFQUFNLENBQUNHLDBDQUFELENBQVQsNk1BQWxCO01BQU1ELFk7QUFNTixJQUFNRSxXQUFXLEdBQUdKLGlFQUFNLENBQUNDLDJDQUFELENBQVQsa1NBQWpCO01BQU1HLFc7QUFVTixJQUFNQyxNQUFNLEdBQUdDLDJFQUFILHdQQUFaOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEI7QUFDQTtBQUNBLGtCQUE4QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCRixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FGRCxDQVRvQixDQWFwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNuQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBRG1DLENBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FONkIsRUFNM0IsRUFOMkIsQ0FBaEM7QUFRQSxzQkFDSTtBQUFBLDRCQUNBLHFFQUFDLGFBQUQ7QUFBZSxVQUFJLEVBQUMsU0FBcEI7QUFBOEIsYUFBTyxFQUFFUCxVQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBSUEscUVBQUMsMkNBQUQ7QUFDSSxXQUFLLEVBQUMsb0JBRFY7QUFFSSxlQUFTLEVBQUMsT0FGZDtBQUdJLGNBQVEsRUFBRSxLQUhkO0FBSUksYUFBTyxFQUFFQyxPQUpiO0FBS0ksYUFBTyxFQUFFSCxPQUxiO0FBQUEsNkJBT0kscUVBQUMseUNBQUQ7QUFBTSxnQkFBUSxFQUFFSSxZQUFoQjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxZQUFEO0FBQWMscUJBQVcsRUFBQyxvQkFBMUI7QUFBZ0MsY0FBSSxFQUFDLE9BQXJDO0FBQThDLGdCQUFNLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSSxxRUFBQyxZQUFEO0FBQWMscUJBQVcsRUFBQywwQkFBMUI7QUFBaUMsY0FBSSxFQUFDLFVBQXRDO0FBQWlELGdCQUFNLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFRSSxxRUFBQyxXQUFEO0FBQWEsY0FBSSxFQUFDLFNBQWxCO0FBQTRCLGtCQUFRLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFTSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxHQUFYO0FBQUEsaUNBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBVUkscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkE7QUFBQSxrQkFESjtBQTJCSCxDQXRERDs7R0FBTU4sUzs7TUFBQUEsUztBQXdEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGMyOWU4ZDhlODJiNjIxNjQ1MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERyYXdlciwgQnV0dG9uLCBJbnB1dCwgRm9ybSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgYmFja2dyb3VuZDogI2FhY2Q2ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIFxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODBjMzQwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZChJbnB1dClgICAgIFxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbiAgICB9IFxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGJhY2tncm91bmQ6ICNhYWNkNmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbiAgICBcclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzgwYzM0MDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM4MGMzNDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2FhY2Q2ZTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzaG93RHJhd2VyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgIC8vICAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgLy8gICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17c2hvd0RyYXdlcn0+XHJcbiAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIHRpdGxlPVwi66Gc6re47J24XCJcclxuICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0V3JhcHBlciBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiIHR5cGU9XCJlbWFpbFwiICBwcmVmaXg9ezxVc2VyT3V0bGluZWQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0V3JhcHBlciBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiIHR5cGU9XCJwYXNzd29yZFwiIHByZWZpeD17PExvY2tPdXRsaW5lZCAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uU3R5bGUgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuuhnOq3uOyduDwvQnV0dG9uU3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPu2ajOybkOqwgOyehTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPuu5hOuwgOuyiO2YuCDssL7quLA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=