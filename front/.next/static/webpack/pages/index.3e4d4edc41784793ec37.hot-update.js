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
var ButtonStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #aacd6e;\n    border-color: #aacd6e;\n    padding: 0 80px;\n    \n    :hover {\n        background: #80c340;\n        border-color: #80c340;\n    }\n"])));
_c3 = ButtonStyle;
var LinkWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a)(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n    && {\n        color: black;\n    }\n    \n"]))); // const Global = createGlobalStyle`
//     .ant-input-affix-wrapper {
//         background: #aacd6e;
//         border-color: #aacd6e;
//     }
// `;

_c4 = LinkWrapper;

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
      lineNumber: 79,
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
          lineNumber: 90,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uC774\uBA54\uC77C",
          type: "email",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["UserOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 71
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(InputWrapper, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          prefix: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 74
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ButtonStyle, {
          type: "primary",
          htmlType: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(LinkWrapper, {
          href: "/",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(LinkWrapper, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            children: "\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(LoginForm, "fHDNzHcih+kzoC1v8TUSdt/11XM=");

_c5 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "InputWrapper");
$RefreshReg$(_c3, "ButtonStyle");
$RefreshReg$(_c4, "LinkWrapper");
$RefreshReg$(_c5, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsIkJ1dHRvbiIsIklucHV0V3JhcHBlciIsIklucHV0IiwiQnV0dG9uU3R5bGUiLCJMaW5rV3JhcHBlciIsIkxpbmsiLCJMb2dpbkZvcm0iLCJ1c2VTdGF0ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2hvd0RyYXdlciIsIm9uQ2xvc2UiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxpRUFBTSxDQUFDQywyQ0FBRCxDQUFULGdTQUFuQjtLQUFNRixhO0FBVU4sSUFBTUcsWUFBWSxHQUFHRixpRUFBTSxDQUFDRywwQ0FBRCxDQUFULDZNQUFsQjtNQUFNRCxZO0FBTU4sSUFBTUUsV0FBVyxHQUFHSixpRUFBTSxDQUFDQywyQ0FBRCxDQUFULHdUQUFqQjtNQUFNRyxXO0FBV04sSUFBTUMsV0FBVyxHQUFHTCxpRUFBTSxDQUFDTSxnREFBRCxDQUFULG1NQUFqQixDLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQWJNRCxXOztBQWVOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDcEI7QUFDQTtBQUNBLGtCQUE4QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCRixjQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0gsR0FGRCxDQVRvQixDQWFwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNRyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNuQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBRG1DLENBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FONkIsRUFNM0IsRUFOMkIsQ0FBaEM7QUFRQSxzQkFDSTtBQUFBLDRCQUNBLHFFQUFDLGFBQUQ7QUFBZSxVQUFJLEVBQUMsU0FBcEI7QUFBOEIsYUFBTyxFQUFFUCxVQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBSUEscUVBQUMsMkNBQUQ7QUFDSSxXQUFLLEVBQUMsb0JBRFY7QUFFSSxlQUFTLEVBQUMsT0FGZDtBQUdJLGNBQVEsRUFBRSxLQUhkO0FBSUksYUFBTyxFQUFFQyxPQUpiO0FBS0ksYUFBTyxFQUFFSCxPQUxiO0FBQUEsNkJBT0kscUVBQUMseUNBQUQ7QUFBTSxnQkFBUSxFQUFFSSxZQUFoQjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxZQUFEO0FBQWMscUJBQVcsRUFBQyxvQkFBMUI7QUFBZ0MsY0FBSSxFQUFDLE9BQXJDO0FBQThDLGdCQUFNLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSSxxRUFBQyxZQUFEO0FBQWMscUJBQVcsRUFBQywwQkFBMUI7QUFBaUMsY0FBSSxFQUFDLFVBQXRDO0FBQWlELGdCQUFNLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEosZUFRSSxxRUFBQyxXQUFEO0FBQWEsY0FBSSxFQUFDLFNBQWxCO0FBQTRCLGtCQUFRLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFTSSxxRUFBQyxXQUFEO0FBQWEsY0FBSSxFQUFDLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKLGVBVUkscUVBQUMsV0FBRDtBQUFhLGNBQUksRUFBQyxHQUFsQjtBQUFBLGlDQUFzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKQTtBQUFBLGtCQURKO0FBMkJILENBdEREOztHQUFNTixTOztNQUFBQSxTO0FBd0RTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZTRkNGVkYzQxNzg0NzkzZWMzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhd2VyLCBCdXR0b24sIElucHV0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBiYWNrZ3JvdW5kOiAjYWFjZDZlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFjZDZlO1xyXG4gICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4MGMzNDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODBjMzQwO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkKElucHV0KWAgICAgXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIH0gXHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25TdHlsZSA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgYmFja2dyb3VuZDogI2FhY2Q2ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuICAgIHBhZGRpbmc6IDAgODBweDtcclxuICAgIFxyXG4gICAgOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODBjMzQwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzgwYzM0MDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IExpbmtXcmFwcGVyID0gc3R5bGVkKExpbmspYFxyXG5cclxuICAgICYmIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuYDtcclxuXHJcbi8vIGNvbnN0IEdsb2JhbCA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4vLyAgICAgLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjYWFjZDZlO1xyXG4vLyAgICAgICAgIGJvcmRlci1jb2xvcjogI2FhY2Q2ZTtcclxuLy8gICAgIH1cclxuLy8gYDtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNob3dEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vICAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgLy8gICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICAvLyBkaXNwYXRjaCh7XHJcbiAgICAgICAgLy8gICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICAvLyAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEJ1dHRvbldyYXBwZXIgdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtzaG93RHJhd2VyfT5cclxuICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgdGl0bGU9XCLroZzqt7jsnbhcIlxyXG4gICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyIHBsYWNlaG9sZGVyPVwi7J2066mU7J28XCIgdHlwZT1cImVtYWlsXCIgIHByZWZpeD17PFVzZXJPdXRsaW5lZCAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRXcmFwcGVyIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCIgdHlwZT1cInBhc3N3b3JkXCIgcHJlZml4PXs8TG9ja091dGxpbmVkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25TdHlsZSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+66Gc6re47J24PC9CdXR0b25TdHlsZT5cclxuICAgICAgICAgICAgICAgIDxMaW5rV3JhcHBlciBocmVmPVwiL1wiPu2ajOybkOqwgOyehTwvTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1dyYXBwZXIgaHJlZj1cIi9cIj48YT7ruYTrsIDrsojtmLgg7LC+6riwPC9hPjwvTGlua1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==