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
var SearchPassword = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].a(_templateObject5 || (_templateObject5 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: black;\n    font-size: 10px;\n    margin-left: 100px;\n\n    :hover {\n        color: #80c340;\n    }\n"]))); // const Global = createGlobalStyle`
//     .ant-input-affix-wrapper {
//         background: #aacd6e;
//         border-color: #aacd6e;
//     }
// `;

_c5 = SearchPassword;

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
      lineNumber: 90,
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
          lineNumber: 101,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uC774\uBA54\uC77C",
          type: "email",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 71
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 74
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonStyle, {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Signup, {
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(SearchPassword, {
            children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 32
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(LoginForm, "fHDNzHcih+kzoC1v8TUSdt/11XM=");

_c6 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "InputWrapper");
$RefreshReg$(_c3, "ButtonStyle");
$RefreshReg$(_c4, "Signup");
$RefreshReg$(_c5, "SearchPassword");
$RefreshReg$(_c6, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsIkJ1dHRvbiIsIklucHV0V3JhcHBlciIsIklucHV0IiwiQnV0dG9uU3R5bGUiLCJTaWdudXAiLCJhIiwiU2VhcmNoUGFzc3dvcmQiLCJMb2dpbkZvcm0iLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2hvd0RyYXdlciIsIm9uQ2xvc2UiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsaUVBQU0sQ0FBQ0MsMkNBQUQsQ0FBVCxnU0FBbkI7S0FBTUYsYTtBQVVOLElBQU1HLFlBQVksR0FBR0YsaUVBQU0sQ0FBQ0csMENBQUQsQ0FBVCw2TUFBbEI7TUFBTUQsWTtBQU1OLElBQU1FLFdBQVcsR0FBR0osaUVBQU0sQ0FBQ0MsMkNBQUQsQ0FBVCx3VEFBakI7TUFBTUcsVztBQVdOLElBQU1DLE1BQU0sR0FBR0wseURBQU0sQ0FBQ00sQ0FBViw0T0FBWjtNQUFNRCxNO0FBU04sSUFBTUUsY0FBYyxHQUFHUCx5REFBTSxDQUFDTSxDQUFWLHFRQUFwQixDLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQWZNQyxjOztBQWlCTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3BCO0FBQ0E7QUFDQSxrQkFBOEJDLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9DLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNILEdBRkQsQ0FUb0IsQ0FhcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUcsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDbkNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQURtQyxDQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNELEdBTjZCLEVBTTNCLEVBTjJCLENBQWhDO0FBUUEsc0JBQ0k7QUFBQSw0QkFDQSxxRUFBQyxhQUFEO0FBQWUsVUFBSSxFQUFDLFNBQXBCO0FBQThCLGFBQU8sRUFBRVAsVUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUlBLHFFQUFDLDJDQUFEO0FBQ0ksV0FBSyxFQUFDLG9CQURWO0FBRUksZUFBUyxFQUFDLE9BRmQ7QUFHSSxjQUFRLEVBQUUsS0FIZDtBQUlJLGFBQU8sRUFBRUMsT0FKYjtBQUtJLGFBQU8sRUFBRUgsT0FMYjtBQUFBLDZCQU9JLHFFQUFDLHlDQUFEO0FBQU0sZ0JBQVEsRUFBRUksWUFBaEI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsWUFBRDtBQUFjLHFCQUFXLEVBQUMsb0JBQTFCO0FBQWdDLGNBQUksRUFBQyxPQUFyQztBQUE4QyxnQkFBTSxlQUFFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0kscUVBQUMsWUFBRDtBQUFjLHFCQUFXLEVBQUMsMEJBQTFCO0FBQWlDLGNBQUksRUFBQyxVQUF0QztBQUFpRCxnQkFBTSxlQUFFLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBKLGVBUUkscUVBQUMsV0FBRDtBQUFhLGNBQUksRUFBQyxTQUFsQjtBQUE0QixrQkFBUSxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBU0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBVUkscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlLHFFQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQTtBQUFBLGtCQURKO0FBMkJILENBdEREOztHQUFNTixTOztNQUFBQSxTO0FBd0RTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Njg2MGQyZWYwY2RjMGE3OGE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhd2VyLCBCdXR0b24sIElucHV0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFjZDZlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4gICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MGMzNDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBjMzQwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKElucHV0KWAgICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIH0gXHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZSA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgYmFja2dyb3VuZDogI2FhY2Q2ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIHBhZGRpbmc6IDAgODBweDtcclxuICAgIFxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODBjMzQwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cCA9IHN0eWxlZC5hYFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM4MGMzNDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hQYXNzd29yZCA9IHN0eWxlZC5hYFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cclxuICAgIDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICM4MGMzNDA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG4vLyBjb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuLy8gICAgIC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogI2FhY2Q2ZTtcclxuLy8gICAgICAgICBib3JkZXItY29sb3I6ICNhYWNkNmU7XHJcbi8vICAgICB9XHJcbi8vIGA7XHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICAvLyBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzaG93RHJhd2VyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgIC8vICAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgICAgLy8gZGlzcGF0Y2goe1xyXG4gICAgICAgIC8vICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgLy8gICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxCdXR0b25XcmFwcGVyIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17c2hvd0RyYXdlcn0+XHJcbiAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgIHRpdGxlPVwi66Gc6re47J24XCJcclxuICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0V3JhcHBlciBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiIHR5cGU9XCJlbWFpbFwiICBwcmVmaXg9ezxVc2VyT3V0bGluZWQgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0V3JhcHBlciBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiIHR5cGU9XCJwYXNzd29yZFwiIHByZWZpeD17PExvY2tPdXRsaW5lZCAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uU3R5bGUgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuuhnOq3uOyduDwvQnV0dG9uU3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxTaWdudXA+7ZqM7JuQ6rCA7J6FPC9TaWdudXA+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48U2VhcmNoUGFzc3dvcmQ+67mE67CA67KI7Zi4IOywvuq4sDwvU2VhcmNoUGFzc3dvcmQ+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=