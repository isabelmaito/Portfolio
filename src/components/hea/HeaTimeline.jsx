import { useTranslation } from 'react-i18next';
import { formatMonthShort, formatMonthYear } from '../../utils/heaDates.js';

/** Month marker that sits on the timeline rail next to the first post of that month. */
export function HeaTimelineMarker({ year, month }) {
  const { i18n } = useTranslation();

  return (
    <div className="hea-rail-marker">
      <span className="hea-rail-dot" aria-hidden="true" />
      <span className="hea-rail-label hea-rail-label-long">{formatMonthYear(year, month, i18n.language)}</span>
      <span className="hea-rail-label hea-rail-label-short">
        {formatMonthShort(month, i18n.language)}
        <br />
        {year}
      </span>
    </div>
  );
}
