import React, {useContext, useEffect, useState} from "../../../../web_modules/react.js";
import {Grid} from "../../../../web_modules/@material-ui/core.js";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "../../../../web_modules/@material-ui/lab.js";
import {DisplayContext as DisplayContext2} from "../../../core/providers/DisplayContext.js";
import {formatMonthCustom} from "../../../core/services/TimeService.js";
import {labels} from "../../../constants/index.js";
export const ExperienceContent = () => {
  const {language} = useContext(DisplayContext2);
  const [experienceItems, setExperienceItems] = useState([]);
  useEffect(() => {
    const _labels = labels[language];
    const now = new Date();
    setExperienceItems([
      {
        id: "MENIU_FULLSTACK",
        place: _labels.MENIU,
        title: _labels.MENIU_TITLE,
        description: _labels.MENIU_DESCRIPTION,
        startDate: new Date(2019, 1, 1),
        endDate: now
      },
      {
        id: "LEAL_FULLSTACK",
        place: _labels.LEAL,
        title: _labels.LEAL_TITLE,
        description: _labels.LEAL_DESCRIPTION,
        startDate: new Date(2019, 1, 14),
        endDate: new Date(2020, 2, 14)
      },
      {
        id: "UNIANDES_RA",
        place: _labels.UNIANDES,
        title: _labels.UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_TITLE,
        description: _labels.UNIANDES_RESEARCH_ASSISTANT_CUPITALLER_DESCRIPTION,
        startDate: new Date(2018, 8, 1),
        endDate: new Date(2018, 12, 1)
      },
      {
        id: "MENIU_ALPINA",
        place: _labels.ALPINA,
        title: _labels.ALPINA_INTERSHIP_TITLE,
        description: _labels.ALPINA_INTERSHIP_DESCRIPTION,
        startDate: new Date(2017, 8, 8),
        endDate: new Date(2018, 2, 8)
      },
      {
        id: "UNIANDES_TA",
        place: _labels.UNIANDES,
        title: _labels.UNIANDES_TA_TITLE,
        description: _labels.UNIANDES_TA_DESCRIPTION,
        startDate: new Date(2016, 8, 1),
        endDate: new Date(2018, 12, 1)
      }
    ]);
  }, [language]);
  return /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    className: "fullsize",
    justify: "center"
  }, /* @__PURE__ */ React.createElement(Timeline, {
    align: "alternate"
  }, experienceItems.map(({id, title, place, description, startDate, endDate}) => /* @__PURE__ */ React.createElement(TimelineItem, {
    key: id
  }, /* @__PURE__ */ React.createElement(TimelineOppositeContent, null, /* @__PURE__ */ React.createElement("p", null, formatMonthCustom(startDate, language), " -", " ", formatMonthCustom(endDate, language))), /* @__PURE__ */ React.createElement(TimelineSeparator, null, /* @__PURE__ */ React.createElement(TimelineDot, null), /* @__PURE__ */ React.createElement(TimelineConnector, null)), /* @__PURE__ */ React.createElement(TimelineContent, null, /* @__PURE__ */ React.createElement("h3", null, title), /* @__PURE__ */ React.createElement("h4", null, place), /* @__PURE__ */ React.createElement("p", null, description))))));
};
