"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[24],{

/***/ 2546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n:root {\n  --annotation-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");\n}\n\n.annotationLayer section {\n  position: absolute;\n  text-align: initial;\n}\n\n.annotationLayer .linkAnnotation > a,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.pushButton > canvas {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.annotationLayer .linkAnnotation > a:hover,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\n  opacity: 0.2;\n  background: rgba(255, 255, 0, 1);\n  box-shadow: 0 2px 10px rgba(255, 255, 0, 1);\n}\n\n.annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer;\n}\n\n.annotationLayer .textWidgetAnnotation input,\n.annotationLayer .textWidgetAnnotation textarea,\n.annotationLayer .choiceWidgetAnnotation select,\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  background-image: var(--annotation-unfocused-field-background);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font-size: 9px;\n  height: 100%;\n  margin: 0;\n  padding: 0 3px;\n  vertical-align: top;\n  width: 100%;\n}\n\n.annotationLayer .choiceWidgetAnnotation select option {\n  padding: 0;\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  border-radius: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation textarea {\n  font: message-box;\n  font-size: 9px;\n  resize: none;\n}\n\n.annotationLayer .textWidgetAnnotation input[disabled],\n.annotationLayer .textWidgetAnnotation textarea[disabled],\n.annotationLayer .choiceWidgetAnnotation select[disabled],\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n\n.annotationLayer .textWidgetAnnotation input:hover,\n.annotationLayer .textWidgetAnnotation textarea:hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\n  border: 1px solid rgba(0, 0, 0, 1);\n}\n\n.annotationLayer .textWidgetAnnotation input:focus,\n.annotationLayer .textWidgetAnnotation textarea:focus,\n.annotationLayer .choiceWidgetAnnotation select:focus {\n  background: none;\n  border: 1px solid transparent;\n}\n\n.annotationLayer .textWidgetAnnotation input :focus,\n.annotationLayer .textWidgetAnnotation textarea :focus,\n.annotationLayer .choiceWidgetAnnotation select :focus,\n.annotationLayer .buttonWidgetAnnotation.checkBox :focus,\n.annotationLayer .buttonWidgetAnnotation.radioButton :focus {\n  background-image: none;\n  background-color: transparent;\n  outline: auto;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  background-color: rgba(0, 0, 0, 1);\n  content: '';\n  display: block;\n  position: absolute;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  height: 80%;\n  left: 45%;\n  width: 1px;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\n  transform: rotate(45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  transform: rotate(-45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  border-radius: 50%;\n  height: 50%;\n  left: 30%;\n  top: 20%;\n  width: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb {\n  font-family: monospace;\n  padding-left: 2px;\n  padding-right: 0;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n  /*\n   * Letter spacing is placed on the right side of each character. Hence, the\n   * letter spacing of the last character may be placed outside the visible\n   * area, causing horizontal scrolling. We avoid this by extending the width\n   * when the element has focus and revert this when it loses focus.\n   */\n  width: 103%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  appearance: none;\n  padding: 0;\n}\n\n.annotationLayer .popupWrapper {\n  position: absolute;\n  width: 20em;\n}\n\n.annotationLayer .popup {\n  position: absolute;\n  z-index: 200;\n  max-width: 20em;\n  background-color: rgba(255, 255, 153, 1);\n  box-shadow: 0 2px 5px rgba(136, 136, 136, 1);\n  border-radius: 2px;\n  padding: 6px;\n  margin-left: 5px;\n  cursor: pointer;\n  font: message-box;\n  font-size: 9px;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.annotationLayer .popup > * {\n  font-size: 9px;\n}\n\n.annotationLayer .popup h1 {\n  display: inline-block;\n}\n\n.annotationLayer .popupDate {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n.annotationLayer .popupContent {\n  border-top: 1px solid rgba(51, 51, 51, 1);\n  margin-top: 2px;\n  padding-top: 2px;\n}\n\n.annotationLayer .richText > * {\n  white-space: pre-wrap;\n}\n\n.annotationLayer .highlightAnnotation,\n.annotationLayer .underlineAnnotation,\n.annotationLayer .squigglyAnnotation,\n.annotationLayer .strikeoutAnnotation,\n.annotationLayer .freeTextAnnotation,\n.annotationLayer .lineAnnotation svg line,\n.annotationLayer .squareAnnotation svg rect,\n.annotationLayer .circleAnnotation svg ellipse,\n.annotationLayer .polylineAnnotation svg polyline,\n.annotationLayer .polygonAnnotation svg polygon,\n.annotationLayer .caretAnnotation,\n.annotationLayer .inkAnnotation svg polyline,\n.annotationLayer .stampAnnotation,\n.annotationLayer .fileAttachmentAnnotation {\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaE;;AAEF;EACE,+NAA+N;AACjO;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,kBAAkB;EAClB,cAAc;EACd,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,gCAAgC;EAChC,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;;;;EAKE,8DAA8D;EAC9D,6BAA6B;EAC7B,sBAAsB;EACtB,cAAc;EACd,YAAY;EACZ,SAAS;EACT,cAAc;EACd,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;;AAEA;;;;;EAKE,gBAAgB;EAChB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;;;;;EAKE,kCAAkC;AACpC;;AAEA;;;EAGE,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;;;;;EAKE,sBAAsB;EACtB,6BAA6B;EAC7B,aAAa;AACf;;AAEA;;;EAGE,kCAAkC;EAClC,WAAW;EACX,cAAc;EACd,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,QAAQ;EACR,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE;;;;;IAKE;EACF,WAAW;AACb;;AAEA;;EAEE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,wCAAwC;EACxC,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,yCAAyC;EACzC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;;;;;;;;;;;;;EAcE,eAAe;AACjB","sourcesContent":["/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n:root {\n  --annotation-unfocused-field-background: url(\"data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>\");\n}\n\n.annotationLayer section {\n  position: absolute;\n  text-align: initial;\n}\n\n.annotationLayer .linkAnnotation > a,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.pushButton > canvas {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.annotationLayer .linkAnnotation > a:hover,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\n  opacity: 0.2;\n  background: rgba(255, 255, 0, 1);\n  box-shadow: 0 2px 10px rgba(255, 255, 0, 1);\n}\n\n.annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer;\n}\n\n.annotationLayer .textWidgetAnnotation input,\n.annotationLayer .textWidgetAnnotation textarea,\n.annotationLayer .choiceWidgetAnnotation select,\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  background-image: var(--annotation-unfocused-field-background);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font-size: 9px;\n  height: 100%;\n  margin: 0;\n  padding: 0 3px;\n  vertical-align: top;\n  width: 100%;\n}\n\n.annotationLayer .choiceWidgetAnnotation select option {\n  padding: 0;\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  border-radius: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation textarea {\n  font: message-box;\n  font-size: 9px;\n  resize: none;\n}\n\n.annotationLayer .textWidgetAnnotation input[disabled],\n.annotationLayer .textWidgetAnnotation textarea[disabled],\n.annotationLayer .choiceWidgetAnnotation select[disabled],\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n\n.annotationLayer .textWidgetAnnotation input:hover,\n.annotationLayer .textWidgetAnnotation textarea:hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\n  border: 1px solid rgba(0, 0, 0, 1);\n}\n\n.annotationLayer .textWidgetAnnotation input:focus,\n.annotationLayer .textWidgetAnnotation textarea:focus,\n.annotationLayer .choiceWidgetAnnotation select:focus {\n  background: none;\n  border: 1px solid transparent;\n}\n\n.annotationLayer .textWidgetAnnotation input :focus,\n.annotationLayer .textWidgetAnnotation textarea :focus,\n.annotationLayer .choiceWidgetAnnotation select :focus,\n.annotationLayer .buttonWidgetAnnotation.checkBox :focus,\n.annotationLayer .buttonWidgetAnnotation.radioButton :focus {\n  background-image: none;\n  background-color: transparent;\n  outline: auto;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  background-color: rgba(0, 0, 0, 1);\n  content: '';\n  display: block;\n  position: absolute;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  height: 80%;\n  left: 45%;\n  width: 1px;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\n  transform: rotate(45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  transform: rotate(-45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  border-radius: 50%;\n  height: 50%;\n  left: 30%;\n  top: 20%;\n  width: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb {\n  font-family: monospace;\n  padding-left: 2px;\n  padding-right: 0;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n  /*\n   * Letter spacing is placed on the right side of each character. Hence, the\n   * letter spacing of the last character may be placed outside the visible\n   * area, causing horizontal scrolling. We avoid this by extending the width\n   * when the element has focus and revert this when it loses focus.\n   */\n  width: 103%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  appearance: none;\n  padding: 0;\n}\n\n.annotationLayer .popupWrapper {\n  position: absolute;\n  width: 20em;\n}\n\n.annotationLayer .popup {\n  position: absolute;\n  z-index: 200;\n  max-width: 20em;\n  background-color: rgba(255, 255, 153, 1);\n  box-shadow: 0 2px 5px rgba(136, 136, 136, 1);\n  border-radius: 2px;\n  padding: 6px;\n  margin-left: 5px;\n  cursor: pointer;\n  font: message-box;\n  font-size: 9px;\n  white-space: normal;\n  word-wrap: break-word;\n}\n\n.annotationLayer .popup > * {\n  font-size: 9px;\n}\n\n.annotationLayer .popup h1 {\n  display: inline-block;\n}\n\n.annotationLayer .popupDate {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n.annotationLayer .popupContent {\n  border-top: 1px solid rgba(51, 51, 51, 1);\n  margin-top: 2px;\n  padding-top: 2px;\n}\n\n.annotationLayer .richText > * {\n  white-space: pre-wrap;\n}\n\n.annotationLayer .highlightAnnotation,\n.annotationLayer .underlineAnnotation,\n.annotationLayer .squigglyAnnotation,\n.annotationLayer .strikeoutAnnotation,\n.annotationLayer .freeTextAnnotation,\n.annotationLayer .lineAnnotation svg line,\n.annotationLayer .squareAnnotation svg rect,\n.annotationLayer .circleAnnotation svg ellipse,\n.annotationLayer .polylineAnnotation svg polyline,\n.annotationLayer .polygonAnnotation svg polygon,\n.annotationLayer .caretAnnotation,\n.annotationLayer .inkAnnotation svg polyline,\n.annotationLayer .stampAnnotation,\n.annotationLayer .fileAttachmentAnnotation {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v0": function() { return /* reexport */ pdf; }
});

// UNUSED EXPORTS: Document, Outline, Page

// EXTERNAL MODULE: ./node_modules/pdfjs-dist/legacy/build/pdf.js
var pdf = __webpack_require__(8783);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(2963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/make-event-props/dist/esm/index.js
var esm = __webpack_require__(4845);
// EXTERNAL MODULE: ./node_modules/make-cancellable-promise/dist/esm/index.js
var dist_esm = __webpack_require__(8094);
// EXTERNAL MODULE: ./node_modules/merge-class-names/dist/esm/index.js
var merge_class_names_dist_esm = __webpack_require__(9624);
// EXTERNAL MODULE: ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(2177);
// EXTERNAL MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var tiny_warning_esm = __webpack_require__(5298);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/DocumentContext.js

/* harmony default export */ var esm_DocumentContext = (/*#__PURE__*/(0,react.createContext)(null));
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Message.js


function Message(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return /*#__PURE__*/react.createElement("div", {
    className: "react-pdf__message react-pdf__message--".concat(type)
  }, children);
}
Message.propTypes = {
  children: (prop_types_default()).node,
  type: prop_types_default().oneOf(['error', 'loading', 'no-data']).isRequired
};
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/LinkService.js



/* Copyright 2015 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DEFAULT_LINK_REL = 'noopener noreferrer nofollow';

var LinkService = /*#__PURE__*/function () {
  function LinkService() {
    (0,classCallCheck/* default */.Z)(this, LinkService);

    this.externalLinkTarget = null;
    this.externalLinkRel = null;
  }

  (0,createClass/* default */.Z)(LinkService, [{
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      this.pdfDocument = pdfDocument;
    }
  }, {
    key: "setViewer",
    value: function setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    }
  }, {
    key: "setExternalLinkRel",
    value: function setExternalLinkRel(externalLinkRel) {
      this.externalLinkRel = externalLinkRel;
    }
  }, {
    key: "setExternalLinkTarget",
    value: function setExternalLinkTarget(externalLinkTarget) {
      this.externalLinkTarget = externalLinkTarget;
    }
  }, {
    key: "setHistory",
    value: function setHistory() {}
  }, {
    key: "pagesCount",
    get: function get() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
  }, {
    key: "page",
    get: function get() {
      return this.pdfViewer.currentPageNumber;
    },
    set: function set(value) {
      this.pdfViewer.currentPageNumber = value;
    }
  }, {
    key: "rotation",
    get: function get() {
      return 0;
    },
    set: function set(value) {}
  }, {
    key: "goToDestination",
    value: function goToDestination(dest) {
      var _this = this;

      new Promise(function (resolve) {
        if (typeof dest === 'string') {
          _this.pdfDocument.getDestination(dest).then(resolve);
        } else if (Array.isArray(dest)) {
          resolve(dest);
        } else {
          dest.then(resolve);
        }
      }).then(function (explicitDest) {
        (0,tiny_invariant_esm/* default */.Z)(Array.isArray(explicitDest), "\"".concat(explicitDest, "\" is not a valid destination array."));
        var destRef = explicitDest[0];
        new Promise(function (resolve) {
          if (destRef instanceof Object) {
            _this.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
              resolve(pageIndex);
            })["catch"](function () {
              (0,tiny_invariant_esm/* default */.Z)(false, "\"".concat(destRef, "\" is not a valid page reference."));
            });
          } else if (typeof destRef === 'number') {
            resolve(destRef);
          } else {
            (0,tiny_invariant_esm/* default */.Z)(false, "\"".concat(destRef, "\" is not a valid destination reference."));
          }
        }).then(function (pageIndex) {
          var pageNumber = pageIndex + 1;
          (0,tiny_invariant_esm/* default */.Z)(pageNumber >= 1 && pageNumber <= _this.pagesCount, "\"".concat(pageNumber, "\" is not a valid page number."));

          _this.pdfViewer.scrollPageIntoView({
            dest: dest,
            pageIndex: pageIndex,
            pageNumber: pageNumber
          });
        });
      });
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(dest) {
      this.goToDestination(dest);
    }
  }, {
    key: "goToPage",
    value: function goToPage() {}
  }, {
    key: "addLinkAttributes",
    value: function addLinkAttributes(link, url, newWindow) {
      link.href = url;
      link.rel = this.externalLinkRel || DEFAULT_LINK_REL;
      link.target = newWindow ? '_blank' : this.externalLinkTarget || '';
    }
  }, {
    key: "getDestinationHash",
    value: function getDestinationHash() {
      return '#';
    }
  }, {
    key: "getAnchorUrl",
    value: function getAnchorUrl() {
      return '#';
    }
  }, {
    key: "setHash",
    value: function setHash() {}
  }, {
    key: "executeNamedAction",
    value: function executeNamedAction() {}
  }, {
    key: "cachePageRef",
    value: function cachePageRef() {}
  }, {
    key: "isPageVisible",
    value: function isPageVisible() {
      return true;
    }
  }, {
    key: "isPageCached",
    value: function isPageCached() {
      return true;
    }
  }]);

  return LinkService;
}();


;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/PasswordResponses.js
// As defined in https://github.com/mozilla/pdf.js/blob/d9fac3459609a807be6506fb3441b5da4b154d14/src/shared/util.js#L371-L374
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
/* harmony default export */ var esm_PasswordResponses = (PasswordResponses);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/shared/utils.js



/**
 * Checks if we're running in a browser environment.
 */

var isBrowser = typeof window !== 'undefined';
/**
 * Checks whether we're running from a local file system.
 */

var isLocalFileSystem = isBrowser && window.location.protocol === 'file:';
/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */

function isDefined(variable) {
  return typeof variable !== 'undefined';
}
/**
 * Checks whether a variable is defined and not null.
 *
 * @param {*} variable Variable to check
 */

function isProvided(variable) {
  return isDefined(variable) && variable !== null;
}
/**
 * Checkes whether a variable provided is a string.
 *
 * @param {*} variable Variable to check
 */

function isString(variable) {
  return typeof variable === 'string';
}
/**
 * Checks whether a variable provided is an ArrayBuffer.
 *
 * @param {*} variable Variable to check
 */

function isArrayBuffer(variable) {
  return variable instanceof ArrayBuffer;
}
/**
 * Checkes whether a variable provided is a Blob.
 *
 * @param {*} variable Variable to check
 */

function isBlob(variable) {
  (0,tiny_invariant_esm/* default */.Z)(isBrowser, 'isBlob can only be used in a browser environment');
  return variable instanceof Blob;
}
/**
 * Checkes whether a variable provided is a File.
 *
 * @param {*} variable Variable to check
 */

function isFile(variable) {
  (0,tiny_invariant_esm/* default */.Z)(isBrowser, 'isFile can only be used in a browser environment');
  return variable instanceof File;
}
/**
 * Checks whether a string provided is a data URI.
 *
 * @param {string} str String to check
 */

function isDataURI(str) {
  return isString(str) && /^data:/.test(str);
}
function dataURItoByteString(dataURI) {
  (0,tiny_invariant_esm/* default */.Z)(isDataURI(dataURI), 'Invalid data URI.');

  var _dataURI$split = dataURI.split(','),
      _dataURI$split2 = (0,slicedToArray/* default */.Z)(_dataURI$split, 2),
      headersString = _dataURI$split2[0],
      dataString = _dataURI$split2[1];

  var headers = headersString.split(';');

  if (headers.indexOf('base64') !== -1) {
    return atob(dataString);
  }

  return unescape(dataString);
}
function getPixelRatio() {
  return isBrowser && window.devicePixelRatio || 1;
}
var allowFileAccessFromFilesTip = 'On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.';
function displayCORSWarning() {
  (0,tiny_warning_esm/* default */.Z)(!isLocalFileSystem, "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(allowFileAccessFromFilesTip));
}
function displayWorkerWarning() {
  (0,tiny_warning_esm/* default */.Z)(!isLocalFileSystem, "Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ".concat(allowFileAccessFromFilesTip));
}
function cancelRunningTask(runningTask) {
  if (runningTask && runningTask.cancel) runningTask.cancel();
}
function makePageCallback(page, scale) {
  Object.defineProperty(page, 'width', {
    get: function get() {
      return this.view[2] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'height', {
    get: function get() {
      return this.view[3] * scale;
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalWidth', {
    get: function get() {
      return this.view[2];
    },
    configurable: true
  });
  Object.defineProperty(page, 'originalHeight', {
    get: function get() {
      return this.view[3];
    },
    configurable: true
  });
  return page;
}
function isCancelException(error) {
  return error.name === 'RenderingCancelledException';
}
function loadFromFile(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      return resolve(new Uint8Array(reader.result));
    };

    reader.onerror = function (event) {
      switch (event.target.error.code) {
        case event.target.error.NOT_FOUND_ERR:
          return reject(new Error('Error while reading a file: File not found.'));

        case event.target.error.NOT_READABLE_ERR:
          return reject(new Error('Error while reading a file: File not readable.'));

        case event.target.error.SECURITY_ERR:
          return reject(new Error('Error while reading a file: Security error.'));

        case event.target.error.ABORT_ERR:
          return reject(new Error('Error while reading a file: Aborted.'));

        default:
          return reject(new Error('Error while reading a file.'));
      }
    };

    reader.readAsArrayBuffer(file);
    return null;
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/shared/propTypes.js






var eventProps = function () {
  var result = {};
  [].concat((0,toConsumableArray/* default */.Z)(esm/* mouseEvents */.ag), (0,toConsumableArray/* default */.Z)(esm/* touchEvents */.wx), (0,toConsumableArray/* default */.Z)(esm/* keyboardEvents */.vS)).forEach(function (eventName) {
    result[eventName] = (prop_types_default()).func;
  });
  return result;
}();
var fileTypes = [(prop_types_default()).string, prop_types_default().instanceOf(ArrayBuffer), prop_types_default().shape({
  data: prop_types_default().oneOfType([(prop_types_default()).object, (prop_types_default()).string]),
  httpHeaders: (prop_types_default()).object,
  range: (prop_types_default()).object,
  url: (prop_types_default()).string,
  withCredentials: (prop_types_default()).bool
})];

if (typeof File !== 'undefined') {
  fileTypes.push(prop_types_default().instanceOf(File));
}

if (typeof Blob !== 'undefined') {
  fileTypes.push(prop_types_default().instanceOf(Blob));
}

var isClassName = prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().arrayOf((prop_types_default()).string)]);
var propTypes_isFile = prop_types_default().oneOfType(fileTypes);
var isLinkService = prop_types_default().instanceOf(LinkService);
var isLinkTarget = prop_types_default().oneOf(['_self', '_blank', '_parent', '_top']);
var isPage = prop_types_default().shape({
  _transport: prop_types_default().shape({
    fontLoader: (prop_types_default()).object.isRequired
  }).isRequired,
  commonObjs: prop_types_default().shape({
    _objs: (prop_types_default()).object.isRequired
  }).isRequired,
  getAnnotations: (prop_types_default()).func.isRequired,
  getTextContent: (prop_types_default()).func.isRequired,
  getViewport: (prop_types_default()).func.isRequired,
  render: (prop_types_default()).func.isRequired
});
var isPageIndex = function isPageIndex(props, propName, componentName) {
  var pageIndex = props[propName],
      pageNumber = props.pageNumber,
      pdf = props.pdf;

  if (!isDefined(pdf)) {
    return null;
  }

  if (isDefined(pageIndex)) {
    if (typeof pageIndex !== 'number') {
      return new Error("`".concat(propName, "` of type `").concat((0,esm_typeof/* default */.Z)(pageIndex), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (pageIndex < 0) {
      return new Error("Expected `".concat(propName, "` to be greater or equal to 0."));
    }

    var numPages = pdf.numPages;

    if (pageIndex + 1 > numPages) {
      return new Error("Expected `".concat(propName, "` to be less or equal to ").concat(numPages - 1, "."));
    }
  } else if (!isDefined(pageNumber)) {
    return new Error("`".concat(propName, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(componentName, "`."));
  } // Everything is fine


  return null;
};
var isPageNumber = function isPageNumber(props, propName, componentName) {
  var pageNumber = props[propName],
      pageIndex = props.pageIndex,
      pdf = props.pdf;

  if (!isDefined(pdf)) {
    return null;
  }

  if (isDefined(pageNumber)) {
    if (typeof pageNumber !== 'number') {
      return new Error("`".concat(propName, "` of type `").concat((0,esm_typeof/* default */.Z)(pageNumber), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (pageNumber < 1) {
      return new Error("Expected `".concat(propName, "` to be greater or equal to 1."));
    }

    var numPages = pdf.numPages;

    if (pageNumber > numPages) {
      return new Error("Expected `".concat(propName, "` to be less or equal to ").concat(numPages, "."));
    }
  } else if (!isDefined(pageIndex)) {
    return new Error("`".concat(propName, "` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(componentName, "`."));
  } // Everything is fine


  return null;
};
var isPdf = prop_types_default().oneOfType([prop_types_default().shape({
  getDestination: (prop_types_default()).func.isRequired,
  getOutline: (prop_types_default()).func.isRequired,
  getPage: (prop_types_default()).func.isRequired,
  numPages: (prop_types_default()).number.isRequired
}), (prop_types_default()).bool]);
var isRef = prop_types_default().oneOfType([(prop_types_default()).func, prop_types_default().shape({
  current: (prop_types_default()).any
})]);
var isRenderMode = prop_types_default().oneOf(['canvas', 'none', 'svg']);
var isRotate = prop_types_default().oneOf([0, 90, 180, 270]);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Document.js










var _excluded = ["url"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Loads a PDF document. Passes it to all children.
 */














var PDFDataRangeTransport = pdf.PDFDataRangeTransport;

var Document = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(Document, _PureComponent);

  var _super = _createSuper(Document);

  function Document() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Document);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      pdf: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "viewer", {
      scrollPageIntoView: function scrollPageIntoView(_ref) {
        var dest = _ref.dest,
            pageIndex = _ref.pageIndex,
            pageNumber = _ref.pageNumber;
        // Handling jumping to internal links target
        var onItemClick = _this.props.onItemClick; // First, check if custom handling of onItemClick was provided

        if (onItemClick) {
          onItemClick({
            dest: dest,
            pageIndex: pageIndex,
            pageNumber: pageNumber
          });
          return;
        } // If not, try to look for target page within the <Document>.


        var page = _this.pages[pageIndex];

        if (page) {
          // Scroll to the page automatically
          page.scrollIntoView();
          return;
        }

        (0,tiny_warning_esm/* default */.Z)(false, "An internal link leading to page ".concat(pageNumber, " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."));
      }
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "linkService", new LinkService());

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "loadDocument", function () {
      _this.findDocumentSource().then(function (source) {
        _this.onSourceSuccess();

        if (!source) {
          return;
        }

        _this.setState(function (prevState) {
          if (!prevState.pdf) {
            return null;
          }

          return {
            pdf: null
          };
        });

        var _this$props = _this.props,
            options = _this$props.options,
            onLoadProgress = _this$props.onLoadProgress,
            onPassword = _this$props.onPassword; // If another rendering is in progress, let's cancel it

        cancelRunningTask(_this.runningTask); // If another loading is in progress, let's destroy it

        if (_this.loadingTask) _this.loadingTask.destroy();
        _this.loadingTask = pdf.getDocument(_objectSpread(_objectSpread({}, source), options));
        _this.loadingTask.onPassword = onPassword;

        if (onLoadProgress) {
          _this.loadingTask.onProgress = onLoadProgress;
        }

        var cancellable = (0,dist_esm/* default */.Z)(_this.loadingTask.promise);
        _this.runningTask = cancellable;
        cancellable.promise.then(function (pdf) {
          _this.setState(function (prevState) {
            if (prevState.pdf && prevState.pdf.fingerprint === pdf.fingerprint) {
              return null;
            }

            return {
              pdf: pdf
            };
          }, _this.onLoadSuccess);
        })["catch"](function (error) {
          _this.onLoadError(error);
        });
      })["catch"](function (error) {
        _this.onSourceError(error);
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "setupLinkService", function () {
      var _this$props2 = _this.props,
          externalLinkRel = _this$props2.externalLinkRel,
          externalLinkTarget = _this$props2.externalLinkTarget;

      _this.linkService.setViewer(_this.viewer);

      _this.linkService.setExternalLinkRel(externalLinkRel);

      _this.linkService.setExternalLinkTarget(externalLinkTarget);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onSourceSuccess", function () {
      var onSourceSuccess = _this.props.onSourceSuccess;
      if (onSourceSuccess) onSourceSuccess();
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onSourceError", function (error) {
      (0,tiny_warning_esm/* default */.Z)(error);
      var onSourceError = _this.props.onSourceError;
      if (onSourceError) onSourceError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadSuccess", function () {
      var onLoadSuccess = _this.props.onLoadSuccess;
      var pdf = _this.state.pdf;
      if (onLoadSuccess) onLoadSuccess(pdf);
      _this.pages = new Array(pdf.numPages);

      _this.linkService.setDocument(pdf);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadError", function (error) {
      _this.setState({
        pdf: false
      });

      (0,tiny_warning_esm/* default */.Z)(error);
      var onLoadError = _this.props.onLoadError;
      if (onLoadError) onLoadError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "findDocumentSource", function () {
      return new Promise(function (resolve) {
        var file = _this.props.file;

        if (!file) {
          resolve(null);
        } // File is a string


        if (typeof file === 'string') {
          if (isDataURI(file)) {
            var fileByteString = dataURItoByteString(file);
            resolve({
              data: fileByteString
            });
          }

          displayCORSWarning();
          resolve({
            url: file
          });
        } // File is PDFDataRangeTransport


        if (file instanceof PDFDataRangeTransport) {
          resolve({
            range: file
          });
        } // File is an ArrayBuffer


        if (isArrayBuffer(file)) {
          resolve({
            data: file
          });
        }
        /**
         * The cases below are browser-only.
         * If you're running on a non-browser environment, these cases will be of no use.
         */


        if (isBrowser) {
          // File is a Blob
          if (isBlob(file) || isFile(file)) {
            loadFromFile(file).then(function (data) {
              resolve({
                data: data
              });
            });
            return;
          }
        } // At this point, file must be an object


        (0,tiny_invariant_esm/* default */.Z)((0,esm_typeof/* default */.Z)(file) === 'object', 'Invalid parameter in file, need either Uint8Array, string or a parameter object');
        (0,tiny_invariant_esm/* default */.Z)(file.url || file.data || file.range, 'Invalid parameter object: need either .data, .range or .url'); // File .url is a string

        if (typeof file.url === 'string') {
          if (isDataURI(file.url)) {
            var url = file.url,
                otherParams = (0,objectWithoutProperties/* default */.Z)(file, _excluded);

            var _fileByteString = dataURItoByteString(url);

            resolve(_objectSpread({
              data: _fileByteString
            }, otherParams));
          }

          displayCORSWarning();
        }

        resolve(file);
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "registerPage", function (pageIndex, ref) {
      _this.pages[pageIndex] = ref;
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "unregisterPage", function (pageIndex) {
      delete _this.pages[pageIndex];
    });

    return _this;
  }

  (0,createClass/* default */.Z)(Document, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadDocument();
      this.setupLinkService();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var file = this.props.file;

      if (file !== prevProps.file) {
        this.loadDocument();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // If rendering is in progress, let's cancel it
      cancelRunningTask(this.runningTask); // If loading is in progress, let's destroy it

      if (this.loadingTask) this.loadingTask.destroy();
    }
  }, {
    key: "childContext",
    get: function get() {
      var linkService = this.linkService,
          registerPage = this.registerPage,
          unregisterPage = this.unregisterPage;
      var _this$props3 = this.props,
          imageResourcesPath = _this$props3.imageResourcesPath,
          renderMode = _this$props3.renderMode,
          rotate = _this$props3.rotate;
      var pdf = this.state.pdf;
      return {
        imageResourcesPath: imageResourcesPath,
        linkService: linkService,
        pdf: pdf,
        registerPage: registerPage,
        renderMode: renderMode,
        rotate: rotate,
        unregisterPage: unregisterPage
      };
    }
  }, {
    key: "eventProps",
    get: function get() {
      var _this2 = this;

      return (0,esm/* default */.ZP)(this.props, function () {
        return _this2.state.pdf;
      });
    }
    /**
     * Called when a document source is resolved correctly
     */

  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      return /*#__PURE__*/react.createElement(esm_DocumentContext.Provider, {
        value: this.childContext
      }, children);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var file = this.props.file;
      var pdf = this.state.pdf;

      if (!file) {
        var noData = this.props.noData;
        return /*#__PURE__*/react.createElement(Message, {
          type: "no-data"
        }, typeof noData === 'function' ? noData() : noData);
      }

      if (pdf === null) {
        var loading = this.props.loading;
        return /*#__PURE__*/react.createElement(Message, {
          type: "loading"
        }, typeof loading === 'function' ? loading() : loading);
      }

      if (pdf === false) {
        var error = this.props.error;
        return /*#__PURE__*/react.createElement(Message, {
          type: "error"
        }, typeof error === 'function' ? error() : error);
      }

      return this.renderChildren();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          className = _this$props4.className,
          inputRef = _this$props4.inputRef;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        className: (0,merge_class_names_dist_esm/* default */.Z)('react-pdf__Document', className),
        ref: inputRef
      }, this.eventProps), this.renderContent());
    }
  }]);

  return Document;
}(react.PureComponent);


Document.defaultProps = {
  error: 'Failed to load PDF file.',
  loading: 'Loading PDF…',
  noData: 'No PDF file specified.',
  onPassword: function onPassword(callback, reason) {
    switch (reason) {
      case esm_PasswordResponses.NEED_PASSWORD:
        {
          // eslint-disable-next-line no-alert
          var password = prompt('Enter the password to open this PDF file.');
          callback(password);
          break;
        }

      case esm_PasswordResponses.INCORRECT_PASSWORD:
        {
          // eslint-disable-next-line no-alert
          var _password = prompt('Invalid password. Please try again.');

          callback(_password);
          break;
        }

      default:
    }
  }
};
var isFunctionOrNode = prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]);
Document.propTypes = _objectSpread(_objectSpread({}, eventProps), {}, {
  children: (prop_types_default()).node,
  className: isClassName,
  error: isFunctionOrNode,
  externalLinkRel: (prop_types_default()).string,
  externalLinkTarget: (prop_types_default()).string,
  file: propTypes_isFile,
  imageResourcesPath: (prop_types_default()).string,
  inputRef: isRef,
  loading: isFunctionOrNode,
  noData: isFunctionOrNode,
  onItemClick: (prop_types_default()).func,
  onLoadError: (prop_types_default()).func,
  onLoadProgress: (prop_types_default()).func,
  onLoadSuccess: (prop_types_default()).func,
  onPassword: (prop_types_default()).func,
  onSourceError: (prop_types_default()).func,
  onSourceSuccess: (prop_types_default()).func,
  rotate: (prop_types_default()).number
});
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/OutlineContext.js

/* harmony default export */ var OutlineContext = (/*#__PURE__*/(0,react.createContext)(null));
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Ref.js



var Ref = /*#__PURE__*/function () {
  function Ref(_ref) {
    var num = _ref.num,
        gen = _ref.gen;

    (0,classCallCheck/* default */.Z)(this, Ref);

    this.num = num;
    this.gen = gen;
  }

  (0,createClass/* default */.Z)(Ref, [{
    key: "toString",
    value: function toString() {
      var str = "".concat(this.num, "R");

      if (this.gen !== 0) {
        str += this.gen;
      }

      return str;
    }
  }]);

  return Ref;
}();


;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/OutlineItem.js










var OutlineItem_excluded = ["item"];

function OutlineItem_createSuper(Derived) { var hasNativeReflectConstruct = OutlineItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function OutlineItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var OutlineItemInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(OutlineItemInternal, _PureComponent);

  var _super = OutlineItem_createSuper(OutlineItemInternal);

  function OutlineItemInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, OutlineItemInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getDestination", function () {
      return new Promise(function (resolve, reject) {
        var _this$props = _this.props,
            item = _this$props.item,
            pdf = _this$props.pdf;

        if (!isDefined(_this.destination)) {
          if (typeof item.dest === 'string') {
            pdf.getDestination(item.dest).then(resolve)["catch"](reject);
          } else {
            resolve(item.dest);
          }
        }

        return _this.destination;
      }).then(function (destination) {
        _this.destination = destination;
        return destination;
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getPageIndex", function () {
      return new Promise(function (resolve, reject) {
        var pdf = _this.props.pdf;

        if (isDefined(_this.pageIndex)) {
          resolve(_this.pageIndex);
        }

        _this.getDestination().then(function (destination) {
          if (!destination) {
            return;
          }

          var _destination = (0,slicedToArray/* default */.Z)(destination, 1),
              ref = _destination[0];

          pdf.getPageIndex(new Ref(ref)).then(resolve)["catch"](reject);
        });
      }).then(function (pageIndex) {
        _this.pageIndex = pageIndex;
        return _this.pageIndex;
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getPageNumber", function () {
      return new Promise(function (resolve, reject) {
        if (isDefined(_this.pageNumber)) {
          resolve(_this.pageNumber);
        }

        _this.getPageIndex().then(function (pageIndex) {
          resolve(pageIndex + 1);
        })["catch"](reject);
      }).then(function (pageNumber) {
        _this.pageNumber = pageNumber;
        return pageNumber;
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onClick", function (event) {
      var onClick = _this.props.onClick;
      event.preventDefault();

      if (!onClick) {
        return false;
      }

      return Promise.all([_this.getDestination(), _this.getPageIndex(), _this.getPageNumber()]).then(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 3),
            dest = _ref2[0],
            pageIndex = _ref2[1],
            pageNumber = _ref2[2];

        onClick({
          dest: dest,
          pageIndex: pageIndex,
          pageNumber: pageNumber
        });
      });
    });

    return _this;
  }

  (0,createClass/* default */.Z)(OutlineItemInternal, [{
    key: "renderSubitems",
    value: function renderSubitems() {
      var _this$props2 = this.props,
          item = _this$props2.item,
          otherProps = (0,objectWithoutProperties/* default */.Z)(_this$props2, OutlineItem_excluded);

      if (!item.items || !item.items.length) {
        return null;
      }

      var subitems = item.items;
      return /*#__PURE__*/react.createElement("ul", null, subitems.map(function (subitem, subitemIndex) {
        return /*#__PURE__*/react.createElement(OutlineItemInternal, (0,esm_extends/* default */.Z)({
          key: typeof subitem.destination === 'string' ? subitem.destination : subitemIndex,
          item: subitem
        }, otherProps));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var item = this.props.item;
      return /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
        href: "#",
        onClick: this.onClick
      }, item.title), this.renderSubitems());
    }
  }]);

  return OutlineItemInternal;
}(react.PureComponent);
var isDestination = prop_types_default().oneOfType([(prop_types_default()).string, prop_types_default().arrayOf((prop_types_default()).any)]);
OutlineItemInternal.propTypes = {
  item: prop_types_default().shape({
    dest: isDestination,
    items: prop_types_default().arrayOf(prop_types_default().shape({
      dest: isDestination,
      title: (prop_types_default()).string
    })),
    title: (prop_types_default()).string
  }).isRequired,
  onClick: (prop_types_default()).func,
  pdf: isPdf.isRequired
};

var OutlineItem = function OutlineItem(props) {
  return /*#__PURE__*/react.createElement(esm_DocumentContext.Consumer, null, function (documentContext) {
    return /*#__PURE__*/react.createElement(OutlineContext.Consumer, null, function (outlineContext) {
      return /*#__PURE__*/react.createElement(OutlineItemInternal, (0,esm_extends/* default */.Z)({}, documentContext, outlineContext, props));
    });
  });
};

/* harmony default export */ var esm_OutlineItem = (OutlineItem);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Outline.js









function Outline_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Outline_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Outline_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Outline_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Outline_createSuper(Derived) { var hasNativeReflectConstruct = Outline_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function Outline_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }













var OutlineInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(OutlineInternal, _PureComponent);

  var _super = Outline_createSuper(OutlineInternal);

  function OutlineInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, OutlineInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      outline: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "loadOutline", function () {
      var pdf = _this.props.pdf;

      _this.setState(function (prevState) {
        if (!prevState.outline) {
          return null;
        }

        return {
          outline: null
        };
      });

      var cancellable = (0,dist_esm/* default */.Z)(pdf.getOutline());
      _this.runningTask = cancellable;
      cancellable.promise.then(function (outline) {
        _this.setState({
          outline: outline
        }, _this.onLoadSuccess);
      })["catch"](function (error) {
        _this.onLoadError(error);
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadSuccess", function () {
      var onLoadSuccess = _this.props.onLoadSuccess;
      var outline = _this.state.outline;
      if (onLoadSuccess) onLoadSuccess(outline);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadError", function (error) {
      _this.setState({
        outline: false
      });

      (0,tiny_warning_esm/* default */.Z)(error);
      var onLoadError = _this.props.onLoadError;
      if (onLoadError) onLoadError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onItemClick", function (_ref) {
      var dest = _ref.dest,
          pageIndex = _ref.pageIndex,
          pageNumber = _ref.pageNumber;
      var onItemClick = _this.props.onItemClick;

      if (onItemClick) {
        onItemClick({
          dest: dest,
          pageIndex: pageIndex,
          pageNumber: pageNumber
        });
      }
    });

    return _this;
  }

  (0,createClass/* default */.Z)(OutlineInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pdf = this.props.pdf;
      (0,tiny_invariant_esm/* default */.Z)(pdf, 'Attempted to load an outline, but no document was specified.');
      this.loadOutline();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var pdf = this.props.pdf;

      if (prevProps.pdf && pdf !== prevProps.pdf) {
        this.loadOutline();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "childContext",
    get: function get() {
      return {
        onClick: this.onItemClick
      };
    }
  }, {
    key: "eventProps",
    get: function get() {
      var _this2 = this;

      return (0,esm/* default */.ZP)(this.props, function () {
        return _this2.state.outline;
      });
    }
    /**
     * Called when an outline is read successfully
     */

  }, {
    key: "renderOutline",
    value: function renderOutline() {
      var outline = this.state.outline;
      return /*#__PURE__*/react.createElement("ul", null, outline.map(function (item, itemIndex) {
        return /*#__PURE__*/react.createElement(esm_OutlineItem, {
          key: typeof item.destination === 'string' ? item.destination : itemIndex,
          item: item
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var pdf = this.props.pdf;
      var outline = this.state.outline;

      if (!pdf || !outline) {
        return null;
      }

      var _this$props = this.props,
          className = _this$props.className,
          inputRef = _this$props.inputRef;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        className: (0,merge_class_names_dist_esm/* default */.Z)('react-pdf__Outline', className),
        ref: inputRef
      }, this.eventProps), /*#__PURE__*/react.createElement(OutlineContext.Provider, {
        value: this.childContext
      }, this.renderOutline()));
    }
  }]);

  return OutlineInternal;
}(react.PureComponent);
OutlineInternal.propTypes = Outline_objectSpread({
  className: isClassName,
  inputRef: isRef,
  onItemClick: (prop_types_default()).func,
  onLoadError: (prop_types_default()).func,
  onLoadSuccess: (prop_types_default()).func,
  pdf: isPdf
}, eventProps);

function Outline(props, ref) {
  return /*#__PURE__*/React.createElement(DocumentContext.Consumer, null, function (context) {
    return /*#__PURE__*/React.createElement(OutlineInternal, _extends({
      ref: ref
    }, context, props));
  });
}

/* harmony default export */ var esm_Outline = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(Outline))));
// EXTERNAL MODULE: ./node_modules/merge-refs/dist/esm/index.js
var merge_refs_dist_esm = __webpack_require__(2324);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/PageContext.js

/* harmony default export */ var PageContext = (/*#__PURE__*/(0,react.createContext)(null));
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Page/PageCanvas.js









function PageCanvas_createSuper(Derived) { var hasNativeReflectConstruct = PageCanvas_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function PageCanvas_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var ANNOTATION_MODE = pdf.AnnotationMode;
var PageCanvasInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(PageCanvasInternal, _PureComponent);

  var _super = PageCanvas_createSuper(PageCanvasInternal);

  function PageCanvasInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, PageCanvasInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onRenderSuccess", function () {
      _this.renderer = null;
      var _this$props = _this.props,
          onRenderSuccess = _this$props.onRenderSuccess,
          page = _this$props.page,
          scale = _this$props.scale;
      if (onRenderSuccess) onRenderSuccess(makePageCallback(page, scale));
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onRenderError", function (error) {
      if (isCancelException(error)) {
        return;
      }

      (0,tiny_warning_esm/* default */.Z)(error);
      var onRenderError = _this.props.onRenderError;
      if (onRenderError) onRenderError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawPageOnCanvas", function () {
      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          canvas = _assertThisInitialize.canvasLayer;

      if (!canvas) {
        return null;
      }

      var _assertThisInitialize2 = (0,assertThisInitialized/* default */.Z)(_this),
          renderViewport = _assertThisInitialize2.renderViewport,
          viewport = _assertThisInitialize2.viewport;

      var _this$props2 = _this.props,
          canvasBackground = _this$props2.canvasBackground,
          page = _this$props2.page,
          renderForms = _this$props2.renderForms;
      canvas.width = renderViewport.width;
      canvas.height = renderViewport.height;
      canvas.style.width = "".concat(Math.floor(viewport.width), "px");
      canvas.style.height = "".concat(Math.floor(viewport.height), "px");
      var renderContext = {
        annotationMode: renderForms ? ANNOTATION_MODE.ENABLE_FORMS : ANNOTATION_MODE.ENABLE,

        get canvasContext() {
          return canvas.getContext('2d');
        },

        viewport: renderViewport
      };

      if (canvasBackground) {
        renderContext.background = canvasBackground;
      } // If another render is in progress, let's cancel it


      _this.cancelRenderingTask();

      _this.renderer = page.render(renderContext);
      return _this.renderer.promise.then(_this.onRenderSuccess)["catch"](_this.onRenderError);
    });

    return _this;
  }

  (0,createClass/* default */.Z)(PageCanvasInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawPageOnCanvas();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          canvasBackground = _this$props3.canvasBackground,
          page = _this$props3.page,
          renderForms = _this$props3.renderForms;

      if (canvasBackground !== prevProps.canvasBackground || renderForms !== prevProps.renderForms) {
        // Ensures the canvas will be re-rendered from scratch. Otherwise all form data will stay.
        page.cleanup();
        this.drawPageOnCanvas();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRenderingTask();
      /**
       * Zeroing the width and height cause most browsers to release graphics
       * resources immediately, which can greatly reduce memory consumption.
       */

      if (this.canvasLayer) {
        this.canvasLayer.width = 0;
        this.canvasLayer.height = 0;
        this.canvasLayer = null;
      }
    }
  }, {
    key: "cancelRenderingTask",
    value: function cancelRenderingTask() {
      if (this.renderer) {
        this.renderer.cancel();
        this.renderer = null;
      }
    }
    /**
     * Called when a page is rendered successfully.
     */

  }, {
    key: "renderViewport",
    get: function get() {
      var _this$props4 = this.props,
          page = _this$props4.page,
          rotate = _this$props4.rotate,
          scale = _this$props4.scale;
      var pixelRatio = getPixelRatio();
      return page.getViewport({
        scale: scale * pixelRatio,
        rotation: rotate
      });
    }
  }, {
    key: "viewport",
    get: function get() {
      var _this$props5 = this.props,
          page = _this$props5.page,
          rotate = _this$props5.rotate,
          scale = _this$props5.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var canvasRef = this.props.canvasRef;
      return /*#__PURE__*/react.createElement("canvas", {
        className: "react-pdf__Page__canvas",
        dir: "ltr",
        ref: (0,merge_refs_dist_esm/* default */.Z)(canvasRef, function (ref) {
          _this2.canvasLayer = ref;
        }),
        style: {
          display: 'block',
          userSelect: 'none'
        }
      });
    }
  }]);

  return PageCanvasInternal;
}(react.PureComponent);
PageCanvasInternal.propTypes = {
  canvasBackground: (prop_types_default()).string,
  canvasRef: isRef,
  onRenderError: (prop_types_default()).func,
  onRenderSuccess: (prop_types_default()).func,
  page: isPage.isRequired,
  renderForms: (prop_types_default()).bool,
  rotate: isRotate,
  scale: (prop_types_default()).number.isRequired
};
function PageCanvas(props) {
  return /*#__PURE__*/react.createElement(PageContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(PageCanvasInternal, (0,esm_extends/* default */.Z)({}, context, props));
  });
}
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Page/PageSVG.js









function PageSVG_createSuper(Derived) { var hasNativeReflectConstruct = PageSVG_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function PageSVG_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var PageSVGInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(PageSVGInternal, _PureComponent);

  var _super = PageSVG_createSuper(PageSVGInternal);

  function PageSVGInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, PageSVGInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      svg: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onRenderSuccess", function () {
      _this.renderer = null;
      var _this$props = _this.props,
          onRenderSuccess = _this$props.onRenderSuccess,
          page = _this$props.page,
          scale = _this$props.scale;
      if (onRenderSuccess) onRenderSuccess(makePageCallback(page, scale));
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onRenderError", function (error) {
      if (isCancelException(error)) {
        return;
      }

      (0,tiny_warning_esm/* default */.Z)(error);
      var onRenderError = _this.props.onRenderError;
      if (onRenderError) onRenderError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "renderSVG", function () {
      var page = _this.props.page;
      _this.renderer = page.getOperatorList();
      return _this.renderer.then(function (operatorList) {
        var svgGfx = new pdf.SVGGraphics(page.commonObjs, page.objs);
        _this.renderer = svgGfx.getSVG(operatorList, _this.viewport).then(function (svg) {
          _this.setState({
            svg: svg
          }, _this.onRenderSuccess);
        })["catch"](_this.onRenderError);
      })["catch"](_this.onRenderError);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "drawPageOnContainer", function (element) {
      var svg = _this.state.svg;

      if (!element || !svg) {
        return;
      } // Append SVG element to the main container, if this hasn't been done already


      if (!element.firstElementChild) {
        element.appendChild(svg);
      }

      var _this$viewport = _this.viewport,
          width = _this$viewport.width,
          height = _this$viewport.height;
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
    });

    return _this;
  }

  (0,createClass/* default */.Z)(PageSVGInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderSVG();
    }
    /**
     * Called when a page is rendered successfully.
     */

  }, {
    key: "viewport",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate,
          scale = _this$props2.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$viewport2 = this.viewport,
          width = _this$viewport2.width,
          height = _this$viewport2.height;
      return /*#__PURE__*/react.createElement("div", {
        className: "react-pdf__Page__svg" // Note: This cannot be shortened, as we need this function to be called with each render.
        ,
        ref: function ref(_ref) {
          return _this2.drawPageOnContainer(_ref);
        },
        style: {
          display: 'block',
          backgroundColor: 'white',
          overflow: 'hidden',
          width: width,
          height: height,
          userSelect: 'none'
        }
      });
    }
  }]);

  return PageSVGInternal;
}(react.PureComponent);
PageSVGInternal.propTypes = {
  onRenderError: (prop_types_default()).func,
  onRenderSuccess: (prop_types_default()).func,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: (prop_types_default()).number.isRequired
};
function PageSVG(props) {
  return /*#__PURE__*/react.createElement(PageContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(PageSVGInternal, (0,esm_extends/* default */.Z)({}, context, props));
  });
}
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Page/TextLayerItem.js










function TextLayerItem_createSuper(Derived) { var hasNativeReflectConstruct = TextLayerItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function TextLayerItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var TextLayerItemInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(TextLayerItemInternal, _PureComponent);

  var _super = TextLayerItem_createSuper(TextLayerItemInternal);

  function TextLayerItemInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, TextLayerItemInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getElementWidth", function (element) {
      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          sideways = _assertThisInitialize.sideways;

      return element.getBoundingClientRect()[sideways ? 'height' : 'width'];
    });

    return _this;
  }

  (0,createClass/* default */.Z)(TextLayerItemInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.alignTextItem();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.alignTextItem();
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props = this.props,
          page = _this$props.page,
          scale = _this$props.scale;
      return page.getViewport({
        scale: scale
      });
    }
    /**
     * It might happen that the page is rotated by default. In such cases, we shouldn't rotate
     * text content.
     */

  }, {
    key: "rotate",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate;
      return rotate - page.rotate;
    }
  }, {
    key: "sideways",
    get: function get() {
      var rotate = this.rotate;
      return rotate % 180 !== 0;
    }
  }, {
    key: "defaultSideways",
    get: function get() {
      var rotation = this.unrotatedViewport.rotation;
      return rotation % 180 !== 0;
    }
  }, {
    key: "fontSize",
    get: function get() {
      var transform = this.props.transform;
      var defaultSideways = this.defaultSideways;

      var _transform = (0,slicedToArray/* default */.Z)(transform, 2),
          fontHeightPx = _transform[0],
          fontWidthPx = _transform[1];

      return defaultSideways ? fontWidthPx : fontHeightPx;
    }
  }, {
    key: "top",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform2 = (0,slicedToArray/* default */.Z)(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */
      offsetX = _transform2[2],
          offsetY = _transform2[3],
          x = _transform2[4],
          y = _transform2[5];

      var _viewport$viewBox = (0,slicedToArray/* default */.Z)(viewport.viewBox, 4),

      /* xMin */
      yMin
      /* xMax */
      = _viewport$viewBox[1],
          yMax = _viewport$viewBox[3];

      return defaultSideways ? x + offsetX + yMin : yMax - (y + offsetY);
    }
  }, {
    key: "left",
    get: function get() {
      var transform = this.props.transform;
      var viewport = this.unrotatedViewport,
          defaultSideways = this.defaultSideways;

      var _transform3 = (0,slicedToArray/* default */.Z)(transform, 6),

      /* fontHeightPx */

      /* fontWidthPx */

      /* offsetX */

      /* offsetY */
      x = _transform3[4],
          y = _transform3[5];

      var _viewport$viewBox2 = (0,slicedToArray/* default */.Z)(viewport.viewBox, 1),
          xMin = _viewport$viewBox2[0];

      return defaultSideways ? y - xMin : x - xMin;
    }
  }, {
    key: "getFontData",
    value: function getFontData(fontName) {
      var page = this.props.page;
      return new Promise(function (resolve) {
        page.commonObjs.get(fontName, resolve);
      });
    }
  }, {
    key: "alignTextItem",
    value: function alignTextItem() {
      var _this2 = this;

      var element = this.item;

      if (!element) {
        return;
      }

      element.style.transform = '';
      var _this$props3 = this.props,
          fontName = _this$props3.fontName,
          scale = _this$props3.scale,
          width = _this$props3.width;
      element.style.fontFamily = "".concat(fontName, ", sans-serif");
      this.getFontData(fontName).then(function (fontData) {
        var fallbackFontName = fontData ? fontData.fallbackName : 'sans-serif';
        element.style.fontFamily = "".concat(fontName, ", ").concat(fallbackFontName);
        var targetWidth = width * scale;

        var actualWidth = _this2.getElementWidth(element);

        var transform = "scaleX(".concat(targetWidth / actualWidth, ")");
        var ascent = fontData ? fontData.ascent : 0;

        if (ascent) {
          transform += " translateY(".concat((1 - ascent) * 100, "%)");
        }

        element.style.transform = transform;
        element.style.WebkitTransform = transform;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var fontSize = this.fontSize,
          top = this.top,
          left = this.left;
      var _this$props4 = this.props,
          customTextRenderer = _this$props4.customTextRenderer,
          scale = _this$props4.scale,
          text = _this$props4.str;
      return /*#__PURE__*/react.createElement("span", {
        ref: function ref(_ref) {
          _this3.item = _ref;
        },
        style: {
          height: '1em',
          fontFamily: 'sans-serif',
          fontSize: "".concat(fontSize * scale, "px"),
          position: 'absolute',
          top: "".concat(top * scale, "px"),
          left: "".concat(left * scale, "px"),
          transformOrigin: 'left bottom',
          whiteSpace: 'pre',
          pointerEvents: 'all'
        }
      }, customTextRenderer ? customTextRenderer(this.props) : text);
    }
  }]);

  return TextLayerItemInternal;
}(react.PureComponent);
TextLayerItemInternal.propTypes = {
  customTextRenderer: (prop_types_default()).func,
  fontName: (prop_types_default()).string.isRequired,
  itemIndex: (prop_types_default()).number.isRequired,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: (prop_types_default()).number,
  str: (prop_types_default()).string.isRequired,
  transform: prop_types_default().arrayOf((prop_types_default()).number).isRequired,
  width: (prop_types_default()).number.isRequired
};
function TextLayerItem(props) {
  return /*#__PURE__*/react.createElement(PageContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(TextLayerItemInternal, (0,esm_extends/* default */.Z)({}, context, props));
  });
}
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Page/TextLayer.js









function TextLayer_createSuper(Derived) { var hasNativeReflectConstruct = TextLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function TextLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }










var TextLayerInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(TextLayerInternal, _PureComponent);

  var _super = TextLayer_createSuper(TextLayerInternal);

  function TextLayerInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, TextLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      textItems: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "loadTextItems", function () {
      var page = _this.props.page;
      var cancellable = (0,dist_esm/* default */.Z)(page.getTextContent());
      _this.runningTask = cancellable;
      cancellable.promise.then(function (_ref) {
        var textItems = _ref.items;

        _this.setState({
          textItems: textItems
        }, _this.onLoadSuccess);
      })["catch"](function (error) {
        _this.onLoadError(error);
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadSuccess", function () {
      var onGetTextSuccess = _this.props.onGetTextSuccess;
      var textItems = _this.state.textItems;
      if (onGetTextSuccess) onGetTextSuccess(textItems);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadError", function (error) {
      _this.setState({
        textItems: false
      });

      (0,tiny_warning_esm/* default */.Z)(error);
      var onGetTextError = _this.props.onGetTextError;
      if (onGetTextError) onGetTextError(error);
    });

    return _this;
  }

  (0,createClass/* default */.Z)(TextLayerInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;
      (0,tiny_invariant_esm/* default */.Z)(page, 'Attempted to load page text content, but no page was specified.');
      this.loadTextItems();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var page = this.props.page;

      if (prevProps.page && page !== prevProps.page) {
        this.loadTextItems();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "unrotatedViewport",
    get: function get() {
      var _this$props = this.props,
          page = _this$props.page,
          scale = _this$props.scale;
      return page.getViewport({
        scale: scale
      });
    }
    /**
     * It might happen that the page is rotated by default. In such cases, we shouldn't rotate
     * text content.
     */

  }, {
    key: "rotate",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate;
      return rotate - page.rotate;
    }
  }, {
    key: "renderTextItems",
    value: function renderTextItems() {
      var textItems = this.state.textItems;

      if (!textItems) {
        return null;
      }

      return textItems.map(function (textItem, itemIndex) {
        return /*#__PURE__*/react.createElement(TextLayerItem // eslint-disable-next-line react/no-array-index-key
        , (0,esm_extends/* default */.Z)({
          key: itemIndex,
          itemIndex: itemIndex
        }, textItem));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var viewport = this.unrotatedViewport,
          rotate = this.rotate;
      return /*#__PURE__*/react.createElement("div", {
        className: "react-pdf__Page__textContent",
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: "".concat(viewport.width, "px"),
          height: "".concat(viewport.height, "px"),
          color: 'transparent',
          transform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)"),
          WebkitTransform: "translate(-50%, -50%) rotate(".concat(rotate, "deg)"),
          pointerEvents: 'none'
        }
      }, this.renderTextItems());
    }
  }]);

  return TextLayerInternal;
}(react.PureComponent);
TextLayerInternal.propTypes = {
  onGetTextError: (prop_types_default()).func,
  onGetTextSuccess: (prop_types_default()).func,
  page: isPage.isRequired,
  rotate: isRotate,
  scale: (prop_types_default()).number
};
function TextLayer(props) {
  return /*#__PURE__*/react.createElement(PageContext.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(TextLayerInternal, (0,esm_extends/* default */.Z)({}, context, props));
  });
}
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Page/AnnotationLayer.js









function AnnotationLayer_createSuper(Derived) { var hasNativeReflectConstruct = AnnotationLayer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function AnnotationLayer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var AnnotationLayerInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(AnnotationLayerInternal, _PureComponent);

  var _super = AnnotationLayer_createSuper(AnnotationLayerInternal);

  function AnnotationLayerInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, AnnotationLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      annotations: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "loadAnnotations", function () {
      var page = _this.props.page;
      var cancellable = (0,dist_esm/* default */.Z)(page.getAnnotations());
      _this.runningTask = cancellable;
      cancellable.promise.then(function (annotations) {
        _this.setState({
          annotations: annotations
        }, _this.onLoadSuccess);
      })["catch"](function (error) {
        _this.onLoadError(error);
      });
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadSuccess", function () {
      var onGetAnnotationsSuccess = _this.props.onGetAnnotationsSuccess;
      var annotations = _this.state.annotations;
      if (onGetAnnotationsSuccess) onGetAnnotationsSuccess(annotations);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadError", function (error) {
      _this.setState({
        annotations: false
      });

      (0,tiny_warning_esm/* default */.Z)(error);
      var onGetAnnotationsError = _this.props.onGetAnnotationsError;
      if (onGetAnnotationsError) onGetAnnotationsError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onRenderSuccess", function () {
      var onRenderAnnotationLayerSuccess = _this.props.onRenderAnnotationLayerSuccess;
      if (onRenderAnnotationLayerSuccess) onRenderAnnotationLayerSuccess();
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onRenderError", function (error) {
      (0,tiny_warning_esm/* default */.Z)(error);
      var onRenderAnnotationLayerError = _this.props.onRenderAnnotationLayerError;
      if (onRenderAnnotationLayerError) onRenderAnnotationLayerError(error);
    });

    return _this;
  }

  (0,createClass/* default */.Z)(AnnotationLayerInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;
      (0,tiny_invariant_esm/* default */.Z)(page, 'Attempted to load page annotations, but no page was specified.');
      this.loadAnnotations();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          page = _this$props.page,
          renderForms = _this$props.renderForms;

      if (prevProps.page && page !== prevProps.page || renderForms !== prevProps.renderForms) {
        this.loadAnnotations();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "viewport",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate,
          scale = _this$props2.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }, {
    key: "renderAnnotationLayer",
    value: function renderAnnotationLayer() {
      var annotations = this.state.annotations;

      if (!annotations) {
        return;
      }

      var _this$props3 = this.props,
          imageResourcesPath = _this$props3.imageResourcesPath,
          linkService = _this$props3.linkService,
          page = _this$props3.page,
          renderForms = _this$props3.renderForms;
      var viewport = this.viewport.clone({
        dontFlip: true
      });
      var parameters = {
        annotations: annotations,
        div: this.annotationLayer,
        imageResourcesPath: imageResourcesPath,
        linkService: linkService,
        page: page,
        renderForms: renderForms,
        viewport: viewport
      };
      this.annotationLayer.innerHTML = '';

      try {
        pdf.AnnotationLayer.render(parameters);
        this.onRenderSuccess();
      } catch (error) {
        this.onRenderError(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react.createElement("div", {
        className: "react-pdf__Page__annotations annotationLayer",
        ref: function ref(_ref) {
          _this2.annotationLayer = _ref;
        }
      }, this.renderAnnotationLayer());
    }
  }]);

  return AnnotationLayerInternal;
}(react.PureComponent);
AnnotationLayerInternal.propTypes = {
  imageResourcesPath: (prop_types_default()).string,
  linkService: isLinkService.isRequired,
  onGetAnnotationsError: (prop_types_default()).func,
  onGetAnnotationsSuccess: (prop_types_default()).func,
  onRenderAnnotationLayerError: (prop_types_default()).func,
  onRenderAnnotationLayerSuccess: (prop_types_default()).func,
  page: isPage,
  renderForms: (prop_types_default()).bool,
  rotate: isRotate,
  scale: (prop_types_default()).number
};

var AnnotationLayer = function AnnotationLayer(props) {
  return /*#__PURE__*/react.createElement(esm_DocumentContext.Consumer, null, function (documentContext) {
    return /*#__PURE__*/react.createElement(PageContext.Consumer, null, function (pageContext) {
      return /*#__PURE__*/react.createElement(AnnotationLayerInternal, (0,esm_extends/* default */.Z)({}, documentContext, pageContext, props));
    });
  });
};

/* harmony default export */ var Page_AnnotationLayer = (AnnotationLayer);
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/Page.js









function Page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function Page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Page_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Page_createSuper(Derived) { var hasNativeReflectConstruct = Page_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function Page_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


















var defaultScale = 1;
var PageInternal = /*#__PURE__*/function (_PureComponent) {
  (0,inherits/* default */.Z)(PageInternal, _PureComponent);

  var _super = Page_createSuper(PageInternal);

  function PageInternal() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, PageInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      page: null
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadSuccess", function () {
      var _this$props = _this.props,
          onLoadSuccess = _this$props.onLoadSuccess,
          registerPage = _this$props.registerPage;
      var page = _this.state.page;
      if (onLoadSuccess) onLoadSuccess(makePageCallback(page, _this.scale));
      if (registerPage) registerPage(_this.pageIndex, _this.ref);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onLoadError", function (error) {
      _this.setState({
        page: false
      });

      (0,tiny_warning_esm/* default */.Z)(error);
      var onLoadError = _this.props.onLoadError;
      if (onLoadError) onLoadError(error);
    });

    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "loadPage", function () {
      var pdf = _this.props.pdf;

      var pageNumber = _this.getPageNumber();

      if (!pageNumber) {
        return;
      }

      _this.setState(function (prevState) {
        if (!prevState.page) {
          return null;
        }

        return {
          page: null
        };
      });

      var cancellable = (0,dist_esm/* default */.Z)(pdf.getPage(pageNumber));
      _this.runningTask = cancellable;
      cancellable.promise.then(function (page) {
        _this.setState({
          page: page
        }, _this.onLoadSuccess);
      })["catch"](function (error) {
        _this.onLoadError(error);
      });
    });

    return _this;
  }

  (0,createClass/* default */.Z)(PageInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pdf = this.props.pdf;
      (0,tiny_invariant_esm/* default */.Z)(pdf, 'Attempted to load a page, but no document was specified.');
      this.loadPage();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var pdf = this.props.pdf;

      if (prevProps.pdf && pdf !== prevProps.pdf || this.getPageNumber() !== this.getPageNumber(prevProps)) {
        var unregisterPage = this.props.unregisterPage;
        if (unregisterPage) unregisterPage(this.getPageIndex(prevProps));
        this.loadPage();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unregisterPage = this.props.unregisterPage;
      if (unregisterPage) unregisterPage(this.pageIndex);
      cancelRunningTask(this.runningTask);
    }
  }, {
    key: "childContext",
    get: function get() {
      var page = this.state.page;

      if (!page) {
        return {};
      }

      var _this$props2 = this.props,
          canvasBackground = _this$props2.canvasBackground,
          customTextRenderer = _this$props2.customTextRenderer,
          onGetAnnotationsError = _this$props2.onGetAnnotationsError,
          onGetAnnotationsSuccess = _this$props2.onGetAnnotationsSuccess,
          onGetTextError = _this$props2.onGetTextError,
          onGetTextSuccess = _this$props2.onGetTextSuccess,
          onRenderAnnotationLayerError = _this$props2.onRenderAnnotationLayerError,
          onRenderAnnotationLayerSuccess = _this$props2.onRenderAnnotationLayerSuccess,
          onRenderError = _this$props2.onRenderError,
          onRenderSuccess = _this$props2.onRenderSuccess,
          renderForms = _this$props2.renderForms,
          renderInteractiveForms = _this$props2.renderInteractiveForms;
      return {
        canvasBackground: canvasBackground,
        customTextRenderer: customTextRenderer,
        onGetAnnotationsError: onGetAnnotationsError,
        onGetAnnotationsSuccess: onGetAnnotationsSuccess,
        onGetTextError: onGetTextError,
        onGetTextSuccess: onGetTextSuccess,
        onRenderAnnotationLayerError: onRenderAnnotationLayerError,
        onRenderAnnotationLayerSuccess: onRenderAnnotationLayerSuccess,
        onRenderError: onRenderError,
        onRenderSuccess: onRenderSuccess,
        page: page,
        renderForms: renderForms !== null && renderForms !== void 0 ? renderForms : renderInteractiveForms,
        // For backward compatibility
        rotate: this.rotate,
        scale: this.scale
      };
    }
    /**
     * Called when a page is loaded successfully
     */

  }, {
    key: "getPageIndex",
    value: function getPageIndex() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (isProvided(props.pageNumber)) {
        return props.pageNumber - 1;
      }

      if (isProvided(props.pageIndex)) {
        return props.pageIndex;
      }

      return null;
    }
  }, {
    key: "getPageNumber",
    value: function getPageNumber() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (isProvided(props.pageNumber)) {
        return props.pageNumber;
      }

      if (isProvided(props.pageIndex)) {
        return props.pageIndex + 1;
      }

      return null;
    }
  }, {
    key: "pageIndex",
    get: function get() {
      return this.getPageIndex();
    }
  }, {
    key: "pageNumber",
    get: function get() {
      return this.getPageNumber();
    }
  }, {
    key: "rotate",
    get: function get() {
      var rotate = this.props.rotate;

      if (isProvided(rotate)) {
        return rotate;
      }

      var page = this.state.page;

      if (!page) {
        return null;
      }

      return page.rotate;
    }
  }, {
    key: "scale",
    get: function get() {
      var page = this.state.page;

      if (!page) {
        return null;
      }

      var _this$props3 = this.props,
          scale = _this$props3.scale,
          width = _this$props3.width,
          height = _this$props3.height;
      var rotate = this.rotate; // Be default, we'll render page at 100% * scale width.

      var pageScale = 1; // Passing scale explicitly null would cause the page not to render

      var scaleWithDefault = scale === null ? defaultScale : scale; // If width/height is defined, calculate the scale of the page so it could be of desired width.

      if (width || height) {
        var viewport = page.getViewport({
          scale: 1,
          rotation: rotate
        });
        pageScale = width ? width / viewport.width : height / viewport.height;
      }

      return scaleWithDefault * pageScale;
    }
  }, {
    key: "eventProps",
    get: function get() {
      var _this2 = this;

      return (0,esm/* default */.ZP)(this.props, function () {
        var page = _this2.state.page;

        if (!page) {
          return page;
        }

        return makePageCallback(page, _this2.scale);
      });
    }
  }, {
    key: "pageKey",
    get: function get() {
      var page = this.state.page;
      return "".concat(page.pageIndex, "@").concat(this.scale, "/").concat(this.rotate);
    }
  }, {
    key: "pageKeyNoScale",
    get: function get() {
      var page = this.state.page;
      return "".concat(page.pageIndex, "/").concat(this.rotate);
    }
  }, {
    key: "renderMainLayer",
    value: function renderMainLayer() {
      var _this$props4 = this.props,
          canvasRef = _this$props4.canvasRef,
          renderMode = _this$props4.renderMode;

      switch (renderMode) {
        case 'none':
          return null;

        case 'svg':
          return /*#__PURE__*/react.createElement(PageSVG, {
            key: "".concat(this.pageKeyNoScale, "_svg")
          });

        case 'canvas':
        default:
          return /*#__PURE__*/react.createElement(PageCanvas, {
            key: "".concat(this.pageKey, "_canvas"),
            canvasRef: canvasRef
          });
      }
    }
  }, {
    key: "renderTextLayer",
    value: function renderTextLayer() {
      var renderTextLayer = this.props.renderTextLayer;

      if (!renderTextLayer) {
        return null;
      }

      return /*#__PURE__*/react.createElement(TextLayer, {
        key: "".concat(this.pageKey, "_text")
      });
    }
  }, {
    key: "renderAnnotationLayer",
    value: function renderAnnotationLayer() {
      var renderAnnotationLayer = this.props.renderAnnotationLayer;

      if (!renderAnnotationLayer) {
        return null;
      }
      /**
       * As of now, PDF.js 2.0.943 returns warnings on unimplemented annotations in SVG mode.
       * Therefore, as a fallback, we render "traditional" AnnotationLayer component.
       */


      return /*#__PURE__*/react.createElement(Page_AnnotationLayer, {
        key: "".concat(this.pageKey, "_annotations")
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      return /*#__PURE__*/react.createElement(PageContext.Provider, {
        value: this.childContext
      }, this.renderMainLayer(), this.renderTextLayer(), this.renderAnnotationLayer(), children);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var pageNumber = this.pageNumber;
      var pdf = this.props.pdf;
      var page = this.state.page;

      if (!pageNumber) {
        var noData = this.props.noData;
        return /*#__PURE__*/react.createElement(Message, {
          type: "no-data"
        }, typeof noData === 'function' ? noData() : noData);
      }

      if (pdf === null || page === null) {
        var loading = this.props.loading;
        return /*#__PURE__*/react.createElement(Message, {
          type: "loading"
        }, typeof loading === 'function' ? loading() : loading);
      }

      if (pdf === false || page === false) {
        var error = this.props.error;
        return /*#__PURE__*/react.createElement(Message, {
          type: "error"
        }, typeof error === 'function' ? error() : error);
      }

      return this.renderChildren();
    }
  }, {
    key: "render",
    value: function render() {
      var pageNumber = this.pageNumber;
      var _this$props5 = this.props,
          className = _this$props5.className,
          inputRef = _this$props5.inputRef;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        className: (0,merge_class_names_dist_esm/* default */.Z)('react-pdf__Page', className),
        "data-page-number": pageNumber,
        ref: (0,merge_refs_dist_esm/* default */.Z)(inputRef, this.ref),
        style: {
          position: 'relative'
        }
      }, this.eventProps), this.renderContent());
    }
  }]);

  return PageInternal;
}(react.PureComponent);
PageInternal.defaultProps = {
  error: 'Failed to load the page.',
  loading: 'Loading page…',
  noData: 'No page specified.',
  renderAnnotationLayer: true,
  renderForms: false,
  renderMode: 'canvas',
  renderTextLayer: true,
  scale: defaultScale
};
var Page_isFunctionOrNode = prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).node]);
PageInternal.propTypes = Page_objectSpread(Page_objectSpread({}, eventProps), {}, {
  canvasBackground: (prop_types_default()).string,
  children: (prop_types_default()).node,
  className: isClassName,
  customTextRenderer: (prop_types_default()).func,
  error: Page_isFunctionOrNode,
  height: (prop_types_default()).number,
  imageResourcesPath: (prop_types_default()).string,
  inputRef: isRef,
  loading: Page_isFunctionOrNode,
  noData: Page_isFunctionOrNode,
  onGetTextError: (prop_types_default()).func,
  onGetTextSuccess: (prop_types_default()).func,
  onLoadError: (prop_types_default()).func,
  onLoadSuccess: (prop_types_default()).func,
  onRenderError: (prop_types_default()).func,
  onRenderSuccess: (prop_types_default()).func,
  pageIndex: isPageIndex,
  pageNumber: isPageNumber,
  pdf: isPdf,
  registerPage: (prop_types_default()).func,
  renderAnnotationLayer: (prop_types_default()).bool,
  renderForms: (prop_types_default()).bool,
  renderInteractiveForms: (prop_types_default()).bool,
  // For backward compatibility
  renderMode: isRenderMode,
  renderTextLayer: (prop_types_default()).bool,
  rotate: isRotate,
  scale: (prop_types_default()).number,
  unregisterPage: (prop_types_default()).func,
  width: (prop_types_default()).number
});

function Page(props, ref) {
  return /*#__PURE__*/React.createElement(DocumentContext.Consumer, null, function (context) {
    return /*#__PURE__*/React.createElement(PageInternal, _extends({
      ref: ref
    }, context, props));
  });
}

/* harmony default export */ var esm_Page = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(Page))));
;// CONCATENATED MODULE: ./node_modules/react-pdf/dist/esm/entry.js





displayWorkerWarning();
pdf.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';


/***/ }),

/***/ 9094:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3379);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7795);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3565);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9216);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4589);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2546);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_dist_cjs_js_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals ? _css_loader_dist_cjs_js_AnnotationLayer_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"].locals */ .Z.locals : undefined);


/***/ })

}]);
//# sourceMappingURL=vendors.react-pdf.528ca3af.js.map