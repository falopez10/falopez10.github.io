import { w as withStyles, g as _objectWithoutProperties, a as _extends, h as clsx, l as capitalize } from '../common/capitalize-3589dc92.js';
import '../common/_commonjsHelpers-eb5a497e.js';
import { r as react } from '../common/index-27b27678.js';

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/**
 * @ignore - internal component.
 */

var TimelineContext = react.createContext({});

var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '6px 16px',
      flexGrow: 1
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {},

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {},

    /* Styles applied to the root element if `align="alternate"`. */
    alignAlternate: {}
  };
};
var Timeline = /*#__PURE__*/react.forwardRef(function Timeline(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'left' : _props$align,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["align", "classes", "className"]);

  return /*#__PURE__*/react.createElement(TimelineContext.Provider, {
    value: {
      align: align
    }
  }, /*#__PURE__*/react.createElement("ul", _extends({
    className: clsx(classes.root, classes["align".concat(capitalize(align))], className),
    ref: ref
  }, other)));
});
var Timeline$1 = withStyles(styles, {
  name: 'MuiTimeline'
})(Timeline);

var styles$1 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      width: 2,
      backgroundColor: theme.palette.grey[400],
      flexGrow: 1
    }
  };
};
var TimelineConnector = /*#__PURE__*/react.forwardRef(function TimelineConnector(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  return /*#__PURE__*/react.createElement("span", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other));
});
var TimelineConnector$1 = withStyles(styles$1, {
  name: 'MuiTimelineConnector'
})(TimelineConnector);

/**
 * @ignore - internal component.
 */

var TimelineItemContext = react.createContext({});

var styles$2 = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: 1,
      padding: '6px 16px'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    }
  };
};
var TimelineContent = /*#__PURE__*/react.forwardRef(function TimelineContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  var _React$useContext = react.useContext(TimelineContext),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var _React$useContext2 = react.useContext(TimelineItemContext),
      _React$useContext2$cl = _React$useContext2.classes,
      contextClasses = _React$useContext2$cl === void 0 ? {} : _React$useContext2$cl;

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, contextClasses.content, classes["align".concat(capitalize(align))], className),
    ref: ref
  }, other));
});
var TimelineContent$1 = withStyles(styles$2, {
  name: 'MuiTimelineContent'
})(TimelineContent);

var styles$3 = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignSelf: 'baseline',
      borderStyle: 'solid',
      borderWidth: 2,
      padding: 4,
      borderRadius: '50%',
      boxShadow: theme.shadows[2],
      marginTop: 8,
      marginBottom: 8
    },

    /* Styles applied to the root element if `color="grey"` and `variant="default"`. */
    defaultGrey: {
      borderColor: 'transparent',
      color: theme.palette.grey[50],
      backgroundColor: theme.palette.grey[400]
    },

    /* Styles applied to the root element if `color="grey"` and `variant="outlined"`. */
    outlinedGrey: {
      boxShadow: 'none',
      color: theme.palette.grey.contrastText,
      borderColor: theme.palette.grey[400],
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `color="primary"` and `variant="default"`. */
    defaultPrimary: {
      borderColor: 'transparent',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="primary"` and `variant="outlined"`. */
    outlinedPrimary: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"` and `variant="default"`. */
    defaultSecondary: {
      borderColor: 'transparent',
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="secondary"` and `variant="outlined"`. */
    outlinedSecondary: {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: theme.palette.secondary.main
    }
  };
};
var TimelineDot = /*#__PURE__*/react.forwardRef(function TimelineDot(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'grey' : _props$color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = _objectWithoutProperties(props, ["classes", "className", "color", "variant"]);

  return /*#__PURE__*/react.createElement("span", _extends({
    className: clsx(classes.root, className, color !== 'inherit' && classes["".concat(variant).concat(capitalize(color))]),
    ref: ref
  }, other));
});
var TimelineDot$1 = withStyles(styles$3, {
  name: 'MuiTimelineDot'
})(TimelineDot);

var styles$4 = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      display: 'flex',
      position: 'relative',
      minHeight: 70
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {},

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="alternate"`. */
    alignAlternate: {
      '&:nth-child(even)': {
        flexDirection: 'row-reverse',
        '& $content': {
          textAlign: 'right'
        },
        '& $oppositeContent': {
          textAlign: 'left'
        }
      }
    },

    /* Styles applied to the root element if no there isn't TimelineOppositeContent provided. */
    missingOppositeContent: {
      '&:before': {
        content: '""',
        flex: 1,
        padding: '6px 16px'
      }
    },

    /* Styles applied to the timeline content node. */
    content: {},

    /* Styles applied to the timeline opposite content node. */
    oppositeContent: {}
  };
};
var TimelineItem = /*#__PURE__*/react.forwardRef(function TimelineItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  var _React$useContext = react.useContext(TimelineContext),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var hasOppositeContent = false;
  react.Children.forEach(props.children, function (child) {
    if (isMuiElement(child, ['TimelineOppositeContent'])) {
      hasOppositeContent = true;
    }
  });
  return /*#__PURE__*/react.createElement(TimelineItemContext.Provider, {
    value: {
      classes: {
        content: classes.content,
        oppositeContent: classes.oppositeContent
      }
    }
  }, /*#__PURE__*/react.createElement("li", _extends({
    className: clsx(classes.root, classes["align".concat(capitalize(align))], className, !hasOppositeContent && classes.missingOppositeContent),
    ref: ref
  }, other)));
});
var TimelineItem$1 = withStyles(styles$4, {
  name: 'MuiTimelineItem'
})(TimelineItem);

var styles$5 = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      padding: '6px 16px',
      marginRight: 'auto',
      textAlign: 'right',
      flex: 1
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'left'
    }
  };
};
var TimelineOppositeContent = /*#__PURE__*/react.forwardRef(function TimelineOppositeContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  var _React$useContext = react.useContext(TimelineContext),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var _React$useContext2 = react.useContext(TimelineItemContext),
      _React$useContext2$cl = _React$useContext2.classes,
      contextClasses = _React$useContext2$cl === void 0 ? {} : _React$useContext2$cl;

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, contextClasses.oppositeContent, classes["align".concat(capitalize(align))], className),
    ref: ref
  }, other));
});
TimelineOppositeContent.muiName = 'TimelineOppositeContent';
var TimelineOppositeContent$1 = withStyles(styles$5, {
  name: 'MuiTimelineOppositeContent'
})(TimelineOppositeContent);

var styles$6 = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: 0,
      alignItems: 'center'
    }
  };
};
var TimelineSeparator = /*#__PURE__*/react.forwardRef(function TimelineSeparator(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "className"]);

  return /*#__PURE__*/react.createElement("div", _extends({
    className: clsx(classes.root, className),
    ref: ref
  }, other));
});
var TimelineSeparator$1 = withStyles(styles$6, {
  name: 'MuiTimelineSeparator'
})(TimelineSeparator);

export { Timeline$1 as Timeline, TimelineConnector$1 as TimelineConnector, TimelineContent$1 as TimelineContent, TimelineDot$1 as TimelineDot, TimelineItem$1 as TimelineItem, TimelineOppositeContent$1 as TimelineOppositeContent, TimelineSeparator$1 as TimelineSeparator };
