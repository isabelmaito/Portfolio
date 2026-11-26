import { useMemo } from 'react';
import { HeaTopicMenu } from '../../components/hea/HeaTopicMenu.jsx';
import '../../components/hea/Hea.css';
import { formatMonthName } from '../../utils/heaDates.js';

// "2026" = the whole year; "2026-11" = one month.
export function periodToQuery(period) {
  if (!period) return {};
  const [year, month] = period.split('-').map(Number);
  return month ? { year, month } : { year };
}

export function describePeriod(period) {
  if (!period) return '';
  const { year, month } = periodToQuery(period);
  return month ? `${formatMonthName(month, 'pt-BR').toLowerCase()} de ${year}` : `${year}`;
}

/**
 * Filters for the admin history: a month picker built from the site's calendar (posts only)
 * and the same topic menu readers use on the site. Both combine.
 */
export function AdminHistoryFilters({ calendar, topics, filters, onChange }) {
  const years = useMemo(() => {
    const grouped = new Map();
    calendar
      .filter((entry) => entry.posts > 0)
      .forEach(({ year, month, posts }) => {
        if (!grouped.has(year)) grouped.set(year, { year, total: 0, months: [] });
        const entry = grouped.get(year);
        entry.total += posts;
        entry.months.push({ month, posts });
      });
    return [...grouped.values()].sort((a, b) => b.year - a.year);
  }, [calendar]);

  const toggleTopic = (id) =>
    onChange({
      ...filters,
      topicIds: filters.topicIds.includes(id)
        ? filters.topicIds.filter((topicId) => topicId !== id)
        : [...filters.topicIds, id],
    });

  const active = filters.period || filters.topicIds.length > 0;

  return (
    <div className="admin-filters" role="search" aria-label="Filtrar o histórico">
      <label className="admin-field admin-filter-period">
        <span>Período</span>
        <select value={filters.period} onChange={(event) => onChange({ ...filters, period: event.target.value })}>
          <option value="">Todas as datas</option>
          {years.map(({ year, total, months }) => (
            <optgroup key={year} label={String(year)}>
              <option value={String(year)}>
                {year} inteiro ({total})
              </option>
              {months.map(({ month, posts }) => (
                <option key={month} value={`${year}-${String(month).padStart(2, '0')}`}>
                  {formatMonthName(month, 'pt-BR')} de {year} ({posts})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>

      <div className="admin-field admin-filter-topics">
        <span>Temas</span>
        <HeaTopicMenu
          topics={topics}
          selected={filters.topicIds}
          onToggle={toggleTopic}
          onClear={() => onChange({ ...filters, topicIds: [] })}
          theme="dark"
        />
      </div>

      {active && (
        <button
          type="button"
          className="admin-link-button admin-filter-clear"
          onClick={() => onChange({ period: '', topicIds: [] })}
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}
