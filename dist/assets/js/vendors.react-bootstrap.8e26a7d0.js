"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[665],{

/***/ 5005:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(861);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);





const defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
const Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  as,
  bsPrefix,
  variant,
  size,
  active,
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'btn');
  const [buttonProps, {
    tagName
  }] = (0,_restart_ui_Button__WEBPACK_IMPORTED_MODULE_4__/* .useButtonProps */ .FT)({
    tagName: as,
    ...props
  });
  const Component = tagName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...buttonProps,
    ...props,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, active && 'active', variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && props.disabled && 'disabled')
  });
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Button);

/***/ }),

/***/ 6025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_Card; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(6792);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__(8452);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/divWithClassName.js
var divWithClassName = __webpack_require__(9602);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CardImg.js




const CardImg = /*#__PURE__*/react.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  variant,
  as: Component = 'img',
  ...props
}, ref) => {
  const prefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'card-img');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    className: classnames_default()(variant ? `${prefix}-${variant}` : prefix, className),
    ...props
  });
});
CardImg.displayName = 'CardImg';
/* harmony default export */ var esm_CardImg = (CardImg);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/CardHeaderContext.js
var CardHeaderContext = __webpack_require__(9059);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CardHeader.js






const CardHeader = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'card-header');
  const contextValue = (0,react.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CardHeaderContext/* default.Provider */.Z.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
      ref: ref,
      ...props,
      className: classnames_default()(className, prefix)
    })
  });
});
CardHeader.displayName = 'CardHeader';
/* harmony default export */ var esm_CardHeader = (CardHeader);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Card.js








const DivStyledAsH5 = (0,divWithClassName/* default */.Z)('h5');
const DivStyledAsH6 = (0,divWithClassName/* default */.Z)('h6');
const CardBody = (0,createWithBsPrefix/* default */.Z)('card-body');
const CardTitle = (0,createWithBsPrefix/* default */.Z)('card-title', {
  Component: DivStyledAsH5
});
const CardSubtitle = (0,createWithBsPrefix/* default */.Z)('card-subtitle', {
  Component: DivStyledAsH6
});
const CardLink = (0,createWithBsPrefix/* default */.Z)('card-link', {
  Component: 'a'
});
const CardText = (0,createWithBsPrefix/* default */.Z)('card-text', {
  Component: 'p'
});
const CardFooter = (0,createWithBsPrefix/* default */.Z)('card-footer');
const CardImgOverlay = (0,createWithBsPrefix/* default */.Z)('card-img-overlay');
const defaultProps = {
  body: false
};
const Card = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const prefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'card');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames_default()(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? /*#__PURE__*/(0,jsx_runtime.jsx)(CardBody, {
      children: children
    }) : children
  });
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
/* harmony default export */ var esm_Card = (Object.assign(Card, {
  Img: esm_CardImg,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Body: CardBody,
  Link: CardLink,
  Text: CardText,
  Header: esm_CardHeader,
  Footer: CardFooter,
  ImgOverlay: CardImgOverlay
}));

/***/ }),

/***/ 9059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'CardHeaderContext';
/* harmony default export */ __webpack_exports__["Z"] = (context);

/***/ }),

/***/ 1555:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export useCol */
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'col');
  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapBreakpoints */ .pi)();
  const spans = [];
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;

    if (typeof propValue === 'object' && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });
  return [{ ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
const Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(props, ref) => {
  const [{
    className,
    ...colProps
  }, {
    as: Component = 'div',
    bsPrefix,
    spans
  }] = useCol(props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...colProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, !spans.length && bsPrefix)
  });
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["Z"] = (Col);

/***/ }),

/***/ 682:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




const defaultProps = {
  fluid: false
};
const Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  fluid,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  className,
  ...props
}, ref) => {
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'container');
  const suffix = typeof fluid === 'string' ? `-${fluid}` : '-fluid';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Container);

/***/ }),

/***/ 98:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_Nav; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/prop-types-extra/lib/all.js
var lib_all = __webpack_require__(4391);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/uncontrollable/lib/esm/index.js + 3 modules
var esm = __webpack_require__(8977);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/Nav.js + 1 modules
var Nav = __webpack_require__(3535);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(6792);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/NavbarContext.js
var NavbarContext = __webpack_require__(4819);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/CardHeaderContext.js
var CardHeaderContext = __webpack_require__(9059);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__(8452);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavItem.js

/* harmony default export */ var NavItem = ((0,createWithBsPrefix/* default */.Z)('nav-item'));
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/Anchor.js + 11 modules
var Anchor = __webpack_require__(8970);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/NavItem.js
var esm_NavItem = __webpack_require__(3716);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/SelectableContext.js
var SelectableContext = __webpack_require__(7126);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavLink.js







const defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor/* default */.Z,
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'nav-link');
  const [navItemProps, meta] = (0,esm_NavItem/* useNavItem */.v)({
    key: (0,SelectableContext/* makeEventKey */.h)(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames_default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ var esm_NavLink = (NavLink);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Nav.js












const Nav_defaultProps = {
  justify: false,
  fill: false
};
const Nav_Nav = /*#__PURE__*/react.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = (0,esm/* useUncontrolled */.Ch)(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,react.useContext)(NavbarContext/* default */.Z);
  const cardHeaderContext = (0,react.useContext)(CardHeaderContext/* default */.Z);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Nav/* default */.Z, {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames_default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav_Nav.displayName = 'Nav';
Nav_Nav.defaultProps = Nav_defaultProps;
/* harmony default export */ var esm_Nav = (Object.assign(Nav_Nav, {
  Item: NavItem,
  Link: esm_NavLink
}));

/***/ }),

/***/ 9106:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ esm_Navbar; }
});

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/SelectableContext.js
var SelectableContext = __webpack_require__(7126);
// EXTERNAL MODULE: ./node_modules/uncontrollable/lib/esm/index.js + 3 modules
var esm = __webpack_require__(8977);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/createWithBsPrefix.js
var createWithBsPrefix = __webpack_require__(8452);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ThemeProvider.js
var ThemeProvider = __webpack_require__(6792);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarBrand.js




const NavbarBrand = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'navbar-brand');
  const Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    className: classnames_default()(className, bsPrefix)
  });
});
NavbarBrand.displayName = 'NavbarBrand';
/* harmony default export */ var esm_NavbarBrand = (NavbarBrand);
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/css.js + 5 modules
var css = __webpack_require__(3164);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 3 modules
var Transition = __webpack_require__(410);
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/transitionEnd.js + 1 modules
var transitionEnd = __webpack_require__(6914);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/transitionEndListener.js



function parseDuration(node, property) {
  const str = (0,css/* default */.Z)(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = (0,transitionEnd/* default */.Z)(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/createChainedFunction.js
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction(...funcs) {
  return funcs.filter(f => f != null).reduce((acc, f) => {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction(...args) {
      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ var esm_createChainedFunction = (createChainedFunction);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}
// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useMergedRefs.js
var useMergedRefs = __webpack_require__(5654);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/safeFindDOMNode.js

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/TransitionWrapper.js





// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/react.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0,react.useRef)(null);
  const mergedRef = (0,useMergedRefs/* default */.Z)(nodeRef, childRef);

  const attachRef = r => {
    mergedRef(safeFindDOMNode(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = (0,react.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0,react.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0,react.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0,react.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0,react.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0,react.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0,react.useCallback)(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Transition/* default */.ZP, {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/react.cloneElement(children, {
      ref: attachRef
    })
  });
});
/* harmony default export */ var esm_TransitionWrapper = (TransitionWrapper);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Collapse.js









const MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt((0,css/* default */.Z)(elem, margins[0]), 10) + // @ts-ignore
  parseInt((0,css/* default */.Z)(elem, margins[1]), 10);
}

const collapseStyles = {
  [Transition/* EXITED */.Wj]: 'collapse',
  [Transition/* EXITING */.Ix]: 'collapsing',
  [Transition/* ENTERING */.d0]: 'collapsing',
  [Transition/* ENTERED */.cn]: 'collapse show'
};
const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
const Collapse = /*#__PURE__*/react.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = 'height',
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  /* Compute dimension */
  const computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  const handleEnter = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = '0';
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  /* -- Collapsing -- */

  const handleExit = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0,react.useMemo)(() => esm_createChainedFunction(elem => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    children: (state, innerProps) => /*#__PURE__*/react.cloneElement(children, { ...innerProps,
      className: classnames_default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'collapse-horizontal')
    })
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps;
/* harmony default export */ var esm_Collapse = (Collapse);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/NavbarContext.js
var NavbarContext = __webpack_require__(4819);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarCollapse.js






const NavbarCollapse = /*#__PURE__*/react.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'navbar-collapse');
  const context = (0,react.useContext)(NavbarContext/* default */.Z);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Collapse, {
    in: !!(context && context.expanded),
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      className: bsPrefix,
      children: children
    })
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
/* harmony default export */ var esm_NavbarCollapse = (NavbarCollapse);
// EXTERNAL MODULE: ./node_modules/@restart/hooks/esm/useEventCallback.js
var useEventCallback = __webpack_require__(8146);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarToggle.js







const NavbarToggle_defaultProps = {
  label: 'Toggle navigation'
};
const NavbarToggle = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  children,
  label,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'button',
  onClick,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'navbar-toggler');
  const {
    onToggle,
    expanded
  } = (0,react.useContext)(NavbarContext/* default */.Z) || {};
  const handleClick = (0,useEventCallback/* default */.Z)(e => {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Component, { ...props,
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: classnames_default()(className, bsPrefix, !expanded && 'collapsed'),
    children: children || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = NavbarToggle_defaultProps;
/* harmony default export */ var esm_NavbarToggle = (NavbarToggle);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/Modal.js + 4 modules
var Modal = __webpack_require__(8774);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Fade.js








const Fade_defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [Transition/* ENTERING */.d0]: 'show',
  [Transition/* ENTERED */.cn]: 'show'
};
const Fade = /*#__PURE__*/react.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = (0,react.useCallback)((node, isAppearing) => {
    triggerBrowserReflow(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/react.cloneElement(children, { ...innerProps,
      className: classnames_default()('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = Fade_defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ var esm_Fade = (Fade);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasBody.js

/* harmony default export */ var OffcanvasBody = ((0,createWithBsPrefix/* default */.Z)('offcanvas-body'));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasToggling.js







const OffcanvasToggling_defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const transitionStyles = {
  [Transition/* ENTERING */.d0]: 'show',
  [Transition/* ENTERED */.cn]: 'show'
};
const OffcanvasToggling = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  children,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'offcanvas');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_TransitionWrapper, {
    ref: ref,
    addEndListener: transitionEndListener,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/react.cloneElement(children, { ...innerProps,
      className: classnames_default()(className, children.props.className, (status === Transition/* ENTERING */.d0 || status === Transition/* EXITING */.Ix) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.defaultProps = OffcanvasToggling_defaultProps;
OffcanvasToggling.displayName = 'OffcanvasToggling';
/* harmony default export */ var esm_OffcanvasToggling = (OffcanvasToggling);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/ModalContext.js

const ModalContext = /*#__PURE__*/react.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {}

});
/* harmony default export */ var esm_ModalContext = (ModalContext);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/CloseButton.js




const propTypes = {
  'aria-label': (prop_types_default()).string,
  onClick: (prop_types_default()).func,

  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: prop_types_default().oneOf(['white'])
};
const CloseButton_defaultProps = {
  'aria-label': 'Close'
};
const CloseButton = /*#__PURE__*/react.forwardRef(({
  className,
  variant,
  ...props
}, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
  ref: ref,
  type: "button",
  className: classnames_default()('btn-close', variant && `btn-close-${variant}`, className),
  ...props
}));
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = CloseButton_defaultProps;
/* harmony default export */ var esm_CloseButton = (CloseButton);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/AbstractModalHeader.js







const AbstractModalHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const AbstractModalHeader = /*#__PURE__*/react.forwardRef(({
  closeLabel,
  closeVariant,
  closeButton,
  onHide,
  children,
  ...props
}, ref) => {
  const context = (0,react.useContext)(esm_ModalContext);
  const handleClick = (0,useEventCallback/* default */.Z)(() => {
    context == null ? void 0 : context.onHide();
    onHide == null ? void 0 : onHide();
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    ref: ref,
    ...props,
    children: [children, closeButton && /*#__PURE__*/(0,jsx_runtime.jsx)(esm_CloseButton, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
AbstractModalHeader.defaultProps = AbstractModalHeader_defaultProps;
/* harmony default export */ var esm_AbstractModalHeader = (AbstractModalHeader);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasHeader.js





const OffcanvasHeader_defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
const OffcanvasHeader = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  ...props
}, ref) => {
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'offcanvas-header');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_AbstractModalHeader, {
    ref: ref,
    ...props,
    className: classnames_default()(className, bsPrefix)
  });
});
OffcanvasHeader.displayName = 'OffcanvasHeader';
OffcanvasHeader.defaultProps = OffcanvasHeader_defaultProps;
/* harmony default export */ var esm_OffcanvasHeader = (OffcanvasHeader);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/divWithClassName.js
var divWithClassName = __webpack_require__(9602);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/OffcanvasTitle.js


const DivStyledAsH5 = (0,divWithClassName/* default */.Z)('h5');
/* harmony default export */ var OffcanvasTitle = ((0,createWithBsPrefix/* default */.Z)('offcanvas-title', {
  Component: DivStyledAsH5
}));
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/addClass.js + 1 modules
var addClass = __webpack_require__(479);
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/querySelectorAll.js
var querySelectorAll = __webpack_require__(930);
// EXTERNAL MODULE: ./node_modules/dom-helpers/esm/removeClass.js
var removeClass = __webpack_require__(4277);
// EXTERNAL MODULE: ./node_modules/@restart/ui/esm/ModalManager.js + 1 modules
var ModalManager = __webpack_require__(6039);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/BootstrapModalManager.js





const Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

class BootstrapModalManager extends ModalManager/* default */.Z {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    (0,css/* default */.Z)(element, {
      [prop]: `${parseFloat((0,css/* default */.Z)(element, prop)) + adjust}px`
    });
  }

  restore(prop, element) {
    const value = element.dataset[prop];

    if (value !== undefined) {
      delete element.dataset[prop];
      (0,css/* default */.Z)(element, {
        [prop]: value
      });
    }
  }

  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    (0,addClass/* default */.Z)(container, 'modal-open');
    if (!containerState.scrollBarWidth) return;
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    (0,querySelectorAll/* default */.Z)(container, Selector.FIXED_CONTENT).forEach(el => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    (0,querySelectorAll/* default */.Z)(container, Selector.STICKY_CONTENT).forEach(el => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    (0,querySelectorAll/* default */.Z)(container, Selector.NAVBAR_TOGGLER).forEach(el => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }

  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    (0,removeClass/* default */.Z)(container, 'modal-open');
    const paddingProp = this.isRTL ? 'paddingLeft' : 'paddingRight';
    const marginProp = this.isRTL ? 'marginLeft' : 'marginRight';
    (0,querySelectorAll/* default */.Z)(container, Selector.FIXED_CONTENT).forEach(el => this.restore(paddingProp, el));
    (0,querySelectorAll/* default */.Z)(container, Selector.STICKY_CONTENT).forEach(el => this.restore(marginProp, el));
    (0,querySelectorAll/* default */.Z)(container, Selector.NAVBAR_TOGGLER).forEach(el => this.restore(marginProp, el));
  }

}

let sharedManager;
function getSharedManager(options) {
  if (!sharedManager) sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
/* harmony default export */ var esm_BootstrapModalManager = (BootstrapModalManager);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Offcanvas.js















const Offcanvas_defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: 'start'
};

function DialogTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_OffcanvasToggling, { ...props
  });
}

function BackdropTransition(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Fade, { ...props
  });
}

const Offcanvas = /*#__PURE__*/react.forwardRef(({
  bsPrefix,
  className,
  children,
  'aria-labelledby': ariaLabelledby,
  placement,

  /* BaseModal props */
  show,
  backdrop,
  keyboard,
  scroll,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus,
  enforceFocus,
  restoreFocus,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const modalManager = (0,react.useRef)();
  bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(bsPrefix, 'offcanvas');
  const {
    onToggle
  } = (0,react.useContext)(NavbarContext/* default */.Z) || {};
  const handleHide = (0,useEventCallback/* default */.Z)(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0,react.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;

    if (scroll) {
      // Have to use a different modal manager since the shared
      // one handles overflow.
      if (!modalManager.current) modalManager.current = new esm_BootstrapModalManager({
        handleContainerOverflow: false
      });
      return modalManager.current;
    }

    return getSharedManager();
  }

  const handleEnter = (node, ...args) => {
    if (node) node.style.visibility = 'visible';
    onEnter == null ? void 0 : onEnter(node, ...args);
  };

  const handleExited = (node, ...args) => {
    if (node) node.style.visibility = '';
    onExited == null ? void 0 : onExited(...args);
  };

  const renderBackdrop = (0,react.useCallback)(backdropProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", { ...backdropProps,
    className: classnames_default()(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);

  const renderDialog = dialogProps => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    ...props,
    className: classnames_default()(className, bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children: children
  });

  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_ModalContext.Provider, {
    value: modalContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* default */.Z, {
      show: show,
      ref: ref,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus && !scroll,
      restoreFocus: restoreFocus,
      restoreFocusOptions: restoreFocusOptions,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: handleHide,
      onEnter: handleEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: DialogTransition,
      backdropTransition: BackdropTransition,
      renderBackdrop: renderBackdrop,
      renderDialog: renderDialog
    })
  });
});
Offcanvas.displayName = 'Offcanvas';
Offcanvas.defaultProps = Offcanvas_defaultProps;
/* harmony default export */ var esm_Offcanvas = (Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: esm_OffcanvasHeader,
  Title: OffcanvasTitle
}));
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/NavbarOffcanvas.js





const NavbarOffcanvas = /*#__PURE__*/react.forwardRef((props, ref) => {
  const context = (0,react.useContext)(NavbarContext/* default */.Z);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_Offcanvas, {
    ref: ref,
    show: !!(context != null && context.expanded),
    ...props
  });
});
NavbarOffcanvas.displayName = 'NavbarOffcanvas';
/* harmony default export */ var esm_NavbarOffcanvas = (NavbarOffcanvas);
;// CONCATENATED MODULE: ./node_modules/react-bootstrap/esm/Navbar.js













const NavbarText = (0,createWithBsPrefix/* default */.Z)('navbar-text', {
  Component: 'span'
});
const Navbar_defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
const Navbar = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand,
    variant,
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'nav',
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect,
    ...controlledProps
  } = (0,esm/* useUncontrolled */.Ch)(props, {
    expanded: 'onToggle'
  });
  const bsPrefix = (0,ThemeProvider/* useBootstrapPrefix */.vE)(initialBsPrefix, 'navbar');
  const handleCollapse = (0,react.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);

    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === 'string') expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0,react.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded
  }), [bsPrefix, expanded, onToggle]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NavbarContext/* default.Provider */.Z.Provider, {
    value: navbarContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SelectableContext/* default.Provider */.Z.Provider, {
      value: handleCollapse,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Component, {
        ref: ref,
        ...controlledProps,
        className: classnames_default()(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.defaultProps = Navbar_defaultProps;
Navbar.displayName = 'Navbar';
/* harmony default export */ var esm_Navbar = (Object.assign(Navbar, {
  Brand: esm_NavbarBrand,
  Collapse: esm_NavbarCollapse,
  Offcanvas: esm_NavbarOffcanvas,
  Text: NavbarText,
  Toggle: esm_NavbarToggle
}));

/***/ }),

/***/ 4819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
 // TODO: check

const context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ __webpack_exports__["Z"] = (context);

/***/ }),

/***/ 4051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);




const Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'row');
  const breakpoints = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapBreakpoints */ .pi)();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach(brkPoint => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;

    if (propValue != null && typeof propValue === 'object') {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== 'xs' ? `-${brkPoint}` : '';
    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ref: ref,
    ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = 'Row';
/* harmony default export */ __webpack_exports__["Z"] = (Row);

/***/ }),

/***/ 6792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pi": function() { return /* binding */ useBootstrapBreakpoints; },
/* harmony export */   "vE": function() { return /* binding */ useBootstrapPrefix; }
/* harmony export */ });
/* unused harmony exports DEFAULT_BREAKPOINTS, useIsRTL, createBootstrapComponent, ThemeConsumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);



const DEFAULT_BREAKPOINTS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS
});
const {
  Consumer,
  Provider
} = ThemeContext;

function ThemeProvider({
  prefixes = {},
  breakpoints = DEFAULT_BREAKPOINTS,
  dir,
  children
}) {
  const contextValue = useMemo(() => ({
    prefixes: { ...prefixes
    },
    breakpoints,
    dir
  }), [prefixes, breakpoints, dir]);
  return /*#__PURE__*/_jsx(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
  const {
    breakpoints
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return breakpoints;
}
function useIsRTL() {
  const {
    dir
  } = useContext(ThemeContext);
  return dir === 'rtl';
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({ ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_jsx(Component, { ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ThemeProvider)));

/***/ }),

/***/ 8452:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ createWithBsPrefix; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3576);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);






const pascalCase = str => str[0].toUpperCase() + (0,dom_helpers_camelize__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(str).slice(1);

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, {
  displayName = pascalCase(prefix),
  Component,
  defaultProps
} = {}) {
  const BsComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
    className,
    bsPrefix,
    as: Tag = Component || 'div',
    ...props
  }, ref) => {
    const resolvedPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__/* .useBootstrapPrefix */ .vE)(bsPrefix, prefix);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, resolvedPrefix),
      ...props
    });
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),

/***/ 9602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5893);



/* harmony default export */ __webpack_exports__["Z"] = (className => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((p, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", { ...p,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(p.className, className)
})));

/***/ })

}]);
//# sourceMappingURL=vendors.react-bootstrap.8e26a7d0.js.map