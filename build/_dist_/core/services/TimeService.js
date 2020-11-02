import {TimeFormat, dateFNSLocale} from "../models/index.js";
import {format, isSameDay} from "../../../web_modules/date-fns.js";
import {labels} from "../../constants/index.js";
export function formatTime(date, time = true, onlyTime = false) {
  const _format = time ? onlyTime ? TimeFormat.ONLY_TIME : TimeFormat.DATE_TIME : TimeFormat.DATE;
  const text = format(date, _format);
  return text === "Invalid date" ? "-" : text;
}
export function formatMonthCustom(date, language) {
  if (isSameDay(date, new Date()))
    return labels[language].PRESENT;
  return format(date, TimeFormat.MONTH_YEAR, {
    locale: dateFNSLocale[language]
  });
}
