import {Grid} from "../../../web_modules/@material-ui/core.js";
import React, {useContext} from "../../../web_modules/react.js";
import {labels} from "../../constants/index.js";
import {DisplayContext} from "../../core/providers/index.js";
import {ExperienceContent, MainItem, SkillsContent} from "../components/index.js";
import {EducationContent as EducationContent2} from "../components/education/EducationContent.js";
export const Main = () => {
  const {language} = useContext(DisplayContext);
  return /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    className: "fullsize",
    direction: "column"
  }, /* @__PURE__ */ React.createElement(MainItem, {
    title: labels[language].ABOUT_ME
  }), /* @__PURE__ */ React.createElement(MainItem, {
    title: labels[language].EXPERIENCE
  }, /* @__PURE__ */ React.createElement(ExperienceContent, null)), /* @__PURE__ */ React.createElement(MainItem, {
    title: labels[language].EDUCATION
  }, /* @__PURE__ */ React.createElement(EducationContent2, null)), /* @__PURE__ */ React.createElement(MainItem, {
    title: labels[language].SKILLS
  }, /* @__PURE__ */ React.createElement(SkillsContent, null)), /* @__PURE__ */ React.createElement(MainItem, {
    title: labels[language].INTERESTS
  }), /* @__PURE__ */ React.createElement(MainItem, {
    title: labels[language].PROJECTS
  }));
};
