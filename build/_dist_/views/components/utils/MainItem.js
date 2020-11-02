import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles
} from "../../../../web_modules/@material-ui/core.js";
import React from "../../../../web_modules/react.js";
export const MainItem = ({title, children}) => {
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement(Accordion, null, /* @__PURE__ */ React.createElement(AccordionSummary, {
    classes: {
      root: classes.summary,
      expanded: classes.summary
    }
  }, /* @__PURE__ */ React.createElement("h3", null, title)), /* @__PURE__ */ React.createElement(AccordionDetails, null, children));
};
const useStyles = makeStyles({
  summary: {margin: 0}
});
