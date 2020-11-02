import {Grid, LinearProgress} from "../../../../web_modules/@material-ui/core.js";
import React from "../../../../web_modules/react.js";
const skills = [
  {name: "Java", value: 70},
  {name: "Javascript", value: 80},
  {name: "React", value: 70},
  {name: "Angular", value: 60},
  {name: "NodeJS", value: 70},
  {name: "Flutter", value: 30}
];
export const SkillsContent = () => {
  return /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    alignItems: "center"
  }, skills.map(({name, value}) => /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 6,
    container: true
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 2
  }, /* @__PURE__ */ React.createElement("h5", null, name)), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 10
  }, /* @__PURE__ */ React.createElement(LinearProgress, {
    variant: "determinate",
    value
  })))));
};
