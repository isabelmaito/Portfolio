import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ChevronDown } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formatMonthName } from '../../utils/heaDates.js';

const itemSx = {
  borderRadius: '0.6rem',
  py: 0.5,
  color: 'var(--text-secondary)',
  '&:hover': { bgcolor: 'var(--bg-accent)' },
  '&.Mui-selected, &.Mui-selected:hover': {
    bgcolor: 'var(--bg-accent)',
    color: 'var(--accent-primary)',
    fontWeight: 700,
  },
};

const textProps = { primary: { sx: { fontSize: '0.9rem', fontWeight: 'inherit' } } };

function Count({ value }) {
  return <span className="hea-menu-count">{value}</span>;
}

export function HeaDateMenu({ calendar, filter, onSelectMonth, onClear }) {
  const { t, i18n } = useTranslation();

  const years = useMemo(() => {
    const grouped = new Map();
    calendar.forEach(({ year, month, posts, replies }) => {
      if (!grouped.has(year)) grouped.set(year, { year, total: 0, months: [] });
      const entry = grouped.get(year);
      entry.total += posts + replies;
      entry.months.push({ month, total: posts + replies });
    });
    return [...grouped.values()];
  }, [calendar]);

  const [expanded, setExpanded] = useState(() => new Set());
  const focusYear = filter?.year ?? years[0]?.year;

  useEffect(() => {
    if (focusYear === undefined) return;
    setExpanded((current) => (current.has(focusYear) ? current : new Set(current).add(focusYear)));
  }, [focusYear]);

  const toggleYear = (year) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  };

  if (years.length === 0) return null;

  return (
    <nav className="hea-date-menu" aria-label={t('hea.dateNav')}>
      <h3 className="hea-aside-title">{t('hea.dateNav')}</h3>
      <List dense disablePadding>
        <ListItem disablePadding>
          <ListItemButton selected={!filter} onClick={onClear} sx={itemSx}>
            <ListItemText primary={t('hea.allDates')} slotProps={textProps} />
          </ListItemButton>
        </ListItem>

        {years.map(({ year, total, months }) => {
          const open = expanded.has(year);
          return (
            <ListItem key={year} disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={() => toggleYear(year)} aria-expanded={open} sx={itemSx}>
                <ListItemText primary={year} slotProps={textProps} />
                <Count value={total} />
                <ChevronDown className={`hea-menu-chevron ${open ? 'open' : ''}`} aria-hidden="true" />
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List dense disablePadding sx={{ pl: 1.5 }}>
                  {months.map(({ month, total: monthTotal }) => (
                    <ListItem key={month} disablePadding>
                      <ListItemButton
                        selected={filter?.year === year && filter?.month === month}
                        onClick={() => onSelectMonth(year, month)}
                        sx={itemSx}
                      >
                        <ListItemText primary={formatMonthName(month, i18n.language)} slotProps={textProps} />
                        <Count value={monthTotal} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
}
