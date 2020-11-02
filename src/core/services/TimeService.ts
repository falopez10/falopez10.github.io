import { Language, TimeFormat, dateFNSLocale } from '../models';
import { format, isSameDay } from 'date-fns';
import { labels } from '../../constants';

export function formatTime(date: Date | number, time = true, onlyTime = false): string {
  const _format = time
    ? onlyTime
      ? TimeFormat.ONLY_TIME
      : TimeFormat.DATE_TIME
    : TimeFormat.DATE;

  const text = format(date, _format);
  return text === 'Invalid date' ? '-' : text;
}

export function formatMonthCustom(
  date: Date | number,
  language: Language,
): string {
  if (isSameDay(date, new Date())) return labels[language].PRESENT;
  return format(date, TimeFormat.MONTH_YEAR, {
    locale: dateFNSLocale[language],
  });
}
