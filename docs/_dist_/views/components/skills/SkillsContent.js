import {Grid, LinearProgress} from "../../../../web_modules/@material-ui/core.js";
import React, {useContext} from "../../../../web_modules/react.js";
import {FaReact, FaAngular, FaNodeJs, FaJs, FaJava, FaPython} from "../../../../web_modules/react-icons/fa.js";
import {SiFlutter} from "../../../../web_modules/react-icons/si.js";
import {DisplayContext as DisplayContext2} from "../../../core/providers/DisplayContext.js";
const skills = [
  {name: "React", value: 70, Icon: FaReact, color: "#48CEF7"},
  {name: "Angular", value: 60, Icon: FaAngular, color: "#C3002F"},
  {name: "NodeJS", value: 70, Icon: FaNodeJs, color: "#4F934E"},
  {name: "Javascript", value: 80, Icon: FaJs, color: "#EFD81D"},
  {name: "Java", value: 70, Icon: FaJava, color: "#E70400"},
  {name: "Python", value: 30, Icon: FaPython, color: "#356993"},
  {name: "Flutter", value: 30, Icon: SiFlutter, color: "#5AC3EF"}
];
export const SkillsContent = () => {
  const {xs} = useContext(DisplayContext2);
  return /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    alignItems: "center"
  }, skills.map(({name, value, Icon, color}, index) => /* @__PURE__ */ React.createElement(Grid, {
    key: name,
    item: true,
    xs: 12,
    sm: 6,
    container: true,
    justify: "center",
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 2
  }, /* @__PURE__ */ React.createElement(Icon, {
    title: name,
    color,
    fontSize: "2rem"
  })), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 10
  }, /* @__PURE__ */ React.createElement(LinearProgress, {
    title: `${value}%`,
    variant: "determinate",
    value,
    color: index % 2 ? "secondary" : "primary"
  })))));
};
