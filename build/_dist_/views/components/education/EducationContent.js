import {createStyles, Grid, makeStyles} from "../../../../web_modules/@material-ui/core.js";
import React, {useContext, useEffect, useState} from "../../../../web_modules/react.js";
import {labels} from "../../../constants/index.js";
import {DisplayContext} from "../../../core/providers/index.js";
import {formatMonthCustom} from "../../../core/services/index.js";
export const EducationContent = () => {
  const classes = useStyles();
  const {language} = useContext(DisplayContext);
  const [educationItems, setEducationItems] = useState([]);
  useEffect(() => {
    const _labels = labels[language];
    setEducationItems([
      {
        id: "COLLEGE_DEGREE",
        title: _labels.COLLEGE_DEGREE,
        place: _labels.UNIANDES,
        description: _labels.SYSTEMS_ENGINEERING_DESCRIPTION,
        endDate: new Date(2018, 12, 1)
      },
      {
        id: "HIGH_SCHOOL",
        title: _labels.HIGH_SCHOOL_DEGREE,
        place: _labels.SAN_CARLOS,
        endDate: new Date(2014, 6, 1)
      }
    ]);
  }, [language]);
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, educationItems.map(({id, title, place, description, endDate}) => /* @__PURE__ */ React.createElement(Grid, {
    key: id,
    container: true,
    direction: "column",
    justify: "space-around",
    className: classes.itemContainer
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    justify: "space-between"
  }, /* @__PURE__ */ React.createElement("h3", null, place), /* @__PURE__ */ React.createElement("h4", {
    className: classes.date
  }, formatMonthCustom(endDate, language))), /* @__PURE__ */ React.createElement("h4", {
    className: classes.title
  }, title)), description && /* @__PURE__ */ React.createElement("p", null, description))));
};
const useStyles = makeStyles((theme) => createStyles({
  root: {width: "100%"},
  itemContainer: {margin: theme.spacing(1, 0)},
  title: {textTransform: "uppercase"},
  date: {fontStyle: "italic", color: theme.palette.secondary.main}
}));
