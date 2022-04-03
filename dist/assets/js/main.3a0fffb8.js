(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[179],{

/***/ 9548:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(1424);
;// CONCATENATED MODULE: ./src/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, options);




       /* harmony default export */ var src = (cjs_js_src/* default */.Z && cjs_js_src/* default.locals */.Z.locals ? cjs_js_src/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
;// CONCATENATED MODULE: ./src/components/Pre.js


function Pre(props) {
  return /*#__PURE__*/react.createElement("div", {
    id: props.load ? "preloader" : "preloader-none"
  });
}

/* harmony default export */ var components_Pre = (Pre);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Navbar.js + 20 modules
var Navbar = __webpack_require__(9106);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Nav.js + 2 modules
var Nav = __webpack_require__(98);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
;// CONCATENATED MODULE: ./src/Assets/logo.png
/* harmony default export */ var logo = ("data:image/png;base64,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");
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(5005);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/react-icons/cg/index.esm.js
var index_esm = __webpack_require__(471);
// EXTERNAL MODULE: ./node_modules/react-icons/im/index.esm.js
var im_index_esm = __webpack_require__(3990);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
;// CONCATENATED MODULE: ./src/components/Navbar.js













function NavBar() {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      expand = _useState2[0],
      updateExpanded = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      navColour = _useState4[0],
      updateNavbar = _useState4[1];

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return /*#__PURE__*/react.createElement(Navbar/* default */.Z, {
    expanded: expand,
    fixed: "top",
    expand: "md",
    className: navColour ? "sticky" : "navbar"
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Navbar/* default.Brand */.Z.Brand, {
    href: "/",
    className: "d-flex"
  }, /*#__PURE__*/react.createElement("img", {
    src: logo,
    className: "img-fluid logo",
    alt: "brand"
  })), /*#__PURE__*/react.createElement(Navbar/* default.Toggle */.Z.Toggle, {
    "aria-controls": "responsive-navbar-nav",
    onClick: function onClick() {
      updateExpanded(expand ? false : "expanded");
    }
  }, /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null), /*#__PURE__*/react.createElement("span", null)), /*#__PURE__*/react.createElement(Navbar/* default.Collapse */.Z.Collapse, {
    id: "responsive-navbar-nav"
  }, /*#__PURE__*/react.createElement(Nav/* default */.Z, {
    className: "ms-auto",
    defaultActiveKey: "#home"
  }, /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    as: react_router_dom/* Link */.rU,
    to: "/",
    onClick: function onClick() {
      updateExpanded(false);
      document.getElementById('home').scrollIntoView();
    }
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiOutlineHome */.iqr, {
    style: {
      marginBottom: "2px"
    }
  }), " Home")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    as: react_router_dom/* Link */.rU,
    to: "#work",
    onClick: function onClick() {
      updateExpanded(false);
      document.getElementById('work').scrollIntoView();
    }
  }, /*#__PURE__*/react.createElement(index_esm/* CgFileDocument */.K46, {
    style: {
      marginBottom: "2px"
    }
  }), " Work Experience")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    as: react_router_dom/* Link */.rU,
    to: "#projects",
    onClick: function onClick() {
      updateExpanded(false);
      document.getElementById('project').scrollIntoView();
    }
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiOutlineFundProjectionScreen */.$tL, {
    style: {
      marginBottom: "2px"
    }
  }), " ", " Projects")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    as: react_router_dom/* Link */.rU,
    to: "#eduction",
    onClick: function onClick() {
      updateExpanded(false);
      document.getElementById('education').scrollIntoView();
    }
  }, /*#__PURE__*/react.createElement(im_index_esm/* ImBlog */.Sdv, {
    style: {
      marginBottom: "2px"
    }
  }), " Education")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(Nav/* default.Link */.Z.Link, {
    as: react_router_dom/* Link */.rU,
    to: "#about",
    onClick: function onClick() {
      updateExpanded(false);
      document.getElementById('about').scrollIntoView();
    }
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiOutlineUser */.nf1, {
    style: {
      marginBottom: "2px"
    }
  }), " About")), /*#__PURE__*/react.createElement(Nav/* default.Item */.Z.Item, {
    className: "fork-btn"
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    href: "https://github.com/MattiasHenders",
    target: "_blank",
    className: "fork-btn-inner"
  }, /*#__PURE__*/react.createElement(index_esm/* CgGitFork */.uCW, {
    style: {
      fontSize: "1.2em"
    }
  }), " ", /*#__PURE__*/react.createElement(ai_index_esm/* AiFillStar */.pHD, {
    style: {
      fontSize: "1.1em"
    }
  })))))));
}

/* harmony default export */ var components_Navbar = (NavBar);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(4051);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(1555);
;// CONCATENATED MODULE: ./src/Assets/home-main.svg
var _rect, _rect2, _rect3, _rect4, _rect5, _rect6, _rect7, _rect8, _rect9, _rect10, _rect11, _rect12, _rect13, _rect14, _rect15, _rect16, _rect17, _rect18, _rect19, _rect20, _rect21, _rect22, _rect23, _rect24, _rect25, _rect26, _rect27, _rect28, _rect29, _rect30, _rect31, _rect32, _rect33, _rect34, _rect35, _rect36, _rect37, _rect38, _rect39, _rect40, _rect41, _rect42, _rect43, _rect44, _rect45, _rect46, _rect47, _rect48, _rect49, _path, _path2, _path3, _rect50, _rect51, _circle;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgHomeMain = function SvgHomeMain(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: 786.82,
    height: 572.258,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("path", {
    d: "M726.13 516.003c46.076-33.364 68.083-89.428 54.305-142.91a143.578 143.578 0 0 0-1.084-3.978c-9.133-31.747-31.731-61.919-64.665-72.063-27.653-8.517-57.839-1.967-86.688-5.355-56.633-6.649-98.284-62.614-129.178-108.225-30.894-45.611-56.892-84.264-97.943-121.946C333.211-.585 222.831-13.958 138.934 26.472 55.038 66.903 1.597 156.599 3.876 245.995c2.28 89.395 26.534 173.734 107.601 219.08 29.781 16.658 99.177 37.481 133.456 33.351 29.744-3.583 95.104 3.771 124.708-.739 46.543-7.093 47.694 2.767 87.95 26.081 40.257 23.312 82.525 30.653 128.271 41.46 44.42 10.495 99.452-19.67 140.268-49.225Z",
    style: {
      fill: "#a7a7a7"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M815.016 219.191c-.87-.58-1.75-1.13-2.62-1.69a380.24 380.24 0 0 0-80.31-38.93l-6.54 90.22h-41.46v-103.39c-2.61-.54-5.24-1.05-7.87-1.53v104.92h-49.27a102.27 102.27 0 0 1-102.27-102.27c-2.64.57-5.26 1.18-7.88 1.83v100.44h-40.13l-6.23-86.03a380.858 380.858 0 0 0-81.94 43.53c-.44.3-.88.61-1.31.91-2.21 1.55-4.39 3.13-6.56 4.73v344.19h118.27l-2.09-28.95-11.5-158.95h231.59l-11.5 158.95-2.09 28.95h116.96v-353.45q-2.61-1.77-5.25-3.48Zm-298.22 142.78h-33.39l-6.17-85.3h39.56Zm159.42 0h-56.08v-1.69a6.18 6.18 0 0 0-6.19-6.18h-24.38a6.178 6.178 0 0 0-6.18 6.18v1.69h-58.71v-85.3h151.54Zm7.87 0v-85.3h40.89l-6.17 85.3ZM206.59 598.162a289.003 289.003 0 0 0 28.12 28.95l730.58 1a289.003 289.003 0 0 0 28.12-28.95Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M702.02 505.462v85.704a4.122 4.122 0 0 0 4.119 4.12h127.004a4.122 4.122 0 0 0 4.12-4.12v-85.704a4.124 4.124 0 0 0-4.12-4.114H706.14a4.124 4.124 0 0 0-4.12 4.114Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#412e2e"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M705 506.529v83.58a2.205 2.205 0 0 0 2.2 2.202h124.886a2.205 2.205 0 0 0 2.202-2.202v-83.58a2.206 2.206 0 0 0-2.202-2.206H707.201a2.206 2.206 0 0 0-2.202 2.206Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#ff6363"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M699.364 607.881a2.47 2.47 0 0 0 1.943.93H837.3a2.502 2.502 0 0 0 2.446-3.016l-2.11-10.027a2.507 2.507 0 0 0-1.559-1.818 2.425 2.425 0 0 0-.888-.167H703.41a2.424 2.424 0 0 0-.888.167 2.507 2.507 0 0 0-1.558 1.818l-2.111 10.027a2.5 2.5 0 0 0 .51 2.086Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#412e2e"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 830.034,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 728.833 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 821.657,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 720.456 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 813.28,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 712.08 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 804.903,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 703.702 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 796.526,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 695.325 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 788.149,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 686.948 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), _rect || (_rect = /*#__PURE__*/react.createElement("rect", {
    x: 779.772,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 678.571 514.91)",
    fill: "#3f3d56"
  })), _rect2 || (_rect2 = /*#__PURE__*/react.createElement("rect", {
    x: 771.395,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 670.194 514.91)",
    fill: "#3f3d56"
  })), _rect3 || (_rect3 = /*#__PURE__*/react.createElement("rect", {
    x: 763.018,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 661.817 514.91)",
    fill: "#3f3d56"
  })), _rect4 || (_rect4 = /*#__PURE__*/react.createElement("rect", {
    x: 754.641,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 653.44 514.91)",
    fill: "#3f3d56"
  })), _rect5 || (_rect5 = /*#__PURE__*/react.createElement("rect", {
    x: 746.264,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 645.063 514.91)",
    fill: "#3f3d56"
  })), /*#__PURE__*/react.createElement("rect", {
    x: 737.887,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 636.686 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 729.51,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 628.31 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 721.133,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 619.932 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 712.756,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 611.555 514.91)",
    style: {
      fill: "#563d3d"
    }
  }), _rect6 || (_rect6 = /*#__PURE__*/react.createElement("rect", {
    x: 704.379,
    y: 595.588,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 603.178 514.91)",
    fill: "#3f3d56"
  })), /*#__PURE__*/react.createElement("rect", {
    x: 830.133,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 728.932 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 821.756,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 720.555 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 813.379,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 712.178 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 805.002,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 703.801 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 796.625,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 695.424 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 788.248,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 687.047 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), _rect7 || (_rect7 = /*#__PURE__*/react.createElement("rect", {
    x: 779.871,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 678.67 519.098)",
    fill: "#3f3d56"
  })), _rect8 || (_rect8 = /*#__PURE__*/react.createElement("rect", {
    x: 771.494,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 670.293 519.098)",
    fill: "#3f3d56"
  })), _rect9 || (_rect9 = /*#__PURE__*/react.createElement("rect", {
    x: 763.117,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 661.916 519.098)",
    fill: "#3f3d56"
  })), _rect10 || (_rect10 = /*#__PURE__*/react.createElement("rect", {
    x: 754.74,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 653.54 519.098)",
    fill: "#3f3d56"
  })), _rect11 || (_rect11 = /*#__PURE__*/react.createElement("rect", {
    x: 746.363,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 645.162 519.098)",
    fill: "#3f3d56"
  })), _rect12 || (_rect12 = /*#__PURE__*/react.createElement("rect", {
    x: 737.986,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 636.785 519.098)",
    fill: "#3f3d56"
  })), /*#__PURE__*/react.createElement("rect", {
    x: 729.609,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 628.408 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 721.232,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 620.031 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 712.855,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 611.654 519.098)",
    style: {
      fill: "#563d3d"
    }
  }), _rect13 || (_rect13 = /*#__PURE__*/react.createElement("rect", {
    x: 704.478,
    y: 599.777,
    width: 4.188,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 603.277 519.098)",
    fill: "#3f3d56"
  })), /*#__PURE__*/react.createElement("rect", {
    x: 760.604,
    y: 604.803,
    width: 33.508,
    height: 2.513,
    rx: 0.488,
    transform: "rotate(-180 674.063 524.124)",
    style: {
      fill: "#563d3d"
    }
  }), _rect14 || (_rect14 = /*#__PURE__*/react.createElement("rect", {
    x: 515.631,
    y: 358.737,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect15 || (_rect15 = /*#__PURE__*/react.createElement("rect", {
    x: 548.154,
    y: 358.737,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect16 || (_rect16 = /*#__PURE__*/react.createElement("rect", {
    x: 557.369,
    y: 358.737,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect17 || (_rect17 = /*#__PURE__*/react.createElement("rect", {
    x: 524.477,
    y: 358.477,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect18 || (_rect18 = /*#__PURE__*/react.createElement("rect", {
    x: 567.841,
    y: 358.477,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect19 || (_rect19 = /*#__PURE__*/react.createElement("rect", {
    x: 524.304,
    y: 365.784,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect20 || (_rect20 = /*#__PURE__*/react.createElement("rect", {
    x: 556.827,
    y: 365.784,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect21 || (_rect21 = /*#__PURE__*/react.createElement("rect", {
    x: 566.042,
    y: 365.784,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect22 || (_rect22 = /*#__PURE__*/react.createElement("rect", {
    x: 533.15,
    y: 365.523,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect23 || (_rect23 = /*#__PURE__*/react.createElement("rect", {
    x: 576.514,
    y: 365.523,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect24 || (_rect24 = /*#__PURE__*/react.createElement("rect", {
    x: 532.977,
    y: 372.83,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect25 || (_rect25 = /*#__PURE__*/react.createElement("rect", {
    x: 565.5,
    y: 372.83,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect26 || (_rect26 = /*#__PURE__*/react.createElement("rect", {
    x: 574.715,
    y: 372.83,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect27 || (_rect27 = /*#__PURE__*/react.createElement("rect", {
    x: 541.823,
    y: 372.57,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect28 || (_rect28 = /*#__PURE__*/react.createElement("rect", {
    x: 585.187,
    y: 372.57,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect29 || (_rect29 = /*#__PURE__*/react.createElement("rect", {
    x: 541.649,
    y: 379.877,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect30 || (_rect30 = /*#__PURE__*/react.createElement("rect", {
    x: 574.172,
    y: 379.877,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect31 || (_rect31 = /*#__PURE__*/react.createElement("rect", {
    x: 583.387,
    y: 379.877,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect32 || (_rect32 = /*#__PURE__*/react.createElement("rect", {
    x: 550.496,
    y: 379.617,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect33 || (_rect33 = /*#__PURE__*/react.createElement("rect", {
    x: 548.154,
    y: 407.898,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect34 || (_rect34 = /*#__PURE__*/react.createElement("rect", {
    x: 557.369,
    y: 407.898,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect35 || (_rect35 = /*#__PURE__*/react.createElement("rect", {
    x: 567.841,
    y: 408.158,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect36 || (_rect36 = /*#__PURE__*/react.createElement("rect", {
    x: 515.631,
    y: 407.898,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect37 || (_rect37 = /*#__PURE__*/react.createElement("rect", {
    x: 524.477,
    y: 408.158,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect38 || (_rect38 = /*#__PURE__*/react.createElement("rect", {
    x: 524.304,
    y: 400.851,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect39 || (_rect39 = /*#__PURE__*/react.createElement("rect", {
    x: 556.827,
    y: 400.851,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect40 || (_rect40 = /*#__PURE__*/react.createElement("rect", {
    x: 566.042,
    y: 400.851,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect41 || (_rect41 = /*#__PURE__*/react.createElement("rect", {
    x: 533.15,
    y: 401.111,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect42 || (_rect42 = /*#__PURE__*/react.createElement("rect", {
    x: 532.977,
    y: 393.804,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect43 || (_rect43 = /*#__PURE__*/react.createElement("rect", {
    x: 565.5,
    y: 393.804,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect44 || (_rect44 = /*#__PURE__*/react.createElement("rect", {
    x: 574.715,
    y: 393.804,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect45 || (_rect45 = /*#__PURE__*/react.createElement("rect", {
    x: 541.823,
    y: 394.064,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect46 || (_rect46 = /*#__PURE__*/react.createElement("rect", {
    x: 541.649,
    y: 386.758,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect47 || (_rect47 = /*#__PURE__*/react.createElement("rect", {
    x: 574.172,
    y: 386.758,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect48 || (_rect48 = /*#__PURE__*/react.createElement("rect", {
    x: 583.387,
    y: 386.758,
    width: 5.966,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _rect49 || (_rect49 = /*#__PURE__*/react.createElement("rect", {
    x: 550.496,
    y: 387.018,
    width: 20.796,
    height: 3.122,
    rx: 1.561,
    fill: "#fff"
  })), _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "m504.917 490.482-13.35-21.102 41.903-33.403 17.295-19.16a19.161 19.161 0 0 1 32.418 6.827 19.161 19.161 0 0 1-11.57 23.991l-27.349 10.075Z",
    fill: "#ffb6b6"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M398.28 501.352v102.56h71.85v-102.56a3.448 3.448 0 0 0-2.43-3.3 3.175 3.175 0 0 0-1.03-.16h-64.92a3.463 3.463 0 0 0-3.47 3.46Zm28.04 35.24a7.67 7.67 0 0 1 15.34 0v11.9a7.67 7.67 0 0 1-15.34 0Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#412e2e"
    }
  }), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M191.47 436.76v9.89a1.946 1.946 0 0 0 1.93 1.94h68.43a1.94 1.94 0 0 0 1.93-1.94v-9.89Z",
    fill: "#3f3d56"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M285.25 346.832v187.26a9.007 9.007 0 0 0 9 9h277.5a9.007 9.007 0 0 0 9-9v-187.26a9.011 9.011 0 0 0-9-8.99h-277.5a9.012 9.012 0 0 0-9 8.99Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M85.17 185.29v182.62a4.818 4.818 0 0 0 4.81 4.81h272.87a4.818 4.818 0 0 0 4.81-4.81V185.29a4.82 4.82 0 0 0-4.81-4.82H89.98a4.82 4.82 0 0 0-4.81 4.82Z",
    fill: "#fff"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M342.4 611.792a2.948 2.948 0 0 0 2.32 1.11h162.34a2.987 2.987 0 0 0 2.92-3.6l-2.52-11.97a2.993 2.993 0 0 0-1.86-2.17 2.895 2.895 0 0 0-1.06-.2H347.23a2.894 2.894 0 0 0-1.06.2 2.992 2.992 0 0 0-1.86 2.17l-2.52 11.97a2.985 2.985 0 0 0 .61 2.49Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#412e2e"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M560.585 369.499H305.26a1.016 1.016 0 0 1 0-2.031h255.324a1.016 1.016 0 0 1 0 2.03Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 116.051,
    cy: 192.33,
    rx: 5.95,
    ry: 6.083,
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 136.607,
    cy: 192.33,
    rx: 5.95,
    ry: 6.083,
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 157.163,
    cy: 192.33,
    rx: 5.95,
    ry: 6.083,
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M548.206 351.622h-14.6a1.105 1.105 0 0 0 0 2.21h14.6a1.105 1.105 0 0 0 0-2.21ZM548.206 355.772h-14.6a1.105 1.105 0 0 0 0 2.21h14.6a1.105 1.105 0 0 0 0-2.21ZM548.206 359.922h-14.6a1.105 1.105 0 0 0 0 2.21h14.6a1.105 1.105 0 0 0 0-2.21Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M900.186 604.972a6.416 6.416 0 0 0 6.183 4.331l26.492-.681a6.329 6.329 0 0 0 5.98-4.657l3.75-40.088a9.794 9.794 0 0 0 4.237.871 9.661 9.661 0 1 0-.485-19.316 8.184 8.184 0 0 0-1.736.18 6.548 6.548 0 0 0-4.874-2.103l-40.75 1.052a5.853 5.853 0 0 0-1.005.125 6.365 6.365 0 0 0-4.874 8.265Zm43.173-43.816 2.668-9.553a6.506 6.506 0 0 0 .02-3.375c.13 0 .244-.061.373-.062a6.91 6.91 0 0 1 .324 13.817 6.505 6.505 0 0 1-3.385-.827Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#412e2e"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M897.978 544.686c.868 4.964 10.629 8.454 22.365 7.848 10.793-.498 19.618-4.287 21.235-8.779a6.025 6.025 0 0 0-1.845-.246l-40.75 1.052a5.853 5.853 0 0 0-1.005.125Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("rect", {
    x: 209.385,
    y: 260.827,
    width: 50.719,
    height: 10.846,
    rx: 3.264,
    style: {
      fill: "#ff6363"
    }
  }), _rect50 || (_rect50 = /*#__PURE__*/react.createElement("rect", {
    x: 183.626,
    y: 282.519,
    width: 102.236,
    height: 10.846,
    rx: 3.264,
    fill: "#e6e6e6"
  })), _rect51 || (_rect51 = /*#__PURE__*/react.createElement("rect", {
    x: 183.626,
    y: 304.21,
    width: 102.236,
    height: 10.846,
    rx: 3.264,
    fill: "#e6e6e6"
  })), /*#__PURE__*/react.createElement("path", {
    d: "m497.301 540.717.217.684.011.023 6.526 19.838 7.506 22.861 14.123 42.962.136 6.673v.023l1.05 53.684-2.91 7.278 3.275 11.933s-1.506-18.037-9.582-7.679c-4.575 5.886-9.925 11.91-14.317 17.556q9.6 3.885 19.507 7.027c1.426.457 2.863.89 4.3 1.324l.925.274a266.863 266.863 0 0 0 67.35 10.825c1.187.035 2.35.057 3.48.08.4.012.787.023 1.175.023 1.278.012 2.544.023 3.821.023q3.868 0 7.7-.114a266.853 266.853 0 0 0 56.092-7.586c-.125-7.586-.468-16.45-.958-25.918-.228-4.643-5.35-9.674-5.658-14.534-.217-3.65 4.38-7.084 4.14-10.792-1.55-22.826-3.49-14.064-4.927-30.228q-.223-2.379-.411-4.552c-.924-10.381-1.563-16.872-1.563-16.872l6.137-38.683 9.64-60.735-.742-1.22-.832-.411-50.844-25.165-2.761-7.073a10.979 10.979 0 0 0-10.141-6.947l-33.493-.137a10.931 10.931 0 0 0-8.91 4.529l-9.069 12.56Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "m533.407 617.525-7.587 16.233-5.179 11.088-8.909 46.646-4.46 4.734-3.822-16.759-39.998 8.88c-1.312-7.289-.35.248-1.16-7.75.227-.227.467-.455.706-.684.64-.593 1.175-1.152 1.164-1.688-.456-27.584.913-74.526 12.343-102.966a60.053 60.053 0 0 1 7.027-13.107c.228-.308.445-.616.662-.924 5.27-7.38 8.601-14.647 13.324-19.815v-.012a.53.53 0 0 0 .08-.08.157.157 0 0 0 .045-.034l32.444-17.202 1.392 39.105.992 28.109ZM650.391 622.135l9.476 20.275 3.308 7.061 8.907 46.642 4.445 4.723 3.83-16.756 1.8-.369 32.46-6.722 9.46 30.046a17.984 17.984 0 0 0-3.262-22.505c-.646-.585-1.184-1.154-1.169-1.693.539-32.443-1.446-91.683-19.367-116.065-5.692-7.738-9.107-15.445-14.076-20.83-.015-.015-.015-.03-.03-.03l-12.092-19.798-.738-1.215-.83-.416Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#563d3d"
    }
  }), _circle || (_circle = /*#__PURE__*/react.createElement("circle", {
    "data-name": "Ellipse 5",
    cx: 386.397,
    cy: 267.201,
    r: 44.558,
    fill: "#ffb6b6"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M653.212 399.948a3.76 3.76 0 0 0-2.69-1.19l.67-1.86a3.528 3.528 0 0 0-3.96-4.7l-2.44.47.23-1.63a3.534 3.534 0 0 0-4.73-3.82 3.766 3.766 0 0 1-3.24-.23 3.846 3.846 0 0 1-1.92-2.61l-.85-4.1-.09-.22c-4.14-6.9-12.1-11.92-21.84-13.76-8.67-1.65-17.56-.81-26.13-.02-3.4.32-7.24.68-10.44 2.64-2.72 1.68-5.02 5.04-4.55 8.43-8.45-2.59-17.51 2.58-22 9.1-5.32 7.76-6.19 17.48-6.33 25.08-.38 17.98 3.33 32.69 11 43.73.56.8.7 2.47 1.81 3.03l-.23-.37c1.24.62 2.5 1.62 2.03 2.69-1.35 3.08 7.62 9.89 13.94 12.14 11.53 4.11 26.86 3.76 37.64 2.28l.38-2.55c3.89-.53 6.63-1.54 7.4-3.12 1.36-1.16 2.52-2.2 3.53-3.16l.01-.01c.02-.02.06-.05.08-.07 4.87-4.67 6-7.33 6.51-11.38.49-3.97-.38-8-1.27-11.63 18.74 2.9-7.38-19.96 10.08-24.38a5.434 5.434 0 0 1 .61-.15c.51-.12 1.02-.24 1.51-.38a26.448 26.448 0 0 0 6.72-2.87c4.88-2.97 6.49-6.91 9.01-11.35a3.427 3.427 0 0 0-.45-4.03ZM750.582 625.308c-.01 1.75-.03 4.2-.11 7.23l-.03 1.29c-.13 5.57-.26 10.24-.47 15.43-.01.36-.02.71-.04 1.07-.28 7.24-.72 15.67-1.48 29.02-1.41 24.66-3.87 3.39-6.34 12.04-.12.43-.25.94-.37 1.54a27.916 27.916 0 0 1-1.88 6.33c-1.31.78-2.66 1.53-3.99 2.28-3.79 2.11-7.64 4.14-11.52 6.07-2.18 1.08-4.37 2.14-6.57 3.16-.35.16-.69.32-1.03.47a270.887 270.887 0 0 1-34.75 13.26c-2.32.7-4.63 1.38-6.97 2.01-2.44.68-4.88 1.32-7.35 1.92a266.893 266.893 0 0 1-56.09 7.59c-2.55.08-5.12.11-7.7.11-1.28 0-2.54-.01-3.82-.02-.39 0-.78-.01-1.17-.02-1.13-.03-2.3-.05-3.48-.08a266.663 266.663 0 0 1-67.35-10.83l-.93-.27c-1.44-.44-2.87-.87-4.3-1.33q-9.9-3.135-19.51-7.02-7.335-2.955-14.5-6.34a.339.339 0 0 1-.12-.06c-1-.46-2.01-.94-3.01-1.43-.13-.07-.27-.14-.41-.21q-5.595-2.73-11.07-5.72c-3.07-7.05-7.39-8.4-10.07-14.6a25.874 25.874 0 0 1-1.68-5.74c0-.02-.01-.04-.01-.07.28 3.72-1.19-6.6-.01-.04a52.001 52.001 0 0 0-.16-1.75c-3.43-33.49-3.21-71.79-4.7-103.35q-.15-3.06-.31-5.86c-.03-.62-.07-1.23-.11-1.83.07-.18.15-.37.24-.55a1.002 1.002 0 0 1 .07-.15 1.623 1.623 0 0 1 .1-.18l.07-.1a.917.917 0 0 1 .05-.1c.09-.14.19-.29.3-.43.05-.06.09-.11.14-.16a.808.808 0 0 1 .12-.14.637.637 0 0 1 .11-.13c.04-.04.08-.09.13-.14a.302.302 0 0 1 .08-.08 2.033 2.033 0 0 1 .26-.25 9.624 9.624 0 0 1 1.14-.9c.14-.09.29-.18.43-.28a19.135 19.135 0 0 1 3.17-1.52c.38-.14.76-.27 1.17-.41.15-.04.29-.09.44-.14.22-.07.44-.14.67-.19 1.14-.34 2.37-.63 3.7-.9.16-.03.33-.06.5-.1.24-.05.49-.09.74-.13.34-.06.69-.12 1.04-.18 2.97-.47 6.34-.82 10.06-1.05l1.05-.06 1.24-.06c.35-.02.71-.03 1.07-.04.35-.02.71-.03 1.08-.04 1.01-.03 2.05-.06 3.11-.08 3.02-.06 6.2-.04 9.54.03 1.55.04 3.13.08 4.75.15.11 0 .21.01.31.01 1.41.05 2.83.11 4.29.19 1.02.05 2.05.1 3.08.16.97.06 1.95.12 2.94.19.77.04 1.54.1 2.32.15.66.05 1.32.1 1.98.14l.9.06c.49.04.98.07 1.48.12 1.1.09 2.2.18 3.32.27 1.11.1 2.24.2 3.37.3s2.27.21 3.41.32l.34.03c1.04.11 2.08.21 3.13.32.24.02.49.04.73.07 1.001.1 2.022.218 3.032.326.31.033.619.065.93.1.791.086 1.571.16 2.368.254 1.05.12 2.12.23 3.16.37.81.09 1.62.18 2.43.28 1.27.15 2.56.31 3.85.48.49.06.98.12 1.47.19 3.68.46 7.4.97 11.18 1.5 5.73.81 11.55 1.69 17.41 2.64q8.805 1.425 17.71 3.01c1.5.27 3 .54 4.51.82l2.04.39c1.16.21 2.32.43 3.48.65 1.16.22 2.32.44 3.48.67l4.15.81c9.09 1.8 18.13 3.72 26.95 5.73 1.45.33 2.9.67 4.34 1q4.32 1.005 8.56 2.04c.78.18 1.55.37 2.32.56 1.92.48 3.84.96 5.73 1.45l.33.09c1.39.34 2.75.69 4.11 1.05q4.815 1.26 9.47 2.55 3.09.855 6.11 1.73c3.01.87 5.96 1.75 8.83 2.64.71.22 1.42.44 2.12.65 2.1.65 4.17 1.31 6.18 1.97 1.6.52 3.16 1.05 4.7 1.58q2.31.795 4.53 1.59c.95.34 1.89.7 2.83 1.04 1.35.5 2.68 1 3.98 1.5.4.15.79.31 1.18.46.25.11.49.2.73.3.47.19.95.37 1.41.56.47.18.93.37 1.39.57.45.18.91.37 1.35.56.45.18.89.37 1.33.57.37.15.73.31 1.08.47.71.31 1.42.62 2.11.94.34.16.68.31 1.02.47l.78.36c.11.06.22.11.33.16.25.12.51.25.76.37.58.27 1.15.56 1.71.83.75.38 1.48.76 2.18 1.13.71.38 1.4.76 2.06 1.13.11.06.21.12.32.18.15.08.3.17.45.25.51.29 1 .59 1.49.88.96.59 1.87 1.17 2.72 1.75.19.13.37.26.56.38.63.45 1.23.89 1.79 1.34 0 .01 0 .01.01.01.19.14.37.29.55.43.15.14.31.26.46.4.52.45 1 .88 1.44 1.32a5.667 5.667 0 0 1 .42.43 1.208 1.208 0 0 1 .16.16c.2.2.38.4.55.6a.553.553 0 0 1 .07.09c.24.28.46.56.67.84.1.14.21.28.3.42.12.17.24.35.34.52.09.14.17.29.25.43a7.257 7.257 0 0 1 .54 1.13 5.241 5.241 0 0 1 .27.82 5.844 5.844 0 0 1 .17.81Z",
    transform: "translate(-206.59 -163.871)",
    style: {
      fill: "#412e2e"
    }
  }), /*#__PURE__*/react.createElement("path", {
    d: "M750.582 625.308c-.01 1.75-.03 4.2-.11 7.23-.01.42-.03.85-.04 1.29-.1 4.25-.25 9.5-.46 15.43-.01.36-.02.71-.04 1.07-.28 7.24-.72 15.67-1.48 29.02-1.41 24.66-3.87 3.39-6.34 12.04-6.86-4.22-14.38-8.64-22.42-13.18q-2.175-1.23-4.39-2.47c-16.08-8.97-34.04-18.37-52.79-27.68-.74-.37-1.49-.74-2.23-1.1-42.95-21.23-89.83-41.88-127.81-55.66-7.33-2.66-14.33-5.06-20.91-7.17-13.86-4.43-25.84-7.53-35.06-8.87-9.6-1.4-16.23-.9-18.91 1.99q-.15-3.06-.31-5.86l-.12-1.83c.062-.165.142-.322.22-.48.01-.023.019-.047.03-.07a1.002 1.002 0 0 1 .07-.15 1.623 1.623 0 0 1 .1-.18 1.06 1.06 0 0 1 .12-.2c.09-.14.19-.29.3-.43a3.483 3.483 0 0 1 .26-.3.637.637 0 0 1 .11-.13c.04-.04.08-.09.13-.14a.302.302 0 0 1 .08-.08 2.033 2.033 0 0 1 .26-.25 9.624 9.624 0 0 1 1.14-.9c.14-.09.29-.18.43-.28a19.135 19.135 0 0 1 3.17-1.52c.38-.14.76-.27 1.17-.41.15-.04.29-.09.44-.14.22-.07.44-.14.67-.19 1.14-.34 2.37-.63 3.7-.9.4-.08.82-.16 1.24-.23.34-.06.69-.12 1.04-.18 2.97-.47 6.34-.82 10.06-1.05l1.05-.06 1.24-.06c.35-.02.71-.03 1.07-.04.35-.02.71-.03 1.08-.04 1.01-.03 2.05-.06 3.11-.08 3.02-.05 6.2-.03 9.54.04 1.55.03 3.13.08 4.75.15.1 0 .21.01.31.01 1.41.04 2.84.11 4.29.18 1.02.05 2.05.1 3.08.16.97.06 1.95.12 2.94.19.77.04 1.54.1 2.32.15.66.05 1.32.1 1.98.14l2.38.18c1.1.09 2.2.18 3.32.27 1.11.1 2.24.2 3.37.3s2.27.21 3.41.32l.34.03c1.04.11 2.08.21 3.13.32q8.73.885 17.97 2.07 5.52.705 11.18 1.51c5.73.81 11.55 1.69 17.41 2.63q8.805 1.425 17.71 3.01c1.5.27 3 .54 4.51.82q2.76.51 5.52 1.04c1.16.22 2.32.44 3.48.67l4.15.81c9.09 1.8 18.13 3.72 26.95 5.73 1.45.33 2.9.67 4.34 1q4.32 1.005 8.56 2.04c.78.19 1.55.38 2.32.57q2.895.72 5.73 1.44v.01c.11.02.22.05.33.08 1.38.35 2.75.7 4.11 1.06q4.815 1.26 9.47 2.54c2.06.58 4.1 1.15 6.11 1.73a705.922 705.922 0 0 1 10.95 3.29q3.15.99 6.18 1.97c1.6.52 3.16 1.05 4.7 1.58q2.31.795 4.53 1.59c.96.34 1.9.69 2.83 1.03 1.36.5 2.68 1 3.98 1.51.4.15.79.31 1.18.46.73.28 1.44.57 2.14.86.47.18.93.37 1.39.57.45.18.91.37 1.35.56.45.18.89.37 1.33.57.37.15.73.31 1.08.47.71.31 1.42.62 2.11.94.34.16.68.31 1.02.47l.78.36c.11.06.22.11.33.16.85.4 1.67.8 2.47 1.2.75.38 1.48.76 2.18 1.13.83.44 1.62.87 2.38 1.31.15.08.3.17.45.25.51.29 1 .59 1.49.88.96.59 1.87 1.17 2.72 1.75.84.58 1.62 1.15 2.35 1.72 0 .01 0 .01.01.01.35.28.69.56 1.01.83.52.45 1 .88 1.44 1.32a5.667 5.667 0 0 1 .42.43 1.208 1.208 0 0 1 .16.16c.21.23.42.46.62.69.24.28.46.56.67.84.1.14.21.28.3.42.12.17.24.35.34.52.09.14.17.29.25.43a7.257 7.257 0 0 1 .54 1.13 6.053 6.053 0 0 1 .27.82 5.844 5.844 0 0 1 .17.81Z",
    transform: "translate(-206.59 -163.871)",
    opacity: 0.2,
    style: {
      fill: "#563d3d"
    }
  }));
};

/* harmony default export */ var home_main = (SvgHomeMain);
// EXTERNAL MODULE: ./node_modules/react-tsparticles/index.js
var react_tsparticles = __webpack_require__(6868);
var react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(react_tsparticles);
;// CONCATENATED MODULE: ./src/components/Particle.js



function Particle() {
  return /*#__PURE__*/react.createElement((react_tsparticles_default()), {
    id: "tsparticles",
    params: {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 1500
          }
        },
        line_linked: {
          enable: false,
          opacity: 0.03
        },
        move: {
          direction: "right",
          speed: 0.05
        },
        size: {
          value: 1
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05
          }
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          push: {
            particles_nb: 1
          }
        }
      },
      retina_detect: true
    }
  });
}

/* harmony default export */ var components_Particle = (Particle);
// EXTERNAL MODULE: ./node_modules/typewriter-effect/dist/react.js
var dist_react = __webpack_require__(5459);
var dist_react_default = /*#__PURE__*/__webpack_require__.n(dist_react);
;// CONCATENATED MODULE: ./src/components/Home/Type.js



function Type() {
  return /*#__PURE__*/react.createElement((dist_react_default()), {
    options: {
      strings: ["Backend Developer", "MERN Engineer", "RESTful API Developer", "Enjoyer of Coffee"],
      autoStart: true,
      loop: true,
      deleteSpeed: 50
    }
  });
}

/* harmony default export */ var Home_Type = (Type);
// EXTERNAL MODULE: ./node_modules/react-icons/di/index.esm.js
var di_index_esm = __webpack_require__(859);
// EXTERNAL MODULE: ./node_modules/react-icons/si/index.esm.js
var si_index_esm = __webpack_require__(7735);
;// CONCATENATED MODULE: ./src/components/Work/Techstack.js






function Techstack() {
  return /*#__PURE__*/react.createElement(Row/* default */.Z, {
    style: {
      justifyContent: "center",
      paddingBottom: "50px"
    }
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiJava */.jm8, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiCsharp */.qJU, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiStreamline */.doF, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiDotnet */.SdA, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(index_esm/* CgCPlusPlus */.AM4, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiNodejs */.NLu, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiMongodb */.yF0, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiNextdotjs */.Xou, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiJavascript1 */.N2N, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(di_index_esm/* DiReact */.GR$, null)));
}

/* harmony default export */ var Work_Techstack = (Techstack);
;// CONCATENATED MODULE: ./src/components/Work/Toolstack.js




function Toolstack() {
  return /*#__PURE__*/react.createElement(Row/* default */.Z, {
    style: {
      justifyContent: "center",
      paddingBottom: "50px"
    }
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiJetbrains */.paE, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiVisualstudiocode */.RZF, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiLinux */.TdH, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiMicrosoftsqlserver */.rAO, null)), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    xs: 4,
    md: 2,
    className: "tech-icons"
  }, /*#__PURE__*/react.createElement(si_index_esm/* SiMysql */.uJt, null)));
}

/* harmony default export */ var Work_Toolstack = (Toolstack);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 2 modules
var Card = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
;// CONCATENATED MODULE: ./src/components/Work/WorkCards.js





function WorkCards(props) {
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: "project-card-view"
  }, /*#__PURE__*/react.createElement(Card/* default.Img */.Z.Img, {
    className: "workImg",
    variant: "top",
    src: props.imgPath,
    alt: "card-img"
  }), /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement(Card/* default.Title */.Z.Title, null, props.title), /*#__PURE__*/react.createElement(Card/* default.Subtitle */.Z.Subtitle, null, props.job), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Card/* default.Text */.Z.Text, {
    style: {
      textAlign: "center"
    }
  }, props.description), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "primary",
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(bi_index_esm/* BiLinkExternal */.rpH, null), " \xA0", "View Company")));
}

/* harmony default export */ var Work_WorkCards = (WorkCards);
;// CONCATENATED MODULE: ./src/Assets/mattiasResume.pdf
/* harmony default export */ var mattiasResume = (__webpack_require__.p + "mattiasResume.pdf");
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/entry.js + 18 modules
var entry = __webpack_require__(7160);
// EXTERNAL MODULE: ./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css
var AnnotationLayer = __webpack_require__(9094);
;// CONCATENATED MODULE: ./src/components/Work/Resume.js







entry/* pdfjs.GlobalWorkerOptions.workerSrc */.v0.GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(entry/* pdfjs.version */.v0.version, "/pdf.worker.min.js");

function ResumeNew() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container/* default */.Z, {
    fluid: true,
    className: "resume-section"
  }, /*#__PURE__*/React.createElement(components_Particle, null), /*#__PURE__*/React.createElement(Row/* default */.Z, null, /*#__PURE__*/React.createElement("h2", {
    className: "project-heading"
  }, "Download My ", /*#__PURE__*/React.createElement("strong", {
    className: "red"
  }, "Resume "))), /*#__PURE__*/React.createElement(Row/* default */.Z, {
    style: {
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Button/* default */.Z, {
    variant: "primary",
    href: mattiasResume,
    target: "_blank",
    style: {
      maxWidth: "250px"
    }
  }, /*#__PURE__*/React.createElement(ai_index_esm/* AiOutlineDownload */.RFS, null), "\xA0Download CV"))));
}

/* harmony default export */ var Resume = (ResumeNew);
;// CONCATENATED MODULE: ./src/Assets/triumf.png
/* harmony default export */ var triumf = (__webpack_require__.p + "static/media/triumf.d88e430a.png");
;// CONCATENATED MODULE: ./src/Assets/piccolo.png
/* harmony default export */ var piccolo = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/Assets/clancys.png
/* harmony default export */ var clancys = (__webpack_require__.p + "static/media/clancys.0dc20caa.png");
;// CONCATENATED MODULE: ./src/components/Work/Work.js











function Work() {
  return /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    id: "work",
    className: "work-section"
  }, /*#__PURE__*/react.createElement(components_Particle, null), /*#__PURE__*/react.createElement(Container/* default */.Z, {
    id: "workexperience"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "project-heading"
  }, "Work ", /*#__PURE__*/react.createElement("strong", {
    className: "red"
  }, "Experience ")), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4
  }, /*#__PURE__*/react.createElement(Work_WorkCards, {
    imgPath: triumf,
    title: "TRIUMF Particle Accelerator",
    job: "Student Software Engineer",
    description: "Developed novel technologies for tabletop physics experiments. " + "Used EPICS framework to make an affordable system for PhD students.",
    link: "https://www.triumf.ca/"
  })), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4
  }, /*#__PURE__*/react.createElement(Work_WorkCards, {
    imgPath: piccolo,
    title: "Piccolo Software Inc.",
    job: "Junior Software Engineer",
    description: "Responsible for new features of Android 'Panda' app for drivers. " + "Managed databases, object-oriented design, and app releases for clients.",
    link: "https://www.piccolosoft.com/"
  })), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4
  }, /*#__PURE__*/react.createElement(Work_WorkCards, {
    imgPath: clancys,
    title: "Clancy's Meat Co.",
    job: "General Manager of Operations",
    description: "Responsible for hiring and employee development." + "Managed ordering, inventory, and pricing on items from suppliers.",
    link: "http://www.clancysmeatco.com/"
  })))), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Resume, null), /*#__PURE__*/react.createElement("h1", {
    className: "project-heading"
  }, "Professional ", /*#__PURE__*/react.createElement("strong", {
    className: "red"
  }, "Skillset ")), /*#__PURE__*/react.createElement(Work_Techstack, null), /*#__PURE__*/react.createElement("h1", {
    className: "project-heading"
  }, /*#__PURE__*/react.createElement("strong", {
    className: "red"
  }, "Tools"), " I use"), /*#__PURE__*/react.createElement(Work_Toolstack, null)));
}

/* harmony default export */ var Work_Work = (Work);
;// CONCATENATED MODULE: ./src/components/Projects/ProjectCards.js





function ProjectCards(props) {
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: "project-card-view"
  }, /*#__PURE__*/react.createElement(Card/* default.Img */.Z.Img, {
    className: "projectImg",
    variant: "top",
    src: props.imgPath,
    alt: "card-img"
  }), /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement(Card/* default.Title */.Z.Title, null, props.title), /*#__PURE__*/react.createElement(Card/* default.Text */.Z.Text, {
    style: {
      textAlign: "center"
    }
  }, props.description), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "primary",
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(bi_index_esm/* BiLinkExternal */.rpH, null), " \xA0", "View Project")));
}

/* harmony default export */ var Projects_ProjectCards = (ProjectCards);
;// CONCATENATED MODULE: ./src/Assets/Projects/plentyOfPhish.png
/* harmony default export */ var plentyOfPhish = (__webpack_require__.p + "static/media/plentyOfPhish.1f88c2b4.png");
;// CONCATENATED MODULE: ./src/Assets/Projects/springOut.jpg
/* harmony default export */ var springOut = (__webpack_require__.p + "static/media/springOut.5375af42.jpg");
;// CONCATENATED MODULE: ./src/Assets/Projects/voip.jpg
/* harmony default export */ var voip = (__webpack_require__.p + "static/media/voip.b16717ed.jpg");
;// CONCATENATED MODULE: ./src/components/Projects/Projects.js







function Projects() {
  return /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    id: "project",
    className: "project-section"
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement("h1", {
    className: "project-heading"
  }, "My Recent ", /*#__PURE__*/react.createElement("strong", {
    className: "red"
  }, "Projects ")), /*#__PURE__*/react.createElement("p", {
    style: {
      color: "white"
    }
  }, "Here are a few projects I've worked on recently."), /*#__PURE__*/react.createElement(Row/* default */.Z, {
    style: {
      justifyContent: "center",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4,
    className: "project-card"
  }, /*#__PURE__*/react.createElement(Projects_ProjectCards, {
    imgPath: plentyOfPhish,
    title: "PlentyOfPhish",
    description: "PlentyOfPhish\u201D is a web app designed to help its users recognize and avoid phishing\r attempts from suspicious emails, phone numbers, and websites. Users register an account with the app and\r login to input either an email, phone number, or website. Users can also report emails, phone numbers, and \r websites that they believe are suspicious.",
    link: "https://plenty-of-phish.vercel.app/"
  })), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4,
    className: "project-card"
  }, /*#__PURE__*/react.createElement(Projects_ProjectCards, {
    imgPath: springOut,
    title: "Spring Out",
    description: "Spring Out provides a discrete solution for employees suffering from new \r (and old) domestic abuse situations across Canada as a result of being isolated/quarantined, \r WFH to find resources and connect discreetly. Winner of the 2020 Together Vs. Hackathon. Recieved \r the BCIT Excelence in Data Anyltics Award.",
    link: "https://devpost.com/software/springout"
  })), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4,
    className: "project-card"
  }, /*#__PURE__*/react.createElement(Projects_ProjectCards, {
    imgPath: voip,
    title: "Panda VoIP",
    description: "A voice over IP server created for the Panda app in production in British Columbia.\r USing Linux, Docker, Asterisk, and a custom firewall to prevent attacks. Demonstrates a deep knowledge of\r UDP protocol and packet handling.",
    link: "https://www.piccolosoft.com/"
  })))));
}

/* harmony default export */ var Projects_Projects = (Projects);
;// CONCATENATED MODULE: ./src/components/Education/EducationCards.js





function EducationCards(props) {
  return /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: "project-card-view"
  }, /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Img */.Z.Img, {
    variant: "top",
    src: props.imgPath,
    alt: "card-img"
  }), /*#__PURE__*/react.createElement(Card/* default.Title */.Z.Title, {
    style: {
      textAlign: "left"
    }
  }, props.title)), /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement(Card/* default.Title */.Z.Title, null, props.degree), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Card/* default.Subtitle */.Z.Subtitle, {
    style: {
      textAlign: "left",
      marginBottom: 20,
      marginLeft: 50
    }
  }, props.items[0]), /*#__PURE__*/react.createElement(Card/* default.Subtitle */.Z.Subtitle, {
    style: {
      textAlign: "left",
      marginBottom: 20,
      marginLeft: 50
    }
  }, props.items[1]), /*#__PURE__*/react.createElement(Card/* default.Subtitle */.Z.Subtitle, {
    style: {
      textAlign: "left",
      marginBottom: 0,
      marginLeft: 50
    }
  }, props.items[2]))), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    className: "education-container-btn"
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "primary",
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/react.createElement(bi_index_esm/* BiLinkExternal */.rpH, null), " \xA0", "View School")))));
}

/* harmony default export */ var Education_EducationCards = (EducationCards);
;// CONCATENATED MODULE: ./src/Assets/bcit.png
/* harmony default export */ var bcit = (__webpack_require__.p + "static/media/bcit.25dc08fe.png");
;// CONCATENATED MODULE: ./src/components/Education/Education.js






function Education() {
  return /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    id: "education",
    className: "work-section"
  }, /*#__PURE__*/react.createElement(components_Particle, null), /*#__PURE__*/react.createElement(Container/* default */.Z, {
    id: "workexperience"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "project-heading"
  }, "Completed ", /*#__PURE__*/react.createElement("strong", {
    className: "red"
  }, "Education ")), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Education_EducationCards, {
    imgPath: bcit,
    title: "British Columbia Institute of Technology",
    degree: "Commputer Systems Technology",
    items: ["▪ GPA 92%", "▪ Graduating with Honors", "▪ Nominated for Valedictorian"],
    link: "https://www.bcit.ca/"
  }))))));
}

/* harmony default export */ var Education_Education = (Education);
;// CONCATENATED MODULE: ./src/Assets/avatar.png
/* harmony default export */ var avatar = (__webpack_require__.p + "static/media/avatar.f19931e0.png");
;// CONCATENATED MODULE: ./src/Assets/about.svg
var about_path, _ellipse, _ellipse2, _g, _g2, _ellipse3, about_path2, about_path3, _path4, _path5, _path6, _path7, _path8, _path9, _path10, _path11, _path12, _path13, _path14, _path15, _path16, _path17, _path18, _path19, _path20, _path21, _path22, _path23, _path24, _path25, _path26, _path27, _path28, _path29, about_circle, _path30, _g3, _path31, _path32, _path33, _path34, _g4, _g5, _path35, _path36, _path37, _path38, _path39, _path40, _path41, _path42, _path43;

function about_extends() { about_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return about_extends.apply(this, arguments); }



var SvgAbout = function SvgAbout(props) {
  return /*#__PURE__*/react.createElement("svg", about_extends({
    "data-name": "Layer 1",
    width: 1020,
    height: 668.18,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), about_path || (about_path = /*#__PURE__*/react.createElement("path", {
    d: "M19.75 213.04c-7.68 23.25 14.9 44.16 32.66 61a239.26 239.26 0 0 1 56.3 82.05c7.72 18.73 13.09 38.88 11.65 59.09-4.08 57.32-58.06 95.51-101.19 133.48-6.11 5.43-12.22 11.11-15.78 18.43-11.43 23.49 8 50.56 29.4 65.54C109 685.95 219 670.09 292.92 613.64c38.28-29.24 71.18-69 117.57-82 29.66-8.27 61.14-4.35 91.83-1.8a977.73 977.73 0 0 0 138.34 1.64c16.18-1 33.1-2.56 46.65-11.45 34.31-22.48 28.52-75.78 53.28-108.48 17.8-23.5 48.21-32.56 74.68-45.55a233.64 233.64 0 0 0 97.83-90.78c21.25-36.17 32.26-77.29 43-117.83 8.1-30.46 16.23-62.36 9.37-93.13s-33.94-59.5-65.34-56.8c-24.11 2.07-43.29 21.12-66.51 27.94C778 51.78 724-5.11 666.3.38c-36.33 3.45-65.63 31-87.78 60s-40.9 61.65-70.15 83.49c-45.5 34-107.84 35.2-163.54 24.19s-109.14-32.68-165.46-39.9c-33.18-4.25-58.61 15.52-88.49 26.39-27.42 9.98-60.97 27.74-71.13 58.49Z",
    fill: "#ff6363",
    opacity: 0.1
  })), _ellipse || (_ellipse = /*#__PURE__*/react.createElement("ellipse", {
    cx: 137.95,
    cy: 646.08,
    rx: 72.74,
    ry: 22.1,
    fill: "#ff6363",
    opacity: 0.1
  })), _ellipse2 || (_ellipse2 = /*#__PURE__*/react.createElement("ellipse", {
    cx: 825.73,
    cy: 363.42,
    rx: 194.27,
    ry: 12.89,
    fill: "#ff6363",
    opacity: 0.1
  })), _g || (_g = /*#__PURE__*/react.createElement("g", {
    opacity: 0.5,
    fill: "#ff6363"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M708.28 68.4a10.16 10.16 0 0 1 10.16 10.16v282.5h-20.32V78.55a10.16 10.16 0 0 1 10.16-10.15ZM931.21 68.4a10.16 10.16 0 0 1 10.16 10.16v282.5H921V78.55a10.16 10.16 0 0 1 10.21-10.15Z"
  }), /*#__PURE__*/react.createElement("rect", {
    x: 899.59,
    y: 56.37,
    width: 20.32,
    height: 361.84,
    rx: 10.16,
    ry: 10.16,
    transform: "rotate(90 922.7 134.34)"
  }), /*#__PURE__*/react.createElement("rect", {
    x: 676.16,
    y: 83.22,
    width: 15.92,
    height: 76.32,
    rx: 7.96,
    ry: 7.96
  }), /*#__PURE__*/react.createElement("rect", {
    x: 660.24,
    y: 90.36,
    width: 15.92,
    height: 62.05,
    rx: 7.96,
    ry: 7.96
  }), /*#__PURE__*/react.createElement("rect", {
    x: 1037.4,
    y: 199.13,
    width: 15.92,
    height: 76.32,
    rx: 7.96,
    ry: 7.96,
    transform: "rotate(-180 1000.365 179.335)"
  }), /*#__PURE__*/react.createElement("rect", {
    x: 1053.33,
    y: 206.27,
    width: 15.92,
    height: 62.05,
    rx: 7.96,
    ry: 7.96,
    transform: "rotate(180 1016.29 179.335)"
  }))), _g2 || (_g2 = /*#__PURE__*/react.createElement("g", {
    opacity: 0.5,
    fill: "#ff6363"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M799.46 186.64H841a17 17 0 0 1 17 17V275h-75.5v-71.36a17 17 0 0 1 16.96-17Z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M814.68 268.59h11.05v36.83h-11.05zM792.58 310.02h11.05v36.83h-11.05zM838.62 310.02h11.05v36.83h-11.05z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M782.46 302.65h75.5v10.13h-75.5z"
  }))), _ellipse3 || (_ellipse3 = /*#__PURE__*/react.createElement("ellipse", {
    cx: 473.09,
    cy: 577.95,
    rx: 414.32,
    ry: 30.38,
    fill: "#ff6363",
    opacity: 0.1
  })), about_path2 || (about_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M580.36 469.76s28.54 12.89 42.35 12.89c0 0 14.73 3.68 23 7.37s40.51 5.52 40.51 5.52 37.75 13.81 42.35 20.26 18.41-23 18.41-23l-7.37-18.41-139-26.7Z",
    fill: "#ffb9b9"
  })), about_path3 || (about_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M580.36 469.76s28.54 12.89 42.35 12.89c0 0 14.73 3.68 23 7.37s40.51 5.52 40.51 5.52 37.75 13.81 42.35 20.26 18.41-23 18.41-23l-7.37-18.41-139-26.7Z",
    opacity: 0.05
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M721.23 510.28s17.49 23 10.13 36.83-4.6 13.81 0 14.73 30.38 6.45 33.15-13.81 8.29-65.37 8.29-65.37l-37.8-3.69s10.17 34.07-13.77 31.31Z",
    fill: "#737a9d"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    d: "m503.94 439.38 79.18 36.83s24.86-19.34 23-29.46l-92.07-22.1Z",
    fill: "#4c4c78"
  })), _path6 || (_path6 = /*#__PURE__*/react.createElement("path", {
    d: "m503.94 439.38 79.18 36.83s24.86-19.34 23-29.46l-92.07-22.1Z",
    opacity: 0.1
  })), _path7 || (_path7 = /*#__PURE__*/react.createElement("path", {
    d: "M836.32 487.26 828 507.51l-19.3 4.58a123.29 123.29 0 0 0-17.29-12.08c-10.39-6-24.06-11.87-37-10.94 0 0-51.56-8.29-54.32-12 0 0-33.15-7.37-40.51-6.45-3.55.44-11.18-2.11-18.12-4.88-7.45-3-14.11-6.17-14.11-6.17l23.94-37.75a64.34 64.34 0 0 0 8.6 3c9.15 2.68 25.62 6.16 49.41 6.16 38.67 0 92.07 39.59 92.07 39.59s.53.18 1.44.45c4 1.21 15.4 4.06 20.66-.45 6.4-5.41 12.85 16.69 12.85 16.69Z",
    fill: "#ffb9b9"
  })), _path8 || (_path8 = /*#__PURE__*/react.createElement("path", {
    d: "M836.32 487.26 828 507.51l-19.3 4.58a123.29 123.29 0 0 0-17.29-12.08c28.08 2.11 11.31-28.89 11.31-28.89h.06c4 1.21 15.4 4.06 20.66-.45 6.43-5.51 12.88 16.59 12.88 16.59Z",
    opacity: 0.1
  })), _path9 || (_path9 = /*#__PURE__*/react.createElement("path", {
    d: "M791.52 500.79s22.27 31.23 12.9 48.82-5.86 17.58 0 18.76 38.69 8.21 42.2-17.58c2.7-19.83.33-57.89-.91-74.41a7.89 7.89 0 0 0-8.58-7.26l-32.57 3s17.44 32.19-13.04 28.67Z",
    fill: "#737a9d"
  })), _path10 || (_path10 = /*#__PURE__*/react.createElement("path", {
    fill: "#ff6363",
    d: "m262.71 531.45.92 45.12 10.13 7.36h34.99l6.44-9.2v-43.28l-10.13-9.21h-33.14l-9.21 9.21z"
  })), _path11 || (_path11 = /*#__PURE__*/react.createElement("path", {
    d: "M268.23 532.37s6.45 41.43 0 45.12l-4.6-.92-.92-44.19Z",
    fill: "#fff",
    opacity: 0.2
  })), _path12 || (_path12 = /*#__PURE__*/react.createElement("path", {
    d: "m343.73 528.69 7.37-7.37h35l7.37 7.37s9.21 26.7 1.84 44.19l-8.31 8.29h-35l-8.29-7.37Z",
    fill: "#ff6363"
  })), _path13 || (_path13 = /*#__PURE__*/react.createElement("path", {
    opacity: 0.1,
    d: "m262.71 531.45.92 45.12 10.13 7.36h34.99l6.44-9.2v-43.28l-10.13-9.21h-33.14l-9.21 9.21zM343.73 528.69l7.37-7.37h35l7.37 7.37s9.21 26.7 1.84 44.19l-8.31 8.29h-35l-8.29-7.37Z"
  })), _path14 || (_path14 = /*#__PURE__*/react.createElement("path", {
    d: "M352 530.53s7.37 32.23 0 43.27h-8.29v-45.11Z",
    fill: "#fff",
    opacity: 0.2
  })), _path15 || (_path15 = /*#__PURE__*/react.createElement("path", {
    d: "M315.19 375.85s3.68 35.91 3.68 40.51-1.84 35 3.68 64.45-3.68 66.28-3.68 66.28h30.38l12.89-99.44-9.21-52.48-3.68-16.57Z",
    fill: "#ffb9b9"
  })), _path16 || (_path16 = /*#__PURE__*/react.createElement("path", {
    d: "M315.19 375.85s3.68 35.91 3.68 40.51-1.84 35 3.68 64.45-3.68 66.28-3.68 66.28h30.38l12.89-99.44-9.21-52.48-3.68-16.57Z",
    opacity: 0.05
  })), _path17 || (_path17 = /*#__PURE__*/react.createElement("path", {
    d: "M309.67 284.7s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.03-38.63-40.51Z",
    fill: "#cbcdda"
  })), _path18 || (_path18 = /*#__PURE__*/react.createElement("path", {
    d: "M309.67 284.7s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.03-38.63-40.51Z",
    opacity: 0.05
  })), _path19 || (_path19 = /*#__PURE__*/react.createElement("path", {
    d: "M260.87 245.09s35 37.75 64.45 10.13l-3.68 97.6s-47.88-58-81-53.4Z",
    fill: "#ffb9b9"
  })), _path20 || (_path20 = /*#__PURE__*/react.createElement("path", {
    d: "M659.85 424.93c-1.4 10.79-5.8 33.51-18.43 40.87-7.45-3-14.11-6.17-14.11-6.17l23.94-37.75a64.34 64.34 0 0 0 8.6 3.05Z",
    opacity: 0.1
  })), _path21 || (_path21 = /*#__PURE__*/react.createElement("path", {
    d: "M657.7 419.09s-2.76 45.12-24.86 48.8l-133.48-24.08a40.29 40.29 0 0 1-17.74-8c-5.39-4.24-12-10-15.91-15.28-2.12-2.88-3.4-5.63-3.19-7.9.92-10.13 41.43-34.07 27.62-76.42a25.24 25.24 0 0 1 6.48-3.72c11.53-4.79 38.07-8.31 76.38 31.34 0 .05 70.89 57.14 84.7 55.26Z",
    fill: "#4c4c78"
  })), _path22 || (_path22 = /*#__PURE__*/react.createElement("path", {
    fill: "#ff6363",
    d: "m296.78 535.13.92 45.12 10.12 7.37h34.99l6.45-9.21v-43.28l-10.13-9.2h-33.15l-9.2 9.2z"
  })), _path23 || (_path23 = /*#__PURE__*/react.createElement("path", {
    d: "M302.3 536.09s6.45 41.43 0 45.12l-4.6-.92-.92-44.2Z",
    fill: "#fff",
    opacity: 0.2
  })), _path24 || (_path24 = /*#__PURE__*/react.createElement("path", {
    d: "m398.06 531.45 7.37-7.37h35l7.37 7.37s9.21 26.7 1.84 44.19l-8.29 8.29h-35l-8.29-7.37Z",
    fill: "#ff6363"
  })), _path25 || (_path25 = /*#__PURE__*/react.createElement("path", {
    d: "M406.34 533.29s7.37 32.23 0 43.27h-8.29v-45.11Z",
    fill: "#fff",
    opacity: 0.2
  })), _path26 || (_path26 = /*#__PURE__*/react.createElement("path", {
    d: "M349 548.95h49.81c3.9 0 7.06 3.5 7.06 7.83 0 4.32-3.16 7.83-7.06 7.83H349c-4.23 0-7.51-4.09-7-8.74.41-3.95 3.43-6.92 7-6.92Z",
    fill: "#ff6363"
  })), _path27 || (_path27 = /*#__PURE__*/react.createElement("path", {
    d: "M492.89 405.31c-9.85 6.9-20.23 11.42-27.19 15.27-2.12-2.88-3.4-5.63-3.19-7.9.92-10.13 41.43-34.07 27.62-76.42a25.24 25.24 0 0 1 6.48-3.72 28.12 28.12 0 0 0 6.41-.88s8.28 60.76-10.13 73.65Z",
    opacity: 0.1
  })), _path28 || (_path28 = /*#__PURE__*/react.createElement("path", {
    d: "M286.19 316.46s13.81 13.81 27.16 22.56c12.32 8.07-9.67-73.2-9.67-73.2s13.64-11 21.65-17.53a27.44 27.44 0 0 1 19.08-6.2c18.43 1.19 52.19 8.94 79.43 46.3 39.59 54.32 75.5 43.27 75.5 43.27s8.29 60.77-10.13 73.66-38.67 17.49-35 24.86-16.57-35.91-62.61-43.27-96.68-39.59-95.75-55.24c.01-.01-13.34-10.58-9.66-15.21Z",
    fill: "#cbcdda"
  })), _path29 || (_path29 = /*#__PURE__*/react.createElement("path", {
    d: "M276.52 269.09a46.27 46.27 0 0 0-.7-7.94c-12.06-6-10.35-14.16-10.35-14.16l-20.26 54.32c7.41-1 15.56 1.08 23.74 5 10.77-8.51 7.57-22.53 7.57-37.22Z",
    opacity: 0.1
  })), about_circle || (about_circle = /*#__PURE__*/react.createElement("circle", {
    cx: 236.01,
    cy: 268.13,
    r: 46.04,
    fill: "#ffb9b9"
  })), _path30 || (_path30 = /*#__PURE__*/react.createElement("path", {
    d: "M194.18 278.51c-.85 2.73-2.16 5.54-4.63 7-3 1.78-7.14.9-9.81-1.4s-4.11-5.74-4.86-9.18a30.82 30.82 0 0 1 .5-15.05c1.2-4.15 3.27-8 4.14-12.25.93-4.52.46-9.25 1.5-13.75 1.41-6.1 5.43-11.21 9.35-16.1a16.62 16.62 0 0 1 10.83-7.2l19.27-5.81a65.11 65.11 0 0 1 11.22-2.68 38.87 38.87 0 0 1 14.59 1.28 33.61 33.61 0 0 1 10.58 4.72 39.13 39.13 0 0 1 8.35 8.45c10.19 13.32 16 35.11 26.51 48.22-4.15 1.28-8.3-3-12.45-1.7a2.92 2.92 0 0 1-1.87.15 3.07 3.07 0 0 1-1.37-1.52 31.87 31.87 0 0 0-16.29-13.94c-5.1-1.93-12-1.92-14.79 2.76-1.89 3.16-1.13 7.15-.63 10.8s.41 8-2.48 10.25a10.72 10.72 0 0 1-5.38 1.82 59.28 59.28 0 0 1-26.66-2.61c-3-1-6.05-4.13-9.22-3.13-4.28 1.35-5.27 7.24-6.4 10.87Z",
    opacity: 0.1
  })), /*#__PURE__*/react.createElement("path", {
    d: "M283.17 393.41c-.85 2.73-2.16 5.54-4.63 7-3 1.78-7.14.9-9.81-1.4s-4.11-5.74-4.86-9.18a30.82 30.82 0 0 1 .5-15.05c1.2-4.15 3.27-8 4.14-12.25.93-4.52.46-9.25 1.5-13.75 1.41-6.1 5.43-11.21 9.35-16.1a16.62 16.62 0 0 1 10.83-7.2l19.27-5.81a65.11 65.11 0 0 1 11.22-2.67 38.87 38.87 0 0 1 14.59 1.28 33.61 33.61 0 0 1 10.58 4.72 39.13 39.13 0 0 1 8.35 8.45c10.19 13.32 16 35.11 26.51 48.22-4.15 1.28-8.3-3-12.45-1.7a2.92 2.92 0 0 1-1.87.15 3.07 3.07 0 0 1-1.39-1.52 31.87 31.87 0 0 0-16.29-13.94c-5.1-1.93-12-1.92-14.79 2.76-1.89 3.16-1.13 7.15-.63 10.8s.41 8-2.48 10.25a10.72 10.72 0 0 1-5.38 1.82 59.28 59.28 0 0 1-26.66-2.61c-3-1-6.05-4.13-9.22-3.13-4.26 1.34-5.25 7.23-6.38 10.86Z",
    transform: "translate(-90 -115.91)",
    style: {
      fill: "#412c1e"
    }
  }), _g3 || (_g3 = /*#__PURE__*/react.createElement("g", {
    opacity: 0.1
  }, /*#__PURE__*/react.createElement("path", {
    d: "m306.8 263.31-3.12 2.52s12.89 47.63 13.4 66.34c6.58-1.78-6.08-52.74-10.28-68.86Z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M491 397.95c-18.41 12.89-38.67 17.49-35 24.86s-16.57-35.91-62.61-43.27c-43.19-6.91-90.43-35.7-95.35-52.16-6.9-5.9-11.92-10.91-11.92-10.91-3.68 4.6 9.67 15.19 9.67 15.19-.92 15.65 49.72 47.88 95.75 55.24s66.29 50.64 62.61 43.27 16.57-12 35-24.86c5.27-3.69 8.35-11.3 10.07-20.29-1.78 5.69-4.42 10.3-8.22 12.93Z"
  }))), _path31 || (_path31 = /*#__PURE__*/react.createElement("path", {
    d: "M398.06 486.34c-2.76 3.68-4.6 41.43-4.6 41.43s11 54.32-23 48.8-4.6-44.19-4.6-44.19l-4.6-53.4c-17.49-46-13.81-79.18-13.81-79.18l-3.27-30.07-1.34-12.28 39.59-9.21c-1.08 1.44-.62 10.42.35 20.85 1.51 16.34 4.25 36.23 4.25 36.23 8.26 9.2 13.79 77.33 11.03 81.02Z",
    fill: "#ffb9b9"
  })), _path32 || (_path32 = /*#__PURE__*/react.createElement("path", {
    d: "M341.89 265.37s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.04-38.63-40.51Z",
    opacity: 0.1
  })), _path33 || (_path33 = /*#__PURE__*/react.createElement("path", {
    d: "M382.75 369.09c-8.6 2.35-29.68 2.56-38.61.64l-1.34-12.28 39.59-9.21c-1.06 1.43-.6 10.41.36 20.85Z",
    opacity: 0.1
  })), _path34 || (_path34 = /*#__PURE__*/react.createElement("path", {
    d: "M340.05 265.37s-40.51.92-8.29 68.13c0 0 8.29 27.62 8.29 32.23s41.43 4.6 46 0-7.37-42.35-7.37-59.85-11.93-46.04-38.63-40.51Z",
    fill: "#cbcdda"
  })), _g4 || (_g4 = /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#ff6363",
    d: "m75.04 409.5-29.32.6-4.78 6.58v22.74l5.98 4.19h28.12l5.99-6.58v-21.54l-5.99-5.99z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M74.45 413.09s-26.93 4.19-29.32 0l.6-3 28.72-.6Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "m77.44 475.32 4.79 4.79v22.74l-4.79 4.79s-17.35 6-28.72 1.2l-5.39-5.39v-22.74l4.79-5.39Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.24 480.71s-20.94 4.79-28.12 0v-5.39h29.32Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "M66.07 443.45v32.37a4.86 4.86 0 0 1-5.09 4.59 4.86 4.86 0 0 1-5.09-4.59v-32.37c0-2.75 2.66-4.88 5.68-4.56a4.79 4.79 0 0 1 4.5 4.56ZM122 410.42l-29.32.6-4.79 6.58v22.74l5.99 4.19H122l5.98-6.58v-21.54l-5.98-5.99z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M121.4 414.02s-26.93 4.19-29.32 0l.6-3 28.72-.6Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "m124.39 476.25 4.79 4.79v22.74l-4.79 4.79s-17.35 6-28.72 1.2l-5.39-5.39v-22.75l4.79-5.39Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M123.2 481.63s-20.94 4.79-28.12 0v-5.39h29.32Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113 444.37v32.37a4.86 4.86 0 0 1-5.09 4.59 4.86 4.86 0 0 1-5.09-4.59v-32.37c0-2.75 2.66-4.88 5.68-4.56a4.79 4.79 0 0 1 4.5 4.56ZM181.78 427.74l-24.14.49-3.94 5.42v18.72l4.93 3.44h23.15l4.92-5.42v-17.73l-4.92-4.92z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M181.28 430.69s-22.17 3.45-24.14 0l.49-2.46 23.64-.49Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "m183.75 481.92 3.94 3.94v18.72l-3.94 3.94s-14.28 4.93-23.64 1l-4.44-4.43v-18.74l3.94-4.43Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M182.76 486.35s-17.24 3.94-23.15 0v-4.43h24.14Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "M174.39 455.68v26.65a4 4 0 0 1-4.19 3.76 4 4 0 0 1-4.19-3.78v-26.63a4.05 4.05 0 0 1 4.68-3.75 3.94 3.94 0 0 1 3.7 3.75ZM220.43 428.49l-24.14.5-3.94 5.41v18.72l4.93 3.45h23.15l4.93-5.42v-17.73l-4.93-4.93z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M219.94 431.45s-22.17 3.45-24.14 0l.49-2.46 23.64-.49Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "m222.4 482.68 3.94 3.94v18.72l-3.94 3.94s-14.28 4.93-23.64 1l-4.43-4.43v-18.76l3.94-4.43Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M221.42 487.09s-17.24 3.94-23.15 0v-4.43h24.13Z",
    fill: "#fff",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "M213 456.44v26.65a4 4 0 0 1-4.19 3.78 4 4 0 0 1-4.19-3.78v-26.65a4.05 4.05 0 0 1 4.68-3.75 3.94 3.94 0 0 1 3.7 3.75Z",
    fill: "#ff6363"
  }))), _g5 || (_g5 = /*#__PURE__*/react.createElement("g", {
    opacity: 0.8
  }, /*#__PURE__*/react.createElement("path", {
    d: "M117.18 589.09s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c4.48 8.1 13.71 18.61 31.2 17.68 14.84-.79 19.77-12.12 21.11-22.65a23.27 23.27 0 0 0-30.9-24.91Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.49 619.82a22.78 22.78 0 0 1-.3-21.93c6.82-12.49 21-7.69 21-7.69l.73-.26a23.06 23.06 0 0 1 16.65.37 23.06 23.06 0 0 0-19.66-1.88l-.73.26s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c3 5.33 8 11.7 16 15.17a35.13 35.13 0 0 1-12.99-13.66Z",
    fill: "#fff",
    opacity: 0.1
  }), /*#__PURE__*/react.createElement("path", {
    d: "M109.86 595.09s5.25 4.13 18 0",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.74 565.09s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.74 565.09s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30Z",
    opacity: 0.2
  }), /*#__PURE__*/react.createElement("path", {
    d: "M145.5 567.09s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.19 27.84-20.04Z",
    fill: "#ff6363"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M145.5 567.09s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.19 27.84-20.04Z",
    fill: "#fff",
    opacity: 0.1
  }), /*#__PURE__*/react.createElement("path", {
    d: "M117.66 587.09s3.72-17.77 27.84-20",
    fill: "none",
    stroke: "#6c63ff",
    strokeMiterlimit: 10
  }))), _path35 || (_path35 = /*#__PURE__*/react.createElement("path", {
    d: "M177 611.18s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c4.48 8.1 13.71 18.61 31.2 17.68 14.84-.79 19.77-12.12 21.11-22.65a23.27 23.27 0 0 0-30.9-24.91Z",
    fill: "#ff6363"
  })), _path36 || (_path36 = /*#__PURE__*/react.createElement("path", {
    d: "M159.34 641.92a22.78 22.78 0 0 1-.3-21.93c6.82-12.49 21-7.69 21-7.69l.73-.26a23.06 23.06 0 0 1 16.65.37 23.06 23.06 0 0 0-19.66-1.88l-.73.26s-14.17-4.8-21 7.69a22.78 22.78 0 0 0 .3 21.93c3 5.33 8 11.7 16 15.17a35.13 35.13 0 0 1-12.99-13.66Z",
    fill: "#fff",
    opacity: 0.1
  })), _path37 || (_path37 = /*#__PURE__*/react.createElement("path", {
    d: "M169.71 617.18s5.25 4.13 18 0",
    opacity: 0.2
  })), _path38 || (_path38 = /*#__PURE__*/react.createElement("path", {
    d: "M168.58 587.16s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30Z",
    fill: "#ff6363"
  })), _path39 || (_path39 = /*#__PURE__*/react.createElement("path", {
    d: "M168.58 587.16s9 24.4 8.26 30.78l7.13-.75s-12-21.39-9-30Z",
    opacity: 0.2
  })), _path40 || (_path40 = /*#__PURE__*/react.createElement("path", {
    d: "M205.35 589.19s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.18 27.84-20.04Z",
    fill: "#ff6363"
  })), _path41 || (_path41 = /*#__PURE__*/react.createElement("path", {
    d: "M205.35 589.19s-14.18-7.25-20.52-1.26-7.32 21.3-7.32 21.3 23.12 3.18 27.84-20.04Z",
    fill: "#fff",
    opacity: 0.1
  })), _path42 || (_path42 = /*#__PURE__*/react.createElement("path", {
    d: "M177.51 609.23s3.72-17.77 27.84-20",
    fill: "none",
    stroke: "#6c63ff",
    strokeMiterlimit: 10
  })), _path43 || (_path43 = /*#__PURE__*/react.createElement("path", {
    d: "M63 553.26s1.39-1.55-1.22-2.17v-2.55h1.57a13.46 13.46 0 0 0-10.66-13.16v-3.09h.41v-4H43v4h.29v3.13a13.46 13.46 0 0 0-10.48 13.12h1.4v2.45s-3.32 1.57 0 4.37 2.8 4.89 2.8 4.89-1.4 5.24-4.19 5.94v48.75a10.83 10.83 0 0 0 10.83 10.83h8.56A10.83 10.83 0 0 0 63 614.95v-48.76s-4.89-3.67-4-5.94a55 55 0 0 1 4-6.99Z",
    fill: "#ff6363"
  })));
};

/* harmony default export */ var about = (SvgAbout);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./src/components/About/AboutCard.js








function AboutCard() {
  return /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 5,
    style: {
      paddingTop: "20px",
      paddingBottom: "50px"
    },
    className: "about-img"
  }, /*#__PURE__*/react.createElement("img", {
    src: about,
    alt: "workout",
    className: "img-fluid"
  })), /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default */.Z, {
    className: "quote-card-view"
  }, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("blockquote", {
    className: "blockquote mb-0"
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      textAlign: "justify"
    }
  }, "Apart from coding, some other activities that I love to do!"), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", {
    className: "about-activity"
  }, /*#__PURE__*/react.createElement(im_index_esm/* ImPointRight */.lJI, null), " Workout at the Gym"), /*#__PURE__*/react.createElement("li", {
    className: "about-activity"
  }, /*#__PURE__*/react.createElement(im_index_esm/* ImPointRight */.lJI, null), " Go to Salt Spring Island and Camp"), /*#__PURE__*/react.createElement("li", {
    className: "about-activity"
  }, /*#__PURE__*/react.createElement(im_index_esm/* ImPointRight */.lJI, null), " Play Dungeons And Dragons"))))))), /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 12,
    className: "home-about-social"
  }, /*#__PURE__*/react.createElement("h1", null, "FIND ME ON"), /*#__PURE__*/react.createElement("ul", {
    className: "home-about-social-links"
  }, /*#__PURE__*/react.createElement("li", {
    className: "social-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/MattiasHenders",
    target: "_blank",
    rel: "noreferrer",
    className: "icon-colour  home-social-icons"
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiFillGithub */.RrF, null))), /*#__PURE__*/react.createElement("li", {
    className: "social-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.linkedin.com/in/mattias-henders/",
    target: "_blank",
    rel: "noreferrer",
    className: "icon-colour  home-social-icons"
  }, /*#__PURE__*/react.createElement(fa_index_esm/* FaLinkedinIn */.BUd, null))), /*#__PURE__*/react.createElement("li", {
    className: "social-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.instagram.com/_.mattias._/",
    target: "_blank",
    rel: "noreferrer",
    className: "icon-colour home-social-icons"
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiFillInstagram */.t0C, null)))), /*#__PURE__*/react.createElement("p", null, "Feel free to ", /*#__PURE__*/react.createElement("span", {
    className: "red"
  }, "connect "), "with me"))));
}

/* harmony default export */ var About_AboutCard = (AboutCard);
;// CONCATENATED MODULE: ./src/components/About/About.js






function About() {
  return /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    className: "home-about-section",
    id: "about"
  }, /*#__PURE__*/react.createElement(components_Particle, null), /*#__PURE__*/react.createElement(Container/* default */.Z, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 8,
    className: "home-about-description"
  }, /*#__PURE__*/react.createElement("h1", {
    style: {
      fontSize: "2.6em"
    }
  }, "LET ME ", /*#__PURE__*/react.createElement("span", {
    className: "red"
  }, " INTRODUCE "), " MYSELF"), /*#__PURE__*/react.createElement("p", {
    className: "home-about-body"
  }, "My passion is building server-side solutions, \xA0", /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("b", {
    className: "red"
  }, "RESTful API's "), " built using MERN, and", " ", /*#__PURE__*/react.createElement("b", {
    className: "red"
  }, "Lightweight Linux Servers")), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("br", null), "Whenever possible, I also apply my passion for developing business oriented products with ", /*#__PURE__*/react.createElement("b", {
    className: "red"
  }, "Express.js"), " and", /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("b", {
    className: "red"
  }, " ", "Modern Javascript Library and Frameworks")), "\xA0 like", /*#__PURE__*/react.createElement("i", null, /*#__PURE__*/react.createElement("b", {
    className: "red"
  }, " React.js and Next.js")))), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 4,
    className: "myAvtar"
  }, /*#__PURE__*/react.createElement("img", {
    src: avatar,
    className: "img-fluid avatar-img",
    alt: "avatar"
  }))), /*#__PURE__*/react.createElement(About_AboutCard, null)));
}

/* harmony default export */ var About_About = (About);
;// CONCATENATED MODULE: ./src/components/Home/Home.js










function Home() {
  return /*#__PURE__*/react.createElement("section", null, /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    className: "home-section",
    id: "home"
  }, /*#__PURE__*/react.createElement(components_Particle, null), /*#__PURE__*/react.createElement(Container/* default */.Z, {
    className: "home-content"
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 7,
    className: "home-header"
  }, /*#__PURE__*/react.createElement("h1", {
    style: {
      paddingBottom: 15
    },
    className: "heading"
  }, "Hi There!", " ", /*#__PURE__*/react.createElement("span", {
    className: "wave",
    role: "img",
    "aria-labelledby": "wave"
  }, "\uD83D\uDC4B\uD83C\uDFFB")), /*#__PURE__*/react.createElement("h1", {
    className: "heading-name"
  }, "I'M", /*#__PURE__*/react.createElement("strong", {
    className: "main-name"
  }, " MATTIAS HENDERS")), /*#__PURE__*/react.createElement("div", {
    style: {
      padding: 50,
      textAlign: "left"
    }
  }, /*#__PURE__*/react.createElement(Home_Type, null))), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: 5,
    style: {
      paddingBottom: 20
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: home_main,
    alt: "home pic",
    className: "img-fluid",
    style: {
      maxHeight: "450px"
    }
  }))))), /*#__PURE__*/react.createElement(Work_Work, null), /*#__PURE__*/react.createElement(Projects_Projects, null), /*#__PURE__*/react.createElement(Education_Education, null), /*#__PURE__*/react.createElement(About_About, null));
}

/* harmony default export */ var Home_Home = (Home);
;// CONCATENATED MODULE: ./src/components/Footer.js





function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return /*#__PURE__*/react.createElement(Container/* default */.Z, {
    fluid: true,
    className: "footer"
  }, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: "4",
    className: "footer-copywright"
  }, /*#__PURE__*/react.createElement("h3", null, "Designed and Developed by Mattias Henders")), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: "4",
    className: "footer-copywright"
  }, /*#__PURE__*/react.createElement("h3", null, "Copyright \xA9 ", year, " MH")), /*#__PURE__*/react.createElement(Col/* default */.Z, {
    md: "4",
    className: "footer-body"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "footer-icons"
  }, /*#__PURE__*/react.createElement("li", {
    className: "social-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/MattiasHenders",
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiFillGithub */.RrF, null))), /*#__PURE__*/react.createElement("li", {
    className: "social-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.linkedin.com/in/mattias-henders/",
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react.createElement(fa_index_esm/* FaLinkedinIn */.BUd, null))), /*#__PURE__*/react.createElement("li", {
    className: "social-icons"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.instagram.com/_.mattias._/",
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react.createElement(ai_index_esm/* AiFillInstagram */.t0C, null)))))));
}

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/components/ScrollToTop.js



function ScrollToTop() {
  var _useLocation = (0,react_router/* useLocation */.TH)(),
      pathname = _useLocation.pathname;

  (0,react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* harmony default export */ var components_ScrollToTop = (ScrollToTop);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(5426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(style/* default */.Z, style_options);




       /* harmony default export */ var src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/App.css
var App = __webpack_require__(9087);
;// CONCATENATED MODULE: ./src/App.css

      
      
      
      
      
      
      
      
      

var App_options = {};

App_options.styleTagTransform = (styleTagTransform_default());
App_options.setAttributes = (setAttributesWithoutAttributes_default());

      App_options.insert = insertBySelector_default().bind(null, "head");
    
App_options.domAPI = (styleDomAPI_default());
App_options.insertStyleElement = (insertStyleElement_default());

var App_update = injectStylesIntoStyleTag_default()(App/* default */.Z, App_options);




       /* harmony default export */ var src_App = (App/* default */.Z && App/* default.locals */.Z.locals ? App/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(4039);
;// CONCATENATED MODULE: ./src/App.js
















function App_App() {
  var _useState = (0,react.useState)(true),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      load = _useState2[0],
      upadateLoad = _useState2[1];

  (0,react.useEffect)(function () {
    var timer = setTimeout(function () {
      upadateLoad(false);
    }, 1200);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(components_Pre, {
    load: load
  }), /*#__PURE__*/react.createElement("div", {
    className: "App",
    id: load ? "no-scroll" : "scroll"
  }, /*#__PURE__*/react.createElement(components_Navbar, null), /*#__PURE__*/react.createElement(components_ScrollToTop, null), /*#__PURE__*/react.createElement(react_router/* Routes */.Z5, null, /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/",
    element: /*#__PURE__*/react.createElement(Home_Home, null)
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/#work",
    element: /*#__PURE__*/react.createElement(Work_Work, null)
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/#project",
    element: /*#__PURE__*/react.createElement(Projects_Projects, null)
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/#education",
    element: /*#__PURE__*/react.createElement(Resume, null)
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "*",
    element: /*#__PURE__*/react.createElement(react_router/* Navigate */.Fg, {
      to: "/"
    })
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "/about",
    element: /*#__PURE__*/react.createElement(About_About, null)
  })), /*#__PURE__*/react.createElement(components_Footer, null)));
}

/* harmony default export */ var src_App_0 = (App_App);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/* import() */ 324).then(__webpack_require__.bind(__webpack_require__, 2131)).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App_0, null)), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

src_reportWebVitals();

/***/ }),

/***/ 9087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App-logo {\r\n    animation: App-logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App-header {\r\n  background-color: #342828;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App-link {\r\n  color: #fb6161;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App-logo {\r\n    animation: App-logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App-header {\r\n  background-color: #342828;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App-link {\r\n  color: #fb6161;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  font-family: \"Raleway\", serif !important;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  background-image: linear-gradient(to left, rgb(41, 20, 20), rgb(35, 15, 15));\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AACA;EACE,SAAS;EACT,wCAAwC;EACxC,mCAAmC;EACnC,kCAAkC;EAClC,4EAA4E;AAC9E","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap\");\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Raleway\", serif !important;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  background-image: linear-gradient(to left, rgb(41, 20, 20), rgb(35, 15, 15));\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(1462), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(61), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  --section-background-color: linear-gradient(\r\n    to bottom left,\r\n    rgba(17, 16, 16, 0.582),\r\n    rgba(24, 8, 8, 0.904)\r\n  );\r\n\r\n  --image-gradient: linear-gradient(\r\n    to bottom left,\r\n    rgba(17, 16, 16, 0.678),\r\n    rgba(22, 10, 10, 0.863)\r\n  );\r\n\r\n  --imp-text-color: #f07070;\r\n}\r\n\r\n.red {\r\n  color: var(--imp-text-color) !important;\r\n}\r\n\r\nbutton:focus {\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* --------- */\r\n/*  Preloader */\r\n/* --------- */\r\n#preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 999999;\r\n  background-color: #130505;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n#preloader-none {\r\n  opacity: 0;\r\n}\r\n\r\n#no-scroll {\r\n  overflow: hidden;\r\n  height: 100vh;\r\n}\r\n\r\n/* --------- */\r\n/*Scrollbar   */\r\n/* --------- */\r\n\r\n::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #501919;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(216, 121, 121, 0.959);\r\n  border-radius: 12px;\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(235, 130, 130, 0.911);\r\n  border-radius: 12px;\r\n}\r\n\r\n/* --------- */\r\n/* Navbar Section  */\r\n/* --------- */\r\n.sticky {\r\n  background-color: #2e1a1aa9 !important;\r\n  transition: all 0.3s ease-out 0s !important;\r\n  box-shadow: 0px 10px 10px 0px rgba(29, 5, 5, 0.171) !important;\r\n  backdrop-filter: blur(15px) !important;\r\n}\r\n\r\n.navbar {\r\n  position: fixed !important;\r\n  transition: all 0.3s ease-out 0s !important;\r\n  padding: 0.3rem 2rem !important;\r\n  font-size: 1.2rem !important;\r\n}\r\n\r\n.navbar-toggler {\r\n  position: relative !important;\r\n  background-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n\r\n.navbar-toggler span {\r\n  display: block !important;\r\n  background-color: #f45050 !important;\r\n  height: 4px !important;\r\n  width: 27px !important;\r\n  margin-top: 5px !important;\r\n  margin-bottom: 5px !important;\r\n  transform: rotate(0deg) !important;\r\n  left: 0 !important;\r\n  opacity: 1 !important;\r\n}\r\n\r\n.navbar-toggler:focus,\r\n.navbar-toggler:active {\r\n  outline: 0 !important;\r\n}\r\n\r\n.navbar-toggler span:nth-child(1),\r\n.navbar-toggler span:nth-child(3) {\r\n  transition: transform 0.35s ease-in-out !important;\r\n  transition: transform 0.35s ease-in-out !important;\r\n}\r\n\r\n.navbar-toggler:not(.collapsed) span:nth-child(1) {\r\n  position: absolute !important;\r\n  left: 12px !important;\r\n  top: 10px !important;\r\n  transform: rotate(135deg) !important;\r\n  opacity: 0.9 !important;\r\n}\r\n\r\n.navbar-toggler:not(.collapsed) span:nth-child(2) {\r\n  height: 12px !important;\r\n  visibility: hidden !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.navbar-toggler:not(.collapsed) span:nth-child(3) {\r\n  position: absolute !important;\r\n  left: 12px !important;\r\n  top: 10px !important;\r\n  transform: rotate(-135deg) !important;\r\n  opacity: 0.9 !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar {\r\n    padding: 1rem 2rem !important;\r\n    font-size: 1.4rem !important;\r\n    background-color: #271818 !important;\r\n  }\r\n  .navbar-nav .nav-item a::after {\r\n    display: none !important;\r\n  }\r\n}\r\n.navbar-brand {\r\n  color: rgb(250, 250, 250) !important;\r\n}\r\n\r\n.logo {\r\n  height: 1.4em !important;\r\n  width: 2.5em !important;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n  color: white !important;\r\n  padding-right: 1rem !important;\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0.8rem 1rem !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .nav-link {\r\n    padding: 0.7rem 1rem !important;\r\n  }\r\n}\r\n\r\n.navbar-nav .nav-item {\r\n  position: relative;\r\n  margin-left: 20px;\r\n}\r\n\r\n.navbar-nav .nav-item a {\r\n  font-weight: 400;\r\n  transition: all 0.3s ease-out 0s;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .nav-item a::after {\r\n  content: \"\";\r\n  position: relative;\r\n  display: block;\r\n  height: 5px;\r\n  width: 0;\r\n  border-radius: 16px;\r\n  background: #f55b5b;\r\n  bottom: 1px;\r\n  left: 0;\r\n  z-index: -1;\r\n  transition: all 0.3s ease-out 0s;\r\n}\r\n\r\n.navbar-nav .nav-item a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n/* --------- */\r\n/* Home section */\r\n/* --------- */\r\n.wave {\r\n  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */\r\n  animation-duration: 2.1s; /* Change to speed up or slow down */\r\n  animation-iteration-count: infinite; /* Never stop waving :) */\r\n  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */\r\n  display: inline-block;\r\n}\r\n\r\n@keyframes wave-animation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  10% {\r\n    transform: rotate(14deg);\r\n  } /* The following five values can be played with to make the waving more or less extreme */\r\n  20% {\r\n    transform: rotate(-8deg);\r\n  }\r\n  30% {\r\n    transform: rotate(14deg);\r\n  }\r\n  40% {\r\n    transform: rotate(-4deg);\r\n  }\r\n  50% {\r\n    transform: rotate(10deg);\r\n  }\r\n  60% {\r\n    transform: rotate(0deg);\r\n  } /* Reset for the last half to pause */\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n#tsparticles {\r\n  position: fixed !important;\r\n  background-repeat: no-repeat !important;\r\n  background-size: cover !important;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.home-header {\r\n  padding-top: 80px !important;\r\n}\r\n\r\n.home-section {\r\n  position: relative;\r\n  z-index: -1;\r\n  background-image: var(--image-gradient), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  padding-bottom: 30px !important;\r\n  padding-top: 30px !important;\r\n}\r\n\r\n.home-content {\r\n  padding: 9rem 0 2rem !important;\r\n  color: whitesmoke;\r\n  text-align: left;\r\n}\r\n\r\n.heading {\r\n  font-size: 2.4em !important;\r\n  padding-left: 50px !important;\r\n}\r\n\r\n.heading-name {\r\n  font-size: 2.5em !important;\r\n  padding-left: 45px !important;\r\n}\r\n\r\n.main-name {\r\n  color: #f85f5f;\r\n}\r\n\r\n.avatar-img {\r\n  width: 300px;\r\n}\r\n\r\n.fade-in-image {\r\n  animation: fadeIn 5s;\r\n  animation-iteration-count: 1\r\n}\r\n\r\n.fade-out-image {\r\n  animation: fadeOut 5s;\r\n  animation-iteration-count: 1\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {opacity:0;}\r\n  100% {opacity:1;}\r\n  \r\n}\r\n\r\n@keyframes fadeOut {\r\n  0% {opacity:1;}\r\n  100% {opacity:0;}\r\n}\r\n\r\n.Typewriter__wrapper {\r\n  font-size: 2.2em !important;\r\n  color: #df6a6a !important;\r\n  font-weight: 600 !important;\r\n}\r\n.Typewriter__cursor {\r\n  font-size: 2.4em !important;\r\n  color: #d66262 !important;\r\n}\r\n\r\n@media (min-height: 650px) {\r\n  .home-section {\r\n    height: 100vh;\r\n  } \r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .Typewriter__wrapper {\r\n    font-size: 1.4em !important;\r\n    font-weight: 500 !important;\r\n    position: absolute !important;\r\n  }\r\n  .Typewriter__cursor {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.myAvtar {\r\n  justify-content: center !important;\r\n  padding-top: 9em !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .myAvtar {\r\n    padding-top: 2em !important;\r\n    padding-bottom: 2em !important;\r\n  }\r\n}\r\n\r\n.home-about-section {\r\n  position: relative;\r\n  padding-bottom: 70px !important;\r\n  padding-top: 70px !important;\r\n}\r\n\r\n.home-about-description {\r\n  color: white !important;\r\n  padding-top: 100px !important;\r\n  padding-bottom: 20px !important;\r\n  text-align: center;\r\n}\r\n\r\n.home-about-body {\r\n  padding-top: 50px;\r\n  font-size: 1.2em !important;\r\n  text-align: left;\r\n}\r\n\r\n.home-about-social {\r\n  text-align: center !important;\r\n  padding-top: 25px;\r\n  color: white !important;\r\n}\r\n\r\n.home-about-social-links {\r\n  justify-content: center !important;\r\n  padding-top: 15px !important;\r\n  display: inline-block !important;\r\n  position: relative !important;\r\n  padding-inline-start: 0 !important;\r\n}\r\n\r\n.home-social-icons {\r\n  position: relative !important;\r\n  display: inline-block !important;\r\n  width: 60px !important;\r\n  height: 60px !important;\r\n  text-align: center !important;\r\n  font-size: 1.8em !important;\r\n  line-height: 2em !important;\r\n  background: rgba(255, 255, 255, 0.972) !important;\r\n  border-radius: 50% !important;\r\n  transition: 0.5s !important;\r\n}\r\n\r\n.home-social-icons::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background: #7a1818;\r\n  transition: 0.5s;\r\n  transform: scale(0.9);\r\n  z-index: -1;\r\n}\r\n\r\n.home-social-icons:hover::before {\r\n  transform: scale(1.1);\r\n  box-shadow: 0 0 15px #951f1f;\r\n}\r\n\r\n.home-social-icons:hover {\r\n  color: #9e2020;\r\n  box-shadow: 0 0 5px #9e2020;\r\n  text-shadow: 0 0 2px #9e2020;\r\n}\r\n\r\n.social-icons {\r\n  display: inline-block !important;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.icon-colour {\r\n  color: #860c0c !important;\r\n}\r\n\r\n/* --------- */\r\n/* Footer */\r\n/* --------- */\r\n.footer {\r\n  background-color: rgb(22, 4, 4);\r\n  bottom: 0 !important;\r\n  padding-top: 10px !important;\r\n  padding-bottom: 8px !important ;\r\n}\r\n.footer-copywright {\r\n  text-align: center !important;\r\n}\r\n\r\n.footer-body {\r\n  text-align: center !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .footer-copywright {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .footer-body {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n.footer h3 {\r\n  font-size: 1em;\r\n  color: white !important;\r\n  margin-top: 0.5em !important;\r\n  margin-bottom: 0.5em !important;\r\n}\r\n.footer-icons {\r\n  margin-top: 0.5em !important;\r\n  margin-bottom: 0.5em !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n.blockquote-footer {\r\n  color: #c08888 !important;\r\n}\r\n/* --------- */\r\n/* Projects */\r\n/* --------- */\r\n.project-section {\r\n  position: relative !important;\r\n  padding-top: 100px !important;\r\n  padding-bottom: 30px !important;\r\n  background-image: var(--section-background-color) !important;\r\n}\r\n\r\n.project-card {\r\n  padding-top: 50px !important;\r\n  padding-bottom: 50px !important;\r\n  padding-left: 25px !important;\r\n  padding-right: 25px !important;\r\n  height: auto !important;\r\n}\r\n\r\n.project-card-view {\r\n  box-shadow: 0 4px 5px 3px rgba(136, 53, 53, 0.459) !important;\r\n  color: white !important;\r\n  background-color: transparent !important;\r\n  opacity: 0.9 !important;\r\n  transition: all 0.5s ease 0s !important;\r\n  height: 100% !important;\r\n}\r\n.project-card-view:hover {\r\n  transform: scale(1.02) !important;\r\n  overflow: hidden !important;\r\n  box-shadow: 0 4px 4px 5px rgba(144, 72, 72, 0.561) !important;\r\n}\r\n\r\n.workImg {\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n  margin: auto;\r\n}\r\n\r\n.projectImg {\r\n  max-height: 250px;\r\n  margin: auto;\r\n}\r\n\r\n.education-container-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.blog-card {\r\n  padding-top: 50px !important;\r\n  padding-bottom: 50px !important;\r\n  padding-left: 25px !important;\r\n  padding-right: 25px !important;\r\n  height: auto !important;\r\n}\r\n\r\n.blog-card-view {\r\n  background-color: transparent !important;\r\n  box-shadow: 0 3px 3px 2px rgba(161, 77, 77, 0.459) !important;\r\n  color: white !important;\r\n  transition: all 0.5s ease 0s !important;\r\n  height: 100% !important;\r\n}\r\n\r\n.blog-link {\r\n  color: white !important;\r\n  text-decoration: none !important;\r\n}\r\n\r\n.blog-link:hover {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.blog-card-view:hover {\r\n  transform: scale(1.02) !important;\r\n  overflow: hidden !important;\r\n  box-shadow: 0 3px 3px 5px rgba(173, 88, 88, 0.65) !important;\r\n}\r\n\r\n.card-img-top {\r\n  padding: 20px !important;\r\n  opacity: 0.8 !important;\r\n  border-radius: 10px !important;\r\n}\r\n\r\n.blog-img {\r\n  padding: 0px !important;\r\n  opacity: 0.8 !important;\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff !important;\r\n  background-color: #863636 !important;\r\n  border-color: #863636 !important;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff !important;\r\n  background-color: #c52020d7 !important;\r\n  border-color: #c52020d7 !important;\r\n}\r\n.btn:focus {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n.project-heading {\r\n  color: white !important;\r\n  font-size: 2.3em !important;\r\n  font-weight: 500 !important;\r\n  padding-top: 10px !important;\r\n}\r\n\r\n/* --------- */\r\n/* About */\r\n/* --------- */\r\n\r\n.work-section {\r\n  position: relative !important;\r\n  padding-top: 150px !important;\r\n  padding-bottom: 30px !important;\r\n  background-image: var(--section-background-color) !important;\r\n  color: white !important;\r\n}\r\n\r\n.tech-icons {\r\n  font-size: 4.5em !important;\r\n  margin: 15px !important;\r\n  padding: 10px !important;\r\n  opacity: 0.93 !important;\r\n  border: 1.7px solid rgba(230, 137, 137, 0.637) !important;\r\n  vertical-align: middle !important;\r\n  text-align: center !important;\r\n  border-radius: 5px !important;\r\n  display: table !important;\r\n  box-shadow: 4px 5px 4px 3px rgba(168, 4, 4, 0.137) !important;\r\n  overflow: hidden !important;\r\n  transition: all 0.4s ease 0s !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .tech-icons {\r\n    margin: 10px !important;\r\n  }\r\n}\r\n\r\n.tech-icons:hover {\r\n  transform: scale(1.05) !important;\r\n  overflow: hidden !important;\r\n  border: 2.2px solid rgba(230, 115, 115, 0.883) !important;\r\n}\r\n.tech-icon-images {\r\n  padding: 20px !important;\r\n  line-height: 1.6 !important;\r\n}\r\n\r\n.quote-card-view {\r\n  border: none !important;\r\n  color: white !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.about-activity {\r\n  list-style: none !important;\r\n  text-align: left !important;\r\n  padding-left: 1px !important;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .about-img {\r\n    padding-top: 0 !important;\r\n  }\r\n}\r\n/* --------- */\r\n/* Resume */\r\n/* --------- */\r\n\r\n.resume-section {\r\n  position: relative !important;\r\n  padding-top: 20px !important;\r\n  padding-bottom: 50px !important;\r\n  color: white !important;\r\n}\r\n\r\n.resume {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  justify-content: center;\r\n}\r\n\r\n.resume-left {\r\n  padding-right: 80px !important;\r\n}\r\n\r\n.resume-right {\r\n  padding-left: 80px !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .resume-left {\r\n    padding-right: 15px !important;\r\n    padding-left: 15px !important;\r\n  }\r\n\r\n  .resume-right {\r\n    padding-right: 15px !important;\r\n    padding-left: 15px !important;\r\n  }\r\n}\r\n.resume .resume-title {\r\n  font-size: 2em;\r\n  font-weight: 700;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.resume .resume-item {\r\n  padding: 0 0 10px 25px;\r\n  margin-top: -2px;\r\n  border-left: 2px solid #a84949;\r\n  position: relative;\r\n}\r\n\r\n.resume .resume-item .resume-title {\r\n  line-height: 18px;\r\n  font-size: 0.9em;\r\n  background: #7934345d;\r\n  padding: 8px 15px;\r\n  display: inline-block;\r\n  font-weight: 600;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.resume .resume-item ul {\r\n  padding-left: 20px;\r\n  text-align: justify;\r\n}\r\n\r\n.resume .resume-item ul li {\r\n  padding-bottom: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.resume .resume-item:last-child {\r\n  padding-bottom: 0;\r\n}\r\n\r\n.resume .resume-item::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50px;\r\n  left: -9px;\r\n  top: 0;\r\n  background: #fff;\r\n  border: 2px solid #a84949;\r\n}\r\n\r\n.like-item {\r\n  padding-top: 10px !important;\r\n  font-size: 1.1em !important;\r\n  font-family: sans-serif !important;\r\n}\r\n\r\n.like-btn {\r\n  background-color: #ce4c4c5e !important;\r\n  border-color: #ce4c4c5e !important;\r\n  padding: 0.25rem 0.98rem !important;\r\n  border-radius: 5px !important;\r\n  line-height: 1.4 !important;\r\n  transition: 0.3s ease !important;\r\n}\r\n\r\n.like-btn:hover {\r\n  transform: translateY(-2px) !important;\r\n  background-color: #d34d4d86 !important;\r\n  border-color: #d34d4d86 !important;\r\n}\r\n\r\n.animate-like {\r\n  animation-name: likeAnimation;\r\n  animation-fill-mode: forwards;\r\n  animation-duration: 0.85s;\r\n}\r\n@keyframes likeAnimation {\r\n  0% {\r\n    transform: scale(1.5);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.fork-btn {\r\n  font-size: 1.1em !important;\r\n  padding-top: 10px !important;\r\n}\r\n\r\n.fork-btn-inner {\r\n  line-height: 1.4em !important;\r\n  background-color: #ce4c4c5e !important;\r\n  padding: 0.25rem 1.1rem !important;\r\n  vertical-align: middle !important;\r\n  text-align: center !important;\r\n}\r\n\r\n.fork-btn-inner:hover {\r\n  transform: translateY(-2px) !important;\r\n  background-color: #d34d4d86 !important;\r\n  border-color: #d34d4d86 !important;\r\n}\r\n.fork-btn-inner::after {\r\n  display: none !important;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  --section-background-color: linear-gradient(\r\n    to bottom left,\r\n    rgba(17, 16, 16, 0.582),\r\n    rgba(24, 8, 8, 0.904)\r\n  );\r\n\r\n  --image-gradient: linear-gradient(\r\n    to bottom left,\r\n    rgba(17, 16, 16, 0.678),\r\n    rgba(22, 10, 10, 0.863)\r\n  );\r\n\r\n  --imp-text-color: #f07070;\r\n}\r\n\r\n.red {\r\n  color: var(--imp-text-color) !important;\r\n}\r\n\r\nbutton:focus {\r\n  box-shadow: none !important;\r\n}\r\n\r\n/* --------- */\r\n/*  Preloader */\r\n/* --------- */\r\n#preloader {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 999999;\r\n  background-color: #130505;\r\n  background-image: url(./Assets/pre.svg);\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n#preloader-none {\r\n  opacity: 0;\r\n}\r\n\r\n#no-scroll {\r\n  overflow: hidden;\r\n  height: 100vh;\r\n}\r\n\r\n/* --------- */\r\n/*Scrollbar   */\r\n/* --------- */\r\n\r\n::-webkit-scrollbar {\r\n  width: 7px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  background: #501919;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  background: rgba(216, 121, 121, 0.959);\r\n  border-radius: 12px;\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: rgba(235, 130, 130, 0.911);\r\n  border-radius: 12px;\r\n}\r\n\r\n/* --------- */\r\n/* Navbar Section  */\r\n/* --------- */\r\n.sticky {\r\n  background-color: #2e1a1aa9 !important;\r\n  transition: all 0.3s ease-out 0s !important;\r\n  box-shadow: 0px 10px 10px 0px rgba(29, 5, 5, 0.171) !important;\r\n  backdrop-filter: blur(15px) !important;\r\n}\r\n\r\n.navbar {\r\n  position: fixed !important;\r\n  transition: all 0.3s ease-out 0s !important;\r\n  padding: 0.3rem 2rem !important;\r\n  font-size: 1.2rem !important;\r\n}\r\n\r\n.navbar-toggler {\r\n  position: relative !important;\r\n  background-color: transparent !important;\r\n  border-color: transparent !important;\r\n}\r\n\r\n.navbar-toggler span {\r\n  display: block !important;\r\n  background-color: #f45050 !important;\r\n  height: 4px !important;\r\n  width: 27px !important;\r\n  margin-top: 5px !important;\r\n  margin-bottom: 5px !important;\r\n  transform: rotate(0deg) !important;\r\n  left: 0 !important;\r\n  opacity: 1 !important;\r\n}\r\n\r\n.navbar-toggler:focus,\r\n.navbar-toggler:active {\r\n  outline: 0 !important;\r\n}\r\n\r\n.navbar-toggler span:nth-child(1),\r\n.navbar-toggler span:nth-child(3) {\r\n  transition: transform 0.35s ease-in-out !important;\r\n  transition: transform 0.35s ease-in-out !important;\r\n}\r\n\r\n.navbar-toggler:not(.collapsed) span:nth-child(1) {\r\n  position: absolute !important;\r\n  left: 12px !important;\r\n  top: 10px !important;\r\n  transform: rotate(135deg) !important;\r\n  opacity: 0.9 !important;\r\n}\r\n\r\n.navbar-toggler:not(.collapsed) span:nth-child(2) {\r\n  height: 12px !important;\r\n  visibility: hidden !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.navbar-toggler:not(.collapsed) span:nth-child(3) {\r\n  position: absolute !important;\r\n  left: 12px !important;\r\n  top: 10px !important;\r\n  transform: rotate(-135deg) !important;\r\n  opacity: 0.9 !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar {\r\n    padding: 1rem 2rem !important;\r\n    font-size: 1.4rem !important;\r\n    background-color: #271818 !important;\r\n  }\r\n  .navbar-nav .nav-item a::after {\r\n    display: none !important;\r\n  }\r\n}\r\n.navbar-brand {\r\n  color: rgb(250, 250, 250) !important;\r\n}\r\n\r\n.logo {\r\n  height: 1.4em !important;\r\n  width: 2.5em !important;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n  color: white !important;\r\n  padding-right: 1rem !important;\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.nav-link {\r\n  padding: 0.8rem 1rem !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .nav-link {\r\n    padding: 0.7rem 1rem !important;\r\n  }\r\n}\r\n\r\n.navbar-nav .nav-item {\r\n  position: relative;\r\n  margin-left: 20px;\r\n}\r\n\r\n.navbar-nav .nav-item a {\r\n  font-weight: 400;\r\n  transition: all 0.3s ease-out 0s;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .nav-item a::after {\r\n  content: \"\";\r\n  position: relative;\r\n  display: block;\r\n  height: 5px;\r\n  width: 0;\r\n  border-radius: 16px;\r\n  background: #f55b5b;\r\n  bottom: 1px;\r\n  left: 0;\r\n  z-index: -1;\r\n  transition: all 0.3s ease-out 0s;\r\n}\r\n\r\n.navbar-nav .nav-item a:hover::after {\r\n  width: 100%;\r\n}\r\n\r\n/* --------- */\r\n/* Home section */\r\n/* --------- */\r\n.wave {\r\n  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */\r\n  animation-duration: 2.1s; /* Change to speed up or slow down */\r\n  animation-iteration-count: infinite; /* Never stop waving :) */\r\n  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */\r\n  display: inline-block;\r\n}\r\n\r\n@keyframes wave-animation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  10% {\r\n    transform: rotate(14deg);\r\n  } /* The following five values can be played with to make the waving more or less extreme */\r\n  20% {\r\n    transform: rotate(-8deg);\r\n  }\r\n  30% {\r\n    transform: rotate(14deg);\r\n  }\r\n  40% {\r\n    transform: rotate(-4deg);\r\n  }\r\n  50% {\r\n    transform: rotate(10deg);\r\n  }\r\n  60% {\r\n    transform: rotate(0deg);\r\n  } /* Reset for the last half to pause */\r\n  100% {\r\n    transform: rotate(0deg);\r\n  }\r\n}\r\n#tsparticles {\r\n  position: fixed !important;\r\n  background-repeat: no-repeat !important;\r\n  background-size: cover !important;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.home-header {\r\n  padding-top: 80px !important;\r\n}\r\n\r\n.home-section {\r\n  position: relative;\r\n  z-index: -1;\r\n  background-image: var(--image-gradient), url(./Assets/home-bg.jpg);\r\n  background-position: top center;\r\n  background-repeat: no-repeat;\r\n  padding-bottom: 30px !important;\r\n  padding-top: 30px !important;\r\n}\r\n\r\n.home-content {\r\n  padding: 9rem 0 2rem !important;\r\n  color: whitesmoke;\r\n  text-align: left;\r\n}\r\n\r\n.heading {\r\n  font-size: 2.4em !important;\r\n  padding-left: 50px !important;\r\n}\r\n\r\n.heading-name {\r\n  font-size: 2.5em !important;\r\n  padding-left: 45px !important;\r\n}\r\n\r\n.main-name {\r\n  color: #f85f5f;\r\n}\r\n\r\n.avatar-img {\r\n  width: 300px;\r\n}\r\n\r\n.fade-in-image {\r\n  animation: fadeIn 5s;\r\n  animation-iteration-count: 1\r\n}\r\n\r\n.fade-out-image {\r\n  animation: fadeOut 5s;\r\n  animation-iteration-count: 1\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {opacity:0;}\r\n  100% {opacity:1;}\r\n  \r\n}\r\n\r\n@keyframes fadeOut {\r\n  0% {opacity:1;}\r\n  100% {opacity:0;}\r\n}\r\n\r\n.Typewriter__wrapper {\r\n  font-size: 2.2em !important;\r\n  color: #df6a6a !important;\r\n  font-weight: 600 !important;\r\n}\r\n.Typewriter__cursor {\r\n  font-size: 2.4em !important;\r\n  color: #d66262 !important;\r\n}\r\n\r\n@media (min-height: 650px) {\r\n  .home-section {\r\n    height: 100vh;\r\n  } \r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .Typewriter__wrapper {\r\n    font-size: 1.4em !important;\r\n    font-weight: 500 !important;\r\n    position: absolute !important;\r\n  }\r\n  .Typewriter__cursor {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.myAvtar {\r\n  justify-content: center !important;\r\n  padding-top: 9em !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .myAvtar {\r\n    padding-top: 2em !important;\r\n    padding-bottom: 2em !important;\r\n  }\r\n}\r\n\r\n.home-about-section {\r\n  position: relative;\r\n  padding-bottom: 70px !important;\r\n  padding-top: 70px !important;\r\n}\r\n\r\n.home-about-description {\r\n  color: white !important;\r\n  padding-top: 100px !important;\r\n  padding-bottom: 20px !important;\r\n  text-align: center;\r\n}\r\n\r\n.home-about-body {\r\n  padding-top: 50px;\r\n  font-size: 1.2em !important;\r\n  text-align: left;\r\n}\r\n\r\n.home-about-social {\r\n  text-align: center !important;\r\n  padding-top: 25px;\r\n  color: white !important;\r\n}\r\n\r\n.home-about-social-links {\r\n  justify-content: center !important;\r\n  padding-top: 15px !important;\r\n  display: inline-block !important;\r\n  position: relative !important;\r\n  padding-inline-start: 0 !important;\r\n}\r\n\r\n.home-social-icons {\r\n  position: relative !important;\r\n  display: inline-block !important;\r\n  width: 60px !important;\r\n  height: 60px !important;\r\n  text-align: center !important;\r\n  font-size: 1.8em !important;\r\n  line-height: 2em !important;\r\n  background: rgba(255, 255, 255, 0.972) !important;\r\n  border-radius: 50% !important;\r\n  transition: 0.5s !important;\r\n}\r\n\r\n.home-social-icons::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background: #7a1818;\r\n  transition: 0.5s;\r\n  transform: scale(0.9);\r\n  z-index: -1;\r\n}\r\n\r\n.home-social-icons:hover::before {\r\n  transform: scale(1.1);\r\n  box-shadow: 0 0 15px #951f1f;\r\n}\r\n\r\n.home-social-icons:hover {\r\n  color: #9e2020;\r\n  box-shadow: 0 0 5px #9e2020;\r\n  text-shadow: 0 0 2px #9e2020;\r\n}\r\n\r\n.social-icons {\r\n  display: inline-block !important;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.icon-colour {\r\n  color: #860c0c !important;\r\n}\r\n\r\n/* --------- */\r\n/* Footer */\r\n/* --------- */\r\n.footer {\r\n  background-color: rgb(22, 4, 4);\r\n  bottom: 0 !important;\r\n  padding-top: 10px !important;\r\n  padding-bottom: 8px !important ;\r\n}\r\n.footer-copywright {\r\n  text-align: center !important;\r\n}\r\n\r\n.footer-body {\r\n  text-align: center !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .footer-copywright {\r\n    text-align: center !important;\r\n  }\r\n\r\n  .footer-body {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n.footer h3 {\r\n  font-size: 1em;\r\n  color: white !important;\r\n  margin-top: 0.5em !important;\r\n  margin-bottom: 0.5em !important;\r\n}\r\n.footer-icons {\r\n  margin-top: 0.5em !important;\r\n  margin-bottom: 0.5em !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n.blockquote-footer {\r\n  color: #c08888 !important;\r\n}\r\n/* --------- */\r\n/* Projects */\r\n/* --------- */\r\n.project-section {\r\n  position: relative !important;\r\n  padding-top: 100px !important;\r\n  padding-bottom: 30px !important;\r\n  background-image: var(--section-background-color) !important;\r\n}\r\n\r\n.project-card {\r\n  padding-top: 50px !important;\r\n  padding-bottom: 50px !important;\r\n  padding-left: 25px !important;\r\n  padding-right: 25px !important;\r\n  height: auto !important;\r\n}\r\n\r\n.project-card-view {\r\n  box-shadow: 0 4px 5px 3px rgba(136, 53, 53, 0.459) !important;\r\n  color: white !important;\r\n  background-color: transparent !important;\r\n  opacity: 0.9 !important;\r\n  transition: all 0.5s ease 0s !important;\r\n  height: 100% !important;\r\n}\r\n.project-card-view:hover {\r\n  transform: scale(1.02) !important;\r\n  overflow: hidden !important;\r\n  box-shadow: 0 4px 4px 5px rgba(144, 72, 72, 0.561) !important;\r\n}\r\n\r\n.workImg {\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n  margin: auto;\r\n}\r\n\r\n.projectImg {\r\n  max-height: 250px;\r\n  margin: auto;\r\n}\r\n\r\n.education-container-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.blog-card {\r\n  padding-top: 50px !important;\r\n  padding-bottom: 50px !important;\r\n  padding-left: 25px !important;\r\n  padding-right: 25px !important;\r\n  height: auto !important;\r\n}\r\n\r\n.blog-card-view {\r\n  background-color: transparent !important;\r\n  box-shadow: 0 3px 3px 2px rgba(161, 77, 77, 0.459) !important;\r\n  color: white !important;\r\n  transition: all 0.5s ease 0s !important;\r\n  height: 100% !important;\r\n}\r\n\r\n.blog-link {\r\n  color: white !important;\r\n  text-decoration: none !important;\r\n}\r\n\r\n.blog-link:hover {\r\n  cursor: pointer !important;\r\n}\r\n\r\n.blog-card-view:hover {\r\n  transform: scale(1.02) !important;\r\n  overflow: hidden !important;\r\n  box-shadow: 0 3px 3px 5px rgba(173, 88, 88, 0.65) !important;\r\n}\r\n\r\n.card-img-top {\r\n  padding: 20px !important;\r\n  opacity: 0.8 !important;\r\n  border-radius: 10px !important;\r\n}\r\n\r\n.blog-img {\r\n  padding: 0px !important;\r\n  opacity: 0.8 !important;\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff !important;\r\n  background-color: #863636 !important;\r\n  border-color: #863636 !important;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff !important;\r\n  background-color: #c52020d7 !important;\r\n  border-color: #c52020d7 !important;\r\n}\r\n.btn:focus {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n.project-heading {\r\n  color: white !important;\r\n  font-size: 2.3em !important;\r\n  font-weight: 500 !important;\r\n  padding-top: 10px !important;\r\n}\r\n\r\n/* --------- */\r\n/* About */\r\n/* --------- */\r\n\r\n.work-section {\r\n  position: relative !important;\r\n  padding-top: 150px !important;\r\n  padding-bottom: 30px !important;\r\n  background-image: var(--section-background-color) !important;\r\n  color: white !important;\r\n}\r\n\r\n.tech-icons {\r\n  font-size: 4.5em !important;\r\n  margin: 15px !important;\r\n  padding: 10px !important;\r\n  opacity: 0.93 !important;\r\n  border: 1.7px solid rgba(230, 137, 137, 0.637) !important;\r\n  vertical-align: middle !important;\r\n  text-align: center !important;\r\n  border-radius: 5px !important;\r\n  display: table !important;\r\n  box-shadow: 4px 5px 4px 3px rgba(168, 4, 4, 0.137) !important;\r\n  overflow: hidden !important;\r\n  transition: all 0.4s ease 0s !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .tech-icons {\r\n    margin: 10px !important;\r\n  }\r\n}\r\n\r\n.tech-icons:hover {\r\n  transform: scale(1.05) !important;\r\n  overflow: hidden !important;\r\n  border: 2.2px solid rgba(230, 115, 115, 0.883) !important;\r\n}\r\n.tech-icon-images {\r\n  padding: 20px !important;\r\n  line-height: 1.6 !important;\r\n}\r\n\r\n.quote-card-view {\r\n  border: none !important;\r\n  color: white !important;\r\n  background-color: transparent !important;\r\n}\r\n\r\n.about-activity {\r\n  list-style: none !important;\r\n  text-align: left !important;\r\n  padding-left: 1px !important;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .about-img {\r\n    padding-top: 0 !important;\r\n  }\r\n}\r\n/* --------- */\r\n/* Resume */\r\n/* --------- */\r\n\r\n.resume-section {\r\n  position: relative !important;\r\n  padding-top: 20px !important;\r\n  padding-bottom: 50px !important;\r\n  color: white !important;\r\n}\r\n\r\n.resume {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  justify-content: center;\r\n}\r\n\r\n.resume-left {\r\n  padding-right: 80px !important;\r\n}\r\n\r\n.resume-right {\r\n  padding-left: 80px !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .resume-left {\r\n    padding-right: 15px !important;\r\n    padding-left: 15px !important;\r\n  }\r\n\r\n  .resume-right {\r\n    padding-right: 15px !important;\r\n    padding-left: 15px !important;\r\n  }\r\n}\r\n.resume .resume-title {\r\n  font-size: 2em;\r\n  font-weight: 700;\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.resume .resume-item {\r\n  padding: 0 0 10px 25px;\r\n  margin-top: -2px;\r\n  border-left: 2px solid #a84949;\r\n  position: relative;\r\n}\r\n\r\n.resume .resume-item .resume-title {\r\n  line-height: 18px;\r\n  font-size: 0.9em;\r\n  background: #7934345d;\r\n  padding: 8px 15px;\r\n  display: inline-block;\r\n  font-weight: 600;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.resume .resume-item ul {\r\n  padding-left: 20px;\r\n  text-align: justify;\r\n}\r\n\r\n.resume .resume-item ul li {\r\n  padding-bottom: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.resume .resume-item:last-child {\r\n  padding-bottom: 0;\r\n}\r\n\r\n.resume .resume-item::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 50px;\r\n  left: -9px;\r\n  top: 0;\r\n  background: #fff;\r\n  border: 2px solid #a84949;\r\n}\r\n\r\n.like-item {\r\n  padding-top: 10px !important;\r\n  font-size: 1.1em !important;\r\n  font-family: sans-serif !important;\r\n}\r\n\r\n.like-btn {\r\n  background-color: #ce4c4c5e !important;\r\n  border-color: #ce4c4c5e !important;\r\n  padding: 0.25rem 0.98rem !important;\r\n  border-radius: 5px !important;\r\n  line-height: 1.4 !important;\r\n  transition: 0.3s ease !important;\r\n}\r\n\r\n.like-btn:hover {\r\n  transform: translateY(-2px) !important;\r\n  background-color: #d34d4d86 !important;\r\n  border-color: #d34d4d86 !important;\r\n}\r\n\r\n.animate-like {\r\n  animation-name: likeAnimation;\r\n  animation-fill-mode: forwards;\r\n  animation-duration: 0.85s;\r\n}\r\n@keyframes likeAnimation {\r\n  0% {\r\n    transform: scale(1.5);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.fork-btn {\r\n  font-size: 1.1em !important;\r\n  padding-top: 10px !important;\r\n}\r\n\r\n.fork-btn-inner {\r\n  line-height: 1.4em !important;\r\n  background-color: #ce4c4c5e !important;\r\n  padding: 0.25rem 1.1rem !important;\r\n  vertical-align: middle !important;\r\n  text-align: center !important;\r\n}\r\n\r\n.fork-btn-inner:hover {\r\n  transform: translateY(-2px) !important;\r\n  background-color: #d34d4d86 !important;\r\n  border-color: #d34d4d86 !important;\r\n}\r\n.fork-btn-inner::after {\r\n  display: none !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2204:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 9609:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2469:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ 7486:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ 4144:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ 175:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2740:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 3460:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 5647:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1692:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8214:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8931:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ 8349:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1217:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 2956:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ 9819:
/***/ (function(module) {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ }),

/***/ 1462:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "9eb783c002739cc1191d.svg";

/***/ }),

/***/ 61:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "c5f17b02885524ae4089.jpg";

/***/ }),

/***/ 4601:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2767:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 8251:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 7677:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 1543:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 7324:
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [30,665,672,578,24,632,483,852,357,905,532,505,206,805,279,321,171,200,724,958], function() { return __webpack_exec__(9548); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.3a0fffb8.js.map