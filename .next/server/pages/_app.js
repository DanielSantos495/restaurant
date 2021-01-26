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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Context/index.jsx":
/*!***************************!*\
  !*** ./Context/index.jsx ***!
  \***************************/
/*! exports provided: Context, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Context\", function() { return Context; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/eldani/Documents/main/study/platzi-master/semana-10/project/restaurant/frontend/Context/index.jsx\";\n\nconst Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\n\nconst Provider = ({\n  children\n}) => {\n  const windowNotUndefined = false; // Estado\n\n  const {\n    0: isAuth,\n    1: setIsAuth\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(() => {\n    return windowNotUndefined && window.sessionStorage.getItem('token');\n  });\n  const {\n    0: typeProductSelectionValidate,\n    1: setTypeProductSelectionValidate\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: manageAction,\n    1: setAction\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: activeEdit,\n    1: setActiveEdit\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: productForEdit,\n    1: setProduct\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: productChange,\n    1: setChange\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1); // Value del Provider\n\n  const value = {\n    isAuth,\n    activeAuth: token => {\n      setIsAuth(true);\n      windowNotUndefined && window.sessionStorage.setItem('token', token);\n    },\n    removeAuth: () => {\n      setIsAuth(false);\n      windowNotUndefined && window.sessionStorage.removeItem('token');\n    },\n    typeProductSelectionValidate,\n    choiseType: choise => {\n      setTypeProductSelectionValidate(choise);\n    },\n    manageAction,\n    setManageAction: action => {\n      setAction(action);\n    },\n    // CRUD producto\n    activeEdit,\n    setEdit: active => {\n      setActiveEdit(active);\n    },\n    productForEdit,\n    setProductForEdit: product => {\n      setProduct(product);\n    },\n    productChange,\n    setProductChange: () => {\n      setChange(productChange ? 0 : 1);\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Context.Provider, {\n    value: value,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Provider,\n  Consumer: Context.Consumer\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db250ZXh0L2luZGV4LmpzeD82Nzk0Il0sIm5hbWVzIjpbIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsIndpbmRvd05vdFVuZGVmaW5lZCIsImlzQXV0aCIsInNldElzQXV0aCIsInVzZVN0YXRlIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidHlwZVByb2R1Y3RTZWxlY3Rpb25WYWxpZGF0ZSIsInNldFR5cGVQcm9kdWN0U2VsZWN0aW9uVmFsaWRhdGUiLCJtYW5hZ2VBY3Rpb24iLCJzZXRBY3Rpb24iLCJhY3RpdmVFZGl0Iiwic2V0QWN0aXZlRWRpdCIsInByb2R1Y3RGb3JFZGl0Iiwic2V0UHJvZHVjdCIsInByb2R1Y3RDaGFuZ2UiLCJzZXRDaGFuZ2UiLCJ2YWx1ZSIsImFjdGl2ZUF1dGgiLCJ0b2tlbiIsInNldEl0ZW0iLCJyZW1vdmVBdXRoIiwicmVtb3ZlSXRlbSIsImNob2lzZVR5cGUiLCJjaG9pc2UiLCJzZXRNYW5hZ2VBY3Rpb24iLCJhY3Rpb24iLCJzZXRFZGl0IiwiYWN0aXZlIiwic2V0UHJvZHVjdEZvckVkaXQiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdENoYW5nZSIsIkNvbnN1bWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsT0FBTyxnQkFBR0MsMkRBQWEsRUFBN0I7O0FBRVAsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBRWhDLFFBQU1DLGtCQUFrQixRQUF4QixDQUZnQyxDQUdoQzs7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsTUFBTTtBQUN4QyxXQUFPSCxrQkFBa0IsSUFBSUksTUFBTSxDQUFDQyxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixPQUE5QixDQUE3QjtBQUNGLEdBRm1DLENBQXBDO0FBR0EsUUFBTTtBQUFBLE9BQUNDLDRCQUFEO0FBQUEsT0FBK0JDO0FBQS9CLE1BQWtFTCxzREFBUSxDQUFDLEtBQUQsQ0FBaEY7QUFDQSxRQUFNO0FBQUEsT0FBQ00sWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBNEJQLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDUSxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QlQsc0RBQVEsQ0FBQyxLQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNVLGNBQUQ7QUFBQSxPQUFpQkM7QUFBakIsTUFBK0JYLHNEQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDWSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQTZCYixzREFBUSxDQUFDLENBQUQsQ0FBM0MsQ0FYZ0MsQ0FlaEM7O0FBQ0EsUUFBTWMsS0FBSyxHQUFHO0FBQ1hoQixVQURXO0FBRVhpQixjQUFVLEVBQUVDLEtBQUssSUFBSTtBQUNsQmpCLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQUYsd0JBQWtCLElBQUlJLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQmUsT0FBdEIsQ0FBOEIsT0FBOUIsRUFBdUNELEtBQXZDLENBQXRCO0FBQ0YsS0FMVTtBQU1YRSxjQUFVLEVBQUUsTUFBTTtBQUNmbkIsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNBRix3QkFBa0IsSUFBSUksTUFBTSxDQUFDQyxjQUFQLENBQXNCaUIsVUFBdEIsQ0FBaUMsT0FBakMsQ0FBdEI7QUFDRixLQVRVO0FBVVhmLGdDQVZXO0FBV1hnQixjQUFVLEVBQUVDLE1BQU0sSUFBSTtBQUNuQmhCLHFDQUErQixDQUFDZ0IsTUFBRCxDQUEvQjtBQUNGLEtBYlU7QUFjWGYsZ0JBZFc7QUFlWGdCLG1CQUFlLEVBQUVDLE1BQU0sSUFBSTtBQUN4QmhCLGVBQVMsQ0FBQ2dCLE1BQUQsQ0FBVDtBQUNGLEtBakJVO0FBa0JYO0FBQ0FmLGNBbkJXO0FBb0JYZ0IsV0FBTyxFQUFFQyxNQUFNLElBQUk7QUFDaEJoQixtQkFBYSxDQUFDZ0IsTUFBRCxDQUFiO0FBQ0YsS0F0QlU7QUF1QlhmLGtCQXZCVztBQXdCWGdCLHFCQUFpQixFQUFFQyxPQUFPLElBQUc7QUFDMUJoQixnQkFBVSxDQUFDZ0IsT0FBRCxDQUFWO0FBQ0YsS0ExQlU7QUEyQlhmLGlCQTNCVztBQTRCWGdCLG9CQUFnQixFQUFFLE1BQU07QUFDckJmLGVBQVMsQ0FBQ0QsYUFBYSxHQUFHLENBQUgsR0FBTyxDQUFyQixDQUFUO0FBQ0Y7QUE5QlUsR0FBZDtBQWlDQSxzQkFDRyxxRUFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUVFLEtBQXpCO0FBQUEsY0FDSWxCO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURIO0FBS0YsQ0F0REQ7O0FBd0RlO0FBQ1pELFVBRFk7QUFFWmtDLFVBQVEsRUFBRXBDLE9BQU8sQ0FBQ29DO0FBRk4sQ0FBZiIsImZpbGUiOiIuL0NvbnRleHQvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblxuICAgY29uc3Qgd2luZG93Tm90VW5kZWZpbmVkID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuICAgLy8gRXN0YWRvXG4gICBjb25zdCBbaXNBdXRoLCBzZXRJc0F1dGhdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgICAgcmV0dXJuIHdpbmRvd05vdFVuZGVmaW5lZCAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgfSlcbiAgIGNvbnN0IFt0eXBlUHJvZHVjdFNlbGVjdGlvblZhbGlkYXRlLCBzZXRUeXBlUHJvZHVjdFNlbGVjdGlvblZhbGlkYXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgY29uc3QgW21hbmFnZUFjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICAgY29uc3QgW2FjdGl2ZUVkaXQsIHNldEFjdGl2ZUVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXG4gICBjb25zdCBbcHJvZHVjdEZvckVkaXQsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoJycpXG4gICBjb25zdCBbcHJvZHVjdENoYW5nZSwgc2V0Q2hhbmdlXSA9IHVzZVN0YXRlKDEpXG5cblxuXG4gICAvLyBWYWx1ZSBkZWwgUHJvdmlkZXJcbiAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgaXNBdXRoLFxuICAgICAgYWN0aXZlQXV0aDogdG9rZW4gPT4ge1xuICAgICAgICAgc2V0SXNBdXRoKHRydWUpXG4gICAgICAgICB3aW5kb3dOb3RVbmRlZmluZWQgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgICB9LFxuICAgICAgcmVtb3ZlQXV0aDogKCkgPT4ge1xuICAgICAgICAgc2V0SXNBdXRoKGZhbHNlKVxuICAgICAgICAgd2luZG93Tm90VW5kZWZpbmVkICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICB9LFxuICAgICAgdHlwZVByb2R1Y3RTZWxlY3Rpb25WYWxpZGF0ZSxcbiAgICAgIGNob2lzZVR5cGU6IGNob2lzZSA9PiB7XG4gICAgICAgICBzZXRUeXBlUHJvZHVjdFNlbGVjdGlvblZhbGlkYXRlKGNob2lzZSlcbiAgICAgIH0sXG4gICAgICBtYW5hZ2VBY3Rpb24sXG4gICAgICBzZXRNYW5hZ2VBY3Rpb246IGFjdGlvbiA9PiB7XG4gICAgICAgICBzZXRBY3Rpb24oYWN0aW9uKVxuICAgICAgfSxcbiAgICAgIC8vIENSVUQgcHJvZHVjdG9cbiAgICAgIGFjdGl2ZUVkaXQsXG4gICAgICBzZXRFZGl0OiBhY3RpdmUgPT4ge1xuICAgICAgICAgc2V0QWN0aXZlRWRpdChhY3RpdmUpXG4gICAgICB9LFxuICAgICAgcHJvZHVjdEZvckVkaXQsXG4gICAgICBzZXRQcm9kdWN0Rm9yRWRpdDogcHJvZHVjdCA9PntcbiAgICAgICAgIHNldFByb2R1Y3QocHJvZHVjdClcbiAgICAgIH0sXG4gICAgICBwcm9kdWN0Q2hhbmdlLFxuICAgICAgc2V0UHJvZHVjdENoYW5nZTogKCkgPT4ge1xuICAgICAgICAgc2V0Q2hhbmdlKHByb2R1Y3RDaGFuZ2UgPyAwIDogMSlcbiAgICAgIH1cbiAgIH1cblxuICAgcmV0dXJuIChcbiAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgIFByb3ZpZGVyLFxuICAgQ29uc3VtZXI6IENvbnRleHQuQ29uc3VtZXJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/index.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/GlobalStyle */ \"./styles/GlobalStyle.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context */ \"./Context/index.jsx\");\n\n\nvar _jsxFileName = \"/home/eldani/Documents/main/study/platzi-master/semana-10/project/restaurant/frontend/pages/_app.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__[\"GlobalStyle\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 10\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 10\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD82MGQzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBRXpDLHNCQUNHO0FBQUEsNEJBQ0cscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxlQUVHLHFFQUFDLGdEQUFELENBQVMsUUFBVDtBQUFBLDZCQUNHLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkg7QUFBQSxrQkFESDtBQVFGLENBVkQ7O0FBWWVGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxTdHlsZSdcblxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi4vQ29udGV4dCdcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cbiAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICA8Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDwvPlxuICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/GlobalStyle.js":
/*!*******************************!*\
  !*** ./styles/GlobalStyle.js ***!
  \*******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n   /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote {\n  &:before, &:after {\n    content: '';\n    content: none;\n  }\n}\n\nq {\n  &:before, &:after {\n    content: '';\n    content: none;\n  }\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGUuanM/ZDFkNiJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsV0FBVyxHQUFHQyxtRUFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbkRPIiwiZmlsZSI6Ii4vc3R5bGVzL0dsb2JhbFN0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSwgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLCBiLCB1LCBpLCBjZW50ZXIsIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlIHtcbiAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbn1cblxucSB7XG4gICY6YmVmb3JlLCAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBjb250ZW50OiBub25lO1xuICB9XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/GlobalStyle.js\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });